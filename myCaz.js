
function myCaz(){
    //Récupération du nom, mise en majuscule
    let nameV = document.getElementById("name").value.toUpperCase();
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
    
    //Vérification de la mécanique dans la console
    console.log(nameV);

    //Récupération du prénom, mise en majuscule
    let surnameV = document.getElementById("surname").value.toUpperCase();
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
    

    //Gestion des prénoms composés
    //On génére un tableau des lettres du prénom
    let surnameArray = [];
    surnameArray = surnameV.split("");
    //On cherchge la présence du tiret dans ce tableau (renvoie true ou false)
    let fr = surnameArray.includes("-");
    //Si true, on renvoie la position du tiret dans le tableau
    let trt;
    let abr;
    let abc;
    if (fr == true){
        trt = surnameArray.indexOf("-") ;
    
    //On recupère la première lettre du premier prenom
        abr = surnameV.charAt();
    //On récupère la première lettre du deuxième prenom en prenant comme index renvoyé par indexOf() 
        abc = surnameV.charAt(trt + 1);
    }
    else{
        abr = surnameV.charAt();
        abc = "";
    }
    //Vérification de la mécanique dans la console
    console.log(surnameArray, fr, trt, abr, abc);

    // ######### Gestion des formats de date #########

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

        // ######### Pièces d'identité #########
    // Récupération des info des pièces d'identité
    let numPi = document.getElementById("numPi").value;
    console.log(numPi);

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

    //Vérification de la validité de la carte d'identité


    piChk = document.getElementById("cartid").checked;
    passprtChk = document.getElementById("passprt").checked;

    //Détermination des ms depuis le 01-01-1970 au moment de l'entrée de la date de la CI
    let dtOrigin = new Date();
    let origin = Date.now();
    //Détermination des ms au 01-01-2014 (date de passage de la validité de la CI à 15 ans)
    var d = Date.parse("January 01, 2014");
    //Détermination des ms à la valeur entrée comme date de délivrance de la CI
    const dtValidPi = Date.parse(dtpi);
    //Comparaison des deux valeurs et assignation true/false a dtValidPiStatut 
    //Cette comparaison ne s'opère que si le bouton CI est coché
    let dtValidPiStatut; 
    let dtpiChk;
    if (piChk == false && passprtChk == false){
        alert("Vous devez sélectioner le bouton correspondant à votre document");
    }
    if (dtpi == ""){
        dtpiChk = false
    }
    if (piChk == true && dtValidPi < d) {
        alert("carte d'identité trop ancienne");
        document.getElementById("dtDelivr").style.background="crimson";
        document.getElementById("dtDelivr").style.color="white";
        dtValidPiStatut = true;
    }
    else {
        dtValidPiStatut = false;
    }
console.log(origin, d, dtValidPi)

    
    

    
 
        //######### ENTREPRISE #########
    //Récupération du nom de l'entreprise du numéro de SIREN
    

    /*
    On laisse par défaut visible le champ du nom de l'entreprise 
    Si il n'est pas modifié, les autres champs n'apparraissent pas (à développer)
    */
   

   
    let nomEntrV = document.getElementById("nomEntr").value.toUpperCase();
    let numSirV  = document.getElementById("numSir").value;
    if (nomEntrV = ""){
        document.getElementById("divHid1").hidden=true;
        document.getElementById("divHid2").hidden=true;
        }
console.log("nom d'entreprise:" + nomEntr, nomEntrV,numSirV);


    // Gestion du choix SIREN(9chiffres) et SIRET(14 chiffres)
    let sirenChk = '', sirenVal = '' , siretChk = '', siretVal = '';
    
        //On vérifie si l'un des deux boutons est coché
        sirenChk = document.getElementById("siren").checked;
        siretChk = document.getElementById("siret").checked;

        //On vérifie que le nom d'entreprise est rempli si l'on veut saisir un numéro
        if((sirenChk || siretChk == true) && (sirenVal || siretVal == "")){
            alert("N'oubliez pas de saisir un nom d'entreprise");
            document.getElementById("nomEntr").style.background = 'red';
        }

        //Si siren est true, on va vérifier qu'il s'agit bien de chiffres et ensuite que le nombre de chiffres est bien de 9
        if (sirenChk === true && sirenVal !==NaN){
            sirenVal = document.getElementById("numSir").value.split("");
            if (sirenVal.length < 9 ){
                alert("Le numéro SIREN doit contenir au moins 9 chiffres");
                document.getElementById("numSir").style.color = 'surnameVhite';
                document.getElementById("numSir").style.background = 'red';
            }
            else if (sirenVal.length > 9){
                alert("le numéro SIREN ne peut pas contenir plus de 9 chiffres");
                document.getElementById("numSir").style.color = 'surnameVhite';
                document.getElementById("numSir").style.background = 'red';
            }
            else {
                document.getElementById("numSir").style.color = 'surnameVhite';
                document.getElementById("numSir").style.background = 'green';
            }
        }

         //Si siret est true, on va vérifier que le nombre de chiffre est bien de 14
         if (siretChk === true){
            siretVal = document.getElementById("numSir").value.split("");
            if (siretVal.length < 14 ){
                alert("Le numéro SIRET doit contenir au moins 14 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'tomato';
            }
            else if (siretVal.length > 14){
                alert("le numéro SIRET ne peut pas contenir plus de 14 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'tomato';
            }
            else {
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'greenyellow';
            }

        }
           
        //Vérification de la mécanique dans la console
        console.log(sirenVal, siretVal);
      
    
        //Date KBIS
    //Déclaration d'un tableau destiné à recevoir la date
    let dtKBISt = [];
    //Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    let dtKBIS = document.getElementById("dtKbis").value;
    /*Remplissage du tableau en séparant la date en prenant comme parametre le tiret
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)*/
    dtKBISt = dtKBIS.split("-").reverse(" ");
    //Vérification de la mécanique dans la console
    

    // ######### Génération des sorties #########

    // Bricolage en attente de mieux pour assembler les éléments du tableau dtnaiss
    let outCazArray= [];
    let outCazContent;
    let outCaz = document.getElementById("outCaz").innerHTML = "CAZ" + "_" + nameV + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";
    //On créé un tableau et l'on y insère les données de outCaz pour enuite chercher si un champ n'est pas rempli (date vide renvoie undefined)
    outCazArray = outCaz.split("  ");
    outCazContent = outCaz.includes("undefined");
    //La vérification de la présence des champs vides nom prénom et date de naissance s'étend sur la génération de la PI
    if (outCazContent == true || nameV == "" || surnameV == "") {
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='crimson';

        document.getElementById("pOutCaz").style.background='crimson';
        document.getElementById("pOutCazO").style.background='crimson';
        document.getElementById("pOutPi").style.background='crimson';

        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='crimson';

        
        //On désactive également le lien
        document.getElementById("inputCazFile").disabled = true;

    }
    else if ((outCazContent == true || nameV == "" || surnameV == "") && numPi == "") {
        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='orange';
    }
    else {
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='forestgreen';

        document.getElementById("pOutCaz").style.background='forestgreen';
        document.getElementById("pOutCazO").style.background='forestgreen';
        document.getElementById("pOutPi").style.background='forestgreen';

        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='forestgreen';

        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='forestgreen';

        //et on active le lien
        document.getElementById("inputCazFile").disabled = false;
        document.getElementById("inputCazOFile").disabled = false;
    }
    if (nameV == ""){
        alert("Vous devez entrer votre nom");
    }
    if (surnameV == ""){
        alert("Vous devez entrer votre prénom");
    }
    
    console.log("tableau outCaz :" + "" + outCazArray + "/" + "ce tableau contient il undefined ?:" + "" + outCazContent);
 
    //Sortie CAZ-O
    let outCazO = document.getElementById("outCazO").innerHTML = "CAZ-O" + "_" + nameV + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";
    
    //Génération de la sortie PI
    // Bricolage en attente de mieux pour coller les éléments du tableau dtdelivr
    document.getElementById("outPi").innerHTML = "PI" + "_" + nameV + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + "_" + numPi + ".pdf";
    if (numPi == "" || dtValidPiStatut == true || (piChk == false && passprtChk == false) || dtpiChk == false){
        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='crimson';
    }
    else {
        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='forestgreen';
    }
    


    //Génération de la sortie DUE
    document.getElementById("outDUE").innerHTML = "DUE" + "_" + nameV + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";
    
    //Génération de la sortie KBIS
    document.getElementById("outKBIS").innerHTML = "KBIS" + "_" + nomEntrV + "_" +numSirV+ "_" + dtKBISt[0] + dtKBISt[1] + dtKBISt [2] + ".pdf";
    


}



    



