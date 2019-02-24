function myCaz(){
    //Récupération du nom, mise en majuscule
    let v = document.getElementById("name").value.toUpperCase();
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
    if (v==""){
        alert("Vous devez entrer votre nom");
    }
    //Gestion des noms composés (détection des espaces des ( - ) et ( _ ) 
        //Ajout ou modification par ( - )
    //On génére un tableau des lettres du nom à partir de la valeur lue dans 'v'
    let vtab = [];
    vtab = v.split("");
    //On cherche la présence d'un espace ou d'un ( - ) ou d'un ( _ )  dans ce tableau (renvoie true ou false)
    let vtir = vtab.includes("");
    /*var regex = /""/gi;
    let vmod ;
    vmod = v.replace(regex, '-');*/



    //Vérification de la mécanique dans la console
    console.log(v, vtab, vtir);

    //Récupération du prénom, mise en majuscule
    w = document.getElementById("surname").value.toUpperCase();
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
    if (v==""){
        alert("Vous devez entrer votre prénom");
    }

    //Gestion des prénoms composés
    //On génére un tableau des lettres du prénom à partir de la valeur lue dans 'w'
    let g = [];
    g = w.split("");
    //On cherche la présence du tiret dans ce tableau (renvoie true ou false)
    let fr = g.includes("-");
    //Si true, on renvoie la position du tiret dans le tableau
    let trt;
    let abr;
    let abc;
    if (fr == true){
        trt = g.indexOf("-") ;
    
    //On recupère la première lettre du premier prenom
        abr = w.charAt();
    //On récupère la première lettre du deuxième prenom en prenant comme index renvoyé par indexOf() 
        abc = w.charAt(trt + 1);
    }
    else{
        abr = w.charAt();
        abc = "";
    }
    //Vérification de la mécanique dans la console
    console.log(g, fr, trt, abr, abc);

    // Récupération des info des pièces d'identité
    let numPi = document.getElementById("numPi").value;
    console.log(numPi);

    //Gestion des formats de date

        //Date de naissance
    //Déclaration d'un tableau destiné à recevoir la date
    let dtnaiss = [];
    /*Récupération de la date saisie dans l'input (format AAAA-MM-JJ (séparé par des tirets), si le navigateur
    a proposé un calendrier ou au format JJ-MM-AAAA (séparé par des tirets), si la date est entrée à la main)*/
    let dtnais = document.getElementById("dtNaiss").value;

    /*Pour palier à la régionalisation des navigateurs ou à leur incompatibilité avec l'input de type date,
    on va vérifier la valeur du premier élément du tableau. L'idée étant d'obtenir en sortie
    un format constant JJMMAAAA (sans tiret)*/
    dtnaiss = dtnais.split("-");
    
    /*Si cette valeur est supérieure à 31 (format AAAA-MM-JJ), 
    on va inverser tout le tableau avant de le renvoyer*/
    if (dtnaiss[0] > 31){
        dtnaiss.reverse(" ");
    }
    
    //Vérification de la mécanique dans la console
    console.log(dtNaiss, dtnais, dtnaiss);

        //Date de délivrance PI (on applique la même logique que pour la date de naissance)
    //Déclaration d'un tableau destiné à recevoir la date
    let dtdelivr = [];

    //Récupération de la date saisie dans l'input (format AAAA-MM-JJ)
    let dtpi = document.getElementById("dtDelivr").value;

    /*Remplissage du tableau en séparant la date en prenant comme parametre le tiret
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)*/
    
    dtdelivr = dtpi.split("-");

    if (dtdelivr[0] > 31){
        dtdelivr.reverse(" ");
    }

    //Vérification de la mécanique dans la console
    console.log(dtDelivr, dtpi, dtdelivr);



    //Récupération du nom de fichier pour renommage
    /*let chFile = document.getElementById("chooseFile").value;
    console.log(chFile);*/

    //Génération des sorties CAZ
    // Bricolage en attente de mieux pour coller les éléments du tableau dtnaiss
    document.getElementById("outCaz").innerHTML = "CAZ" + "_" + v + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";
    document.getElementById("outCaz0").innerHTML = "CAZ-0" + "_" + v + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";

    //Génération de la sortie PI
    // Bricolage en attente de mieux pour coller les éléments du tableau dtdelivr
    document.getElementById("outPi").innerHTML = "PI" + "_" + v + "_" + abr + abc + "_" + numPi + "_" + dtdelivr[0] + dtdelivr[1] + dtdelivr[2] + ".pdf";
    }



