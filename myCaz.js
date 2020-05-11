function myCaz()
{
    // ######### Récupération du nom, mise en majuscule, découpage des lettres dans un tableau afin
    // de vérifier la présence de chiffre(s) #########

    //On declare une variable pour stocker un booleen dont l'utilté est de bloquer les noms de fichiers générés
    let nameValueValidity;

    let nameValue = document.getElementById("name").value.toUpperCase();
    //On génére un tableau des lettres du nom
    let nameValueArray = nameValue.split("");
    // Dans lequel on vérifie si un chiffre s'y cache
    let someNumbersInNameLetters = nameValueArray.some(searchSomeNumbersInNameLetters);
    //A l'aide d'une fonction cherchant une valeur supérieure à 0, ce qu'une lettre ne peut pas faire
    function searchSomeNumbersInNameLetters(value)
    {
    return value > 0;
    }
    //La methode .some() renvoie true ou false, dans le cas de true on alerte l'utilisateur et l'on bloque la sortie 
    //si un chiffre est présent dans le nom
    if (someNumbersInNameLetters == true) 
    {
    alert ('Attention :\nLes nombres ne sont pas admis dans le nom');
    document.getElementById("name").style.background="#ffbf80";
    document.getElementById("name").style.clor="white";
    nameValueValidity = false;
    }

    //Vérification de la mécanique dans la console
    //console.log(nameValue);
    
    
    // ######### Récupération du prénom, mise en majuscule, découpage des lettres dans un tableau afin
    // de vérifier la présence de chiffre(s), recherche du tiret (-) si prénom composé #########

    //On declare une variable pour stocker un booleen dont l'utilté est de bloquer les noms de fichiers générés
    //si un chiffre est présent dans le prénom
    let surnameValueValidity;

    let surnameValue = document.getElementById("surname").value.toUpperCase();
    
    // ######### Gestion des prénoms composés #########
    
    //On génére un tableau des lettres du prénom
    let surnameLettersArray = surnameValue.split("");
    // Dans lequel on vérifie si un chiffre s'y cache
    let someNumbersInSurnameLetters = surnameLettersArray.some(searchSomeNumbersInSurnameLetters);
    //A l'aide d'une fonction cherchant une valeur supérieure à 0, ce qu'une lettre ne peut pas faire
    function searchSomeNumbersInSurnameLetters(value)
    {
    return value > 0;
    }
    //La methode .some() renvoie true ou false, dans le cas de true on alerte l'utilisateur et l'on bloque la sortie 
    if (someNumbersInSurnameLetters == true)
    {
    alert ('Attention :\nLes nombres ne sont pas admis dans le prénom');
    document.getElementById("surname").style.background = "#ffbf80";
    document.getElementById("surname").style.color = "white";
    surnameValueValidity = false
    }

    //On cherche la présence du tiret dans ce tableau (renvoie true ou false)
    let isDashInSurname = surnameLettersArray.includes("-");
    //Si true, on renvoie la position du tiret dans le tableau
    let dashInSurnamePosition;
    let surnameFirstLetter;
    let surnameSecondLetter;
    if (isDashInSurname == true){
        dashInSurnamePosition = surnameLettersArray.indexOf("-") ;
    
    //On recupère la première lettre du premier prenom
        surnameFirstLetter = surnameValue.charAt();
    //On récupère la première lettre du deuxième prenom en prenant comme index renvoyé par indexOf() 
    surnameSecondLetter = surnameValue.charAt(dashInSurnamePosition + 1);
    }
    else{
        surnameFirstLetter = surnameValue.charAt();
        surnameSecondLetter = "";
    }
    //Vérification de la mécanique dans la console
    console.log(surnameLettersArray, isDashInSurname, dashInSurnamePosition , surnameFirstLetter, surnameSecondLetter);


    // ######### Gestion des formats de date #########

    /*Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    Dans certains cas le champ de date n'offre pas de calendrier
    Il faut traiter l'éventualité des séparateur "/" en entrée afin qu'ils soient traités et convertis en "-"
    Il faut traiter l'éventualité de l'inversion des valeurs AAAA et JJ 
    */
   
    //Date de naissance
    
   //Déclaration d'un tableau destiné à recevoir la date de naissance
   let dtNaissArray = [];
   //On récupère la valeur du champ date quel que soit son formatage
       let dtnais = document.getElementById("dtNaiss").value;
   //Si la date de naissance n'est pas renseignée, le rappeler à l'utilsateur
   
   /*
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
   */
   /*
   remplissage du tableau en séparant les éléments de la date en prenant comme parametre le tiret qui est par 
   présent par défaut dans les champs de type 'date'
   puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)
   */

   /* 
   Sauf que des fois, le champ de type 'date' ne fonctionne pas sous certains navigateur,
   il faut alors filtrer ce qui est entré par l'utilisateur et voir comment le champ se comporte.
   */
   //Si l'utilisateur entre la date en séparant les élément par " - " :
   if (dtnais.includes("-"))
   {
   /*
   On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
   l'année en premier on inverse les éléments AAAA et JJ
   */
       dtNaissArray = dtnais.split("-");
       if (dtNaissArray[0] > 31)
       {
           dtNaissArray.reverse();
       }
   }
   /*
   //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
   */
   if (dtnais.includes("/"))
   {
   //On entre les valeurs dans le tableau en gardant les " / "
   //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
       dtNaissArray = dtnais.split("/");
       if (dtNaissArray [0] > 31)
       {
           dtNaissArray.reverse();
       }
   //On créé une boucle qui va permettre de parcourir le tableau
       for (let i = 0 ; i < dtNaissArray.length ; i++)
       {
       var dtnaissOut = [];
       dtnaissOut = dtNaissArray[i].replace("/", "-");
       //var pos = dtnais.indexOf('/');
      //var dtnaiss1 = dtnaiss.splice(pos, 2);
       //var dtnaiss2 = dtnaiss.splice(pos, 5);
       }
   }
   
   //Vérification de la mécanique dans la console
   console.log("tableau dtnaiss: " + dtNaissArray + " " + dtnaissOut);

   
        
        // ######### Pièces d'identité #########

//Déclaration de toutes les variables
let dtValidPiStatut;
let piChk;
let dtpiChk;
let passprtChk;

//Traitement de l'origine de la PI
//document.getElementById("cIF").selected;
//document.getElementById("passPrtF").selected;
//document.getElementById("cIEu").selected;
//document.getElementById("titrSej").selected;

    // Récupération du numéro de la pièce d'identité
    let numPi = document.getElementById("numPi").value;
    
    //Si le champ n'est pas rempli, on le rappele avec courtoisie à l'utilisateur
    
    /*
    if (numPi == ""){
        alert ("Veuillez renseigner votre numéro de pièce d'identité");
        document.getElementById("numPi").style.background="#ffbf80";
    }
    else if (numPi != ""){
        document.getElementById("numPi").style.background="blue";
    }
    */
   //Si il s'obstine on bloque la sortie outPi avec un message

    //Dans le choix de l'origine du document :
        //Si c'est la carte d'identité française qui est choisie
    if (cIF.selected == true)
    
    {
        
        
    //Date de délivrance PI
    //Déclaration d'un tableau destiné à recevoir la date de la PI
    let dtdelivr = [];
    //Récupération de la date saisie dans l'input (format AAAAMMJJ séparé par des tirets)
    let dtpi = document.getElementById("dtDelivrPi").value;

    //Si la date de délivrance n'est pas renseignée, le rappeler à l'utilsateur
    if (dtpi == "")
        {
        alert ("Vous devez renseigner la date de délivrance de votre pièce d'identité");
        document.getElementById("dtDelivrPi").style.background="#ffbf80";
        }
    //Si elle a été renseignée on met une jolie douleur verte
    //else if (dtpi !=""){
      //  document.getElementById("dtDelivrPi").style.background="seagreen";
        //document.getElementById("dtDelivrPi").style.color="white";
    //}
    //Pour éviter que ce soit vert tout le temps on met du blanc
    //else {
     //   document.getElementById("dtDelivrPi").style.background="white";
    //}

     /*remplissage du tableau en séparant les éléments de la date en prenant comme parametre le tiret qui est par 
    présent par défaut dans les champs de type 'date'
    puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)
    */

    /* 
    Sauf que des fois, le champ de type 'date' ne fonctionne pas sous certains navigateur,
    il faut alors filtrer ce qui est entré par l'utilisateur et voir comment le champ se comporte.
    */
   //Si l'utilisateur entre la date en séparant les élément par " - " :
   if (dtpi.includes("-"))
   {
    /*
    On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
    l'année en premier on inverse les éléments AAAA et JJ
    */
        dtdelivr = dtpi.split("-");
        if (dtpi[0] > 31)
        {
        dtpi.reverse();
        }
    }
    /*
    //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
    */
   if (dtdelivr.includes("/"))
   {
    //On entre les valeurs dans le tableau en gardant les " / "
    //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
        dtdelivr = dtDelivrPi.split("/");
        if (dtDelivrPi[0] > 31)
        {
        dtdelivr.reverse();
        }
    //On créé une boucle qui va permettre de parcourir le tableau
    //Et l'on y remplace les / par des -
    for (let i = 0 ; i < dtdelivr.length ; i++)
        {
        var dtdelivrOut = [];
        dtdelivrOut = dtdelivr[i].replace("/", "-");
        }
    }   
    
    //Vérification de la mécanique dans la console
    console.log(numPi, dtDelivrPi, dtpi, dtdelivr, dtdelivrOut);

    // ### Vérification de la validité de la carte d'identité ###

    
    //Détermination des ms depuis le 01-01-1970 au moment de l'entrée de la date de la PI
    let dtOrigin = new Date();
    let origin = Date.now();
    //Détermination des ms au 02-01-2014 (date de passage de la validité de la CI à 15 ans)
    var dMaxValid = Date.parse("January 02, 2004");
    //Détermination des ms à la valeur entrée comme date de délivrance de la PI OU du passport
    let dtValidPi = Date.parse(dtpi);
    //Comparaison des deux valeurs et assignation true/false a dtValidPiStatut 
    
    //Si la date de delivr de la CI est posterieure a dMaxValid sa validité est de 15ans
    
    //Sinon si elle est inférieure il faut ajouter 10ans et la comparer a la date du jour
//Si la date est inférieure à la date du jour indiquer "perimé" 

    
// Pour la validité de la CI
    //15 ans
    const fifteenYears = 473040000000;
    //14 ans
    const forteenYears = 441504000000;
    // 1 an
    const oneYear = 31536000000;

    let calcDiffYear = dtValidPi + fifteenYears;
    let calcOneYearLeft = dtValidPi + forteenYears;
    //let dtValidPiStatut;
   //On prend la date de l'input dtpi(dtValidPi):

    //Si elle est avant 02-01-2004 :
    //on lui appliquera le calcul de validité 10 ans
    if (dtValidPi < dMaxValid)
    {
        document.getElementById("dtDelivrPi").style.background="crimson";
        document.getElementById("dtDelivrPi").style.color="white";
        alert("La validité de votre carte est dépassée: \n Carte antérieure au 02 janvier 2004: validité 10 ans"); 
    }
    
    // Si la date est postérieure à 02-01-2004 :
    // On va appliquer un calcul de validité 15 ans
    // Si cette validité est inférieure à la date du jour on donnera une information
    if ((dtValidPi > dMaxValid) && (calcDiffYear < origin))
    { 
        alert("La validité de votre carte est dépassée: \n Dépassement du délai de validité de 15 ans");
        document.getElementById("dtDelivr").style.background="crimson";
        document.getElementById("dtDelivr").style.color="white";
        dtValidPiStatut = true;
    }
    // Si cette validité est proche du terme dans l'anée
    else if ((dtValidPi > dMaxValid) && (calcOneYearLeft > (origin - oneYear)) && (calcOneYearLeft < origin))
    {
        alert("Votre carte d'identité va expirer dans moins d'un an, pensez à la renouveler");
        document.getElementById("dtDelivrPi").style.background="seagreen";
        document.getElementById("dtDelivrPi").style.color="#ffbf80";
        dtValidPiStatut = false;
    }
    // Si la validité est bonne (bonne bonne bonne ...)
    else if ((dtValidPi > dMaxValid) && (calcDiffYear > origin))
    {
        document.getElementById("dtDelivrPi").style.background="seagreen";
        document.getElementById("dtDelivrPi").style.color="white";
        dtValidPiStatut = false;
    }
    console.log("date du jour :" + " " + origin + " / " + "date délivrance :" + " " + dtValidPi + " / " + "date délivr + 15ans :" + " " + calcDiffYear + " / " + "date - 1 an :" + " " + calcOneYearLeft);
   
//Vérification de la validité du passeport  
//La date de référence est prise dans la partie du dessus 'origin'

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
console.log(origin, dMaxValid, "date de validité:" + dtValidPi);
}

    //######### ENTREPRISE #########
    //Récupération du nom de l'entreprise du numéro de SIREN
    let nomEntrV = document.getElementById("nomEntr").value.toUpperCase();

    /*
    On laisse par défaut visible le champ du nom de l'entreprise 
    Si il n'est pas renseigné, les autres champs n'apparraissent pas (à développer)
    */
    /*$let numSirV  = document.getElementById("numSir").value;
    if (nomEntrV != "")
    {
        //document.getElementById("divHid1").style.display=initial
        //document.getElementById("divHid2").hidden=true;
    }*/
console.log("nom d'entreprise:" + nomEntrV);


    // Gestion du choix SIREN(9chiffres) et SIRET(14 chiffres)
    let sirenChk = '', siretChk = '';
    let numSirV = document.getElementById("numSir").value;
    
        //On vérifie si l'un des deux boutons est coché
        sirenChk = document.getElementById("siren").checked;
        siretChk = document.getElementById("siret").checked;

        //On vérifie que le nom d'entreprise est rempli si l'on veut saisir un numéro
        if(sirenChk == true || siretChk == true)
        {
            if(numSirV == "")
            {
            alert("N'oubliez pas de saisir un nom d'entreprise");
            document.getElementById("nomEntr").style.color = 'white';
            document.getElementById("nomEntr").style.background = "#ffbf80";
            }
            else
            {
            document.getElementById("nomEntr").style.color = 'white';
            document.getElementById("nomEntr").style.background = "seagreen";
            }
        }
        
        //Si siren est true, on va vérifier qu'il s'agit bien de chiffres et ensuite que le nombre de chiffres est bien de 9
        if (sirenChk == true)
        {
            sirenVal = document.getElementById("numSir").value.split("");
            if (sirenVal.length < 9 )
            {
                alert("Le numéro SIREN doit contenir au moins 9 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'crimson';
            }
            else if (sirenVal.length > 9)
            {
                alert("le numéro SIREN ne peut pas contenir plus de 9 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'crimson';
            }
            else 
            {
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'seagreen';
            }
        }

         //Si siret est true, on va vérifier que le nombre de chiffre est bien de 14
         if (siretChk == true)
         {
            siretVal = document.getElementById("numSir").value.split("");
            if (siretVal.length < 14 )
            {
                alert("Le numéro SIRET doit contenir au moins 14 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'crimson';
            }
            else if (siretVal.length > 14)
            {
                alert("le numéro SIRET ne peut pas contenir plus de 14 chiffres");
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'crimson';
            }
            else
            {
                document.getElementById("numSir").style.color = 'white';
                document.getElementById("numSir").style.background = 'seagreen';
            }

        }
           
        //Vérification de la mécanique dans la console
        console.log(numSirV);
      
    
        //Date KBIS
    //Déclaration d'un tableau destiné à recevoir la date
    let dtKBISt = [];
    //On récupère la valeur du champ date KBIS quel que soit son formatage
    let dtKbisV = document.getElementById("dtKbis").value;
    //Si le nom d'entreprise est renseigné mais pas la date de KBIS, le rappeler à l'utilsateur
    if (nomEntrV != "" && dtKbisV == "")
    {
        alert ("Vous devez renseigner la date d'édition du KBIS");
        document.getElementById("dtKbis").style.background="#ffbf80";
    }
    //Si le nom d'entreprise et la date du KBIS sont renseignés, on vérifie alors que la 
    //date d'édition du KBIS n'est pas supérieure à 3 mois
    if (nomEntrV != "" && dtKbisV != "")
    {
        let origin = Date.now();
        let threeMonths = 8035200000; // valeur en ms de 3 mois (3*31*24*60*60*1000)
        let calcDiffMonth;
        let dtValidKb = Date.parse(dtKbisV);
    
        if (dtValidKb + threeMonths > origin)
        {
        document.getElementById("dtKbis").style.color = 'white';
        document.getElementById("dtKbis").style.background = "seagreen";
        document.getElementById("outKBIS").style.color = "white";
        document.getElementById("outKBIS").style.background = "seagreen";

        calcDiffMonth = true;
        }

    if (dtValidKb + threeMonths < origin)
    {
        let txt = "Fiche KBIS est trop ancienne";
        document.getElementById("dtKbis").style.background="crimson";
        document.getElementById("dtKbis").style.color="white";
        alert=("Votre fiche KBIS est trop ancienne\nLa validité requise est moins de trois mois");  
        document.getElementById("outKBIS").style.color = "white";
        document.getElementById("outKBIS").style.background = "crimson";
        document.getElementById("outKBIS").innerHTML = txt;
        calcDiffMonth = false;

    }
    console.log("date kbis reçue:" + dtValidKb, "date courante:" + origin, "la date KBIS est-elle bonne ?:" + calcDiffMonth);
        
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
    if (dtKbisV.includes("-"))
    {
    /*
    On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
    l'année en premier on inverse les éléments AAAA et JJ
    */
        dtKBISt = dtKbisV.split("-");
        if (dtKBISt[0]>31)
        {
            dtKBISt.reverse();
        }
    }
    /*
    //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
    */
    if (dtKbisV.includes("/"))
    {
    //On entre les valeurs dans le tableau en gardant les " / "
    //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
        dtKBISt = dtKbisV.split("/");
        if (dtKBISt[0]>31)
        {
            dtKBISt.reverse();
        }
    //On créé une boucle qui va permettre de parcourir le tableau
        for (let i = 0 ; i < dtKBISt.length ; i++)
        {
        var dtKbisOut = [];
        dtKbisOut = dtKbist[i].replace("/", "-");
        //var pos = dtnais.indexOf('/');
       //var dtnaiss1 = dtnaiss.splice(pos, 2);
        //var dtnaiss2 = dtnaiss.splice(pos, 5);
        }
    }


    

    
    // ######### Génération des sorties #########

    // Bricolage en attente de mieux pour assembler les éléments du tableau dtnaiss
    //let outCazArray= [];
    //let outCazContent;

    let outputErrorText = "Veuillez corriger les erreurs signalées"

    if (nameValue == "" || surnameFirstLetter == "" || dtnais == "" || nameValueValidity == false || surnameValueValidity == false)
    {
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='crimson';

        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='crimson';

        document.getElementById("outDUE").style.color='white';
        document.getElementById("outDUE").style.background='crimson';

        document.getElementById("outCaz").innerHTML = outputErrorText;
        document.getElementById("outCazO").innerHTML = outputErrorText;
        document.getElementById("outDUE").innerHTML = outputErrorText;
        document.getElementById("outPi").innerHTML = outputErrorText;
        //document.getElementById("pOutCaz").style.background='crimson';
        //document.getElementById("pOutCazO").style.background='crimson';
        //document.getElementById("pOutPi").style.background='crimson';
    }

    else if (nameValue != "" && surnameFirstLetter != "" && dtnais != "" && nameValueValidity != false && surnameValueValidity != false)
    {
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='seagreen';
    
        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='seagreen';

        document.getElementById("outDUE").style.color='white';
        document.getElementById("outDUE").style.background='seagreen';

            //Sortie CAZ & DUE
        document.getElementById("outCaz").innerHTML = "CAZ" + "_" + nameValue + "_" + surnameFirstLetter + surnameSecondLetter + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
        //on stocke la sortie également dans une variable pour créer un copier/coller maison
        const cazVar = "CAZ" + "_" + nameValue + "_" + surnameFirstLetter + surnameSecondLetter + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf"
        document.getElementById("outDUE").innerHTML = "DUE" + "_" + nameValue + "_" + surnameFirstLetter + surnameSecondLetter + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
        const dueVar = "DUE" + "_" + nameValue + "_" + surnameFirstLetter + surnameSecondLetter + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";

        //Sortie CAZ-O
        document.getElementById("outCazO").innerHTML = "CAZ-O" + "_" + nameValue + "_" + surnameFirstLetter + surnameSecondLetter + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
        //on stocke la sortie également dans une variable pour créer un copier/coller maison
        const cazoVar = "CAZ-O" + "_" + nameValue + "_" + surnameFirstLetter + surnameSecondLetter + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
        
                //document.getElementById("pOutCaz").style.background='seagreen';
                //document.getElementById("pOutCazO").style.background='seagreen';
        }
    
    
    
    

    //Sortie PI
    
    if (document.getElementById("cIF").selected == true)
    {
        if (numPi == "" || numPi.length != 12)
        {
            //let txt = "vous ne pouvez pas obtenir de sortie sans numéro correct de PI";
            document.getElementById("outPi").style.color='white';
            document.getElementById("outPi").style.background='crimson';
            //document.getElementById("pOutPi").style.background='crimson';

            //document.getElementById("outPi").innerHTML = txt;
        }
    
        if (dtValidPiStatut == false && numPi != "" && numPi.length == 12)
        {
            document.getElementById("outPi").style.color='white';
            document.getElementById("outPi").style.background='seagreen';
            //document.getElementById("pOutPi").style.background='seagreen';

            document.getElementById("outPi").innerHTML = "PI" + "_" + nameValue + "_" + surnameFirstLetter + surnameSecondLetter + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + "_" + numPi + ".pdf";
        }

        if (dtValidPiStatut == true)
        {
            let text = 'Vous ne pourrez pas accéder si votre carte d\'identité est périméee';
            document.getElementById("outPi").style.color='crimson';
            document.getElementById("outPi").style.background='white';
            document.getElementById("outPi").innerHTML = text;
        }
    }  

    // Attention doublon possible
    //Génération de la sortie PI
    // Bricolage en attente de mieux pour coller les éléments du tableau dtdelivr
    // document.getElementById("outPi").innerHTML = "PI" + "_" + nameValue + "_" + surnameFirstLetter + surnameSecondLetter + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + "_" + numPi + ".pdf";
    // if (numPi == "" || dtValidPiStatut == true || (piChk == false && passprtChk == false) || dtpiChk == false){
    //     document.getElementById("outPi").style.color='white';
    //     document.getElementById("outPi").style.background='crimson';
    // }
    // else {
    //     document.getElementById("outPi").style.color='white';
    //     document.getElementById("outPi").style.background='seagreen';
    // }
    
    //On créé un tableau et l'on y insère les données de outCaz pour enuite chercher si un champ n'est pas rempli (date vide renvoie undefined)
    //outCazArray = outCaz.split("  ");
    //outCazContent = outCaz.includes("undefined");
    //La vérification de la présence des champs vides nom prénom et date de naissance 
    //if (nameValue == "" || surnameValue == "" || dtnais == "") {
    //if (outCazContent == true || nameV == "" || surnameV == "") {
        
    
    //On désactive également les liens
    /*
        document.getElementById("inputCazFile").disabled = true;
        document.getElementById("inputCazOFile").disabled = true;
        document.getElementById("inputPiFile").disabled = true;
*/
    
    

    /*else if (nameValue != "" && surnameFirstLetter != "" && dtnais != ""){
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='seagreen';

        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='seagreen';

        document.getElementById("pOutCaz").style.background='seagreen';
        document.getElementById("pOutCazO").style.background='seagreen';
        */
        
    //et on active les liens
        //document.getElementById("inputCazFile").disabled = false;
        //document.getElementById("inputCazOFile").disabled = false;
        //et on active le lien
        //document.getElementById("inputPifile").disabled = false;
    
    
    /*else if(nameV != "" && surnameV != "" && dtnais != "" && numPi != ""){
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='seagreen';

        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='seagreen';

        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='seagreen';

        document.getElementById("pOutCaz").style.background='seagreen';
        document.getElementById("pOutCazO").style.background='seagreen';
        document.getElementById("pOutPi").style.background='seagreen';
    //et on active le lien
        document.getElementById("inputPifile").disabled = false;
}*/
    

    //console.log("tableau outCaz :" + "" + outCazArray + "/" + "ce tableau contient il undefined ?:" + "" + outCazContent);
 
    //Sortie CAZ-O
    //let outCazO = document.getElementById("outCazO").innerHTML = "CAZ-O" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
    
    
    //Génération de la sortie KBIS
    if (nomEntrV == "") /*|| sirenChk == false || siretChk == false || numSirV == "" || dtKbisV == "")*/
    {
    document.getElementById("outKBIS").style.color='white';
    document.getElementById("outKBIS").style.background='crimson';
    }
    document.getElementById("outKBIS").innerHTML = "KBIS" + "_" + nomEntrV + "_" + numSirV + "_" + dtKBISt[0] + dtKBISt[1] + dtKBISt [2] + ".pdf";
    
//fin du script
}
