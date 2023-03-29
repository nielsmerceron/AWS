# Rapport 1 - Pour le 30 Mars

# Avancement du projet
## Roles et responsabilités
**Chercheur:** Pierre Vermeulen  
**Chef de projet:** Alexis Guigal  
**Programmeur 1:** Niels Merceron  
**Programmeur 2:** Manel Azgag

## Répartition des tâches
- **Chercheur:**  
  - Recherche et analyse des technologies
  - Rédaction du rapport
  - Development du projet: Back-end
- **Chef de projet:**  
  - Gestion du projet
- **Programmeur 1:**  
  - Développement du projet: Front-end
  - Rédaction du rapport
- **Programmeur 2:**

  - Développement du projet: Front-end  
  
## Developpement du projet
### Présentation
Notre projet est un site web qui permet de gérer des todo-lists. Il permet de créer des listes de tâches, de les modifier, de les supprimer, de les partager avec d'autres utilisateurs, de les trier, de les filtrer, de les exporter, etc.  

### Avancement cette semaine
- Création du dépôt Github
- Discussion sur les technologies à utiliser
- Familirisation avec les technologies: Svelte, NPM, NodeJS.
- Reflection sur l'implémentation de la base de données

# Partie Recherche et analyse
# Nécessités dans le cadre de notre projet
- <u>Simplicité</u>: Il nous faut une learning curve assez douce, la majorité des gens dans le groupe n'ayant jamais manipulés de technologies ou langages utilisés dans le web.
- <u>Documentation</u>: C'est un point qui découle du précédent mais une bonne documentation est nécéssaire pour arriver à apprendre à utiliser les technologies en partant de rien.
- <u>State of the art</u> (à la pointe de la technologie)

