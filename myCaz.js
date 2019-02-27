
function myCaz(){
    //Récupération du nom, mise en majuscule
    v = document.getElementById("name").value.toUpperCase();
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
    if (v==""){
        alert("Vous devez entrer votre nom");
    }
    //Vérification de la mécanique dans la console
    console.log(v);

    //Récupération du prénom, mise en majuscule
    w = document.getElementById("surname").value.toUpperCase();
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
    if (v==""){
        alert("Vous devez entrer votre prénom");
    }

    //Gestion des prénoms composés
    //On génére un tableau des lettres du prénom
    let g = [];
    g = w.split("");
    //On cherchge la présence du tiret dans ce tableau (renvoie true ou false)
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
    //Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    let dtnais = document.getElementById("dtNaiss").value;
    /*remplissage du tableau en séparant la date en prenant comme parametre le tiret
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)*/
    dtnaiss = dtnais.split("-").reverse(" ");
    //Vérification de la mécanique dans la console
    console.log(dtNaiss, dtnais, dtnaiss);

        //Date de délivrance PI
    //Déclaration d'un tableau destiné à recevoir la date
    let dtdelivr = [];
    //Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    let dtpi = document.getElementById("dtDelivr").value;
    /*Remplissage du tableau en séparant la date en prenant comme parametre le tiret
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)*/
    dtdelivr = dtpi.split("-").reverse(" ");
    //Vérification de la mécanique dans la console
    console.log(dtDelivr, dtpi, dtdelivr);

        //KBIS
    //Récupération du nom de l'entreprise du numéro de SIREN
    let nomEntrv = document.getElementById("nomEntr").value.toUpperCase();
    let numSIRv = document.getElementById("numSir").value;

    //Date KBIS
        //Déclaration d'un tableau destiné à recevoir la date
    let dtKBISt = [];
    //Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    let dtKBIS = document.getElementById("dtKBIS").value;
    /*Remplissage du tableau en séparant la date en prenant comme parametre le tiret
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)*/
    dtKBISt = dtKBIS.split("-").reverse(" ");
    //Vérification de la mécanique dans la console
    console.log(nomEntrv, numSIRv, dtKBIS, dtKBISt);

    // Gestion du choix SIREN(9chiffres) et SIRET(14 chiffres)
    let sirenChk = '';
    let sirenVal ;
    let siretChk = '';
    let siretVal ;
        //On vérifie si l'un des deux boutons est coché
        sirenChk = document.getElementById("siren").checked
        siretChk = document.getElementById("siret").checked

        //Si siren est true, on va vérifier que le nombre de chiffre est bien de 9
        if (sirenChk === true){
            sirenVal = document.getElementById("numSir").value.split("");
            if (sirenVal.length < 9 ){
                alert("Le numéro SIREN doit contenir au moins 9 chiffres");
            }
            else if (sirenVal.length > 9){
                alert("le numéro SIREN ne peut pas contenir plus de 9 chiffres");
            }
        }

         //Si siret est true, on va vérifier que le nombre de chiffre est bien de 14
         if (siretChk === true){
            siretVal = document.getElementById("numSir").value.split("");
            if (siretVal.length < 14 ){
                alert("Le numéro SIRET doit contenir au moins 14 chiffres");
            }
            else if (siretVal.length > 14){
                alert("le numéro SIRET ne peut pas contenir plus de 14 chiffres");
            }
        }
           
        //Vérification de la mécanique dans la console
        console.log(sirenVal, siretVal);


    //Génération des sorties CAZ
    // Bricolage en attente de mieux pour coller les éléments du tableau dtnaiss
    document.getElementById("outCaz").innerHTML = "CAZ" + "_" + v + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";
    document.getElementById("outCaz0").innerHTML = "CAZ-O" + "_" + v + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";

    //Génération de la sortie PI
    // Bricolage en attente de mieux pour coller les éléments du tableau dtdelivr
    document.getElementById("outPi").innerHTML = "PI" + "_" + v + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + "_" + numPi + ".pdf";
    
    //Génération de la sortie DUE
    document.getElementById("outDUE").innerHTML = "DUE" + "_" + v + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";
    
    //Génération de la sortie KBIS
    document.getElementById("outKBIS").innerHTML = "KBIS" + "_" + nomEntrv + "_" + numSIRv + "_" + dtKBISt[0] + dtKBISt[1] + dtKBISt [2] + ".pdf";
    
}

    



