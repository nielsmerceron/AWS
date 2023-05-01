
# Developpement du projet
## Présentation
Notre projet est un site web qui permet de gérer des todo-lists. Il permet de créer des listes de tâches, de les modifier, de les supprimer, de les partager avec d'autres utilisateurs, de les trier, de les filtrer, de les exporter, etc.  

# Avancement du projet
## Avancement de la semaine 1
- Création du dépôt Github
- Discussion sur les technologies à utiliser
- Familirisation avec les technologies: Svelte, NPM, NodeJS.
- Reflection sur l'implémentation de la base de données

## Avancement de la semaine 2
  Trois pages fonctionnelles au niveau front avec quelques éléments a rajouté de l'ordre du détail.
  La base de données , le schéma et la connexion ont été effectuer.
  On a utilisé mangoose et docker pour la base de données.
  On utilisera aussi body-parser pour récupérer toutes les requetes en json ainsi que helmet pour rajouter de la sécurité a l'aide d'headers.
  Après discussion,la forme du site est plus défini qu'avant.
  Choix de sécurité du back et front definit (peut être a creusé le front).
  Recherche supplémentaire a faire : "gestion du secret/password".

  ## Avancement de la semaine 3
- La page Todo est créée, elle permet de créer des tâches avec une date et d'autres informations. Il y a également un calendrier.
- La création d'utilisateur et la connexion ont été finis du côté du back-end.
- La comunication avec le back côté front pour la création d'utilisateur et la connexion a été faite.
- Legère refonte graphique ainsi que qu'un nettoyage du code.

## Avancement de la semaine 4
  L'affichage des todo a été légèrement modifier.
  ajout d'un renvoie vers la page d'accueil quand on est Signin ou Login.
  ajout d'une page de calendrier.
  Connexion entre le back et front pour le login faite.
  Site web presque déployé sur un serveur et accessible. 

## Avancement des dernières semaines

# Partie Recherche et analyse
## Nécessités dans le cadre de notre projet
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
##  Comment une requête POST 

une requête POST est une méthode utilisée pour envoyer des données à un serveur Web pour traitement. Contrairement à une requête GET, qui est utilisée pour récupérer des données à partir d'un serveur, une requête POST est utilisée pour envoyer des données au serveur pour traitement, comme l'ajout, la modification ou la suppression d'informations dans une base de données.

Pour envoyer une requête POST à un serveur Web, l'application cliente doit d'abord créer une demande HTTP POST qui inclut les données à envoyer. Les données peuvent être envoyées sous forme de paramètres de requête ou dans le corps de la requête. Dans le cas des formulaires HTML, les données sont généralement envoyées dans le corps de la requête sous forme d'encodage URL ou de données multipart.

Lorsqu'une requête POST est envoyée à un serveur Web, le serveur doit être capable de comprendre et de traiter la demande en utilisant Node.js et Express, notamment la méthode app.post() de Express. Cela implique généralement la définition d'une route côté serveur qui écoute les requêtes POST à une URL spécifiée. La route doit être capable de récupérer les données envoyées dans la requête et de les traiter en fonction des besoins de l'application.

Pour traiter les requêtes POST côté serveur, nous avons utilisé Node.js et Express.
Nous avons défini une route à l'aide de la méthode app.post() de Express pour écouter les requêtes POST sur une URL spécifiée. Nous avons ensuite utilisé la bibliothèque Mongoose pour interagir avec la base de données MongoDB et récupérer les données nécessaires.
 Enfin, nous avons renvoyé une réponse appropriée au client, en fonction de la demande POST. 
 
 Cette approche nous a permis de gérer efficacement les requêtes POST et de fournir des réponses rapides et précises aux utilisateurs de notre application web.

## Communication entre le front et le back

Afin de permettre la communication entre le front-end et le back-end de notre site, nous avons utilisé des requêtes HTTP. Pour envoyer des requêtes au back-end depuis le front-end, on va  utilisé l'API Fetch et l'URL correspondante. Dans le back-end, nous avons utilisé Express pour écouter les requêtes entrantes et répondre en envoyant les données au format JSON. Ces données JSON ont ensuite été traitées dans le front-end pour afficher les informations nécessaires à l'utilisateur.

