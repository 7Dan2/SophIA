Le projet SophI.A est un générateur facilitant le nomage des document en le formattant aux préconisations reglementaires.

Version 1.0 07-02-2019 :
    Interface HTML5 Bootstrap et Javascript pour la logique.
    Fonctionnalités :
        - Génére les noms de fichiers CAZ, CAZ-0 et PI avec l'extension de fichier en .pdf
        - Prend en compte les prenoms composés

Version 1.08 07-03-2019
	Nouvelles couleurs pour les deux parties principales et le fond.
	Nouvelles couleurs de police.
	Calcul la date de validité des CI;
	Coloration des sorties en fonction de différentes condition de validité:
		Présence du nom du prénom et d’une date de naissance (CAZ et CAZ-O)
		Présence d’une date pour la PI
		Présence d’une date de CI valide (CAZ CAZ-O et PI)

Version 1.09 09-03-2019
	Travail sur l’accessibilité, début.

Version 1.10 10-03-2019
	Titre et icônes sur les parties renseignements et sortie.

Version 1.11 12-03-2019
	Prise en compte des «/«  dans les champs de dates non gérés par le calendrier.

A partir de la version 1.17, passage à l'incrémentation sémantique.
	La version 1.17 devient 1.17.1

	-Fixe un bug dans la coloration du champ de date validité pièce d'identité.

Version 1.17.4
	Fixe un bug de variable inconnue

Version 1.18 11-05-2020
	Détection de lettres dans le nom et le prénom

Version 1.19.0 14-05-2020
	Masquage par défaut de la partie dédiée aux renseignements d'entreprise, ainsi que le champ de 
	sortie Kbis associé.

Version 1.20.0 15-05-2020
	Modal d'aide

Version 1.21.0 03-10-2020
	Utilisation du local storage => rationalisation des requetes sur les valeurs entrées => moins de variables
	
Version 1.21.2 du 23-06-2021
	Suppression de la partie cachée des informations entreprises, ne reste que le chmaps de sortie KBIS qui demeure caché tant que 
	l'utilisateur ne rentre pas d'informations dans "nom d'entreprise".
	
Version 1.21.3 du 27-06-2021
	Travail sur le pied de page, création de fenêtres modales.

Version 1.22.0
	Fonctionnalité de sélection/copie en presse-papier sur un champ de sortie 
	Modification du nommage CAZ en DCP

Version 1.22.1 du 17-06-2021
	Modification du nommage DCP en CPR

Version 1.22.2 du 29-09-2021
	Ajout de la vérification de la présence de tirets en double dans le champ de prénom

Version 1.22.3 du 22-04-2022
	Augmentation de la taille de police dans les champs de sortie
	Modification du texte du boutton "Générer" en blanc
	Augmentation de la taille du bouton
