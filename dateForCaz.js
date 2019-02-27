/*Utilisation de la référence de temps pour :
- Vérifier la validité des extrait KBIS (moins de trois mois);
- Vérifier la validité des cartes d'identité (15 ans depuis le 01-01-2014);
- Vérifier la validité des paseports :
    - 10 ans pour les passeports délivrés à compter du 1er mars 2001;
    - 5 ans pour les passeports avant le 1er mars 2001;
    - 5 ans pour les mineurs.

La vérification se fera une fois la souris sortie du champ et non au clic de génération

Pour ça, il faut connaitre à tout moment le nombre de millisecondes écoulées depuis le 01-01-1970
*/

function dateForCaz(){
    let origin = new Date();
    let current = Date.now();
    //qu'il faudra transposer en nb de jours
}

    //Gestion de la validité des extraits KBIS
//Récupérer la date de l'input 'dtKBIS' dès qu'elle est entrée
addEventListener(onchange);

// et la transposer en nombre de jours 
let kbisMs = '';

// La comparer par une soustraction à la date courante
let calcDiff = current - kbisMs
// 3 mois sont égal à 90 jours
// Si la différence est supérieure à 90 jours on affiche un message d'alerte
if (calcDiff > 90){
    alert("Votre extrait KBIS n'est plus valide");
}

    //Gestion de la validité des cartes d'identité
//Récupérer la date de l'input 'dtDelivr' dès qu'elle est entrée
addEventListener(onchange);

//La transposer en nombre de jours
let 