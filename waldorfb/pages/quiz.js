/* ========================================
   QUIZ DE RECOMENDAÇÃO
======================================== */

const questions = document.querySelectorAll(".question");
const options = document.querySelectorAll(".option");
const result = document.querySelector(".result");
const dramaTitle = document.querySelector("#drama-title");
const dramaPoster = document.querySelector("#drama-poster");
const dramaYear = document.querySelector("#drama-year");
const restartButton = document.querySelector("#restart");

let currentQuestion = 0;
let answers = [];


/* ========================================
   CLICAR NAS ALTERNATIVAS
======================================== */

options.forEach((option) => {
    option.addEventListener("click", () => {
        const answer = option.dataset.value;

        answers.push(answer);

        // Esconde a pergunta atual
        questions[currentQuestion].classList.remove("active");

        // Vai para a próxima pergunta
        currentQuestion++;

        // Se ainda existem perguntas
        if (currentQuestion < questions.length) {
            questions[currentQuestion].classList.add("active");
        } else {
            // Se terminou o quiz
            showResult();
        }
    });
});


/* ========================================
   ESCOLHER O DORAMA

   Agora o quiz não guarda mais os doramas aqui.
   Ele pergunta ao data/drama.js qual dorama combina
   com as respostas escolhidas.
======================================== */

function showResult() {
    const quizAnswers = {
        genero: answers[0],
        personagem: answers[1],
        final: answers[2]
    };

    const selectedDrama = window.findDramaForQuiz(quizAnswers);

    dramaTitle.textContent = selectedDrama.title;
    dramaYear.textContent = selectedDrama.year;
    dramaPoster.src = selectedDrama.poster;
    dramaPoster.alt = `Pôster de ${selectedDrama.title}`;

    result.classList.add("show");
}


/* ========================================
   FAZER O QUIZ NOVAMENTE
======================================== */

restartButton.addEventListener("click", () => {
    // Volta para a primeira pergunta
    currentQuestion = 0;

    // Apaga as respostas anteriores
    answers = [];

    // Esconde o resultado
    result.classList.remove("show");

    // Garante que as outras perguntas fiquem escondidas
    questions.forEach((question, index) => {
        question.classList.toggle("active", index === 0);
    });
});
