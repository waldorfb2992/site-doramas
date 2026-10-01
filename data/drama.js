/* ========================================
   BASE CENTRAL DE DORAMAS

   Esta lista alimenta:
   - a página dramas.html
   - o resultado do quiz

   Para adicionar um dorama novo no futuro,
   cadastre-o aqui e, se ele puder sair no quiz,
   acrescente uma regra em QUIZ_RULES.
======================================== */

const DRAMAS = [
    {
        id: "the-first-frost",
        title: "The First Frost",
        type: "C-Drama",
        year: 2025,
        genres: ["romance", "drama"],
        poster: "https://i.pinimg.com/736x/e4/b6/a4/e4b6a46fd7ccde86fb5a7bf1f092ba1d.jpg",
    },
    {
        id: "when-life-gives-you-tangerines",
        title: "When Life Gives You Tangerines",
        type: "K-Drama",
        year: 2025,
        genres: ["drama", "romance"],
        poster: "https://i.pinimg.com/736x/40/05/07/4005074f254b55ba4f979b68590b9b5a.jpg",
    },
    {
        id: "in-your-radiant-season",
        title: "In Your Radiant Season",
        type: "K-Drama",
        year: 2026,
        genres: ["romance", "drama"],
        poster: "https://i.pinimg.com/736x/0f/d6/f3/0fd6f3730555352930acbade0286e1d2.jpg",
    },
    {
        id: "sold-out-on-you",
        title: "Sold Out On You",
        type: "K-Drama",
        year: 2026,
        genres: ["melodrama", "romance"],
        poster: "https://i.pinimg.com/1200x/ec/a9/e1/eca9e1acdd0caa14cf7df5c1ac154975.jpg",
    },
    {
        id: "alchemy-of-souls",
        title: "Alchemy Of Souls",
        type: "K-Drama",
        year: 2022,
        genres: ["fantasia", "romance"],
        poster: "https://i.pinimg.com/1200x/34/09/29/340929b4254948b2300fc8eef4fe21dd.jpg",
    },
    {
        id: "love-next-door",
        title: "Love Next Door",
        type: "K-Drama",
        year: 2024,
        genres: ["romance", "comedia"],
        poster: "https://i.pinimg.com/736x/a7/1d/4f/a71d4f7ffd2610913e7f5a52a050ffb5.jpg",
    },
    {
        id: "spooky-in-love",
        title: "Spooky In Love",
        type: "K-Drama",
        year: 2026,
        genres: ["romance", "comedia"],
        poster: "https://i.pinimg.com/1200x/d0/a9/12/d0a91277eb6a927f06606042b65c2259.jpg",
    },
    {
        id: "hidden-love",
        title: "Hidden Love",
        type: "C-Drama",
        year: 2023,
        genres: ["romance", "drama"],
        poster: "https://i.pinimg.com/736x/ec/e6/37/ece63774bf9a44c8feddc609730c9d8b.jpg",
    },
    {
        id: "the-prisoner-of-beauty",
        title: "The Prisoner Of Beauty",
        type: "C-Drama",
        year: 2025,
        genres: ["romance", "fantasia"],
        poster: "https://i.pinimg.com/736x/bc/e3/a6/bce3a60e74c3ab8fad372c79cecb0d2f.jpg",
    },
    {
        id: "legend-of-the-female-general",
        title: "Legend Of The Female General",
        type: "C-Drama",
        year: 2025,
        genres: ["romance", "fantasia"],
        poster: "https://i.pinimg.com/736x/7b/04/29/7b042941f9ad8fec7f7f76ae1673de79.jpg",
    },
    {
        id: "reborn",
        title: "Reborn",
        type: "C-Drama",
        year: 2025,
        genres: ["drama", "romance"],
        poster: "https://i.pinimg.com/1200x/04/49/cd/0449cd9b2cace385612437974d167a0f.jpg",
    },

];


/* ========================================
   REGRAS DO QUIZ

   A ordem importa: a primeira regra que combina
   com as 3 respostas é usada.

   Os nomes abaixo correspondem exatamente às
   respostas atuais do quiz:

   genero: romance | drama | comedia | fantasia
   personagem: determinado | amigo | vilao | herdeiro
   final: feliz | inesperado | tragico | aberto
======================================== */

const QUIZ_RULES = [
    // Romance
    {
        match: { genero: "romance", final: "aberto" },
        dramaId: "love-next-door"
    },
    {
        match: { genero: "romance", personagem: "determinado" },
        dramaId: "ski-into-love"
    },
    {
        match: { genero: "romance", final: "feliz" },
        dramaId: "hidden-love"
    },

    // Drama
    {
        match: { genero: "drama", final: "tragico" },
        dramaId: "when-life-gives-you-tangerines"
    },
    {
        match: { genero: "drama", final: "aberto" },
        dramaId: "the-first-frost"
    },
    {
        match: { genero: "drama", personagem: "amigo"},
        dramaId: "reborn"
    },

    // Comédia
    {
        match: { genero: "comedia", personagem: "determinado" },
        dramaId: "spooky-in-love"
    },
    {
        match: { genero: "comedia", final: "feliz" },
        dramaId: "sold-out-on-you"
    },

    // Fantasia
    {
        match: { genero: "fantasia", personagem: "herdeiro" },
        dramaId: "alchemy-of-souls"
    },
    {
        match: { genero: "fantasia", personagem: "vilao" },
        dramaId: "the-prisoner-of-beauty"
    },
    {
        match: { genero: "fantasia", personagem: "determinado" },
        dramaId: "legend-of-the-female-general"
    }
];


function getDramaById(id) {
    return DRAMAS.find((drama) => drama.id === id);
}


function findDramaForQuiz(answers) {
    const rule = QUIZ_RULES.find((quizRule) => {
        return Object.entries(quizRule.match).every(([key, value]) => {
            return answers[key] === value;
        });
    });

    if (!rule) {
        return DRAMAS[0];
    }

    return getDramaById(rule.dramaId);
}


// Deixa os dados disponíveis para os outros scripts do site.
window.DRAMAS = DRAMAS;
window.QUIZ_RULES = QUIZ_RULES;
window.getDramaById = getDramaById;
window.findDramaForQuiz = findDramaForQuiz;
