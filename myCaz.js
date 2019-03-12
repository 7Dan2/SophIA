
function myCaz(){
    //Récupération du nom, mise en majuscule
    let nameV = document.getElementById("name").value.toUpperCase();
    //vérification de la présence du nom 
    
        if (nameV == ""){
            alert("Vous devez renseigner votre nom");
            document.getElementById("name").style.background="#ffbf80";
        }
        else if(nameV != ""){
            document.getElementById("name").style.background="seagreen";
            document.getElementById("name").style.color="white";
        }
        else {
            document.getElementById("name").style.background="white";
        }
    
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
        
    
    //Vérification de la mécanique dans la console
    console.log(nameV);

    //Récupération du prénom, mise en majuscule
    let surnameV = document.getElementById("surname").value.toUpperCase();
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
        if (surnameV == ""){
            alert("Vous devez entrer votre prénom");
            document.getElementById("surname").style.background="#ffbf80";
        }
        else if (surnameV != ""){
            document.getElementById("surname").style.background="seagreen";
            document.getElementById("surname").style.color="white";
        }
        else {
            document.getElementById("surname").style.background="white";
        }

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

    /*Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    Dans certains cas le champ de date n'offre pas de calendrier
    Il faut traiter l'éventualité des séparateur "/" en entrée afin qu'ils soient traités et convertis en "-"
    Il faut traiter l'éventualité de l'inversion des valeurs AAAA et JJ 
    */
        //Date de naissance
    //Déclaration d'un tableau destiné à recevoir la date de naissance
    let dtnaiss = [];
    //On récupère la valeur du champ date quel que soit son formatage
    let dtnais = document.getElementById("dtNaiss").value;
    //Si la date de naissance n'est pas renseignée, le rappeler à l'utilsateur
    if (dtnais == ""){
        alert ("Vous devez renseigner votre date de naissance");
        document.getElementById("dtNaiss").style.background="#ffbf80";
    }
    else if (dtnais != ""){
        document.getElementById("dtNaiss").style.background="seagreen";
        document.getElementById("dtNaiss").style.color="white";
    }
    else {
        document.getElementById("dtNaiss").style.background="white";
    }
    /*remplissage du tableau en séparant les éléménts de la date en prenant comme parametre le tiret qui est par 
    présent par défaut dans les champs de type 'date'
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)
    */

    /* 
    Sauf que des fois, le champ de type 'date' ne fonctionne pas sous certains navigateur,
    il faut alors filtrer ce qui est entré par l'utilisateur et voir comment le champ se comporte.
    */
    //Si l'utilisateur entre la date en séparant les élément par " - " :
    if (dtnais.includes("-")){
    /*
    On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
    l'année en premier on inverse les éléments AAAA et JJ
    */
        dtnaiss = dtnais.split("-");
        if (dtnaiss[0]>31){
            dtnaiss.reverse();
        }
    }
    /*
    //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
    */
    if (dtnais.includes("/")){
    //On entre les valeurs dans le tableau en gardant les " / "
    //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
        dtnaiss = dtnais.split("/");
        if (dtnaiss[0]>31){
            dtnaiss.reverse();
        }
    //On créé une boucle qui va permettre de parcourir le tableau
        for (let i = 0 ; i < dtnaiss.length ; i++){
        var dtnaissOut = [];
        dtnaissOut = dtnaiss[i].replace("/", "-");
        //var pos = dtnais.indexOf('/');
       //var dtnaiss1 = dtnaiss.splice(pos, 2);
        //var dtnaiss2 = dtnaiss.splice(pos, 5);
        }
    }
    
    //Vérification de la mécanique dans la console
    console.log("tableau dtnaiss: " + dtnaiss + " " + dtnaissOut);

        
        // ######### Pièces d'identité #########
    // Récupération du numéro de la pièce d'identité
    let numPi = document.getElementById("numPi").value;
    
    //Si le champ n'est pas rempli, on le rappele avec courtoisie à l'utilisateur
    if (numPi == ""){
        alert ("Veuillez renseigner votre numéro de pièce d'identité");
        document.getElementById("numPi").style.background="#ffbf80";
    }

    //Date de délivrance PI
    //Déclaration d'un tableau destiné à recevoir la date de la PI
    let dtdelivr = [];
    //Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    let dtpi = document.getElementById("dtDelivr").value;

    //Si la date de délivrance n'est pas renseignée, le rappeler à l'utilsateur
    if (dtpi == ""){
        alert ("Vous devez renseigner la date de délivrance de votre pièce d'identité");
        document.getElementById("dtDelivr").style.background="#ffbf80";
    }
    //Si elle a été renseignée on met une jolie douleur verte
    else if (dtpi !=""){
        document.getElementById("dtDelivr").style.background="seagreen";
        document.getElementById("dtDelivr").style.color="white";
    }
    //Pour éviter que ce soit vert tout le temps on met du blanc
    else {
        document.getElementById("dtDelivr").style.background="white";
    }

     /*remplissage du tableau en séparant les éléménts de la date en prenant comme parametre le tiret qui est par 
    présent par défaut dans les champs de type 'date'
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)
    */

    /* 
    Sauf que des fois, le champ de type 'date' ne fonctionne pas sous certains navigateur,
    il faut alors filtrer ce qui est entré par l'utilisateur et voir comment le champ se comporte.
    */
   //Si l'utilisateur entre la date en séparant les élément par " - " :
   if (dtpi.includes("-")){
    /*
    On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
    l'année en premier on inverse les éléments AAAA et JJ
    */
        dtdelivr = dtpi.split("-");
        if (dtpi[0]>31){
            dtpi.reverse();
        }
    }
    /*
    //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
    */
   if (dtdelivr.includes("/")){
    //On entre les valeurs dans le tableau en gardant les " / "
    //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
        dtdelivr = dtDelivr.split("/");
        if (dtDelivr[0]>31){
            dtdelivr.reverse();
        }
    //On créé une boucle qui va permettre de parcourir le tableau
    for (let i = 0 ; i < dtdelivr.length ; i++){
        var dtdelivrOut = [];
        dtdelivrOut = dtdelivr[i].replace("/", "-");
        }
    }   
    
    //Vérification de la mécanique dans la console
    console.log(dtDelivr, dtpi, dtdelivr, dtdelivrOut);

    // ### Vérification de la validité de la carte d'identité ###
    //On vérifie que l'un des deyx bouton radio est coché
    piChk = document.getElementById("cartid").checked;
    passprtChk = document.getElementById("passprt").checked;
    //Détermination des ms depuis le 01-01-1970 au moment de l'entrée de la date de la PI
    let dtOrigin = new Date();
    let origin = Date.now();
    //Détermination des ms au 01-01-2014 (date de passage de la validité de la CI à 15 ans)
    var dCi = Date.parse("January 01, 2014");
    //Détermination des ms à la valeur entrée comme date de délivrance de la PI OU du passport
    const dtValidPi = Date.parse(dtpi);
    //Comparaison des deux valeurs et assignation true/false a dtValidPiStatut 
    //Cette comparaison ne s'opère que si le bouton CI est coché
    let dtValidPiStatut; 
    let dtpiChk;
    if (dtpi == ""){
        dtpiChk = false;
    }
    //Alerte commune à l'absence de choix CI ou PP
    if (numPi != "" && (piChk == false && passprtChk == false)){
        alert("Vous devez sélectioner le bouton correspondant à votre pièce d'identité");
        document.getElementById("numPi").style.background="#ffbf80";
    }
    // Pour la validité de la CI
    if ((piChk == true && passprtChk == false) && dtValidPi < dCi) {
        alert("carte d'identité trop ancienne");
        document.getElementById("dtDelivr").style.background="crimson";
        document.getElementById("dtDelivr").style.color="white";
        dtValidPiStatut = true;
    }
    else if ((piChk == true && passprtChk == false) && dtValidPi > dCi){
        document.getElementById("dtDelivr").style.background="seagreen";
        document.getElementById("dtDelivr").style.color="white";
        dtValidPiStatut = false;
    }

    //Vérification de la validité du passeport
//La date de référence est prise dans la partie du dessus

//Détermination des ms au 01-01-2014 (validité des passeport à 10 ans pour ceux)
var dPp = Date.parse("March 01, 2001");
//Détermination des ms à la valeur entrée comme date de délivrance de la CI
        //la valeur est déjà stockée dans 'dtValidPi'
// Pour la validité du PP
if ((piChk == false && passprtChk == true) && dtValidPi < dPp) {
    alert("Ce passeport n'est plus valide");
    document.getElementById("dtDelivr").style.background="crimson";
    document.getElementById("dtDelivr").style.color="white";
    dtValidPiStatut = true;
}
else if ((piChk == false && passprtChk == true) && dtValidPi > dPp){
    document.getElementById("dtDelivr").style.background="seagreen";
    document.getElementById("dtDelivr").style.color="white";
    dtValidPiStatut = false;
}
//Particularité pour les mineurs (à développer)
/*
Prendre la date de naissance et la comparer à la date du jour
Si la différence est supérieure à la valeur en ms de 18 ans :
    La date de validité du PP sera de 10 ans (personne majeure),
Sinon si la différence est inférieure à la valeur en ms de 18 ans :
    La date de validité du PP sera de 5 ans (personne mineure)
*/

//On vérifie la mécanique dans la console
console.log(origin, dCi, dtValidPi)

    //######### ENTREPRISE #########
    //Récupération du nom de l'entreprise du numéro de SIREN
    let nomEntrV = document.getElementById("nomEntr").value.toUpperCase();

    /*
    On laisse par défaut visible le champ du nom de l'entreprise 
    Si il n'est pas renseigné, les autres champs n'apparraissent pas (à développer)
    */
    let numSirV  = document.getElementById("numSir").value;
    if (nomEntrV == ""){
        document.getElementById("divHid1").hidden=false;
        document.getElementById("divHid2").hidden=true;
        }
console.log("nom d'entreprise:" + nomEntrV, numSirV);


    // Gestion du choix SIREN(9chiffres) et SIRET(14 chiffres)
    let sirenChk = '', sirenVal = '' , siretChk = '', siretVal = '';
    
        //On vérifie si l'un des deux boutons est coché
        sirenChk = document.getElementById("siren").checked;
        siretChk = document.getElementById("siret").checked;

        //On vérifie que le nom d'entreprise est rempli si l'on veut saisir un numéro
        if((sirenChk || siretChk == true) && (sirenVal || siretVal == "")){
            alert("N'oubliez pas de saisir un nom d'entreprise");
            document.getElementById("nomEntr").style.background = "crimson";
        }

        //Si siren est true, on va vérifier qu'il s'agit bien de chiffres et ensuite que le nombre de chiffres est bien de 9
        if (sirenChk == true && sirenVal !=NaN){
            sirenVal = document.getElementById("numSir").value.split("");
            if (sirenVal.length < 9 ){
                alert("Le numéro <b>SIREN</b> doit contenir au moins 9 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'crimson';
            }
            else if (sirenVal.length > 9){
                alert("le numéro SIREN ne peut pas contenir plus de 9 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'crimson';
            }
            else {
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'seagreen';
            }
        }

         //Si siret est true, on va vérifier que le nombre de chiffre est bien de 14
         if (siretChk == true){
            siretVal = document.getElementById("numSir").value.split("");
            if (siretVal.length < 14 ){
                alert("Le numéro <b>SIRET</b> doit contenir au moins 14 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'crimson';
            }
            else if (siretVal.length > 14){
                alert("le numéro SIRET ne peut pas contenir plus de 14 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'crimson';
            }
            else {
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'seagreen';
            }

        }
           
        //Vérification de la mécanique dans la console
        console.log(sirenVal, siretVal);
      
    
        //Date KBIS
    //Déclaration d'un tableau destiné à recevoir la date
    let dtKBISt = [];
    //On récupère la valeur du champ date KBIS quel que soit son formatage
    let dtKBIS = document.getElementById("dtKbis").value;
    //Si le nom d'entreprise est renseigné mais pas la date de KBIS, le rappeler à l'utilsateur
    if (nomEntrV != "" && dtKBIS == ""){
        alert ("Vous devez renseigner la date d'édition du KBIS");
        document.getElementById("dtKbis").style.background="#ffbf80";
    }
    else if (nomEntrV != "" && dtKBIS != ""){
        document.getElementById("dtKbis").style.background="seagreen";
        document.getElementById("dtKbis").style.color="white";
    }
    else {
        document.getElementById("dtKbis").style.background="white";
    }
    /*remplissage du tableau en séparant les éléménts de la date en prenant comme parametre le tiret qui est par 
    présent par défaut dans les champs de type 'date'
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)
    */

    /* 
    Sauf que des fois, le champ de type 'date' ne fonctionne pas sous certains navigateur,
    il faut alors filtrer ce qui est entré par l'utilisateur et voir comment le champ se comporte.
    */
    //Si l'utilisateur entre la date en séparant les élément par " - " :
    if (dtKBIS.includes("-")){
    /*
    On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
    l'année en premier on inverse les éléments AAAA et JJ
    */
        dtKBISt = dtKBIS.split("-");
        if (dtKBISt[0]>31){
            dtKBISt.reverse();
        }
    }
    /*
    //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
    */
    if (dtKBIS.includes("/")){
    //On entre les valeurs dans le tableau en gardant les " / "
    //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
        dtKBISt = dtKBIS.split("/");
        if (dtKBISt[0]>31){
            dtKBISt.reverse();
        }
    //On créé une boucle qui va permettre de parcourir le tableau
    for (let i = 0 ; i < dtKBISt.length ; i++){
        var dtKbisOut = [];
        dtKbisOut = dtKbist[i].replace("/", "-");
        //var pos = dtnais.indexOf('/');
       //var dtnaiss1 = dtnaiss.splice(pos, 2);
        //var dtnaiss2 = dtnaiss.splice(pos, 5);
        }
    }


    //On va vérifier que la date d'édition du KBIS n'est pas supérieure à 3 mois (à développer)
    dKB = 7776000000; // valeur en ms de 3 mois (3*30*24*60*60*1000)
    
    
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
        document.getElementById("outPi").style.background='#ffbf80';
    }
    else {
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='seagreen';

        document.getElementById("pOutCaz").style.background='seagreen';
        document.getElementById("pOutCazO").style.background='seagreen';
        document.getElementById("pOutPi").style.background='seagreen';

        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='seagreen';

        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='seagreen';

        //et on active le lien
        document.getElementById("inputCazFile").disabled = false;
        document.getElementById("inputCazOFile").disabled = false;
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
        document.getElementById("outPi").style.background='seagreen';
    }
    


    //Génération de la sortie DUE
    document.getElementById("outDUE").innerHTML = "DUE" + "_" + nameV + "_" + abr + abc + "_" + dtnaiss[0] + dtnaiss[1] + dtnaiss[2] + ".pdf";
    
    //Génération de la sortie KBIS
    document.getElementById("outKBIS").innerHTML = "KBIS" + "_" + nomEntrV + "_" +numSirV+ "_" + dtKBISt[0] + dtKBISt[1] + dtKBISt [2] + ".pdf";
    


}



    



