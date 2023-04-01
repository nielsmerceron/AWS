# Rapport 2 - Pour le 5 avril

# Avancement du projet
## Roles et responsabilités
**Chercheur:** Alexis Guigal  
**Chef de projet:** Niels Merceron  
**Programmeur 1:** Pierre Vermeulen  
**Programmeur 2:** Manel Azgag  

## Répartition des tâches
- **Chercheur:**  

- **Chef de projet:**  

- **Programmeur 1:**  

- **Programmeur 2:**
  
  
## Developpement du projet
### Présentation
Notre projet est un site web qui permet de gérer des todo-lists. Il permet de créer des listes de tâches, de les modifier, de les supprimer, de les partager avec d'autres utilisateurs, de les trier, de les filtrer, de les exporter, etc.  

### Objectif de la semaine
- **Organisation:** Design du site. 
- **Recherche:** Recherche spécifique sur la BDD ( SQL ou NoSQL ) + option de sécurité des BDD.
- **Code:** Front : Page d'accueil ( login/sign up ), Back : enregistrement des logs.

### Avancement cette semaine

# Schéma potentiel de notre site
<img title="Design du site" src="/home/alexis/Bureau/AWS/AWS/rapport/semaine2/imageSite.png">

# Partie Recherche et analyse
# Nécessités dans le cadre de notre projet
- <u>Simplicité</u>: Il nous faut une learning curve assez douce, la majorité des gens dans le groupe n'ayant jamais manipulés de technologies ou langages utilisés dans le web.
- <u>Documentation</u>: C'est un point qui découle du précédent mais une bonne documentation est nécéssaire pour arriver à apprendre à utiliser les technologies en partant de rien.
- <u>State of the art</u> (à la pointe de la technologie)

# Sécurité
Pour la sécurité de nos données sensible ( mot de passe, donnée privée ) nous allons utilisé la bibliothèque " crypto-js " dans laquel il existe plein de technique cryptographique. Elle est très simple d'utilisation, est très utilisé actuellement et sa documentation est très clair.
Il existe d'autre bibliothèque comme :
- bcrypt dans le nodejs
- SubtleCrypto native dans javascipt

## Hash
Pour authentifier une personne, il y aura un identifiant et un mot de passe. Ce mot de passe va être stocké hashé dans la base de donnée ( hash fait coté client).
Puis quand on va se connecter à son compte on renvoie le bon identifiant et mot de passe et si l'identifiant donnée est le même que dans la base de donnée et le haché du mot de passe qu'on vient de donnée est le même que celui stocké dans le SGBD alors il se connecte ( il est calculatoirement difficile de trouvé un autre mot de passe tel que son haché soit le même que celui stocké en SGBD)

Dans les bibliothèques crypto, il existe plein de fonction pour haché ( sha1 , sha3 , sha256 , md5 ...) qui vont nous permettre de haché notre mot de passe.
## Encryption / Decryption
Pour stocké des données sensible, on va les stocké cryptée pour éviter de les mettre en clair dans la base de donnée.

Dans les bibliothèques crypto, il existe plein de fonction pour crypté ( AES, DES, 3-DES) qui vont nous permettre de crypté nos donnée.

# Base de données
- SQL or NoSQL ? :  
Notre groupe a déjà manipulé les bases de données relationnelles utilisant le langage SQL.  
Et pour un site avec peu de fonctionnalité,ou avec de nombreuse jointure, une base de donnée SQL peut suffir.
Mais pour un site avec beaucoup de fonctionnalité est qui est evolutif, le NoSQL est un meilleur candidat. De plus elle permet de gerer une plus grande quantité de données tout en gérant plus facilement les sites avec un fort trafics.  
Si on reste sur du SQL, il faut être sûr qu'on ne sera pas freiner par celle ci.  
Ce choix s'accompagne d'autre question comme le choix du SGBD.Il faut trouver un SGBD en NoSQL qui est bien documenté pour nous permettre de faire ce que l'on a besoin.
## SQL
Tous les SGBD traités ici sont gratuits et open-source.  
- **PostgreSQL**:
  C'est un SGBD qui est considéré comme l'un des plus fiable et des plus avancés. Il est également connu pour offrir une excellente compatibilité avec les normes SQL, ce qui le rend très populaire parmi les développeurs. Il supporte également le langage PL:pgSQL, un langage très proche 

  
## NoSQL
- **MongoDB**:
  MongoDB est un système de gestion de bases de données NoSQL qui utilise un format de stockage de données basé sur JSON. Contrairement aux bases de données relationnelles, MongoDB n'utilise pas de tables et de schémas fixes, mais stocke les données dans des collections flexibles qui peuvent être modifiées sans avoir à définir un schéma préalablement. Cela permet une grande flexibilité pour gérer des données complexes et des schémas évolutifs. De plus, MongoDB offre des performances élevées, une évolutivité horizontale facile et une grande disponibilité pour les applications modernes basées sur le cloud.  
  Il est également très utilisé et la documentation est de qualité.
- **Firebase**: 
  C'est un service de base de données NoSQL qui est très populaire. Il est extrêmement simple à prendre en main et il est très complet. Il est également très utilisé et la documentation est de qualité. Le souci est qu'il est propriétaire et il peut coûter cher à l'usage. 
  

# Comparaison et analyse des technologies
## SQL ou NoSQL
Nous allons donc opter pour un SGBD NoSQL
# Conclusion et recommandations
## Choix du SGBD
Nous avons fait le choix de rester sur un SGBD relationnel pour le moment car tout le monde dans le groupe maîtrise bien le langage SQL. Cependant, le NoSQL pourrait bien convenir à notre projet, car il est plus simple de réprésenter plusieurs utilisateurs travaillant sur la même tâche. Il permettrait également de mieux gérer un grand nombre d'utilisateurs.  
Dans tous les cas, on est capable de faire tout ce dont on a besoin avec un SGBD relationnel.  
Le choix sera donc PostgresSQL pour autant on reste en discussion au sein du groupe pour voir si on peut utiliser un SGBD NoSQL.

# Sources
https://www.npmjs.com/package/crypto-js  
https://openbase.com/js/crypto-js  
https://www.makeuseof.com/nodejs-bcrypt-hash-verify-salt-password/  
https://developer.mozilla.org/fr/docs/Web/API/SubtleCrypto  
https://qwtel.com/posts/software/replacing-cryptojs-with-web-cryptography/  

https://datascientest.com/sql-vs-nosql-differences-utilisations-avantages-et-inconvenients  
https://datascientest.com/nosql-tout-savoir  
https://www.ibm.com/cloud/blog/sql-vs-nosql  
https://www.mongodb.com/nosql-explained/nosql-vs-sql  
