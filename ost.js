const osts = [
    {
        title: '스테이 위드 미',
        drama: 'Goblin · K-Drama',
        description: 'Uma faixa intensa e delicada para dias de saudade, encontros e sentimentos que permanecem.',
        videoId: 'pcKR0LPwoYs',
        posterUrl: 'https://i.pinimg.com/1200x/dc/7a/d5/dc7ad5df877d6a71678328390b352f18.jpg'
    },
    {
        title: '에브리타임',
        drama: 'Descendants of the Sun · K-Drama',
        description: 'Uma canção leve para acompanhar aqueles momentos que parecem cena de romance.',
        videoId: 'fTc5tuEn6_U',
        posterUrl: 'https://i.pinimg.com/1200x/ad/20/6b/ad206b4eae3e3a0c536a47cfb26ed770.jpg'
    },
    {
        title: '멜로망스',
        drama: 'A Business Proposal · K-Drama',
        description: 'Uma trilha envolvente para uma noite de magia, mistério e emoções à flor da pele.',
        videoId: 'WDcPhknPWdU',
        posterUrl: 'https://i.pinimg.com/1200x/70/ac/94/70ac948f0805d374a3b7cf69cee60f5c.jpg'
    },
    {
        title: '시작',
        drama: 'Itaewon Class · K-Drama',
        description: 'Uma música cheia de força para acompanhar recomeços, sonhos e a coragem de continuar.',
        videoId: 'O0StKlRHVeE',
        posterUrl: 'https://i.pinimg.com/736x/d6/3a/85/d63a85972c46c388d6ded49aaa748d78.jpg'
    },
    {
        title: '雨滴中有你（电视剧《难哄》回忆曲',
        drama: 'The First Frost · C-Drama',
        description: 'Uma faixa suave e íntima para desacelerar e deixar as lembranças passarem devagar.',
        videoId: 'LxLAvAlvY9g',
        posterUrl: 'https://i.pinimg.com/736x/af/26/43/af26438c67fdd711d51e215fd1b963b8.jpg'
    },
    {
        title: '다시 난, 여기',
        drama: 'Crash Landing on You · K-Drama',
        description: 'Uma canção delicada sobre voltar a encontrar alguém no momento inesperado.',
        videoId: 'wMgGxo9yppA',
        posterUrl: 'https://i.pinimg.com/736x/35/8b/d5/358bd5d183374539890025ddc9dfbc7f.jpg'
    },
    {
        title: '너에게 고백하다',
        drama: 'King the Land · K-Drama',
        description: 'Uma faixa de recomeço, força e vontade de conquistar o próprio caminho.',
        videoId: 'Zj1P2NN3gCg',
        posterUrl: 'https://i.pinimg.com/1200x/29/bf/92/29bf92eab20dd36a7b4e209b4e1b4803.jpg'
    },
    {
        title: '사랑했었다',
        drama: 'Tomorrow · K-Drama',
        description: 'Uma melodia melancólica para acompanhar memórias que ainda permanecem.',
        videoId: 'LGMVqm921F8',
        posterUrl: 'https://i.pinimg.com/736x/aa/a9/ce/aaa9ce69cd6be84c1b2b8af4aa36387e.jpg'
    },
    {
        title: '우리 영화',
        drama: 'Our Movie · K-Drama',
        description: 'Uma faixa doce para acompanhar sentimentos guardados e primeiros amores.',
        videoId: 'GvCvorcbcB0',
        posterUrl: 'https://i.pinimg.com/736x/69/96/7e/69967e0ca8c9b497294169d4769dd03b.jpg'
    },
    {
        title: '我有喜欢的人了',
        drama: 'Hidden Love · C-Drama',
        description: 'Uma canção leve para os dias em que o coração começa a gostar de alguém.',
        videoId: 'Nckju7t8qLI',
        posterUrl: 'https://i.pinimg.com/736x/ec/21/dd/ec21dd4a0473a3d8956ab91699a29d00.jpg'
    },
    {
        title: '트렁크',
        drama: 'The Trunk · K-Drama',
        description: 'Uma música acolhedora para deixar o dia mais calmo e luminoso.',
        videoId: '7tgZtU5-VZA',
        posterUrl: 'https://i.pinimg.com/736x/90/41/b9/9041b92e2a1f9e3f8e852ed42efa07c5.jpg'
    },
    {
        title: '梦境之外',
        drama: 'Love Between Lines · C-Drama',
        description: 'Uma faixa romântica para lembrar das pessoas que fazem parte da nossa história.',
        videoId: 'DSicj2sdW38',
        posterUrl: 'https://i.pinimg.com/1200x/0e/66/ad/0e66ad6b43376f267dfbb87dda7ca1a8.jpg'
    },
    {
        title: '苍兰诀影视原声带',
        drama: 'Love Between Fairy and Devil · C-Drama',
        description: 'Uma seleção instrumental e vocal para entrar no clima de um romance fantástico.',
        videoId: 'ujKRRHKBpA0',
        posterUrl: 'https://i.pinimg.com/1200x/40/cc/cc/40cccc6f88b05d741d7984abffc78042.jpg'
    },
    {
        title: '长歌行影视原声带',
        drama: 'The Long Ballad · C-Drama',
        description: 'Uma trilha épica para acompanhar histórias de coragem, destino e lealdade.',
        videoId: 'cwdmC6mqO1w',
        posterUrl: 'https://i.pinimg.com/736x/d6/3a/85/d63a85972c46c388d6ded49aaa748d78.jpg'
    },
    {
        title: '엄마친구아들',
        drama: 'Love Next Door · K-Drama',
        description: 'Uma seleção especial com as melodias mais doces de Love Next Door.',
        videoId: 'kcd1fFy6BOI',
        posterUrl: 'https://i.pinimg.com/1200x/df/77/d2/df77d2b270869932ea147ac016ebb5aa.jpg'
    },
    {
        title: '환혼 OST 모음',
        drama: 'Alchemy of Souls · K-Drama',
        description: 'Uma seleção para acompanhar magia, aventura e amores que desafiam o destino.',
        videoId: 'w1ur1RXJG0w',
        posterUrl: 'https://i.pinimg.com/736x/aa/21/f5/aa21f5193dffbb3456429880df6d1719.jpg'
    },
    {
        title: '호텔 델루나 OST 모음',
        drama: 'Hotel Del Luna · K-Drama',
        description: 'Uma seleção nostálgica para noites silenciosas e histórias que nunca desaparecem.',
        videoId: 'mXKuNqcezmg',
        posterUrl: 'https://i.pinimg.com/736x/bf/34/4a/bf344a5e28599a630add6b523dd99b1a.jpg'
    },
    {
        title: '봄',
        drama: 'When Life Gives You Tangerines · K-Drama',
        description: 'Uma seleção energética para dias de coragem, ambição e novos começos.',
        videoId: 'fYBzdpSx-Ac',
        posterUrl: 'https://i.pinimg.com/736x/f6/a0/3d/f6a03d8fecc55668a007e18785845744.jpg'
    },
    {
        title: '나의 별이 돼주오',
        drama: 'My Dearest · K-Drama',
        description: 'Uma seleção para revisitar o romance, a fantasia e a saudade de My Dearest.',
        videoId: 'QJFLF1qRbR4',
        posterUrl: 'https://i.pinimg.com/1200x/61/0a/00/610a0097ba3516d33202af9f154b5803.jpg'
    },
    {
        title: '崔子格',
        drama: 'Reborn · C-Drama',
        description: 'Uma seleção encantadora para acompanhar um romance fantástico e cheio de destino.',
        videoId: 'fbdi-s8vdZ4',
        posterUrl: 'https://i.pinimg.com/736x/f5/b7/43/f5b7439d96232bd44ffa6939acda01e7.jpg'
    },
    {
        title: '路过晴朗',
        drama: 'The Early Spring · C-Drama',
        description: 'Uma trilha suave para um amor mágico, intenso e marcado pelo destino.',
        videoId: 'Ie23qzhObso',
        posterUrl: 'https://i.pinimg.com/736x/fe/2d/a1/fe2da1aee0437e1aaceb4c868e7dda06.jpg'
    }
];

