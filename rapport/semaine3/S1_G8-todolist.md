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
- <u> connexion d'un utilisateur <u>
- <u>Sécuriter:</u> Trouvez les meilleurs moyens de sécurisés les donneés sensible de notre SGBD.

# Front-end
## communication entre le front et le back









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





























































# Sources
## Bibliothèque back 

https://jwt.io/introduction

https://express-validator.github.io/docs/

https://www.securecoding.com/blog/

https://helmetjs.github.io/ 

https://www.securecoding.com/blog/using-helmetjs/ 

https://expressjs.com/en/advanced/best-practice-security.html#use-cookies-securely  


