/*Utilisation de la référence de temps pour :
- Vérifier la validité des extrait KBIS (moins de trois mois);
- Vérifier la validité des cartes d'identité (15 ans depuis le 01-01-2014);
- Vérifier la validité des paseports :
    - 10 ans pour les passeports délivrés à compter du 1er mars 2001;
    - 5 ans pour les passeports avant le 1er mars 2001;
    - 5 ans pour les mineurs.

La vérification se fera sur un évenement de type'onchange' du champ et non au clic de génération
Si aucun bouton radio n'est coché, alors que le champs est rempli, alerter l'utilisateur qu'il doit en choisir un.

Pour ça, il faut connaitre à tout moment le nombre de millisecondes écoulées depuis le 01-01-1970
*/







function myOnline() {
    var x = navigator.onLine;
    if (x==true){
        document.getElementById("connectStatus").innerHTML = "vous êtes connecté au réseau";
        document.getElementById("connectStatus").style.background = 'orange';
        document.getElementById("connectStatus").style.color = 'white';
        
    }
    else {
        document.getElementById("demo").innerHTML = "vous n'êtes pas connecté au réseau";
    }
    
  }
  myOnline();

/* ######### PARTIE TRAITEMENT PIECE D'IDENTITE ######### */

// Si le champ est rempli mais pas de bouton radio coché
const numpi = document.getElementById("numPi").addEventListener(onchange, myPi());

/*function myPi(){
    if (numPi !=""){
        alert("tu rigoles ou quoi !, coche un putain de bouton !")
    }
}
  */  


//Récupérer la date de l'input 'dtKBIS' dès qu'elle est entrée
a = document.getElementById("dtKbis").addEventListener(onchange, dateForCaz());
console.log(a);

/*function dateForCaz(){
    let origin = new Date();
    let current = Date.now();
   
*/
    


// et la transposer en nombre de ms
//let kbisMs = Date.parse(kbisValue);

// La comparer par une soustraction à la date courante
//let calcDiff = current - kbisMs
// 3 mois sont égal à 7776000000 ms
// Si la différence est supérieure à 90 jours on affiche un message d'alerte
/*if (calcDiff > 7776000000){
    alert("Votre extrait KBIS n'est plus valide");
}*/
}
    //Gestion de la validité des cartes d'identité
//Récupérer la date de l'input 'dtDelivr' dès qu'elle est entrée
//addEventListener(onchange);

//La transposer en nombre de jours
