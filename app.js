// State aplikacji
let activeChapterId = null;
let activeTab = "summary";
let completedChapters = new Set();
let flashcardIndex = 0;
let activeHighlightColor = null; // null, color value or 'eraser'

// Stan quizu
let currentQuizQuestionIndex = 0;
let quizQuestions = [];
let quizScore = 0;
let selectedAnswerIndex = null;

// ==========================================================================
// Inicjalizacja Aplikacji
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  initTheme();
  renderChapterList();
  updateProgress();
  setupEventListeners();
  
  // Auto-wybór pierwszego rozdziału po załadowaniu
  if (typeof bookData !== 'undefined' && bookData.length > 0) {
    selectChapter(bookData[0].id);
  }
});

// Wczytywanie postępu z localStorage
function loadProgress() {
  const saved = localStorage.getItem("book_compendium_progress");
  if (saved) {
    try {
      const arr = JSON.parse(saved);
      completedChapters = new Set(arr);
    } catch (e) {
      console.error("Błąd wczytywania postępu", e);
    }
  }
}

// Zapisywanie postępu do localStorage
function saveProgress() {
  localStorage.setItem("book_compendium_progress", JSON.stringify(Array.from(completedChapters)));
  updateProgress();
  renderChapterList();
}

// Inicjalizacja motywu kolorystycznego
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    toggleThemeIcons("light");
  } else {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    toggleThemeIcons("dark");
  }
}

function toggleThemeIcons(theme) {
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  if (theme === "dark") {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  }
}

