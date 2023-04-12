# Rapport 3 - Pour le 13 avril

# Avancement du projet
## Roles et responsabilités
**Chercheur:** Manel AZGAG

**Chef de projet:** Pierre Vermeulen  

**Programmeur 1:** Niels Merceron 

**Programmeur 2:** Alexis Guigal   

## Répartition des tâches
- **Chercheur:** 
  - Recherche et analyse des technologies
  - Rédaction du rapport 

- **Chef de projet:**  
  - Présentation du projet et de son avancement

- **Programmeur 1:**  
  -  Back

- **Programmeur 2:**
  - Front 


  # Developpement du projet
## Présentation
Notre projet est un site web qui permet de gérer des todo-lists. Il permet de créer des listes de tâches, de les modifier, de les supprimer, de les partager avec d'autres utilisateurs, de les trier, de les filtrer, de les exporter, etc. 

## Objectif de la semaine
- Création de la page Tudo sur la partie front-end.
- Connexion entre la partie front-end et le back-end .


# Partie Recherche et analyse
## Nécessités de la semaine
- <u>Respectez les necessités global du projet:</u> Simplicité, Documentation.
- <u>comment communiquer entre le front et le back</u>
- <u> connexion d'un utilisateur </u>
- <u>Sécuriter:</u> Trouvez les meilleurs moyens de sécurisés les donneés sensible de notre SGBD.

# Front-end

##  Comment une requête POST 

une requête POST est une méthode utilisée pour envoyer des données à un serveur Web pour traitement. Contrairement à une requête GET, qui est utilisée pour récupérer des données à partir d'un serveur, une requête POST est utilisée pour envoyer des données au serveur pour traitement, comme l'ajout, la modification ou la suppression d'informations dans une base de données.

Pour envoyer une requête POST à un serveur Web, l'application cliente doit d'abord créer une demande HTTP POST qui inclut les données à envoyer. Les données peuvent être envoyées sous forme de paramètres de requête ou dans le corps de la requête. Dans le cas des formulaires HTML, les données sont généralement envoyées dans le corps de la requête sous forme d'encodage URL ou de données multipart.

Lorsqu'une requête POST est envoyée à un serveur Web, le serveur doit être capable de comprendre et de traiter la demande en utilisant Node.js et Express, notamment la méthode app.post() de Express. Cela implique généralement la définition d'une route côté serveur qui écoute les requêtes POST à une URL spécifiée. La route doit être capable de récupérer les données envoyées dans la requête et de les traiter en fonction des besoins de l'application.

Pour traiter les requêtes POST côté serveur, nous avons utilisé Node.js et Express.
Nous avons défini une route à l'aide de la méthode app.post() de Express pour écouter les requêtes POST sur une URL spécifiée. Nous avons ensuite utilisé la bibliothèque Mongoose pour interagir avec la base de données MongoDB et récupérer les données nécessaires.
 Enfin, nous avons renvoyé une réponse appropriée au client, en fonction de la demande POST. 
 
 Cette approche nous a permis de gérer efficacement les requêtes POST et de fournir des réponses rapides et précises aux utilisateurs de notre application web.

## communication entre le front et le back

Afin de permettre la communication entre le front-end et le back-end de notre site, nous avons utilisé des requêtes HTTP. Pour envoyer des requêtes au back-end depuis le front-end, on va  utilisé l'API Fetch et l'URL correspondante. Dans le back-end, nous avons utilisé Express pour écouter les requêtes entrantes et répondre en envoyant les données au format JSON. Ces données JSON ont ensuite été traitées dans le front-end pour afficher les informations nécessaires à l'utilisateur.

Et pour sécuriser l'authentification des utilisateurs et garantir l'accès aux ressources appropriées, nous avons utilisé les JSON Web Tokens (JWT).





# Back-end 

 Il existe plusieurs options pour maintenir la connexion d'un utilisateur. Les deux options principales sont l'utilisation de JSON Web Tokens (JWT) et de cookies.

- **Qu'est-ce qu'un jeton Web JSON**?

Un jeton Web JSON (JWT) est une norme ouverte qui permet de transmettre de manière sécurisée des informations sous forme d'objet JSON. Les JWT sont signés numériquement et peuvent être signés à l'aide d'un secret ou d'une paire de clés publique/privée.
Les jetons signés peuvent vérifier l'intégrité des revendications qu'ils contiennent et certifient que seuls les détenteurs de la clé privée peuvent les avoir signés. Les JWT sont donc un moyen sûr de transmettre des informations entre les parties.

- **Cookies** : Les cookies sont un autre moyen courant de maintenir une connexion utilisateur. Les cookies sont des fichiers stockés sur le navigateur de l'utilisateur et sont envoyés avec chaque requête envoyée au serveur. Les cookies peuvent stocker des informations d'authentification telles qu'un jeton d'accès ou une session ID.

les options les plus courantes sont les JWT et les cookies car elles offrent un bon compromis entre la sécurité et la praticité.

- **express-validator**
 est un ensemble de middlewares express.js qui encapsule les fonctions de validation et de désinfection validator.js, on l'installe en utilisant npm

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

## Base de données 

  Dans le cadre de notre projet de création d'un site de todolist, nous avons opté pour MongoDB comme système de gestion de base de données. 

   MongoDB est une base de données NoSQL, orientée documents, qui offre une grande flexibilité et une scalabilité horizontale. Pour interagir avec la base de données MongoDB, on va  utilisé : 

  **Mongoose**, une bibliothèque JavaScript qui facilite la définition de schémas et la manipulation de données. En outre, on va utilisé : 

  **Docker**, pour la gestion des conteneurs. Docker nous a permis de créer des environnements de développement et de production isolés, portables et reproductibles, ce qui a simplifié le déploiement et la maintenance de notre application. ainsi on pu développer notre application de manière plus agile et efficace, en maximisant la productivité de l'équipe et en minimisant les risques d'erreur. 

  Pour simplifier la communication entre notre application front-end et notre base de données MongoDB, on va utilisé : 

  **body-parser**, une bibliothèque JavaScript qui permet de récupérer les données envoyées via les requêtes HTTP et de les convertir en un objet JSON. Body-parser nous a ainsi permis de gérer efficacement les échanges de données entre les différentes couches de notre application, tout en garantissant la sécurité de nos données. 

 
 

# Sources
## Bibliothèque back 

https://jwt.io/introduction

https://express-validator.github.io/docs/

https://www.securecoding.com/blog/

https://helmetjs.github.io/ 

https://www.securecoding.com/blog/using-helmetjs/ 

https://expressjs.com/en/advanced/best-practice-security.html#use-cookies-securely  

## BDD  

https://docs.mongodb.com/ 

## Front 
https://expressjs.com/fr/guide/routing.html

https://developer.mozilla.org/fr/docs/Web/API/Fetch_API

 
 

https://mongoosejs.com/docs/ 

 
 

https://docs.docker.com/ 

 
 

https://www.npmjs.com/package/body-parser 

 
 
 


