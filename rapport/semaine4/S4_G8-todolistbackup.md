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

  On peut l'utiliser dans a peut près tous les cas possibles car il est assez "fléxible" de conception. Cependant il y a trois cas ou le JWT est souvent utilisé,
  dans les applications de REST pour sécurisé un protocole en envoyant direct les donnée d'authentification, du Cros origin ressource sharing et quand il y a plusieurs frameworks utilisés. 
  Dans notre cas on l'utilisera pour sécuriser une connexion d'un utilisateur.


## comment le stocker ?
   Pour le stocker on a deux choix possible, soit on le stocke sous la forme d'un cookie ou en webstorage et plus particulièrement dans le session storage.

## comment ça fonctionne ?

  Pour le cookie la tache est assez simple, le serveur va créer le cookie a l'aide de la librairie adapté qui est de base dans nodejs et le JWT.
  Lors de cette création on devra mettre deux parametres important, le Httponly pour que le cookie ne soit pas accessible par le javascript du client et secure pour qu'a chaque intéraction le cookie soit renvoyé sous https.
  De plus lors de communication le cookie est automatiquement envoyé au serveur et le serveur décidera ou non d'effectuer la requete enfonction de la validité du cookie.

  Pour le session storage, le JWT  est aussi créé par le serveur et renvoyé par http, puis stocker soit dans le local storage ou session storage. Pour le stocker on utilisera Angularjs pour le mettre dans une propriété du storage.
  Pour le renvoyer on utilisera le paramêtre authorization du header HTTP.

## inconvéniant

Pour les cookies le renvoie automatique a chaque requete peut vite surs charger la bande passante (ce n'est plus trop le cas de nos jours).De plus le cookie est limité en stockage 4ko donc on peut très vite être limité.
Le cookie est une protection efficace contre les attaques de cross scripting.

Pour le problème du JWT avec stokage dans le session storage est que ce token est accessible par toutes les personnes ayant accès au code javascript. Cette technologie est donc vulnérable au attaque par cross scripting. 
Cependant , si le site est bien codé, il devrait être bien moins vulnérable a ces attaques.  

## mixe des deux


## technologie choisi

JSonwebtoken comment le stocker et différence entre les technologies.
les classer du plus au moins sécur

# bibliographie/site consulté
  - https://fr.wikipedia.org/wiki/JSON_Web_Token#cite_note-RFC-7519-t-1
  - https://datatracker.ietf.org/doc/html/rfc7519
  - 
  - https://website.simplx.fr/blog/2016/09/27/authentification-api-via-jwt-et-cookies/