// ==========================================================================
// Renderowanie Spisu Treści (Sidebar)
// ==========================================================================
function renderChapterList() {
  const listEl = document.getElementById("chapter-list");
  listEl.innerHTML = "";

  bookData.forEach(chapter => {
    const isCompleted = completedChapters.has(chapter.id);
    const isActive = activeChapterId === chapter.id;

    const li = document.createElement("li");
    li.className = `chapter-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
    li.dataset.id = chapter.id;

    li.innerHTML = `
      <span class="chapter-item-title">${chapter.title}</span>
      <div class="status-indicator">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17l-5-5"/>
        </svg>
      </div>
    `;

    li.addEventListener("click", () => selectChapter(chapter.id));
    listEl.appendChild(li);
  });
}

// Aktualizacja paska postępu
function updateProgress() {
  const total = bookData.length;
  if (total === 0) return;
  const completed = completedChapters.size;
  const percent = Math.round((completed / total) * 100);

  document.getElementById("progress-indicator").style.width = `${percent}%`;
  document.getElementById("progress-text").textContent = `Ukończono: ${percent}%`;
}

// Wybór rozdziału
function selectChapter(chapterId) {
  activeChapterId = chapterId;
  
  // Zresetuj zakładkę na domyślną (podsumowanie)
  activeTab = "summary";
  flashcardIndex = 0;
  
  // Ukryj widok powitalny, pokaż rozdział
  document.getElementById("welcome-view").classList.add("hidden");
  document.getElementById("chapter-view").classList.remove("hidden");

  // Zaktualizuj klasę aktywną w menu bocznym
  renderChapterList();

  // Pobierz dane rozdziału i zaktualizuj interfejs
  const chapter = bookData.find(c => c.id === chapterId);
  if (!chapter) return;

  document.getElementById("chapter-title").textContent = chapter.title;

  // Zaktualizuj przycisk statusu ukończenia
  const markReadBtn = document.getElementById("mark-read-btn");
  const isCompleted = completedChapters.has(chapterId);
  if (isCompleted) {
    markReadBtn.classList.add("active");
    markReadBtn.querySelector("span").textContent = "Przeczytany";
  } else {
    markReadBtn.classList.remove("active");
    markReadBtn.querySelector("span").textContent = "Oznacz jako przeczytany";
  }

  // Wczytaj zakładki
  updateTabsUI();
  renderActiveTabContent();
}

// Zmiana zakładki UI
function updateTabsUI() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    if (btn.dataset.tab === activeTab) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.remove("active");
  });
  document.getElementById(`content-${activeTab}`).classList.add("active");
}

// Renderowanie treści wybranej zakładki
function renderActiveTabContent() {
  const chapter = bookData.find(c => c.id === activeChapterId);
  if (!chapter) return;

  if (activeTab === "summary") {
    const saved = localStorage.getItem(`highlights_${activeChapterId}_summary`);
    const savedSignature = localStorage.getItem(`highlights_${activeChapterId}_summary_signature`);
    const currentSignature = chapter.summary;

    if (saved && savedSignature === currentSignature) {
      document.getElementById("summary-article").innerHTML = saved;
    } else {
      document.getElementById("summary-article").innerHTML = chapter.summary;
      localStorage.removeItem(`highlights_${activeChapterId}_summary`);
      localStorage.removeItem(`highlights_${activeChapterId}_summary_signature`);
    }
  } else if (activeTab === "concepts") {
    const saved = localStorage.getItem(`highlights_${activeChapterId}_concepts`);
    const savedSignature = localStorage.getItem(`highlights_${activeChapterId}_concepts_signature`);
    const currentSignature = chapter.concepts.map(c => c.term).join('|') + '::' + chapter.concepts.map(c => c.definition.length).join('|');

    if (saved && savedSignature === currentSignature) {
      document.getElementById("concepts-grid").innerHTML = saved;
    } else {
      renderConcepts(chapter);
      localStorage.removeItem(`highlights_${activeChapterId}_concepts`);
      localStorage.removeItem(`highlights_${activeChapterId}_concepts_signature`);
    }
  } else if (activeTab === "flashcards") {
    flashcardIndex = 0;
    renderFlashcard(chapter);
  } else if (activeTab === "quiz") {
    initQuiz(chapter);
  }
}

// ==========================================================================
// Zakładka 2: Pojęcia (Concepts)
// ==========================================================================
function renderConcepts(chapter) {
  const grid = document.getElementById("concepts-grid");
  grid.innerHTML = "";

  if (!chapter.concepts || chapter.concepts.length === 0) {
    grid.innerHTML = "<p class='text-muted'>Brak zdefiniowanych pojęć dla tego rozdziału.</p>";
    return;
  }

  chapter.concepts.forEach(item => {
    const card = document.createElement("div");
    card.className = "concept-card";
    card.innerHTML = `
      <div class="concept-term">${item.term}</div>
      <div class="concept-definition">${item.definition}</div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// Zakładka 3: Fiszki (Flashcards)
// ==========================================================================
function renderFlashcard(chapter) {
  const cardEl = document.getElementById("current-flashcard");
  cardEl.classList.remove("flipped"); // Zawsze zaczynamy od przodu

  if (!chapter.qa || chapter.qa.length === 0) {
    document.getElementById("content-flashcards").innerHTML = "<p class='text-muted'>Brak fiszek dla tego rozdziału.</p>";
    return;
  }

  const item = chapter.qa[flashcardIndex];
  document.getElementById("flashcard-question-text").innerHTML = item.question;
  document.getElementById("flashcard-answer-text").innerHTML = item.answer;

  // Aktualizacja licznika
  document.getElementById("card-counter").textContent = `${flashcardIndex + 1} / ${chapter.qa.length}`;
}

// ==========================================================================
// Zakładka 4: Quiz
// ==========================================================================
// Generuje listę pytań jednokrotnego wyboru (ABC) bazując na pytaniach rozdziału
// i losując niepoprawne odpowiedzi z innych pytań książki
function initQuiz(chapter) {
  if (!chapter.qa || chapter.qa.length === 0) {
    document.getElementById("quiz-container").innerHTML = "<p class='text-muted'>Brak pytań quizowych dla tego rozdziału.</p>";
    return;
  }

  currentQuizQuestionIndex = 0;
  quizScore = 0;
  selectedAnswerIndex = null;
  quizQuestions = [];

  // Zbierz pulę wszystkich poprawnych odpowiedzi z całej książki jako potencjalne błędne odpowiedzi (distractors)
  const allAnswersPool = [];
  bookData.forEach(ch => {
    if (ch.qa) {
      ch.qa.forEach(item => {
        allAnswersPool.push(item.answer);
      });
    }
  });

  // Generuj pytania quizu
  chapter.qa.forEach(qaItem => {
    const correctAnswer = qaItem.answer;
    
    // Filtruj pulę, aby usunąć poprawną odpowiedź z błędnych opcji
    const distractors = allAnswersPool.filter(ans => ans !== correctAnswer);
    
    // Wylosuj 2 lub 3 unikalne błędne odpowiedzi
    const uniqueDistractors = [];
    while (uniqueDistractors.length < Math.min(3, distractors.length)) {
      const randomAns = distractors[Math.floor(Math.random() * distractors.length)];
      if (!uniqueDistractors.includes(randomAns)) {
        uniqueDistractors.push(randomAns);
      }
    }

    // Połącz poprawną odpowiedź z błędnymi i wymieszaj
    const options = [correctAnswer, ...uniqueDistractors];
    shuffleArray(options);

    const correctIndex = options.indexOf(correctAnswer);

    quizQuestions.push({
      question: qaItem.question,
      options: options,
      correctIndex: correctIndex
    });
  });

  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (currentQuizQuestionIndex >= quizQuestions.length) {
    renderQuizResults();
    return;
  }

  const q = quizQuestions[currentQuizQuestionIndex];
  selectedAnswerIndex = null;

  const questionNum = document.createElement("div");
  questionNum.className = "quiz-question-num";
  questionNum.textContent = `Pytanie ${currentQuizQuestionIndex + 1} z ${quizQuestions.length}`;

  const questionText = document.createElement("div");
  questionText.className = "quiz-question-text";
  questionText.innerHTML = q.question;

  const answersList = document.createElement("div");
  answersList.className = "quiz-answers-list";

  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-answer-btn";
    btn.innerHTML = `<span style="font-weight:700; margin-right:12px;">${String.fromCharCode(65 + idx)}.</span> <span>${option}</span>`;
    btn.addEventListener("click", () => selectQuizAnswer(idx, btn));
    answersList.appendChild(btn);
  });

  const footer = document.createElement("div");
  footer.className = "quiz-footer";

  const nextBtn = document.createElement("button");
  nextBtn.id = "quiz-next-btn";
  nextBtn.className = "btn-primary";
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuizQuestionIndex === quizQuestions.length - 1 ? "Zakończ Quiz" : "Następne pytanie";
  nextBtn.addEventListener("click", () => {
    currentQuizQuestionIndex++;
    renderQuizQuestion();
  });

  footer.appendChild(nextBtn);

  container.appendChild(questionNum);
  container.appendChild(questionText);
  container.appendChild(answersList);
  container.appendChild(footer);
}

function selectQuizAnswer(selectedIndex, clickedBtn) {
  if (selectedAnswerIndex !== null) return; // Już wybrano odpowiedź

  selectedAnswerIndex = selectedIndex;
  const q = quizQuestions[currentQuizQuestionIndex];
  const buttons = document.querySelectorAll(".quiz-answer-btn");

  buttons.forEach((btn, idx) => {
    btn.disabled = true; // Zablokuj klikanie w inne opcje
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
    }
  });

  if (selectedIndex === q.correctIndex) {
    quizScore++;
  } else {
    clickedBtn.classList.add("incorrect");
  }

  // Włącz przycisk "Dalej"
  document.getElementById("quiz-next-btn").disabled = false;
}

