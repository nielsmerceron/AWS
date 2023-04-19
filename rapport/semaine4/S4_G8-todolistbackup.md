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
  - connexion pour le login (communication back front)

- **Programmeur 1:**  
  - portage du site sur le serveur

- **Programmeur 2:**
  - page calendrier
  - refonte de la page todolist
  
  
# Developpement du projet
## Présentation
Notre projet est un site web qui permet de gérer des todo-lists. Il permet de créer des listes de tâches, de les modifier, de les supprimer, de les partager avec d'autres utilisateurs, de les trier, de les filtrer, de les exporter, etc.  

## Objectif de la semaine
- **Organisation:** Design du site. 
- **Recherche:** Recherche spécifique sur la BDD ( SQL ou NoSQL ) + option de sécurité des BDD.
- **Code:** Front : Page d'accueil ( login/sign up ), Back : enregistrement des logs.

## Avancement cette semaine
  L'affichage des toto a été légèrement modifier.
  ajout d'un renvoie vers la page d'accueil quand on est Signin ou Login.
  ajout d'une page de calendrier.
  Connexion entre le back et front pour le login faite.
  Site web presque déployé sur un serveur et accessible. 

# Recherche

## Qu'es ce qu'un jsonwebtoken ?

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


## comment le stocker ?
   Pour le stocker on a deux choix possibles, soit on le stocke sous la forme d'un cookie ou en webstorage et plus particulièrement dans le session storage.

## comment ça fonctionne ?

  Pour le cookie la tache est assez simple, le serveur va créer le cookie a l'aide de la librairie adapté qui est de base dans nodejs et le JWT.
  Lors de cette création on devra mettre deux paramètres important, le Httponly pour que le cookie ne soit pas accessible par le javascript du client et secure pour qu'à chaque intéraction le cookie soit renvoyé sous https.
  De plus lors de communication le cookie est automatiquement envoyé au serveur et le serveur décidera ou non d'effectuer la requête en fonction de la validité du cookie.

  Pour le session storage, le JWT  est aussi créé par le serveur et renvoyé par http, puis stocker soit dans le local storage ou session storage. Pour le stocker on utilisera Angularjs pour le mettre dans une propriété du storage.
  Pour le renvoyer on utilisera le paramètre authorisation du header HTTP.

## inconvéniant

Pour les cookies le renvoi automatique a chaque requête peut vite surs charger la bande passante (ce n'est plus trop le cas de nos jours).De plus le cookie est limité en stockage 4ko donc on peut très vite être limité.
Le cookie est une protection efficace contre les attaques de cross scripting.

Pour le problème du JWT avec stokage dans le session storage est que ce token est accessible par toutes les personnes ayant accès au code javascript. Cette technologie est donc vulnérable aux attaques par cross scripting. 
Cependant , si le site est bien codé, il devrait être bien moins vulnérable a ces attaques.  

## meilleur choix 

Un liage du JWT et du cookie. Pourquoi faire un mix des deux, car ces deux technologies se complètent. C'est a dire, le cookie assure la protection du JWT grâce au HTTPonly et donc rend donc l'accès du JWT si il était stocké dans le storage. 
Mais aussi le JWT augmente la taille de donnée du cookie (de 4ko à 4Mo).

## notre choix 

On utilisera le JWT stocké dans le local ou session storage.
Nous avons fait ce choix car nous pensons que cela suffira au niveau de la sécurité.
Nous n'utiliserons pas de signature symétrique car on ne peut partager le JWT à plusieurs services différents sans engendrer des problèmes d'intrusions potentiels.
Nous utiliserons un JWT avec une signature asymétrique , avec une clé publique et privée pour facilité la communication entre service. De plus nous rajouterons à cela de l'aléatoire pour encore augmenter la sécurité du site.
Je rajoute aussi qu'il faudra donc faire très attention à comment et où l'on stockera la clef secrète pour signer sinon des attaques contre le site seront possible.


## hébergement du site

On aurait pu faire ça de plusieurs manières différentes , acheter un nom de domaine, payé un serveur pour l'héberger etc..
Cependant nous avons la chance dans notre groupe d'avoir Pierre qui a un serveur où l'on peut mettre la base de donnée du site mais aussi le site. 
Pour effectuer cette tâche et faciliter le lancement de tout le site nous utiliserons docker.

## qu'es ce que docker ?

Doker c'est une platerfome créée en 2013 qui a pour but d'aider a la conception, test et déploiement de logiciel via des "conteneurs logiciels".
Toutes les actions dans Docker sont standardisées, par cette standardisation il y a un gain considérable de prise en main et d'exécution de test ou de déploiement.
De plus nous pouvons tester certains éléments de manière indépendante grâce au "conteneur de logiciel" puis les regrouper pour lancer le logiciel ou site.
C'est exactement ce que nous avons fait en testant d'abord la Base de donnée dans un docker puis le site dans un autre conteneur et après une fois ces deux éléments fonctionnels, les deux ensembles dans un même docker.
De plus chaque docker peut être partagé par le biais d'un hub. Ce hub fonctionne un peu dans la même ligné que github.


# bibliographie/site consulté

### description général du Json Web Token
  - https://fr.wikipedia.org/wiki/JSON_Web_Token#cite_note-RFC-7519-t-1
  - https://datatracker.ietf.org/doc/html/rfc7519

### sécurité technologie pour stocker le JWT
  - https://website.simplx.fr/blog/2016/09/27/authentification-api-via-jwt-et-cookies/
  - https://www.pingidentity.com/fr/resources/blog/post/jwt-security-nobody-talks-about.html

### Docker
 - https://www.docker.com/
 - https://docs.docker.com/
