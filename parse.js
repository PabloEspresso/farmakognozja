const fs = require('fs');
const path = require('path');

const txtPath = 'c:\\Users\\dryjd\\Desktop\\Nowy folder\\Nowy folder\\wiedza.txt';
const jsPath = 'c:\\Users\\dryjd\\Desktop\\Nowy folder\\Nowy folder\\data.js';

const content = fs.readFileSync(txtPath, 'utf8');

// Helper to convert markdown-like syntax to HTML
function mdToHtml(text) {
  if (!text) return '';
  return text
    // bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // italic (with asterisk)
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // quotes
    .replace(/"([^"]+)"/g, '&ldquo;$1&rdquo;');
}

function parseConcepts(conceptsText) {
  const concepts = [];
  const lines = conceptsText.split('\n');
  let currentConcept = null;

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    // Check if line starts a new concept: [Term]: Definition
    const conceptMatch = line.match(/^\[([^\]]+)\]:\s*(.*)/);
    if (conceptMatch) {
      if (currentConcept) {
        concepts.push(currentConcept);
      }
      currentConcept = {
        term: conceptMatch[1].trim(),
        definition: mdToHtml(conceptMatch[2].trim())
      };
    } else {
      // Check for sub-bullet without asterisk: e.g. "Surowce: ..."
      const subMatch = line.match(/^(Surowce|Skład fitochemiczny|Działanie i zastosowanie):\s*(.*)/i);
      if (subMatch && currentConcept) {
        currentConcept.definition += `<br>• <strong>${subMatch[1]}:</strong> ${mdToHtml(subMatch[2])}`;
      } else if (line.startsWith('*') && currentConcept) {
        // It's a sub-bullet with asterisk: * **Title:** Text
        const bulletContent = line.substring(1).trim();
        currentConcept.definition += '<br>• ' + mdToHtml(bulletContent);
      } else if (currentConcept) {
        // General continuation
        currentConcept.definition += ' ' + mdToHtml(line);
      }
    }
  }

  if (currentConcept) {
    concepts.push(currentConcept);
  }
  return concepts;
}

function parseQA(qaText) {
  const qa = [];
  const lines = qaText.split('\n');
  let currentQA = null;

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.startsWith('Q:')) {
      if (currentQA) {
        qa.push(currentQA);
      }
      currentQA = {
        question: mdToHtml(line.substring(2).trim()),
        answer: ''
      };
    } else if (line.startsWith('A:') && currentQA) {
      currentQA.answer = mdToHtml(line.substring(2).trim());
    } else if (currentQA) {
      if (currentQA.answer) {
        currentQA.answer += ' ' + mdToHtml(line);
      } else {
        currentQA.question += ' ' + mdToHtml(line);
      }
    }
  }

  if (currentQA) {
    qa.push(currentQA);
  }
  return qa;
}

// Split content by chapter headers: e.g. [Węglowodany i Polisacharydy]
const lines = content.split('\n');
const chapters = [];
let currentChapter = null;
let currentSection = ''; // 'summary', 'concepts', 'qa'
let sectionBuffer = '';

for (let line of lines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed === '***' || trimmed === '---') continue;

  // Detect new chapter header, e.g. [Title]
  const chapterMatch = trimmed.match(/^\[([^\]]+)\]$/);
  if (chapterMatch && !trimmed.startsWith('Oto') && !trimmed.startsWith('Obejmuje')) {
    if (currentChapter) {
      // Save last section
      if (currentSection === 'summary') {
        currentChapter.summary = '<p>' + mdToHtml(sectionBuffer.trim()) + '</p>';
      } else if (currentSection === 'concepts') {
        currentChapter.concepts = parseConcepts(sectionBuffer);
      } else if (currentSection === 'qa') {
        currentChapter.qa = parseQA(sectionBuffer);
      }
      chapters.push(currentChapter);
    }

    currentChapter = {
      id: 'ch' + (chapters.length + 1),
      title: chapterMatch[1].trim(),
      summary: '',
      concepts: [],
      qa: []
    };
    currentSection = '';
    sectionBuffer = '';
    continue;
  }

  if (trimmed === 'Podsumowanie') {
    if (currentChapter && currentSection) {
      if (currentSection === 'concepts') currentChapter.concepts = parseConcepts(sectionBuffer);
      if (currentSection === 'qa') currentChapter.qa = parseQA(sectionBuffer);
    }
    currentSection = 'summary';
    sectionBuffer = '';
    continue;
  }

  if (trimmed === 'Pojęcia kluczowe') {
    if (currentChapter && currentSection) {
      if (currentSection === 'summary') currentChapter.summary = '<p>' + mdToHtml(sectionBuffer.trim()) + '</p>';
      if (currentSection === 'qa') currentChapter.qa = parseQA(sectionBuffer);
    }
    currentSection = 'concepts';
    sectionBuffer = '';
    continue;
  }

  if (trimmed.startsWith('## Fiszki Q&A') || trimmed === 'Fiszki Q&A') {
    if (currentChapter && currentSection) {
      if (currentSection === 'summary') currentChapter.summary = '<p>' + mdToHtml(sectionBuffer.trim()) + '</p>';
      if (currentSection === 'concepts') currentChapter.concepts = parseConcepts(sectionBuffer);
    }
    currentSection = 'qa';
    sectionBuffer = '';
    continue;
  }

  if (currentChapter && currentSection) {
    sectionBuffer += line + '\n';
  }
}

// Push last chapter
if (currentChapter) {
  if (currentSection === 'summary') {
    currentChapter.summary = '<p>' + mdToHtml(sectionBuffer.trim()) + '</p>';
  } else if (currentSection === 'concepts') {
    currentChapter.concepts = parseConcepts(sectionBuffer);
  } else if (currentSection === 'qa') {
    currentChapter.qa = parseQA(sectionBuffer);
  }
  chapters.push(currentChapter);
}

// Generate data.js content
const output = `const bookData = ${JSON.stringify(chapters, null, 2)};\n`;
fs.writeFileSync(jsPath, output, 'utf8');
console.log(`Successfully parsed ${chapters.length} chapters and wrote to data.js!`);