function renderQuizResults() {
  const container = document.getElementById("quiz-container");
  const percent = Math.round((quizScore / quizQuestions.length) * 100);

  let feedback = "Spróbuj ponownie!";
  if (percent === 100) {
    feedback = "Doskonale! Bez błędów.";
  } else if (percent >= 75) {
    feedback = "Świetny wynik!";
  } else if (percent >= 50) {
    feedback = "Dobry wynik, ale możesz go poprawić.";
  }

  container.innerHTML = `
    <div class="quiz-results">
      <div class="quiz-score-circle">
        <span class="score-num">${quizScore}</span>
        <span class="score-max">/ ${quizQuestions.length}</span>
      </div>
      <div class="quiz-feedback">${feedback}</div>
      <div class="quiz-desc">Twój wynik to ${percent}% poprawnych odpowiedzi.</div>
      <button id="quiz-retry-btn" class="btn-primary">Rozpocznij ponownie</button>
    </div>
  `;

  document.getElementById("quiz-retry-btn").addEventListener("click", () => {
    const chapter = bookData.find(c => c.id === activeChapterId);
    initQuiz(chapter);
  });
}

// Pomocnicza funkcja mieszania tablicy (Fisher-Yates Shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ==========================================================================
// Wyszukiwarka Globalna
// ==========================================================================
function performSearch(query) {
  const resultsDropdown = document.getElementById("search-results");
  resultsDropdown.innerHTML = "";

  if (!query.trim()) {
    resultsDropdown.classList.add("hidden");
    return;
  }

  const results = [];
  const queryLower = query.toLowerCase();

  bookData.forEach(chapter => {
    // 1. Szukaj w tytule rozdziału
    if (chapter.title.toLowerCase().includes(queryLower)) {
      results.push({
        chapterId: chapter.id,
        type: "Rozdział",
        title: chapter.title,
        snippet: "Tytuł rozdziału w kompendium wiedzy"
      });
    }

    // 2. Szukaj w streszczeniu (po usunięciu tagów HTML)
    const textOnlySummary = chapter.summary.replace(/<[^>]*>/g, '');
    const summaryIndex = textOnlySummary.toLowerCase().indexOf(queryLower);
    if (summaryIndex !== -1) {
      const start = Math.max(0, summaryIndex - 30);
      const end = Math.min(textOnlySummary.length, summaryIndex + queryLower.length + 40);
      const snippet = "..." + textOnlySummary.slice(start, end).trim() + "...";
      results.push({
        chapterId: chapter.id,
        tab: "summary",
        type: "Podsumowanie",
        title: chapter.title,
        snippet: snippet
      });
    }

    // 3. Szukaj w pojęciach
    if (chapter.concepts) {
      chapter.concepts.forEach(concept => {
        if (concept.term.toLowerCase().includes(queryLower) || concept.definition.toLowerCase().includes(queryLower)) {
          results.push({
            chapterId: chapter.id,
            tab: "concepts",
            type: "Pojęcie: " + concept.term,
            title: chapter.title,
            snippet: concept.definition
          });
        }
      });
    }

    // 4. Szukaj w pytaniach i odpowiedziach (fiszki)
    if (chapter.qa) {
      chapter.qa.forEach(qaItem => {
        if (qaItem.question.toLowerCase().includes(queryLower) || qaItem.answer.toLowerCase().includes(queryLower)) {
          results.push({
            chapterId: chapter.id,
            tab: "flashcards",
            type: "Fiszka / Pytanie",
            title: chapter.title,
            snippet: `Q: ${qaItem.question} - A: ${qaItem.answer}`
          });
        }
      });
    }
  });

  // Wyświetlanie wyników
  if (results.length === 0) {
    resultsDropdown.innerHTML = `<div class="search-result-item" style="color:var(--text-muted); cursor:default;">Brak wyników dla "${query}"</div>`;
  } else {
    // Limit wyników do 6 dla przejrzystości interfejsu
    results.slice(0, 6).forEach(res => {
      const div = document.createElement("div");
      div.className = "search-result-item";
      div.innerHTML = `
        <div class="result-title">${res.type}</div>
        <div class="result-snippet">${res.snippet}</div>
        <div class="result-type">${res.title}</div>
      `;
      div.addEventListener("click", () => {
        selectChapter(res.chapterId);
        if (res.tab) {
          activeTab = res.tab;
          updateTabsUI();
          renderActiveTabContent();
        }
        resultsDropdown.classList.add("hidden");
        document.getElementById("search-input").value = "";
      });
      resultsDropdown.appendChild(div);
    });
  }

  resultsDropdown.classList.remove("hidden");
}

