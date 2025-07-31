const questions = [
  {
    question: "Avant de commencer un échange, tu :",
    answers: [
      { text: "Te laves soigneusement les mains", correct: true, feedback: "✅ Bravo ! Un bon lavage des mains est essentiel pour éviter toute infection." },
      { text: "Commences directement", correct: false, feedback: "⚠️ Attention ! Oublier l’hygiène des mains peut entraîner une infection grave du péritoine." }
    ]
  },
  {
    question: "Tu observes un liquide trouble après un échange. Tu :",
    answers: [
      { text: "Refais un échange sans prévenir", correct: false, feedback: "⚠️ Mauvais réflexe. Refaire un échange sans avis médical peut aggraver une péritonite." },
      { text: "Appelles ton infirmier(ère) ou ton médecin", correct: true, feedback: "✅ Bonne réaction ! Un liquide trouble peut être le signe d’une infection, il faut consulter rapidement." }
    ]
  },
  {
    question: "Tu veux aller à la piscine. Tu :",
    answers: [
      { text: "Demandes à ton équipe si c’est possible", correct: true, feedback: "✅ Parfait ! Il faut d’abord s’assurer que le cathéter est bien cicatrisé et protégé." },
      { text: "Y vas sans te poser de question", correct: false, feedback: "⚠️ Non ! Tu risques une infection du cathéter. Il faut toujours demander l’avis médical." }
    ]
  },
  {
    question: "Tu fais un échange dans une pièce en travaux. Risque ou non ?",
    answers: [
      { text: "Non, si je vais vite", correct: false, feedback: "⚠️ Faux. Même rapide, un échange dans un environnement sale reste risqué." },
      { text: "Oui, risque de contamination", correct: true, feedback: "✅ Exactement. Une pièce poussiéreuse ou sale augmente le risque d’infection." }
    ]
  },
  {
    question: "Le sac de dialysat est froid. Que fais-tu ?",
    answers: [
      { text: "Je l’utilise froid directement", correct: false, feedback: "⚠️ Mauvaise idée. Un liquide froid peut provoquer des douleurs ou un spasme abdominal." },
      { text: "Je le réchauffe doucement avec le réchauffeur fourni", correct: true, feedback: "✅ C’est le bon geste ! Cela évite douleurs et inconfort pendant l’échange." }
    ]
  },
  {
    question: "Pendant un échange, tu remarques de l’air dans le tuyau. Que fais-tu ?",
    answers: [
      { text: "J’interromps le geste et contacte l’équipe", correct: true, feedback: "✅ Très bien ! La présence d’air peut être dangereuse, il faut toujours vérifier." },
      { text: "Je continue normalement", correct: false, feedback: "⚠️ Non ! Il ne faut jamais ignorer de l’air dans le système." }
    ]
  },
  {
    question: "Tu pars en voyage. Tu :",
    answers: [
      { text: "Décides d’arrêter la dialyse pendant le séjour", correct: false, feedback: "⚠️ Mauvais choix. Arrêter la dialyse met ta santé en danger, même pour quelques jours." },
      { text: "Emportes le matériel et prépares ton stock", correct: true, feedback: "✅ Bravo ! Bien planifier son traitement permet de voyager sereinement." }
    ]
  },
  {
    question: "Tu ressens des douleurs abdominales pendant un échange. Tu :",
    answers: [
      { text: "Arrêtes l’échange et consultes", correct: true, feedback: "✅ Bonne décision ! Cela peut signaler un problème à prendre au sérieux." },
      { text: "Continues coûte que coûte", correct: false, feedback: "⚠️  Non ! Il ne faut jamais ignorer une douleur inhabituelle." }
    ]
  },
  {
    question: "Tu veux prendre un bain. Que dois-tu faire ?",
    answers: [
      { text: "Attendre l’avis de l’équipe et bien protéger le cathéter", correct: true, feedback: "✅ Exact ! Il faut que le site de sortie soit bien cicatrisé et protégé." },
      { text: "Retirer le pansement et y aller", correct: false, feedback: "⚠️ Grave erreur. Tu exposes ton cathéter à une infection." }
    ]
  },
  {
    question: "Tu as de la fièvre. Tu :",
    answers: [
      { text: "Prends du paracétamol et attends", correct: false, feedback: "⚠️ Mauvais réflexe. Il faut d’abord écarter une péritonite avant de traiter la fièvre." },
      { text: "Vérifie le liquide drainé et consulte si besoin", correct: true, feedback: "✅ Très bien. Un liquide trouble ou la fièvre peuvent indiquer une infection." }
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
  localStorage.setItem("bestScoreJeu8", score);
}