const dramaPosters = {
    'Goblin': '../imagens/goblin.jpg',
    'Descendants of the Sun': 'https://i.pinimg.com/1200x/ad/20/6b/ad206b4eae3e3a0c536a47cfb26ed770.jpg',
    'Alchemy of Souls': '../imagens/alchemy-of-souls.jpg',
    'Itaewon Class': '../imagens/itaewon-class.jpg',
    'Hotel Del Luna': 'https://i.pinimg.com/736x/02/7b/90/027b9058be042b7a1a6a1be7822ea9c1.jpg',
    'Crash Landing on You': 'https://i.pinimg.com/736x/cc/0a/ea/cc0aeace7cedd953e8e9dcb51e1258c9.jpg',
    'Hidden Love': '../imagens/hidden-love.jpg',
    'Love Between Fairy and Devil': '../imagens/love-between-fairy-and-devil.jpg',
    'The Long Ballad': '../imagens/the-long-ballad.jpg',
    'The First Frost': 'https://i.pinimg.com/736x/af/26/43/af26438c67fdd711d51e215fd1b963b8.jpg',
    'My Dearest': 'https://i.pinimg.com/1200x/61/0a/00/610a0097ba3516d33202af9f154b5803.jpg',
    'Reborn': 'https://i.pinimg.com/736x/f5/b7/43/f5b7439d96232bd44ffa6939acda01e7.jpg',
    'When Life Gives You Tangerines': 'https://i.pinimg.com/736x/f6/a0/3d/f6a03d8fecc55668a007e18785845744.jpg',
    'Our Movie': 'https://i.pinimg.com/736x/69/96/7e/69967e0ca8c9b497294169d4769dd03b.jpg',
    'Love Next Door': 'https://i.pinimg.com/1200x/df/77/d2/df77d2b270869932ea147ac016ebb5aa.jpg',
    'The Trunk': 'https://i.pinimg.com/736x/90/41/b9/9041b92e2a1f9e3f8e852ed42efa07c5.jpg',
    'Love Between Lines': 'https://i.pinimg.com/1200x/0e/66/ad/0e66ad6b43376f267dfbb87dda7ca1a8.jpg',
    'Tempest': 'https://i.pinimg.com/736x/67/a6/61/67a661376c59442e2b18e16f81474c26.jpg',
    'A Business Proposal': 'https://i.pinimg.com/1200x/70/ac/94/70ac948f0805d374a3b7cf69cee60f5c.jpg',
    'King the Land': 'https://i.pinimg.com/1200x/29/bf/92/29bf92eab20dd36a7b4e209b4e1b4803.jpg',
    'Tomorrow': 'https://i.pinimg.com/736x/aa/a9/ce/aaa9ce69cd6be84c1b2b8af4aa36387e.jpg',
    'The Early Spring': 'https://i.pinimg.com/736x/fe/2d/a1/fe2da1aee0437e1aaceb4c868e7dda06.jpg',
};

