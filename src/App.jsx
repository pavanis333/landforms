import { useState, useEffect, useCallback } from "react";
import "./App.css";
import topics from "./data/topics";
import {
  getFlashcardProgress, saveFlashcardProgress,
  getQuizProgress, saveQuizProgress,
  getCardSchedule, updateCardSchedule,
  getOverallProgress, resetAll, resetFlashcards, resetQuizzes,
} from "./utils/storage";

function App() {
  const [view, setView] = useState("topics"); // topics | subtopics | flashcards | quiz | progress
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentSubtopic, setCurrentSubtopic] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = () => setRefreshKey((k) => k + 1);

  const goHome = () => { setView("topics"); setCurrentTopic(null); setCurrentSubtopic(null); };

  return (
    <div className="app">
      <header className="header">
        <h1 onClick={goHome} style={{ cursor: "pointer" }}>📚 UPSC Prelims Prep</h1>
        <p>Flashcards & Quizzes with Spaced Repetition</p>
      </header>

      <nav className="nav">
        <button className={`nav-btn ${view === "topics" || view === "subtopics" ? "active" : ""}`} onClick={goHome}>Topics</button>
        <button className={`nav-btn ${view === "progress" ? "active" : ""}`} onClick={() => setView("progress")}>Progress</button>
      </nav>

      {view === "topics" && <TopicList topics={topics} onSelect={(t) => { setCurrentTopic(t); setView("subtopics"); }} />}
      {view === "subtopics" && currentTopic && (
        <SubtopicList topic={currentTopic} onFlashcards={(s) => { setCurrentSubtopic(s); setView("flashcards"); }}
          onQuiz={(s) => { setCurrentSubtopic(s); setView("quiz"); }} onBack={goHome} refreshKey={refreshKey} />
      )}
      {view === "flashcards" && currentSubtopic && (
        <FlashcardViewer subtopic={currentSubtopic} onBack={() => setView("subtopics")} onDone={refresh} />
      )}
      {view === "quiz" && currentSubtopic && (
        <QuizViewer subtopic={currentSubtopic} onBack={() => setView("subtopics")} onDone={refresh} />
      )}
      {view === "progress" && <ProgressDashboard topics={topics} onRefresh={refresh} />}
    </div>
  );
}

function TopicList({ topics, onSelect }) {
  return (
    <div className="topic-list">
      {topics.map((t) => (
        <div key={t.id} className="topic-card" onClick={() => onSelect(t)}>
          <h2>{t.name}</h2>
          <div className="meta">{t.subtopics.length} subtopic{t.subtopics.length !== 1 ? "s" : ""} · {t.subtopics.reduce((a, s) => a + s.flashcards.length, 0)} cards · {t.subtopics.reduce((a, s) => a + s.quizzes.length, 0)} questions</div>
        </div>
      ))}
    </div>
  );
}

