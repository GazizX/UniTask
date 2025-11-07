import { questionsData } from "./questions.js";
import { shuffleArray } from "./utils.js";

let questions = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let answeredQuestions = [];
let isAnimating = false;
let showStats = false;
let correctCount = 0;
let expandedQuestion = null;

const questionsContainer = document.getElementById("questionsContainer");
const statsContainer = document.getElementById("statsContainer");
const correctCountEl = document.getElementById("correctCount");
const totalCountEl = document.getElementById("totalCount");
const percentageEl = document.getElementById("percentage");
const resetBtn = document.getElementById("resetBtn");

function initQuiz() {
  questions = shuffleArray(questionsData);
  currentQuestionIndex = 0;
  selectedAnswer = null;
  answeredQuestions = [];
  isAnimating = false;
  showStats = false;
  correctCount = 0;
  expandedQuestion = null;

  statsContainer.classList.add("hidden");
  renderQuestions();
}

function renderQuestions() {
  questionsContainer.innerHTML = "";

  answeredQuestions.forEach((item, index) => {
    renderAnsweredQuestion(item, index, !showStats);
  });

  if (currentQuestionIndex < questions.length) {
    renderCurrentQuestion();
  } else if (answeredQuestions.length > 0 && !showStats) {
    showStats = true;
    renderStats();
  } else if (answeredQuestions.length === 0) {
    questionsContainer.innerHTML =
      '<div class="no-questions">Вопросы закончились</div>';
  }
}

function renderAnsweredQuestion(item, index, showExplanationForCorrect) {
  const questionDiv = document.createElement("div");
  questionDiv.className = "answered-question";
  questionDiv.dataset.index = index;

  if (showStats) {
    questionDiv.addEventListener("click", () => toggleQuestionExpansion(index));
    if (expandedQuestion === index) {
      questionDiv.classList.add("expanded");
    }
  }

  const headerDiv = document.createElement("div");
  headerDiv.className = "answered-question-header";

  const questionText = document.createElement("div");
  questionText.className = "answered-question-text";
  questionText.textContent = `${index + 1}. ${item.question.question}`;

  const markerDiv = document.createElement("div");
  markerDiv.className = "question-marker";
  if (item.isCorrect) {
    markerDiv.textContent = "✅";
    markerDiv.className = "question-marker correct-marker";
  } else {
    markerDiv.textContent = "❌";
    markerDiv.className = "question-marker incorrect-marker";
  }

  headerDiv.appendChild(questionText);
  headerDiv.appendChild(markerDiv);
  questionDiv.appendChild(headerDiv);

  if (
    (showExplanationForCorrect && item.isCorrect) ||
    (showStats && expandedQuestion === index)
  ) {
    const explanationDiv = document.createElement("div");
    explanationDiv.className = "explanation-container";

    const explanationText = document.createElement("div");
    explanationText.className = "explanation-text";
    explanationText.textContent = item.question.explanation;
    explanationDiv.appendChild(explanationText);

    questionDiv.appendChild(explanationDiv);
  }

  questionsContainer.appendChild(questionDiv);
}

function renderCurrentQuestion() {
  const question = questions[currentQuestionIndex];
  const questionDiv = document.createElement("div");
  questionDiv.className = "current-question";
  questionDiv.id = "currentQuestion";

  const headerDiv = document.createElement("div");
  headerDiv.className = "current-question-header";

  const questionText = document.createElement("div");
  questionText.className = "current-question-text";
  questionText.textContent = `${currentQuestionIndex + 1}. ${
    question.question
  }`;

  const markerDiv = document.createElement("div");
  markerDiv.className = "question-marker";
  if (selectedAnswer !== null) {
    if (selectedAnswer === question.correctAnswer) {
      markerDiv.textContent = "✅";
      markerDiv.className = "question-marker correct-marker";
    } else {
      markerDiv.textContent = "❌";
      markerDiv.className = "question-marker incorrect-marker";
    }
  }

  headerDiv.appendChild(questionText);
  headerDiv.appendChild(markerDiv);
  questionDiv.appendChild(headerDiv);

  if (selectedAnswer === null) {
    const answersContainer = document.createElement("div");
    answersContainer.className = "answers-container";

    question.answers.forEach((answer, index) => {
      const answerDiv = document.createElement("div");
      answerDiv.className = "answer-option";
      answerDiv.dataset.index = index;

      const answerText = document.createElement("div");
      answerText.className = "answer-text";
      answerText.textContent = answer;
      answerDiv.appendChild(answerText);

      answerDiv.addEventListener("click", () => handleAnswerSelect(index));
      answersContainer.appendChild(answerDiv);
    });

    questionDiv.appendChild(answersContainer);
  } else {
    const answersContainer = document.createElement("div");
    answersContainer.className = "answers-container";

    question.answers.forEach((answer, index) => {
      const answerDiv = document.createElement("div");
      answerDiv.className = "answer-option";
      answerDiv.dataset.index = index;

      const answerText = document.createElement("div");
      answerText.className = "answer-text";
      answerText.textContent = answer;
      answerDiv.appendChild(answerText);

      if (selectedAnswer === index && index === question.correctAnswer) {
        const explanationDiv = document.createElement("div");
        explanationDiv.className = "explanation";
        explanationDiv.textContent = question.explanation;
        answerDiv.appendChild(explanationDiv);
        answerDiv.classList.add("correct");
      }

      answerDiv.classList.add("selected");
      answersContainer.appendChild(answerDiv);
    });

    questionDiv.appendChild(answersContainer);
  }

  questionsContainer.appendChild(questionDiv);
}

function handleAnswerSelect(answerIndex) {
  if (selectedAnswer !== null || isAnimating) return;

  selectedAnswer = answerIndex;
  const isCorrect =
    answerIndex === questions[currentQuestionIndex].correctAnswer;

  if (isCorrect) {
    correctCount++;
  }

  answeredQuestions.push({
    question: questions[currentQuestionIndex],
    selectedAnswer: answerIndex,
    isCorrect: isCorrect,
  });

  isAnimating = true;

  const answerOptions = document.querySelectorAll(
    "#currentQuestion .answer-option"
  );
  answerOptions.forEach((option) => {
    option.classList.add("slide-out");
  });

  setTimeout(() => {
    currentQuestionIndex++;
    selectedAnswer = null;
    isAnimating = false;
    renderQuestions();
  }, 500);
}

function toggleQuestionExpansion(index) {
  if (expandedQuestion === index) {
    expandedQuestion = null;
  } else {
    expandedQuestion = index;
  }
  renderQuestions();
}

function renderStats() {
  correctCountEl.textContent = correctCount;
  totalCountEl.textContent = questions.length;
  const percentage = Math.round((correctCount / questions.length) * 100);
  percentageEl.textContent = `${percentage}%`;
  statsContainer.classList.remove("hidden");
  renderQuestions();
}

resetBtn.addEventListener("click", initQuiz);

initQuiz();
