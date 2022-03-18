# Paint

## Contexte

Vous devrez réaliser un outil de design de formes, proche du logiciel Paint, avec les technologies HTML, Css et JavaScript.

Deux fonctionnalités principales sont à la vase de ce projet:
- Les formes dessinées pourront être modifiables. Il sera possinle de cliquer sur une forme pour la redimensionner par exemple.
- Le dessin réalisé pourra être stocké sur un serveur pour être soit repris plus tard, soit exporté au format image ou PDF.

## Contraintes techniques

Vous devrez utiliser les technologies HTML, CSS et JavaScript pour le frontend, ainsi que PHP pour le backend. Vous pouvez ou non utiliser une base de données, mais si tel est le cas, cela devra être MySQL

Les bibliothèques externes, frontend ou backend sont autorisées aux conditions suivantes:
- Elles sont installées et installables avec node (yarn/npm) ou composer
- Elles ne permettent pas de réaliser la majorité ou l'ensemnlre du projet sans prouver vos propres connaissances.

## Fonctionnalités

Votre site doit proposer une barre d'outils avec les outils suivants:
- Dessiner un rectangle
- Dessiner un cercle ou une ellipse
- Dessiner un triangle (pointe vers le haut)
- Dessiner une zone de texte
- Une couleur "primaire" utilisée pour le contour des formes ou pour la couleur du texte
- Une couleur "secondaire" utilisée pour le remplissage des formes ou le surlignement du texte
- Un menu déroulant permettant de sélectionner une police parmi trois (minimum)

Votre site doit proposer une grande zone blanche pour y dessiner des formes
Un clic sur une forme, une zone doit apparaître permettant de :
- Déplacer la forme
- Modifier les dimensions de la forme
- Changer les couleurs de la forme

Votre site doit proposer quatre boutons:
- Sauvegarder ce dessin (pour reprendre plus tard)
- Charger un dessin (parmi les sauvegardes)
- Exporter le dessin au format image
- Exporter le dessin au format PDF

## Interface
Votre site doit se présenter sous la forme de deux zones principales:
- Une grande zone blance pour permettre le dessin
- Une zone avec la barre d'outils
- Une zone avec la prossinilité de sauvegarder le dessin sur le serveur pour le reprendre plus tard, ou de l'exporter au format PDF ou PNG