// ==========================================================================
// Konfiguracja Nasłuchiwania Zdarzeń (Event Listeners)
// ==========================================================================
function setupEventListeners() {
  // Przełącznik motywu
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.replace("dark-theme", "light-theme");
      localStorage.setItem("theme", "light");
      toggleThemeIcons("light");
    } else {
      document.body.classList.replace("light-theme", "dark-theme");
      localStorage.setItem("theme", "dark");
      toggleThemeIcons("dark");
    }
  });

  // Obsługa zakładek rozdziału
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTab = btn.dataset.tab;
      updateTabsUI();
      renderActiveTabContent();
    });
  });

  // Przycisk "Oznacz jako przeczytany"
  const markReadBtn = document.getElementById("mark-read-btn");
  markReadBtn.addEventListener("click", () => {
    if (!activeChapterId) return;

    if (completedChapters.has(activeChapterId)) {
      completedChapters.delete(activeChapterId);
      markReadBtn.classList.remove("active");
      markReadBtn.querySelector("span").textContent = "Oznacz jako przeczytany";
    } else {
      completedChapters.add(activeChapterId);
      markReadBtn.classList.add("active");
      markReadBtn.querySelector("span").textContent = "Przeczytany";
    }
    saveProgress();
  });

  // Obracanie fiszki
  const flashcard = document.getElementById("current-flashcard");
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });

  // Nawigacja fiszek
  document.getElementById("prev-card-btn").addEventListener("click", (e) => {
    e.stopPropagation(); // Zapobiega obracaniu karty przy kliknięciu w przycisk
    const chapter = bookData.find(c => c.id === activeChapterId);
    if (!chapter || !chapter.qa) return;

    flashcardIndex = (flashcardIndex - 1 + chapter.qa.length) % chapter.qa.length;
    renderFlashcard(chapter);
  });

  document.getElementById("next-card-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const chapter = bookData.find(c => c.id === activeChapterId);
    if (!chapter || !chapter.qa) return;

    flashcardIndex = (flashcardIndex + 1) % chapter.qa.length;
    renderFlashcard(chapter);
  });

  // Wyszukiwanie (debounce na wpisywanie tekstu)
  const searchInput = document.getElementById("search-input");
  let searchTimeout = null;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 200);
  });

  // Ukryj wyniki wyszukiwania przy kliknięciu poza wyszukiwarką
  document.addEventListener("click", (e) => {
    const searchContainer = document.querySelector(".search-container");
    if (!searchContainer.contains(e.target)) {
      document.getElementById("search-results").classList.add("hidden");
    }
  });

  // Resetowanie postępu
  document.getElementById("reset-progress-btn").addEventListener("click", () => {
    if (confirm("Czy na pewno chcesz zresetować cały postęp czytania?")) {
      completedChapters.clear();
      saveProgress();
      
      // Wyczyszczenie zakreśleń z localStorage przy resecie
      if (typeof bookData !== 'undefined') {
        bookData.forEach(ch => {
          localStorage.removeItem(`highlights_${ch.id}_summary`);
          localStorage.removeItem(`highlights_${ch.id}_concepts`);
        });
      }
      
      if (activeChapterId) {
        selectChapter(activeChapterId);
      }
    }
  });

  // Obsługa paska zakreślacza w nagłówku
  const headerToolbar = document.getElementById('header-highlight-toolbar');
  if (headerToolbar) {
    const buttons = headerToolbar.querySelectorAll('.header-tool-btn');
    const clearBtn = document.getElementById('clear-highlight-tool');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const isCurrentlyActive = btn.classList.contains('active');

        // Resetuj klasy aktywne we wszystkich przyciskach w nagłówku
        buttons.forEach(b => b.classList.remove('active'));

        if (isCurrentlyActive) {
          activeHighlightColor = null;
          clearBtn.style.display = 'none';
        } else {
          btn.classList.add('active');
          if (btn.classList.contains('eraser-btn')) {
            activeHighlightColor = 'eraser';
          } else {
            activeHighlightColor = btn.dataset.color;
          }
          clearBtn.style.display = 'flex';
        }
      });
    });

    clearBtn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      activeHighlightColor = null;
      clearBtn.style.display = 'none';
    });
  }

  // Obsługa zakreślania tekstu - kolory w popoverze (jako rezerwa)
  const popover = document.getElementById('highlight-popover');
  popover.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      highlightSelection(btn.dataset.color);
      popover.classList.add('hidden');
    });
  });

  // Obsługa zakreślania tekstu - gumka w popoverze (jako rezerwa)
  popover.querySelector('.eraser-btn').addEventListener('click', () => {
    clearSelectionHighlight();
  });

  // Ukryj popover przy przewijaniu panelu czytnika
  document.querySelector('.app-content').addEventListener('scroll', () => {
    popover.classList.add('hidden');
  });
}

