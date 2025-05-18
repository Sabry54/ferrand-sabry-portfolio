# Portfolio Ferrand Sabry

Site web minimaliste pour présenter mon travail de webdesigner.

## Technologies utilisées

- Vue.js 3
- Vite
- Tailwind CSS
- Vercel (pour le déploiement)

## Prérequis

- Node.js (version 18 ou supérieure)
- npm (inclus avec Node.js)

## Installation

1. Clonez le dépôt :

```bash
git clone <votre-repo-url>
cd ferrand-sabry-portfolio
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse : http://localhost:5173

## Construction pour la production

Pour construire le site pour la production :

```bash
npm run build
```

## Déploiement sur Vercel

### Option 1 : Déploiement automatique (recommandé)

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre dépôt GitHub à Vercel
3. Sélectionnez le dépôt et cliquez sur "Import"
4. Les paramètres par défaut fonctionneront automatiquement
5. Cliquez sur "Deploy"

### Option 2 : Déploiement manuel

1. Installez Vercel CLI :

```bash
npm install -g vercel
```

2. Déployez :

```bash
vercel
```

## Structure du projet

```
├── src/
│   ├── components/
│   │   ├── Header.vue
│   │   ├── Hero.vue
│   │   └── Footer.vue
│   ├── App.vue
│   └── style.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Personnalisation

- Les couleurs principales peuvent être modifiées dans `tailwind.config.js`
- Le contenu peut être modifié directement dans les composants Vue
- Les styles globaux sont dans `src/style.css`

## Licence

© 2025 Ferrand Sabry. Tous droits réservés.
