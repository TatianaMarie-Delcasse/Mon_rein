const questions = [
  {
    question: "Quel est l’objectif principal du traitement conservateur ?",
    answers: [
      { text: "Maintenir la qualité de vie sans avoir recours à la dialyse", correct: true, feedback: "✅ Exactement ! Le but est d'accompagner le patient sans recourir à la dialyse." },
      { text: "Remplacer totalement la fonction du rein", correct: false, feedback: "⚠️ Non. Ce traitement ne remplace pas le rein, il accompagne la progression de la maladie." }
    ]
  },
  {
    question: "Tu as moins d’appétit depuis quelques jours. Tu :",
    answers: [
      { text: "Ne dis rien", correct: false, feedback: "⚠️ Mauvais réflexe. Une perte d’appétit peut indiquer une aggravation de ton état et un besoin d’adapter ton traitement." },
      { text: "informe ton médecin ou la diététicienne", correct: true, feedback: "✅ Bonne initiative ! Cela peut nécessiter un suivi plus régulier et éviter la dénutrition." }
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
    question: "Tu prends plusieurs médicaments et cela te parait compliqué. Tu :",
    answers: [
      { text: "Ne sait pas comment les prendre mais tu fais avec", correct: false, feedback: "⚠️ Risqué. Une mauvaise prise peut nuire à ton état de santé." },
      { text: "Demandes une aide pour organiser la prise", correct: true, feedback: "✅ Très bien ! Un pilulier ou un accompagnement infirmier peut t’aider à bien les prendre." }
    ]
  },
  {
    question: "Tu as des démangeaisons importantes. Tu :",
    answers: [
      { text: "Ne le signale pas, car tu penses qu'on ne peut rien y faire", correct: false, feedback: "⚠️ Non ! Des solutions existent pour soulager ce symptôme fréquent." },
      { text: "Le signales pour un traitement adapté", correct: true, feedback: "✅ Bonne réaction ! Tu vas enfin pouvoir être soulagé et retrouver une qualité de vie correcte." }
    ]
  },
  {
    question: "Que faire si tu as des difficultés à te déplacer pour les suivis médicaux ? Tu :",
    answers: [
      { text: "Utilises la téléconsultation quand c’est possible", correct: true, feedback: "✅ Parfait ! Cela permet de continuer à être suivi sans se déplacer." },
      { text: "Ne vas plus aux rendez-vous", correct: false, feedback: "⚠️ Non. Il est essentiel de rester suivi, même à distance." }
    ]
  },
  {
    question: "Le traitement conservateur inclu un suivi diététique. Pourquoi ?",
    answers: [
      { text: "Pour imposer une diète stricte à tous les patients", correct: false, feedback: "⚠️ Faux. Il est important de conserver une alimentation équilibrée et adaptée à l'insuffisance rénale et à ses propres besoins.La diététicienne te donnera de bon conseils. " },
      { text: "Pour adapter les apports sans carence", correct: true, feedback: "✅ Exactement ! L’alimentation est ajustée à tes besoins." }
    ]
  },
  {
    question: "Tu as mal mais ne veux pas prendre d’antalgiques. Tu :",
    answers: [
      { text: "Le dis à ton médecin pour trouver une solution", correct: true, feedback: "✅ Bonne attitude ! Il existe des traitements adaptés qui peuvent te soulager même en cas d'insuffisance rénale." },
      { text: "Endures la douleur car on t'a dit que certains anti-inflammatoires etaient contre indiqué et tu ne veux pas te mettre en danger", correct: false, feedback: "⚠️ Non. Il ne faut pas vivre avec une douleur non soulagée, car cela va impacter ton moral et ton quotidien." }
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
      { text: "La qualité de vie est privilégiée sur l’espérance de vie", correct: true, feedback: "✅ Exactement. L’objectif est d’accompagner la personne avec confort, respect et le minimun de symptômes." }
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
  }, 1900);
}

function endGame() {
  container.classList.add("hidden");
  scoreDiv.classList.remove("hidden");
  scoreDiv.innerHTML = `🎉 Tu as terminé le jeu !<br><strong>Score : ${score} / ${questions.length}</strong>`;


// Enregistrer dans localStorage que le jeu 7 est terminé et sauvegarder le score
  localStorage.setItem("bestScoreJeu10", score);
}
