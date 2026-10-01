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
        description:
            "Uma história de reencontros, sentimentos antigos e um amor que permaneceu vivo mesmo depois de tantos caminhos diferentes.",
        page: "first-frost.html"
    },
    {
        id: "when-life-gives-you-tangerines",
        title: "When Life Gives You Tangerines",
        type: "K-Drama",
        year: 2025,
        genres: ["drama", "romance"],
        poster: "https://i.pinimg.com/736x/40/05/07/4005074f254b55ba4f979b68590b9b5a.jpg",
        description:
            "Uma história delicada sobre amor, família, sonhos e uma vida inteira compartilhada através dos momentos bons e difíceis.",
        page: "tangerines.html"
    },
    {
        id: "in-your-radiant-season",
        title: "In Your Radiant Season",
        type: "K-Drama",
        year: 2026,
        genres: ["romance", "drama"],
        poster: "https://i.pinimg.com/736x/0f/d6/f3/0fd6f3730555352930acbade0286e1d2.jpg",
        description:
            "Um romance delicado sobre encontros inesperados, cura, sonhos compartilhados e duas pessoas que encontram conforto uma na outra.",
        page: "radiant.html"
    },
    {
        id: "sold-out-on-you",
        title: "Sold Out On You",
        type: "K-Drama",
        year: 2026,
        genres: ["comedia", "romance"],
        poster: "https://i.pinimg.com/1200x/ec/a9/e1/eca9e1acdd0caa14cf7df5c1ac154975.jpg",
        description:
            "Uma história divertida sobre encontros inesperados, escolhas que mudam o rumo de uma vida e sentimentos que surgem quando menos se espera.",
        page: "soldout.html"
    },
    {
        id: "alchemy-of-souls",
        title: "Alchemy Of Souls",
        type: "K-Drama",
        year: 2022,
        genres: ["fantasia", "romance"],
        poster: "https://i.pinimg.com/1200x/34/09/29/340929b4254948b2300fc8eef4fe21dd.jpg",
        description:
            "Uma aventura fantástica sobre destinos entrelaçados por magia, almas que desafiam o impossível, segredos e um amor capaz de atravessar qualquer destino.",
        page: "alchemy.html"
    },
    {
        id: "love-next-door",
        title: "Love Next Door",
        type: "K-Drama",
        year: 2024,
        genres: ["romance", "comedia"],
        poster: "https://i.pinimg.com/736x/a7/1d/4f/a71d4f7ffd2610913e7f5a52a050ffb5.jpg",
        description:
            "Uma história sobre amizades que atravessam os anos, sonhos que tomam caminhos diferentes e sentimentos que sempre estiveram mais perto do que pareciam.",
        page: "nextdoor.html"
    }
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
        match: { genero: "romance", final: "feliz" },
        dramaId: "love-next-door"
    },
    {
        match: { genero: "romance", personagem: "amigo" },
        dramaId: "in-your-radiant-season"
    },
    {
        match: { genero: "romance" },
        dramaId: "the-first-frost"
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
        match: { genero: "drama" },
        dramaId: "when-life-gives-you-tangerines"
    },

    // Comédia
    {
        match: { genero: "comedia", personagem: "amigo" },
        dramaId: "love-next-door"
    },
    {
        match: { genero: "comedia" },
        dramaId: "sold-out-on-you"
    },

    // Fantasia
    {
        match: { genero: "fantasia" },
        dramaId: "alchemy-of-souls"
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