const cover = document.querySelector('.ost-cover');
const title = document.querySelector('#ost-title');
const drama = document.querySelector('.ost-drama');
const description = document.querySelector('.ost-description');
const playButton = document.querySelector('.ost-play');
const nextButton = document.querySelector('.ost-next');
const videoContainer = document.querySelector('.ost-video');
const recentOstsKey = 'recentOsts';
let player;
let currentOst;
let isReady = false;
let playRequested = false;
let hasError = false;
let recentOsts = JSON.parse(localStorage.getItem(recentOstsKey) || '[]');

function chooseOst() {
    let availableOsts = osts.filter((ost) => ost !== currentOst && !recentOsts.includes(ost.videoId));

    if (!availableOsts.length) {
        recentOsts = [];
        availableOsts = osts.filter((ost) => ost !== currentOst);
    }

    currentOst = availableOsts[Math.floor(Math.random() * availableOsts.length)];
    recentOsts = [...recentOsts.slice(-7), currentOst.videoId];
    localStorage.setItem(recentOstsKey, JSON.stringify(recentOsts));

    const dramaName = currentOst.drama.split(' · ')[0];

    cover.src = dramaPosters[dramaName];
    cover.alt = `Poster de ${dramaName}`;
    title.textContent = currentOst.title;
    drama.textContent = currentOst.drama;
    description.textContent = currentOst.description;
    playButton.querySelector('span:last-child').textContent = 'dar play';
    playButton.querySelector('span:first-child').textContent = '▶';
    playButton.disabled = false;
    playButton.setAttribute('aria-label', `Dar play em ${currentOst.title}`);
    videoContainer.classList.remove('is-visible');
    playRequested = false;
    hasError = false;
    isReady = Boolean(player)

    if (player) {
        player.loadVideoById(currentOst.videoId);
        player.pauseVideo();
    }
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player(videoContainer, {
        height: '1',
        width: '1',
        videoId: currentOst.videoId,
        playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0
        },
        events: {
            onReady: () => {
                isReady = true;

                if (playRequested) {
                    player.playVideo();
                }
            },
            onError: (event) => {
                console.log('Erro do YouTube:', event.data);

                isReady = false;
                playRequested = false;
                hasError = true;
                playButton.disabled = false;
                playButton.querySelector('span:last-child').textContent = 'indisponível';
            },
            onStateChange: (event) => {
                const playing = event.data === YT.PlayerState.PLAYING;
                videoContainer.classList.toggle('is-visible', playing);
                playButton.querySelector('span:first-child').textContent = playing ? '❚❚' : '▶';
                playButton.querySelector('span:last-child').textContent = playing ? 'pausar' : 'dar play';
            }
        }
    });
}

chooseOst();

playButton.addEventListener('click', () => {
    if (hasError) {
        chooseOst();
        return;
    }

    if (!isReady) {
        playRequested = true;
        playButton.querySelector('span:last-child').textContent = 'carregando...';
        return;
    }

    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
});

nextButton.addEventListener('click', chooseOst);
