// Spaced Repetition using SM-2 algorithm (simplified)
const STORAGE_PREFIX = "upsc_prep_";

export function getFromStorage(key, defaultValue) {
  try {
    const item = localStorage.getItem(STORAGE_PREFIX + key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function saveToStorage(key, value) {
  localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
}

export function removeFromStorage(key) {
  localStorage.removeItem(STORAGE_PREFIX + key);
}

// SM-2 spaced repetition
export function getCardSchedule(cardId) {
  const schedules = getFromStorage("schedules", {});
  return schedules[cardId] || { interval: 1, repetition: 0, efactor: 2.5, nextReview: 0 };
}

export function updateCardSchedule(cardId, quality) {
  // quality: 0-5 (0=complete blackout, 5=perfect recall)
  const schedules = getFromStorage("schedules", {});
  const card = schedules[cardId] || { interval: 1, repetition: 0, efactor: 2.5, nextReview: 0 };

  if (quality >= 3) {
    if (card.repetition === 0) card.interval = 1;
    else if (card.repetition === 1) card.interval = 6;
    else card.interval = Math.round(card.interval * card.efactor);
    card.repetition++;
  } else {
    card.repetition = 0;
    card.interval = 1;
  }

  card.efactor = Math.max(1.3, card.efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  card.nextReview = Date.now() + card.interval * 24 * 60 * 60 * 1000;

  schedules[cardId] = card;
  saveToStorage("schedules", schedules);
  return card;
}

// Quiz progress
export function getQuizProgress(subtopicId) {
  return getFromStorage(`quiz_${subtopicId}`, { answers: {}, score: 0, total: 0, completed: false });
}

export function saveQuizProgress(subtopicId, progress) {
  saveToStorage(`quiz_${subtopicId}`, progress);
}

// Flashcard progress
export function getFlashcardProgress(subtopicId) {
  return getFromStorage(`flash_${subtopicId}`, { reviewed: {}, mastered: {} });
}

export function saveFlashcardProgress(subtopicId, progress) {
  saveToStorage(`flash_${subtopicId}`, progress);
}

// Overall progress
export function getOverallProgress(topics) {
  let totalCards = 0, masteredCards = 0, totalQuizzes = 0, correctQuizzes = 0;
  
  for (const topic of topics) {
    for (const sub of topic.subtopics) {
      totalCards += sub.flashcards.length;
      totalQuizzes += sub.quizzes.length;
      
      const fp = getFlashcardProgress(sub.id);
      masteredCards += Object.keys(fp.mastered).length;
      
      const qp = getQuizProgress(sub.id);
      correctQuizzes += Object.values(qp.answers).filter((a, i) => a === sub.quizzes[i]?.correct).length;
    }
  }
  
  return { totalCards, masteredCards, totalQuizzes, correctQuizzes };
}

// Reset all
export function resetAll() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_PREFIX)) keys.push(key);
  }
  keys.forEach(k => localStorage.removeItem(k));
}

// Reset flashcards only
export function resetFlashcards() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_PREFIX + "flash_") || key === STORAGE_PREFIX + "schedules") keys.push(key);
  }
  keys.forEach(k => localStorage.removeItem(k));
}

// Reset quizzes only
export function resetQuizzes() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_PREFIX + "quiz_")) keys.push(key);
  }
  keys.forEach(k => localStorage.removeItem(k));
}