// ==========================================================================
// Funkcje Zakreślania Tekstu (Highlights)
// ==========================================================================

// Wykrywanie zaznaczenia tekstu i pokazywanie popovera (z obsługą myszy oraz ekranów dotykowych)
document.addEventListener('mouseup', (e) => {
  handleTextSelectionWithTarget(e.target);
});

document.addEventListener('touchend', (e) => {
  const target = e.target;
  // Krótkie opóźnienie na mobile, aby dać przeglądarce czas na uaktualnienie stanu zaznaczenia w DOM
  setTimeout(() => {
    handleTextSelectionWithTarget(target);
  }, 100);
});

function handleTextSelectionWithTarget(target) {
  const selection = window.getSelection();
  const popover = document.getElementById('highlight-popover');
  
  if (popover && popover.contains(target)) return;

  const headerToolbar = document.getElementById('header-highlight-toolbar');
  if (headerToolbar && headerToolbar.contains(target)) return;

  if (selection.isCollapsed || !selection.toString().trim()) {
    if (popover) popover.classList.add('hidden');
    return;
  }

  const range = selection.getRangeAt(0);
  let container = range.commonAncestorContainer;
  
  let isValidContainer = false;
  while (container && container !== document.body) {
    if (container.classList && (container.classList.contains('reading-view') || container.classList.contains('concepts-grid'))) {
      isValidContainer = true;
      break;
    }
    container = container.parentNode;
  }

  if (!isValidContainer) {
    if (popover) popover.classList.add('hidden');
    return;
  }

  // JEŚLI JEST AKTYWNY KOLOR W NAGŁÓWKU - ZAKREŚLAMY LUB WYMAZUJEMY NATYCHMIAST
  if (activeHighlightColor) {
    if (activeHighlightColor === 'eraser') {
      clearSelectionHighlight();
    } else {
      highlightSelection(activeHighlightColor);
    }
    return;
  }

  const rect = range.getBoundingClientRect();
  if (popover) {
    popover.classList.remove('hidden');
    popover.style.top = `${window.scrollY + rect.top}px`;
    popover.style.left = `${window.scrollX + rect.left + (rect.width / 2)}px`;
  }
}