function SubtopicList({ topic, onFlashcards, onQuiz, onBack, refreshKey }) {
  return (
    <>
      <div className="breadcrumb">
        <button onClick={onBack}>← Topics</button>
        <span>/</span>
        <span>{topic.name}</span>
      </div>
      <div className="subtopic-list">
        {topic.subtopics.map((s) => {
          const fp = getFlashcardProgress(s.id);
          const qp = getQuizProgress(s.id);
          const masteredCount = Object.keys(fp.mastered).length;
          const dueCount = s.flashcards.filter((c) => {
            const sch = getCardSchedule(c.id);
            return sch.nextReview <= Date.now();
          }).length;

          return (
            <div key={s.id} className="subtopic-card">
              <h3>{s.name}</h3>
              <div className="meta" style={{ marginBottom: 12 }}>
                Cards: {masteredCount}/{s.flashcards.length} mastered
                {dueCount > 0 && <span className="due-badge">{dueCount} due</span>}
                {" · "}Quiz: {qp.completed ? `${qp.score}/${qp.total}` : "Not attempted"}
              </div>
              <div className="subtopic-actions">
                <button className="action-btn flashcards" onClick={() => onFlashcards(s)}>
                  📝 Flashcards {dueCount > 0 ? `(${dueCount} due)` : ""}
                </button>
                <button className="action-btn quiz" onClick={() => onQuiz(s)}>🧪 Quiz</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function FlashcardViewer({ subtopic, onBack, onDone }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Sort by due date (due first)
    const sorted = [...subtopic.flashcards].sort((a, b) => {
      const sa = getCardSchedule(a.id);
      const sb = getCardSchedule(b.id);
      return sa.nextReview - sb.nextReview;
    });
    setCards(sorted);
    setIndex(0);
    setFlipped(false);
  }, [subtopic]);

  const card = cards[index];
  if (!card) return <div>No cards available.</div>;

  const handleRate = (quality) => {
    updateCardSchedule(card.id, quality);
    const progress = getFlashcardProgress(subtopic.id);
    progress.reviewed[card.id] = Date.now();
    if (quality >= 4) progress.mastered[card.id] = true;
    else delete progress.mastered[card.id];
    saveFlashcardProgress(subtopic.id, progress);

    if (index < cards.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
    } else {
      onDone();
      onBack();
    }
  };

  return (
    <>
      <div className="breadcrumb">
        <button onClick={onBack}>← Back</button>
        <span>/</span>
        <span>{subtopic.name}</span>
        <span>/</span>
        <span>Flashcards</span>
      </div>
      <div className="flashcard-container">
        <div className="flashcard-progress-text">Card {index + 1} of {cards.length}</div>
        <div className="flashcard" onClick={() => setFlipped(!flipped)}>
          <div className="flashcard-label">{flipped ? "Answer" : "Question"}</div>
          <div className="flashcard-content">{flipped ? card.back : card.front}</div>
        </div>
        {!flipped && <p className="flashcard-hint">Tap the card to reveal the answer</p>}
        {flipped && (
          <div className="flashcard-controls">
            <button className="rate-btn again" onClick={() => handleRate(1)}>😵 Again</button>
            <button className="rate-btn hard" onClick={() => handleRate(3)}>😬 Hard</button>
            <button className="rate-btn good" onClick={() => handleRate(4)}>👍 Good</button>
            <button className="rate-btn easy" onClick={() => handleRate(5)}>🚀 Easy</button>
          </div>
        )}
      </div>
    </>
  );
}

function QuizViewer({ subtopic, onBack, onDone }) {
  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const questions = subtopic.quizzes;
  const q = questions[qIndex];

  const handleSelect = (optIndex) => {
    if (answered) return;
    setSelected(optIndex);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setAnswered(true);
    setAnswers((prev) => ({ ...prev, [qIndex]: selected }));
  };

  const handleNext = () => {
    if (qIndex < questions.length - 1) {
      setQIndex(qIndex + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      // Calculate & save
      const finalAnswers = { ...answers, [qIndex]: selected };
      let score = 0;
      questions.forEach((qq, i) => {
        if (finalAnswers[i] === qq.correct) score++;
      });
      saveQuizProgress(subtopic.id, { answers: finalAnswers, score, total: questions.length, completed: true });
      setFinished(true);
      onDone();
    }
  };

  if (finished) {
    const progress = getQuizProgress(subtopic.id);
    return (
      <div className="quiz-results">
        <h2>Quiz Complete!</h2>
        <div className="quiz-score">{progress.score}/{progress.total}</div>
        <p className="meta">{progress.score === progress.total ? "🎉 Perfect score!" : progress.score >= progress.total * 0.7 ? "👏 Good job!" : "📖 Keep revising!"}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="quiz-btn" onClick={onBack}>← Back</button>
          <button className="quiz-btn" onClick={() => { setQIndex(0); setSelected(null); setAnswered(false); setAnswers({}); setFinished(false); }}>🔄 Retry</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="breadcrumb">
        <button onClick={onBack}>← Back</button>
        <span>/</span>
        <span>{subtopic.name}</span>
        <span>/</span>
        <span>Quiz</span>
      </div>
      <div className="quiz-container">
        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${((qIndex + (answered ? 1 : 0)) / questions.length) * 100}%` }} />
        </div>
        <div className="quiz-question-num">Question {qIndex + 1} of {questions.length}</div>
        <div className="quiz-question">{q.question}</div>
        <div className="quiz-options">
          {q.options.map((opt, i) => {
            let cls = "quiz-option";
            if (answered) {
              if (i === q.correct) cls += " correct";
              else if (i === selected && i !== q.correct) cls += " wrong";
            } else if (i === selected) cls += " selected";
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)}>{opt}</button>
            );
          })}
        </div>
        {!answered ? (
          <button className="quiz-btn" disabled={selected === null} onClick={handleSubmit}>Check Answer</button>
        ) : (
          <button className="quiz-btn" onClick={handleNext}>{qIndex < questions.length - 1 ? "Next →" : "Finish"}</button>
        )}
      </div>
    </>
  );
}

function ProgressDashboard({ topics, onRefresh }) {
  const [, forceUpdate] = useState(0);
  const overall = getOverallProgress(topics);

  const handleReset = (type) => {
    const msg = type === "all" ? "Reset ALL progress?" : `Reset all ${type} progress?`;
    if (window.confirm(msg)) {
      if (type === "all") resetAll();
      else if (type === "flashcards") resetFlashcards();
      else if (type === "quizzes") resetQuizzes();
      onRefresh();
      forceUpdate((n) => n + 1);
    }
  };

  return (
    <div className="progress-dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{overall.masteredCards}</div>
          <div className="stat-label">Cards Mastered</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{overall.totalCards}</div>
          <div className="stat-label">Total Cards</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{overall.correctQuizzes}</div>
          <div className="stat-label">Quiz Correct</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{overall.totalQuizzes}</div>
          <div className="stat-label">Total Questions</div>
        </div>
      </div>

      {topics.map((topic) => (
        <div key={topic.id} className="progress-card">
          <h3>{topic.name}</h3>
          {topic.subtopics.map((sub) => {
            const fp = getFlashcardProgress(sub.id);
            const qp = getQuizProgress(sub.id);
            const cardPct = sub.flashcards.length ? (Object.keys(fp.mastered).length / sub.flashcards.length) * 100 : 0;
            const quizPct = qp.completed ? (qp.score / qp.total) * 100 : 0;
            return (
              <div key={sub.id} style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 500, marginBottom: 8 }}>{sub.name}</div>
                <div className="progress-bar-container">
                  <div className="progress-bar-label">
                    <span>Flashcards</span>
                    <span>{Math.round(cardPct)}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill cards" style={{ width: `${cardPct}%` }} />
                  </div>
                </div>
                <div className="progress-bar-container">
                  <div className="progress-bar-label">
                    <span>Quiz</span>
                    <span>{qp.completed ? `${qp.score}/${qp.total}` : "—"}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-bar-fill quiz" style={{ width: `${quizPct}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      <div className="reset-section">
        <h3>⚠️ Reset Progress</h3>
        <div className="reset-buttons">
          <button className="reset-btn" onClick={() => handleReset("flashcards")}>Reset Flashcards</button>
          <button className="reset-btn" onClick={() => handleReset("quizzes")}>Reset Quizzes</button>
          <button className="reset-btn danger" onClick={() => handleReset("all")}>Reset Everything</button>
        </div>
      </div>
    </div>
  );
}

export default App;
