# Rapport 2 - Pour le 5 avril

# Avancement du projet
## Roles et responsabilités
**Chercheur:** Niels Merceron 
**Chef de projet:** Manel Azgag   
**Programmeur 1:** Pierre Vermeulen  
**Programmeur 2:** Alexis Guigal 

## Répartition des tâches
- **Chercheur:** 
  - Recherche et analyse des technologies
  - Rédaction du rapport 

- **Chef de projet:**  
  - Rédaction du rapport 
  - Front

- **Programmeur 1:**  
  - Back 

- **Programmeur 2:**
  - Front
  
  
# Developpement du projet
## Présentation
Notre projet est un site web qui permet de gérer des todo-lists. Il permet de créer des listes de tâches, de les modifier, de les supprimer, de les partager avec d'autres utilisateurs, de les trier, de les filtrer, de les exporter, etc.  

## Objectif de la semaine
- **Organisation:** Design du site. 
- **Recherche:** Recherche spécifique sur la BDD ( SQL ou NoSQL ) + option de sécurité des BDD.
- **Code:** Front : Page d'accueil ( login/sign up ), Back : enregistrement des logs.

## Avancement cette semaine
  
  

# Recherche

## Qu'es ce qu'un jsonwebtoken ?

  Le jsonwebtoken est un standard définit dans la RFC 7519. 
  La technologie de jsonwebtoken est publique (c'est une norme ouverte) qui a pour but d'avoir un format compact et autonome pour assurer des communications sécurisé entre deux ou plusieurs éléments.
  Cette technologie existe depuis 2015.
  Un JWT est composé de la manière suivante:
  - un header contenant l'algoritme de chiffrement, le type de token (JWT)
  - un payload (la charge utile) qui contient toutes les informations transmisent a l'application
  - Une signature qui est généré en fonction du header ,du payload et d'une clef secrète connu que part l'application.

  On peut utiliser dans a peut près dans tous les cas possibles car il est assez "fléxible" de conception. Cependant il y a trois cas ou le JWT est souvent utilisé,
  dans les applications de REST pour sécurisé un protocole en envoyant direct les donnée d'authentification, du Cros origin ressource sharing et quand il y a plusieurs frameworks utilisés. 
  Dans notre cas on l'utilisera pour sécuriser une connexion d'un utilisateur.


## comment le stocker ?

### technologie présente?

## technologie choisi

JSonwebtoken comment le stocker et différence entre les technologies.
les classer du plus au moins sécur

# bibliographie/site consulté
  - https://fr.wikipedia.org/wiki/JSON_Web_Token#cite_note-RFC-7519-t-1
  - https://datatracker.ietf.org/doc/html/rfc7519