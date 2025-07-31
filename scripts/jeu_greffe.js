const questions = [
  {
    question: "Après la greffe, pourquoi dois-tu prendre tes médicaments tous les jours ?",
    answers: [
      { text: "Pour éviter le rejet du greffon", correct: true, feedback: "✅ Exactement ! Les traitements anti-rejets empêchent ton corps de s’attaquer au rein greffé." },
      { text: "Pour renforcer tes muscles", correct: false, feedback: "⚠️ Non ! Les médicaments post-greffe n’ont rien à voir avec les muscles." }
    ]
  },
  {
    question: "Après la greffe, tu ressens une forte fièvre. Tu :",
    answers: [
      { text: "Prends un doliprane et attends", correct: false, feedback: "⚠️ Mauvais réflexe. Il faut toujours chercher la cause de la fièvre après une greffe." },
      { text: "Contactes immédiatement l’équipe médicale", correct: true, feedback: "✅ Bonne réaction ! La fièvre peut être un signe de rejet ou d’infection." }
    ]
  },
  {
    question: "Tu ressens des douleurs dans la zone du rein greffé. Que fais-tu ?",
    answers: [
      { text: "Je consulte rapidement mon médecin ou le centre de greffe", correct: true, feedback: "✅ C’est le bon réflexe ! Une douleur inhabituelle peut signaler un rejet ou un problème localisé." },
      { text: "J’attends que ça passe tout seul", correct: false, feedback: "⚠️ Non ! Mieux vaut ne jamais attendre avec une greffe." }
    ]
  },
  {
    question: "Tu oublies un médicament anti-rejet. Tu :",
    answers: [
      { text: "Fais comme si de rien n’était", correct: false, feedback: "⚠️ Dangereux ! Un oubli peut suffire à provoquer un rejet." },
      { text: "En informes ton médecin", correct: true, feedback: "✅ Bravo ! Mieux vaut prévenir pour qu’un ajustement soit fait si besoin." }
    ]
  },
  {
    question: "Tu souhaites reprendre le sport. Tu :",
    answers: [
      { text: "Reprends le sport normalement", correct: false, feedback: "⚠️ Non. Certains sports sont déconseillés juste après la greffe." },
      { text: "Demandes l’avis de ton néphrologue", correct: true, feedback: "✅ Très bien ! Il pourra t’orienter vers des activités adaptées à ta condition." }
    ]
  },
  {
    question: "Tu pars à l’étranger. Tu :",
    answers: [
      { text: "Prépares tes ordonnances et tes traitements", correct: true, feedback: "✅ Parfait ! Toujours voyager avec assez de médicaments et une ordonnance traduite si possible." },
      { text: "Achètes tes médicaments sur place", correct: false, feedback: "⚠️ Risqué. Les traitements peuvent être différents ou indisponibles." }
    ]
  },
  {
    question: "Tu oublies ton RDV de suivi. Tu :",
    answers: [
      { text: "L’annules complètement", correct: false, feedback: "⚠️ Non. Le suivi est indispensable après une greffe." },
      { text: "Le reprogrammes", correct: true, feedback: "✅ Exact ! Le suivi régulier permet de surveiller le bon fonctionnement du greffon." }
    ]
  },
  {
    question: "Tu remarques un œdème soudain. Tu :",
    answers: [
      { text: "En parles à ton médecin rapidement", correct: true, feedback: "✅ Oui, cela peut être un signe de problème rénal ou cardiaque." },
      { text: "Attends que ça passe", correct: false, feedback: "⚠️ Attention, l’œdème ne doit jamais être négligé après une greffe." }
    ]
  },
  {
    question: "Tu as des effets secondaires des médicaments. Tu :",
    answers: [
      { text: "Le signales pour ajuster le traitement", correct: true, feedback: "✅ Très bien. Le traitement peut souvent être adapté sans compromettre la greffe." },
      { text: "Arrêtes seul le médicament", correct: false, feedback: "⚠️ Grave erreur. Arrêter un médicament anti-rejet sans avis médical est dangereux." }
    ]
  },
  {
    question: "Un proche te propose un complément alimentaire naturel pour “renforcer ton immunité”. Tu :",
    answers: [
      { text: "Le prends sans réfléchir, c’est naturel", correct: false, feedback: "⚠️ Non ! Naturel ne veut pas dire sans danger, surtout après une greffe." },
      { text: "Demande l’avis de ton médecin avant de le prendre", correct: true, feedback: "✅ Bonne vigilance ! Certains produits peuvent interagir avec tes traitements anti-rejet." }
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
  localStorage.setItem("bestScoreJeu9", score);
}
