# botDiscord

# Prérequis 

Le bot est utilisable grâce à l'api créé par un copain téléchargable via https://github.com/My-cookies/backend

# Déploiement

Pour pouvoir deployer le bot il faudra tout d'abord créer un .env
Et il faudra rajouter votre bot token: BOT_TOKEN=VotreBot

Puis il faudra le lancer avec npm start 

Puis l'inviter sur votre serveur discord 

# Liste des commandes utilisables 

,addmoney <user> <montant> : ajoute de la monnaie virtuelle a l’utilisateur (admin)  
,removemoney <user> <montant> : retire de la monnaie a l’utilisateur (admin)  
,seemoney <user> : permet de voir la monnaie de l’utilisateur (membre)  
,pay <user > <montant> : permet de payer un utilisateur (membre)    
,rankmoney : permet de voir le classement des utilisateurs possédant le plus de cookoin (membre)  
,work : permet de gagner aléatoirement dans une tranche 100 à 1000 cookoin avec un cooldown de 1h (membre)  
,flip : permet de gagner 50 cookoin à 50% de chance avec un cooldown d’une minute  
