# My Drama Diary

Estrutura reorganizada do projeto.

## Pastas

```text
my-drama-diary-organizado/
├── index.html
├── pages/
│   ├── first-frost.html
│   └── tangerines.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── base.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── cards.css
│   │   ├── drama.css
│   │   ├── footer.css
│   │   └── responsive.css
│   └── images/
└── README.md
```

## Como funciona

- `index.html`: página inicial e cards dos doramas.
- `pages/`: páginas individuais de cada drama.
- `assets/css/main.css`: importa todos os arquivos CSS.
- `base.css`: reset, estilos gerais e componentes básicos.
- `header.css`: menu.
- `hero.css`: tela inicial e slider de pôsteres.
- `cards.css`: cards da página inicial.
- `drama.css`: páginas individuais dos dramas.
- `footer.css`: rodapé.
- `responsive.css`: ajustes para celular.
- `assets/images/`: use esta pasta quando quiser salvar imagens localmente.

Abra o `index.html` no navegador ou use a extensão Live Server no VS Code.

## Lista central de doramas

A nova base fica em `data/drama.js`.

- `pages/dramas.html` monta a lista de doramas usando essa base.
- `pages/quiz.js` também usa a mesma base para escolher o resultado.
- As regras do quiz continuam seguindo exatamente as 3 perguntas atuais.
- Para adicionar um dorama novo, cadastre-o em `DRAMAS` e, se ele puder aparecer como resultado, adicione a regra correspondente em `QUIZ_RULES`.


## Resultado do quiz
O resultado agora mostra o pôster, o nome e o ano do dorama. O botão “conhecer dorama” foi removido.
