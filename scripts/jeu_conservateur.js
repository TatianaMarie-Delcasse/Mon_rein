const questions = [
  {
    question: "Quel est l’objectif principal du traitement conservateur ?",
    answers: [
      { text: "Maintenir la qualité de vie sans recours à la dialyse", correct: true, feedback: "✅ Exactement ! Le but est d'accompagner le patient sans recourir à la dialyse." },
      { text: "Remplacer totalement la fonction du rein", correct: false, feedback: "⚠️ Non. Ce traitement ne remplace pas le rein, il accompagne la progression de la maladie." }
    ]
  },
  {
    question: "Tu as moins d’appétit depuis quelques jours. Tu :",
    answers: [
      { text: "Ne dis rien", correct: false, feedback: "⚠️ Mauvais réflexe. Perte d’appétit peut indiquer une aggravation ou un besoin d’adaptation." },
      { text: "Le dis à ton médecin ou à la diététicienne", correct: true, feedback: "✅ Bonne initiative ! Cela peut nécessiter une adaptation du suivi." }
    ]
  },
  {
    question: " Tu ressens une fatigue inhabituelle. Tu :",
    answers: [
      { text: "En parles pour adapter le traitement", correct: true, feedback: "✅ C’est le bon réflexe. La fatigue est un symptôme qu’il faut surveiller." },
      { text: "Penses que c’est normal", correct: false, feedback: "⚠️ Attention, il ne faut pas banaliser une fatigue anormale." }
    ]
  },
  {
    question: "Tu prends plusieurs médicaments. Tu :",
    answers: [
      { text: "Te débrouilles au hasard", correct: false, feedback: "⚠️ Risqué. Une mauvaise prise peut nuire à ton état de santé." },
      { text: "Demandes une aide pour organiser la prise", correct: true, feedback: "✅ Très bien ! Un pilulier ou un accompagnement peut t’aider à bien les prendre." }
    ]
  },
  {
    question: "Tu as des démangeaisons importantes. Tu :",
    answers: [
      { text: "Utilises des crèmes sans consulter", correct: false, feedback: "⚠️ Non ! Certaines crèmes peuvent aggraver les choses ou masquer un vrai problème." },
      { text: "Le signales pour un traitement adapté", correct: true, feedback: "✅ Bonne réaction ! Des solutions existent pour soulager ce symptôme fréquent." }
    ]
  },
  {
    question: "Que faire si vous avez des difficultés à vous déplacer pour les suivis ?",
    answers: [
      { text: "Utiliser la téléconsultation quand c’est possible", correct: true, feedback: "✅ Parfait ! Cela permet de continuer à être suivi sans se déplacer." },
      { text: "Ne plus aller aux rendez-vous", correct: false, feedback: "⚠️ Non. Il est essentiel de rester suivi, même à distance." }
    ]
  },
  {
    question: "Le traitement conservateur peut inclure un suivi diététique. Pourquoi ?",
    answers: [
      { text: "Pour imposer une diète stricte à tous les patients", correct: false, feedback: "⚠️ Faux. Chaque patient est différent, la diététique est personnalisée." },
      { text: "Pour adapter les apports sans carence", correct: true, feedback: "✅ Exactement ! L’alimentation est ajustée à tes besoins." }
    ]
  },
  {
    question: "Tu as mal mais ne veux pas prendre d’antalgiques. Tu :",
    answers: [
      { text: "Dis à ton médecin pour trouver une solution", correct: true, feedback: "✅ Bonne attitude ! Il existe des solutions adaptées et sécurisées." },
      { text: "Endures la douleur", correct: false, feedback: "⚠️ Non. Il ne faut pas vivre avec une douleur non soulagée." }
    ]
  },
  {
    question: "Est-ce que les hospitalisations sont fréquentes avec ce traitement ?",
    answers: [
      { text: "Elles sont limitées autant que possible", correct: true, feedback: "✅ C’est l’objectif : éviter les hospitalisations inutiles." },
      { text: "Elles sont systématiques chaque mois", correct: false, feedback: "⚠️ Faux. Le but est justement de privilégier les soins à domicile ou en consultation." }
    ]
  },
  {
    question: "Quelle phrase est juste ?",
    answers: [
      { text: "L’espérance de vie est la seule priorité du traitement conservateur", correct: false, feedback: "⚠️ Non. C’est la qualité de vie qui est au cœur de ce traitement." },
      { text: "La qualité de vie est privilégiée sur l’espérance de vie", correct: true, feedback: "✅ Exactement. L’objectif est d’accompagner la fin de vie avec confort et respect." }
    ]
  }


];

let currentIndex = 0;
let score = 0;

const startButton = document.getElementById("start-game-btn");
const intro = document.getElementById("game-introduction");
const container = document.getElementById("game-container");
const questionDiv = document.getElementById("scene-question");
const actionsDiv = document.getElementById("scene-actions");
const feedbackDiv = document.getElementById("scene-feedback");
const scoreDiv = document.getElementById("score");

startButton.addEventListener("click", startGame);

function startGame() {
  intro.classList.add("hidden");
  container.classList.remove("hidden");
  scoreDiv.classList.add("hidden");
  currentIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  // Nettoyage
  questionDiv.innerHTML = "";
  actionsDiv.innerHTML = "";
  feedbackDiv.innerHTML = "";

  const current = questions[currentIndex];
  const questionText = document.createElement("p");
  questionText.textContent = current.question;
  questionDiv.appendChild(questionText);

  current.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.className = "btn";
    btn.addEventListener("click", () => handleAnswer(answer));
    actionsDiv.appendChild(btn);
  });
}

function handleAnswer(answer) {
  feedbackDiv.innerHTML = answer.feedback;
  if (answer.correct) score++;

  // Attendre un peu avant de passer à la suivante
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }, 1200);
}

function endGame() {
  container.classList.add("hidden");
  scoreDiv.classList.remove("hidden");
  scoreDiv.innerHTML = `🎉 Tu as terminé le jeu !<br><strong>Score : ${score} / ${questions.length}</strong>`;


// Enregistrer dans localStorage que le jeu 7 est terminé et sauvegarder le score
  localStorage.setItem("bestScoreJeu10", score);
}