// Zakreślanie zaznaczonego obszaru wybranym kolorem (zmiana koloru czcionki)
function highlightSelection(color) {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  
  const range = selection.getRangeAt(0);
  const mark = document.createElement('mark');
  mark.style.color = color;
  mark.className = 'text-highlight';

  try {
    range.surroundContents(mark);
  } catch (e) {
    // Jeśli zaznaczenie obejmuje wiele tagów HTML (np. strong i em), wyciągamy je i owijamy
    try {
      const documentFragment = range.extractContents();
      mark.appendChild(documentFragment);
      range.insertNode(mark);
    } catch (err) {
      console.error("Błąd zakreślania:", err);
    }
  }

  selection.removeAllRanges();
  saveHighlightsState();
}

// Usuwanie zakreśleń (gumka)
function clearSelectionHighlight() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  const range = selection.getRangeAt(0);

  let container = range.commonAncestorContainer;
  if (container.nodeType === Node.TEXT_NODE) {
    container = container.parentNode;
  }

  if (container.tagName === 'MARK' && container.classList.contains('text-highlight')) {
    unwrapElement(container);
  } else {
    const marks = container.querySelectorAll('mark.text-highlight');
    marks.forEach(mark => {
      if (selection.containsNode(mark, true)) {
        unwrapElement(mark);
      }
    });
  }

  selection.removeAllRanges();
  document.getElementById('highlight-popover').classList.add('hidden');
  saveHighlightsState();
}

function unwrapElement(el) {
  const parent = el.parentNode;
  while (el.firstChild) {
    parent.insertBefore(el.firstChild, el);
  }
  parent.removeChild(el);
}

// Zapisywanie zakreśleń do localStorage
function saveHighlightsState() {
  if (!activeChapterId) return;
  const chapter = bookData.find(c => c.id === activeChapterId);
  if (!chapter) return;

  if (activeTab === 'summary') {
    const art = document.getElementById('summary-article');
    localStorage.setItem(`highlights_${activeChapterId}_summary`, art.innerHTML);
    localStorage.setItem(`highlights_${activeChapterId}_summary_signature`, chapter.summary);
  } else if (activeTab === 'concepts') {
    const grid = document.getElementById('concepts-grid');
    localStorage.setItem(`highlights_${activeChapterId}_concepts`, grid.innerHTML);
    const currentSignature = chapter.concepts.map(c => c.term).join('|') + '::' + chapter.concepts.map(c => c.definition.length).join('|');
    localStorage.setItem(`highlights_${activeChapterId}_concepts_signature`, currentSignature);
  }
}
