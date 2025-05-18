# Guidelines Techniques du Projet

## Structure de Navigation

### Slider Principal (HomeSlider.vue)

#### Comportement Responsive

- **Mobile** (<768px):

  - Défilement vertical naturel
  - Slides empilées verticalement
  - Hauteur minimale: 100vh par slide
  - Footer masqué sur le dernier slide

- **Desktop** (≥768px):
  - Défilement horizontal contrôlé par wheel/swipe
  - Slides alignées horizontalement (400vw total)
  - Footer visible sur tous les slides
  - Transitions fluides avec transform

#### Classes CSS Critiques

```css
/* Mobile */
.slider-track {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
}

/* Desktop */
@media (min-width: 769px) {
  .slider-track {
    flex-direction: row;
    width: 400vw;
    height: 100%;
    transition: transform 0.3s ease-out;
    touch-action: none;
  }
}
```

#### Éléments Structurels Importants

1. Container principal : `.slider-wrapper`
2. Track des slides : `.slider-track`
3. Slides individuelles : `.slide`
4. Footer conditionnel : `.footer-container.hidden.md:block`

### ⚠️ Points de Non-Régression

- Ne pas modifier le comportement responsive du slider
- Maintenir la séparation mobile/desktop pour le défilement
- Préserver les hauteurs des slides (100vh en mobile)
- Conserver la logique de masquage du footer en mobile
- Maintenir le seuil de défilement (50px) pour éviter les déclenchements accidentels

## Styles Globaux

### Breakpoints Principaux

- Mobile: < 768px
- Desktop: ≥ 768px

### Animations

- Transition des slides: 300ms ease-out
- Animations d'entrée:
  - fadeIn: 800ms
  - slideUp: 800ms

### Couleurs (tailwind.config.js)

```js
colors: {
  primary: "#2D3748",
  secondary: "#4A5568",
  accent: "#667EEA"
}
```

## Conventions de Développement

### Composants Vue

- Utiliser `<script setup>`
- Gérer les événements touch et wheel séparément
- Maintenir la séparation des styles mobile/desktop

### Git

- Commiter séparément les changements de structure et de style
- Documenter les modifications touchant à la navigation
- Tagger les versions majeures de la structure

## Tests Critiques

Avant chaque déploiement, vérifier :

1. Défilement vertical en mobile
2. Défilement horizontal en desktop (wheel et touch)
3. Visibilité correcte du footer selon le device
4. Transitions fluides des slides
5. Seuil de déclenchement du défilement