Et pour sécuriser l'authentification des utilisateurs et garantir l'accès aux ressources appropriées, nous avons utilisé les JSON Web Tokens (JWT).



# Back-end 
- [NodeJS](https://nodejs.org/en)  
  C'est un environnement d'éxécution pour JavaScript construit sur le moteur Javascript de Chrome. Il est extrêmement populaire et il est utilisé par de très nombreuses entreprises. Il est également très simple à prendre en main. 
- [Flask](https://flask.palletsprojects.com)  
  C'est un framwork web léger et rapide qui est basé sur Python. Il est assez simple à prendre en main et il est très utilisé. 
- [Django](https://www.djangoproject.com/)  
  C'est également un framwork utilisant Python. Il a été conçu pour passer de l'étape de conception à l'achèvement le plus rapidement possible. Il est également très utilisé
    
Spring et Laravel ne sont pas pris en compte, car le groupe voulait éviter d'utiliser du Java ou du PHP, on s'est dirigé vers des technologies plus récentes.

## Connexion Utilisateur
Il existe plusieurs options pour maintenir la connexion d'un utilisateur. Les deux options principales sont l'utilisation de JSON Web Tokens (JWT) et de cookies.

- **Qu'est-ce qu'un jeton Web JSON**?

Le jsonwebtoken est un standard définit dans la RFC 7519. 
  La technologie de jsonwebtoken est publique (c'est une norme ouverte) qui a pour but d'avoir un format compact et autonome pour assurer des communications sécurisées entre deux ou plusieurs éléments.
  Cette technologie existe depuis 2015.
  Un JWT est composé de la manière suivante:
  - un header contenant l'algorithme de chiffrement, le type de token (JWT)
  - un payload (la charge utile) qui contient toutes les informations transmises à l'application
  - Une signature qui est générée en fonction du header ,du payload et d'une clef secrète connu que part l'application.

  On peut l'utiliser dans à peut près tous les cas possibles car il est assez "fléxible" de conception. Cependant il y a trois cas où le JWT est souvent utilisé.
  Dans les applications de REST pour sécuriser un protocole en envoyant direct les données d'authentification, du Cros origin ressource sharing et quand il y a plusieurs frameworks utilisés. 
  Dans notre cas, on l'utilisera pour sécuriser une connexion d'un utilisateur.

- **Cookies** : Les cookies sont un autre moyen courant de maintenir une connexion utilisateur. Les cookies sont des fichiers stockés sur le navigateur de l'utilisateur et sont envoyés avec chaque requête envoyée au serveur. Les cookies peuvent stocker des informations d'authentification telles qu'un jeton d'accès ou une session ID.

les options les plus courantes sont les JWT et les cookies car elles offrent un bon compromis entre la sécurité et la praticité.

- **express-validator**
 est un ensemble de middlewares express.js qui encapsule les fonctions de validation et de désinfection validator.js, on l'installe en utilisant npm

## Utilisation de jsonwebtoken

### comment le stocker ?
   Pour le stocker on a deux choix possibles, soit on le stocke sous la forme d'un cookie ou en webstorage et plus particulièrement dans le session storage.

### comment ça fonctionne ?

  Pour le cookie la tache est assez simple, le serveur va créer le cookie a l'aide de la librairie adapté qui est de base dans nodejs et le JWT.
  Lors de cette création on devra mettre deux paramètres important, le Httponly pour que le cookie ne soit pas accessible par le javascript du client et secure pour qu'à chaque intéraction le cookie soit renvoyé sous https.
  De plus lors de communication le cookie est automatiquement envoyé au serveur et le serveur décidera ou non d'effectuer la requête en fonction de la validité du cookie.

  Pour le session storage, le JWT  est aussi créé par le serveur et renvoyé par http, puis stocker soit dans le local storage ou session storage. Pour le stocker on utilisera Angularjs pour le mettre dans une propriété du storage.
  Pour le renvoyer on utilisera le paramètre authorisation du header HTTP.

### inconvéniant

Pour les cookies le renvoi automatique a chaque requête peut vite surs charger la bande passante (ce n'est plus trop le cas de nos jours).De plus le cookie est limité en stockage 4ko donc on peut très vite être limité.
Le cookie est une protection efficace contre les attaques de cross scripting.

Pour le problème du JWT avec stokage dans le session storage est que ce token est accessible par toutes les personnes ayant accès au code javascript. Cette technologie est donc vulnérable aux attaques par cross scripting. 
Cependant , si le site est bien codé, il devrait être bien moins vulnérable a ces attaques.  

### meilleur choix 

Un liage du JWT et du cookie. Pourquoi faire un mix des deux, car ces deux technologies se complètent. C'est a dire, le cookie assure la protection du JWT grâce au HTTPonly et donc rend donc l'accès du JWT si il était stocké dans le storage. 
Mais aussi le JWT augmente la taille de donnée du cookie (de 4ko à 4Mo).

### notre choix 

On utilisera le JWT stocké dans le local ou session storage.
Nous avons fait ce choix car nous pensons que cela suffira au niveau de la sécurité.
Nous n'utiliserons pas de signature symétrique car on ne peut partager le JWT à plusieurs services différents sans engendrer des problèmes d'intrusions potentiels.
Nous utiliserons un JWT avec une signature asymétrique , avec une clé publique et privée pour facilité la communication entre service. De plus nous rajouterons à cela de l'aléatoire pour encore augmenter la sécurité du site.
Je rajoute aussi qu'il faudra donc faire très attention à comment et où l'on stockera la clef secrète pour signer sinon des attaques contre le site seront possible.


# Hebergement du site

On aurait pu faire ça de plusieurs manières différentes , acheter un nom de domaine, payé un serveur pour l'héberger etc..
Cependant nous avons la chance dans notre groupe d'avoir Pierre qui a un serveur où l'on peut mettre la base de donnée du site mais aussi le site. 
Pour effectuer cette tâche et faciliter le lancement de tout le site nous utiliserons docker.

# Securité
## Hash
Pour authentifier une personne, il y aura un identifiant et un mot de passe. Ce mot de passe va être stocké haché dans la base de donnée.
Puis quand on va se connecter à son compte on renvoie le bon identifiant et mot de passe et si l'identifiant donnée est le même que dans la base de donnée et le haché du mot de passe qu'on vient de donner est le même que celui stocké dans le SGBD alors il se connecte ( il est calculatoirement difficile de trouvé un autre mot de passe tel que son haché soit le même que celui stocké en SGBD)
Dans les bibliothèques crypto, il existe plein de fonction pour haché ( sha1 , sha3 , sha256 , md5 ...) qui vont nous permettre de haché notre mot de passe.
dont certains qui sont déja cassé comme md5 et sha1.
## Encryption / Decryption
Pour stocké des données sensibles, on va les stocké cryptée pour éviter de les mettre en clair dans la base de donnée.
Dans les bibliothèques crypto, il existe plein de fonction pour crypté ( AES, DES, 3-DES) qui vont nous permettre de crypté nos donnée.
## Sécurité Front
- crypto-js : bibliothèque javascript.
- SubtleCrypto native dans javascipt de cryptographie.
Ces deux bibliothèques permettent de faire le hash et le chiffrement/déchiffrement de données.
## Sécurité Back
Pour la sécurité de nos données sensibles côté serveur ( mot de passe, données privées ) nous allons utilisé:
- **bcrypt + crypto**: bibliothèque dans le nodejs d'hachage de mot de passe + crypter des messages.
- **Helmet**: Bibliothèque Express qui permet de sécurisé son site en définissant divers en-têtes HTTP pour eviter les vulnérabilités courantes (détournement de clics, HTTP strict ...)
En effet HTTP est de base ouverte et non sécurisé. Il peut notamment divulger des informations sensible à toutes les personnes ayant les compétences techniques.
- **TLS**: C'est le protocol de la sécurité de la couche de transport. 
Elle satisfait différents objectifs client-serveur:
  - Authentification du serveur
  - Authentification du client (optionnel)
  - Confidentialité des données échangées (chiffrement des données)
  - Intégrité des données échangées

# Base de donnée
- SQL or NoSQL ? :  
Notre groupe a déjà manipulé les bases de données relationnelles utilisant le langage SQL.
Et pour un site avec peu de fonctionnalité,et/ou avec de nombreuse jointure, une base de donnée SQL peut suffir.
Mais pour un site avec beaucoup de fonctionnalité est qui est evolutif, le NoSQL est un meilleur candidat. De plus elle permet de gerer une plus grande quantité de données tout en gérant plus facilement les sites avec un fort trafics.  
Si on reste sur du SQL, il faut être sûr qu'on ne sera pas freiner par celle ci si on fait évoluer le site.  
Ce choix s'accompagne d'autre question comme le choix du SGBD.Il faut trouver un SGBD en NoSQL qui est bien documenté pour nous permettre de faire ce que l'on a besoin.
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
  
## Interaction avec la base de donnée 

Pour interagir avec la base de données MongoDB, on va  utilisé : 

  **Mongoose**, une bibliothèque JavaScript qui facilite la définition de schémas et la manipulation de données. En outre, on va utilisé : 

  **Docker**, Doker c'est une platerfome créée en 2013 qui a pour but d'aider a la conception, test et déploiement de logiciel via des "conteneurs logiciels".
Toutes les actions dans Docker sont standardisées, par cette standardisation il y a un gain considérable de prise en main et d'exécution de test ou de déploiement.
De plus nous pouvons tester certains éléments de manière indépendante grâce au "conteneur de logiciel" puis les regrouper pour lancer le logiciel ou site.
C'est exactement ce que nous avons fait en testant d'abord la Base de donnée dans un docker puis le site dans un autre conteneur et après une fois ces deux éléments fonctionnels, les deux ensembles dans un même docker.
De plus chaque docker peut être partagé par le biais d'un hub. Ce hub fonctionne un peu dans la même ligné que github.

  Pour simplifier la communication entre notre application front-end et notre base de données MongoDB, on va utilisé : 

  **body-parser**, une bibliothèque JavaScript qui permet de récupérer les données envoyées via les requêtes HTTP et de les convertir en un objet JSON. Body-parser nous a ainsi permis de gérer efficacement les échanges de données entre les différentes couches de notre application, tout en garantissant la sécurité de nos données. 

# Comparaison et analyse des technologies
## Choix outils front-end
Svelte est le choix que nous avons fait car il est très simple à prendre en main, il est très léger et il est très performant. Il est également très utilisé et la documentation est de qualité.
C'est un framwork moderne qui a une syntaxe proche du javascript standard ce qui va rendre son utilisation plus simple pour notre groupe qui n'a jamais utilisé de framwork.
Pour le CSS , nous avons choisi DaisyUI pour sa documentation , ça s'implicité d'utilisation et de la modernité des design présent dans cette bibliothèques

## Choix des outils pour le back-end
Selon moi, NodeJS et Express.js sont les meilleurs choix pour notre projet, ils utilisent des outils simples et faciles à prendre en main. Ils sont également très utilisés et la documentation est de qualité. Nous avons voulu éviter un autre langage que le javascript pour le back-end, car nous avons déjà utilisé le javascript pour le front-end, de plus nodejs couplé à express.js est la technologie la plus utilisée/state of the art pour la création d'API RESTful.Et on utilise les mêmes outils pour la gestion du projet que le front-end.(npm)

## Option de sécurité
Pour les données côté serveur, comme dit avant, nous allons utilisé des protocols/bibliothèque : bcrypt + crypto, TLS, Helmet. De plus que ça, il faut prendre quelque reflexe comme sécurisé les cookies où éviter les attaques par force brute.
Pour le hachage, il faut absolument hacher côté client et côté serveur pour eviter les attaques dans le canal entre client et serveur( utilisation du hachage pour ce connecté, connaissance du clair).

## SQL ou NoSQL
Nous allons donc opter pour un SGBD NoSQL malgré le fait qu'on ai plus pratiqué le SGBD relationnel. Cependant le NoSQL est plus adapté et plus le projet évoluera, plus le NoSQL deviendra une évidence.
## Choix du SGBD
Nous allons donc choisir MongoDB pour avoir une SGBD qui sera le plus rapide à prendre en main grâce à sa documentation. De plus, si c'est l'un des plus utilisé, c'est qu'il marche bien en plus d'être open-source.
# Conclusion

# Piste d'amélioration

# Source

## Source Framwork Front/Back
https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/  
https://survey.stackoverflow.co/2022/#section-most-popular-technologies-web-frameworks-and-technologies
### Framwork JS
https://en.wikipedia.org/wiki/Angular_(web_framework)  

### Framwork CSS
https://en.wikipedia.org/wiki/Tailwind_CSS  

## Source Front
https://expressjs.com/fr/guide/routing.html
https://developer.mozilla.org/fr/docs/Web/API/Fetch_API


## Source Back
### JSON WEB TOKEN
https://jwt.io/introduction
### description général du Json Web Token
  - https://fr.wikipedia.org/wiki/JSON_Web_Token#cite_note-RFC-7519-t-1
  - https://datatracker.ietf.org/doc/html/rfc7519

### sécurité technologie pour stocker le JWT
  - https://website.simplx.fr/blog/2016/09/27/authentification-api-via-jwt-et-cookies/
  - https://www.pingidentity.com/fr/resources/blog/post/jwt-security-nobody-talks-about.html

### Autre Biblio
https://express-validator.github.io/docs/


## Source Sécurité
### Bibliothèque crypto front
https://www.npmjs.com/package/crypto-js  
https://openbase.com/js/crypto-js  
https://nodejs.org/api/crypto.html  
https://developer.mozilla.org/fr/docs/Web/API/SubtleCrypto  
https://qwtel.com/posts/software/replacing-cryptojs-with-web-cryptography/  

### Bibliothèque/protocol back + prevention
https://expressjs.com/en/advanced/best-practice-security.html#use-cookies-securely  
https://helmetjs.github.io/  
https://www.npmjs.com/package/helmet  
https://www.securecoding.com/blog/javascript-as-backend-prone-to-security-risks/  
https://fr.wikipedia.org/wiki/Transport_Layer_Security  
https://advancedweb.hu/how-to-hash-passwords-and-when-not-to/  
https://www.securecoding.com/blog/using-helmetjs/  
https://www.npmjs.com/package/bcrypt 
https://www.makeuseof.com/nodejs-bcrypt-hash-verify-salt-password/ 

## Source SGBD


### SQL ou NoSQL
https://datascientest.com/sql-vs-nosql-differences-utilisations-avantages-et-inconvenients  
https://datascientest.com/nosql-tout-savoir  
https://www.ibm.com/cloud/blog/sql-vs-nosql  
https://www.mongodb.com/nosql-explained/nosql-vs-sql  


### MongoDB
https://db-engines.com/en/ranking  
https://firebase.google.com/docs?gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qU-LK33rpJLKXeFM4Uvqqk9LKAwSEpBFgKyclnm1G4hfhB2OQpL3fAaAs4OEALw_wcB&gclsrc=aw.ds&hl=fr  
https://www.mongodb.com/fr-fr  
https://fr.wikipedia.org/wiki/MongoDB  
https://docs.mongodb.com/ 

  
### Tuto MongoDB
https://harry-wanki.developpez.com/tutoriels/mongodb/debuter-mongodb-introduction-base-donnees-nosql/#LIII  
https://www.fil.univ-lille.fr/~routier/enseignement/licence/jsfs/html/node-mongodb.html

### Interaction avec le SGBD
https://mongoosejs.com/docs/ 
https://www.docker.com/
https://docs.docker.com/ 
https://www.npmjs.com/package/body-parser 


### Autre SGBD

https://en.wikipedia.org/wiki/SQLite  