# Front-end
## Framwork JS
- [Vue](https://vuejs.org/)  
  Ce framwork a une courbe d'apprentissage considérée comme douce, il est également flexible. C'est une alternative plus légère et plus facile à apprendre que les autres framworks plus populaires tels que React et Angular.
- [React](https://react.dev/)  
  C'est la bibliothèque pour créer des front-end la plus utilisé au monde, elle est extrêmement complète. Elle utilise une approche basée sur les composants ou chaque composant représente une partie de l'interface utilisateur et peut être réutilisé à différents endroits.
- [Angular](https://angular.io/)  
  C'est un framwork extrêmement complet basé sur TypeScript qui est également basé sur une architecture de composants. Il est conçu pour les frandes applications et il offre donc des fonctionnalités qui le permet de scale correctement.
- [Svelte](https://svelte.dev/)  
  C'est un framwork simple et proche syntaxiquement du javascript standard. Il est conçu pour compiler le code au moment de la compilation plutôt qu'au moment de l'éxécution, il offre donc de très bonnes performances. Le framework est également bien documenté avec une documentation claire et précise.
## Framwork CSS
- [Bootstrap](https://getbootstrap.com/)  
  C'est le framwork CSS le plus utilisé au monde, il est extrêmement complet et il couvrirait tous nos besoins sans aucun souci.
- [Tailwind](https://tailwindcss.com/)  
  Il a une approche un peu différence d'un framwork comme Bootstrap, plutôt que de fournir des composants prêts à l'emploi, il fournit des classes utilitaires qui peuvent être utilisées sur chaque élément et mixés pour créer des design personalisés.  
  Il a également l'avantage d'être plus léger, car il ne contient que ces classes utilitaires nécessaires à la conception.
- [DaisyUI](https://daisyui.com/)  
  C'est un framwork qui est bien plus simple que les deux autres. Il est également très facile à intégrer avec n'importe quel type de stack.

# Back-end
- [NodeJS](https://nodejs.org/en)  
  C'est un environnement d'éxécution pour JavaScript construit sur le moteur Javascript de Chrome. Il est extrêmement populaire et il est utilisé par de très nombreuses entreprises. Il est également très simple à prendre en main. 
- [Flask](https://flask.palletsprojects.com)  
  C'est un framwork web léger et rapide qui est basé sur Python. Il est assez simple à prendre en main et il est très utilisé. 
- [Django](https://www.djangoproject.com/)  
  C'est également un framwork utilisant Python. Il a été conçu pour passer de l'étape de conception à l'achèvement le plus rapidement possible. Il est également très utilisé
    
Spring et Laravel ne sont pas pris en compte, car le groupe voulait éviter d'utiliser du Java ou du PHP, on s'est dirigé vers des technologies plus récentes.

# Base de données
- SQL or NoSQL ? :  
Notre groupe a déjà manipulé les bases de données relationnelles utilisant le langage SQL.
## SQL
Tous les SGBD traités ici sont gratuits et open-source.  
- **MySQL/MariaDB**:
  MariaDB est un fork de MySQL à la suite du rachat de MYSQL par Sun(maintenant Oracle). Bien que MariaDB soit une version distincte de MySQL, elle est largement compatible avec les applications MySQL existantes.
  De plus, la documentation de MySQL/MariaDB est très complète, ce qui en fait un choix populaire pour de nombreux développeurs.
- **PostgreSQL**:
  C'est un SGBD qui est considéré comme l'un des plus fiable et des plus avancés. Il est également connu pour offrir une excellente compatibilité avec les normes SQL, ce qui le rend très populaire parmi les développeurs. Il supporte également le langage PL:pgSQL, un langage très proche 
- **SQLite**:
  C'est est un moteur de base de données qui ne suit pas le modèle client/serveur traditionnel. Il s'intègre directement dans le code de l'application, ce qui permet à la gestion des données d'être embarquée avec la base de données.

  
## NoSQL
- **MongoDB**:
  MongoDB est un système de gestion de bases de données NoSQL qui utilise un format de stockage de données basé sur JSON. Contrairement aux bases de données relationnelles, MongoDB n'utilise pas de tables et de schémas fixes, mais stocke les données dans des collections flexibles qui peuvent être modifiées sans avoir à définir un schéma préalablement. Cela permet une grande flexibilité pour gérer des données complexes et des schémas évolutifs. De plus, MongoDB offre des performances élevées, une évolutivité horizontale facile et une grande disponibilité pour les applications modernes basées sur le cloud.  
  Il est également très utilisé et la documentation est de qualité.
- **Firebase**: 
  C'est un service de base de données NoSQL qui est très populaire. Il est extrêmement simple à prendre en main et il est très complet. Il est également très utilisé et la documentation est de qualité. Le souci est qu'il est propriétaire et il peut coûter cher à l'usage. 
  

# Comparaison et analyse des technologies
## Choix des outils pour le front-end
Selon moi, React pourrait convenir car il est très complet et il est capable de couvrir tous nos besoin très facilement. En plus c'est le framwork le plus utilisé au monde, la documentation, les libraires, et le support en ligne est bien meilleur avec React. Le souci est qu'il est trop complet dans notre cas, sa prise en main risque d'être vraiment complexe.  
Angular est rejeté dans notre choix pour les mêmes raisons mais également à cause de l'utilisation de TypeScript, notre but étant d'avoir des technologies plus simple à prendre en main, j'ai préféré sélectionner en priorité une technologie avec un langage qu'on connait tous.   
Vue pourrait être un bon candidat, il est très utilisé et très complet mais il reste assez simple, il a d'ailleurs été créé pour être une alternative à Angular plus simple.  
Svelte est le choix que nous avons fait car il est très simple à prendre en main, il est très léger et il est très performant. Il est également très utilisé et la documentation est de qualité.

## Choix des outils pour le back-end
Selon moi, NodeJS et Express.js sont les meilleurs choix pour notre projet, ils utilisent des outils simples et faciles à prendre en main. Ils sont également très utilisés et la documentation est de qualité. Nous avons voulu éviter un autre langage que le javascript pour le back-end, car nous avons déjà utilisé le javascript pour le front-end, de plus nodejs couplé à express.js est la technologie la plus utilisée/state of the art pour la création d'API RESTful.

# Conclusion et recommandations
## Choix des outils pour le front-end
Nous avons choisi Svelte car c'est un framwork moderne qui a une syntaxe proche du javascript standard ce qui va rendre son utilisation plus simple pour notre groupe qui n'a jamais utilisé de framwork. Il a également l'avantage d'être léger et plus facile à prendre en main que les autres framworks.

## Choix des outils pour le back-end
Nous avons choisi nodejs et express.js pour la création du backend. Ces outils vont nous aider à faire une API RESTful qui va communiquer avec les clients et notre base de donnée.  
Selon moi, c'est le choix le plus intéressant car c'est simple à prendre ne main, bien documenté et on utilise les mêmes outils pour la gestion du projet que le front-end.(npm)

## Choix du SGBD
Nous avons fait le choix de rester sur un SGBD relationnel pour le moment car tout le monde dans le groupe maîtrise bien le langage SQL. Cependant, le NoSQL pourrait bien convenir à notre projet, car il est plus simple de réprésenter plusieurs utilisateurs travaillant sur la même tâche. Il permettrait également de mieux gérer un grand nombre d'utilisateurs.  
Dans tous les cas, on est capable de faire tout ce dont on a besoin avec un SGBD relationnel.  
Le choix sera donc PostgresSQL pour autant on reste en discussion au sein du groupe pour voir si on peut utiliser un SGBD NoSQL.

# Sources
https://en.wikipedia.org/wiki/SQLite  
https://en.wikipedia.org/wiki/Angular_(web_framework)  
https://en.wikipedia.org/wiki/Tailwind_CSS  
https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/
https://survey.stackoverflow.co/2022/#section-most-popular-technologies-web-frameworks-and-technologies
