const questions = [
  {
    question: "Tu viens de te lever. Que fais-tu pour ta fistule ?",
    answers: [
      { text: "Je vérifie le thrill (vibration)", correct: true, feedback: "✅ C’est le bon réflexe ! Le thrill est un bon indicateur du bon fonctionnement de la fistule." },
      { text: "Je ne vérifie rien", correct: false, feedback: "⚠️ Attention ! Il est important de vérifier ta fistule chaque jour." }
    ]
  },
  {
    question: "Pendant la dialyse, tu ressens une crampe. Que fais-tu ?",
    answers: [
      { text: "Je demande une pause", correct: false, feedback: "⚠️ Ce n’est pas toujours suffisant, pense à ajuster le débit si possible." },
      { text: "Je demande à ajuster le débit de la machine", correct: true, feedback: "✅ Bonne réaction ! Un ajustement peut soulager rapidement la crampe." }
    ]
  },
  {
    question: "Tu pars 4 jours à Marseille. Que fais-tu ?",
    answers: [
      { text: "Je contacte un centre de dialyse sur place", correct: true, feedback: "✅ Exactement ! Mieux vaut prévoir les séances dans un centre à l’avance." },
      { text: "Je pars sans rien organiser", correct: false, feedback: "⚠️ Risqué ! Sans organisation, tu risques de rater une séance." }
    ]
  },
  {
    question: "Après la séance, tu as des vertiges en te levant. Que dois-tu faire ?",
    answers: [
      { text: "Sortir vite du centre pour aller m’allonger chez moi", correct: false, feedback: "⚠️ Dangereux ! Tu pourrais faire un malaise. Il faut prévenir sur place." },
      { text: "Rester assis et prévenir l’équipe médicale", correct: true, feedback: "✅ C’est le bon réflexe ! Mieux vaut attendre et en parler à l’équipe." }
    ]
  },
  {
    question: "Ta prise de poids entre deux dialyses est élevée. Que fais-tu ?",
    answers: [
      { text: "J’ignore, ce n’est pas important", correct: false, feedback: "⚠️ C’est au contraire très important. Une surcharge peut fatiguer ton cœur." },
      { text: "Je fais attention au sel et aux liquides", correct: true, feedback: "✅ Parfait ! Limiter le sel aide à mieux gérer la prise de poids." }
    ]
  },
  {
    question: "Tu remarques que ta tension est souvent basse en fin de séance. Tu :",
    answers: [
      { text: "En parles à l’équipe pour ajuster le traitement", correct: true, feedback: "✅ Excellente initiative ! Il est possible d’ajuster le débit ou la durée." },
      { text: "Bois plus d’eau pour la faire remonter", correct: false, feedback: "⚠️ Attention ! Cela risque d’aggraver le problème à la séance suivante." }
    ]
  },
  {
    question: "Tu as de la fièvre avant une séance. Que fais-tu ?",
    answers: [
      { text: "Je ne dis rien et j’y vais quand même", correct: false, feedback: "⚠️ Non ! La fièvre peut indiquer un problème à surveiller avant la séance." },
      { text: "J’en parle à l’équipe avant la dialyse", correct: true, feedback: "✅ C’est essentiel ! La fièvre peut signaler une infection." }
    ]
  },
  {
    question: "Tu oublies un rendez-vous de dialyse. Que fais-tu ?",
    answers: [
      { text: "Je contacte le centre pour reprogrammer", correct: true, feedback: "✅ Bravo ! Il faut toujours rattraper une séance manquée." },
      { text: "Je laisse tomber et j’attends la prochaine", correct: false, feedback: "⚠️ Mauvaise idée. Sauter une séance peut être dangereux pour ta santé." }
    ]
  },
  {
    question: "Un saignement apparaît au point de ponction. Que fais-tu ?",
    answers: [
      { text: "Je préviens tout de suite le personnel", correct: true, feedback: "✅ Très bien ! Une prise en charge rapide évite les complications." },
      { text: "Je mets un mouchoir et je pars", correct: false, feedback: "⚠️ Non ! Le risque de saignement important est réel. Il faut prévenir." }
    ]
  },
  {
    question: "Tu remarques un gonflement au niveau de la fistule. Que fais-tu ?",
    answers: [
      { text: "J’attends de voir si ça passe", correct: false, feedback: "⚠️ Non ! Il vaut mieux réagir tôt pour éviter les complications." },
      { text: "J’en parle rapidement à l’équipe médicale", correct: true, feedback: "✅ Très bien ! Un gonflement peut signaler un problème vasculaire." }
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
  localStorage.setItem("bestScoreJeu7", score);
}
