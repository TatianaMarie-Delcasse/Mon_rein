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
      { text: "J'attend que ca passe, je me masse", correct: false, feedback: "⚠️ Ce n’est pas suffisant, informe l'équipe soignante pour qu'elle puisse te soulager" },
      { text: "Je préviens le personel soignant", correct: true, feedback: "✅ Bonne réaction ! Un ajustement des paramètres de dialyse va pouvoir être éffectué" }
    ]
  },
  {
    question: "Tu pars 4 jours loin de ton centre. Que fais-tu ?",
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
      { text: "J'ai peut être trop mangé et trop bu, mais c'est pas grave car je vais dialyser", correct: false, feedback: "⚠️ C’est au contraire très important. Une surcharge peut fatiguer ton cœur." },
      { text: "J'essaye de limiter le sel et les liquides", correct: true, feedback: "✅ Parfait ! Limiter le sel aide à mieux gérer la prise de poids." }
    ]
  },
  {
    question: "Tu remarques que ta tension est souvent basse en fin de séance. Tu :",
    answers: [
      { text: "En parles à l’équipe pour ajuster le traitement", correct: true, feedback: "✅ Excellente initiative ! Il est possible d’ajuster ton poids sec et tes traitements." },
      { text: "Bois plus d’eau pour la faire remonter", correct: false, feedback: "⚠️ Attention ! Cela ne va pas forcément résoudre le problème, le mieux est d'en parler à l'équipe." }
    ]
  },
  {
    question: "Tu as de la fièvre avant une séance. Que fais-tu ?",
    answers: [
      { text: "Je ne dis rien j'ai pris du paracetamol, ça va passer", correct: false, feedback: "⚠️ Non ! La fièvre peut indiquer un problème à surveiller avant la séance." },
      { text: "J’en parle à l’équipe de dialyse", correct: true, feedback: "✅ C’est essentiel ! La fièvre peut signaler une infection." }
    ]
  },
  {
    question: "J'en ai marre des séances, je vais en sauter une pour une fois.",
    answers: [
      { text: "Je contacte le centre pour les prévenir", correct: true, feedback: "✅ Il faut toujours prévenir le centre, j'ai peut être besoin d'en parler." },
      { text: "Je laisse tomber et j’attends la prochaine", correct: false, feedback: "⚠️ Mauvaise idée. Sauter une séance peut être dangereux pour ta santé." }
    ]
  },
  {
    question: "Tu as fini la séance et tu es rentré à la maison, un saignement apparaît au point de ponction. Que fais-tu ?",
    answers: [
      { text: "Je prends des compresses stérile qu'on m'a donné, et je comprimes. Si le saignement ne s'arrête pas, je préviens les services d'urgences", correct: true, feedback: "✅ Très bien ! bien souvent une simple compression de quelques minutes suffit" },
      { text: "Je laisse couler, je me dis que ça va bien finir par s'arrêter", correct: false, feedback: "⚠️ Non ! Le risque de saignement important est réel. Il faut agir." }
    ]
  },
  {
    question: "Tu remarques un gonflement douloureux au niveau de la fistule. Que fais-tu ?",
    answers: [
      { text: "J’attends la prochaine séance, pour voir si ça passe", correct: false, feedback: "⚠️ Non ! Il vaut mieux réagir tôt pour éviter les complications." },
      { text: "Une infection ? Un hématome ? je contactes rapidement l'équipe", correct: true, feedback: "✅ Très bien ! Un gonflement peut signaler un problème vasculaire." }
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
  localStorage.setItem("bestScoreJeu7", score);
}
