





function myCaz(){
    //Récupération du nom, mise en majuscule
    let nameValue = document.getElementById("name").value.toUpperCase();
    
    
    
    //vérification de la présence du nom 

    
        /*
        if (nameValue == ""){
            //Si aucune valeur n'est entrée, affichage d'un message d'alerte
            alert("Vous devez renseigner votre nom");
            document.getElementById("name").style.background="#ffbf80";
            nameValueBol = false;
        }
        else if(nameValue != ""){
            document.getElementById("name").style.background="seagreen";
            document.getElementById("name").style.color="white";
            nameValueBol = true;
        }
        else {
            document.getElementById("name").style.background="white";
        }
        
    */
    
        //S'orienter vers mécanisme de validation plus propre 
        
    
    //Vérification de la mécanique dans la console
    console.log(nameValue);
    
    
    //Récupération du prénom, mise en majuscule
    let surnameValue = document.getElementById("surname").value.toUpperCase();
    
    //Si aucune valeur n'est entrée, affichage d'un message d'alerte
        //S'orienter vers mécanisme de validation plus propre 
        /*
        if (surnameValue == ""){
            alert("Vous devez entrer votre prénom");
            document.getElementById("surname").style.background="#ffbf80";
            surnameValueBol = false;
        }
        else if (surnameValue != ""){
            document.getElementById("surname").style.background="seagreen";
            document.getElementById("surname").style.color="white";
            surnameValueBol = true;
        }
        else {
            document.getElementById("surname").style.background="white";
        }
        */

    //Gestion des prénoms composés
    //On génére un tableau des lettres du prénom
    let surnameArray = [];
    surnameArray = surnameValue.split("");
    //On cherchge la présence du tiret dans ce tableau (renvoie true ou false)
    let fr = surnameArray.includes("-");
    //Si true, on renvoie la position du tiret dans le tableau
    let trt;
    let surnameFirstLetter;
    let abc;
    if (fr == true){
        trt = surnameArray.indexOf("-") ;
    
    //On recupère la première lettre du premier prenom
        surnameFirstLetter = surnameValue.charAt();
    //On récupère la première lettre du deuxième prenom en prenant comme index renvoyé par indexOf() 
        abc = surnameValue.charAt(trt + 1);
    }
    else{
        surnameFirstLetter = surnameValue.charAt();
        abc = "";
    }
    //Vérification de la mécanique dans la console
    console.log(surnameArray, fr, trt, surnameFirstLetter, abc);

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
    //Détermination des ms au 01-01-2014 (date de passage de la validité de la CI à 15 ans)
    var dCi = Date.parse("January 01, 2014");
    //Détermination des ms à la valeur entrée comme date de délivrance de la PI OU du passport
    let dtValidPi = Date.parse(dtpi);
    //Comparaison des deux valeurs et assignation true/false a dtValidPiStatut 
    
    //Si la date de delivr de la CI est posterieure a dCi sa validité est de 15ans
    
    //Sinon si elle est inférieure il faut ajouter 10ans et la comparer a la date du jour
//Si la date est inférieure à la date du jour indiquer "perimé" 

    // Pour la validité de la CI
    //valeur en ms de 10 ans (10*12*30*24*60*60*1000)
    let tenYears = 311040000000;
    let calcDiffYear; 
    //On prend la date de l'input : si elle est avant dCi
    //on lui appliquera le calcul de validité 10  ans
    if (dtValidPi < dCi)
    { 
        calcDiffYear = dtValidPi + tenYears;
        //Et on la compare à la date courante
        if (calcDiffYear < origin)
        {
            document.getElementById("dtDelivrPi").style.background="crimson";
            document.getElementById("dtDelivrPi").style.color="white";
            alert("la validité de votre carte est dépassée")
        }
    }

    else if (dtValidPi > dCi)
    {
    document.getElementById("dtDelivrPi").style.background="seagreen";
    document.getElementById("dtDelivrPi").style.color="white";
    
    }

    //Vérification de la validité du passeport
//La date de référence est prise dans la partie du dessus 'origin'

//Détermination des ms au 01-01-2014 (validité des passeport à 10 ans pour ceux)
var dPp = Date.parse("March 01, 2001");
//Détermination des ms à la valeur entrée comme date de délivrance de la CI
        //la valeur est déjà stockée dans 'dtValidPi'
// Pour la validité du PP
/*
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
console.log(origin, dCi, "date de validité:" + dtValidPi);
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
    else if (nomEntrV != "" && dtKbisV != "")
    {
        let origin = Date.now();
        let threeMonths = 7776000000; // valeur en ms de 3 mois (3*30*24*60*60*1000)
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
        else if (dtValidKb + threeMonths < origin)
        {
            var txt = "Votre fiche KBIS est trop ancienne";
            document.getElementById("dtKbis").style.background="crimson";
            document.getElementById("dtKbis").style.color="white";
            alert=("Votre fiche KBIS est trop ancienne");  
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

    if (nameValue == "" || surnameFirstLetter == "" || dtnais == "")
    {
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='crimson';

        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='crimson';

        document.getElementById("outDUE").style.color='white';
        document.getElementById("outDUE").style.background='crimson';

        //document.getElementById("pOutCaz").style.background='crimson';
        //document.getElementById("pOutCazO").style.background='crimson';
        //document.getElementById("pOutPi").style.background='crimson';
    }

    else if (nameValue != "" && surnameFirstLetter != "" && dtnais != "")
    {
        document.getElementById("outCaz").style.color='white';
        document.getElementById("outCaz").style.background='seagreen';
    
        document.getElementById("outCazO").style.color='white';
        document.getElementById("outCazO").style.background='seagreen';

        document.getElementById("outDUE").style.color='white';
        document.getElementById("outDUE").style.background='seagreen';
    
            //document.getElementById("pOutCaz").style.background='seagreen';
            //document.getElementById("pOutCazO").style.background='seagreen';
    }
    
    
    //Sortie CAZ & DUE
    document.getElementById("outCaz").innerHTML = "CAZ" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
    //on stocke la sortie également dans une variable pour créer un copier/coller maison
    const cazVar = "CAZ" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf"
    document.getElementById("outDUE").innerHTML = "DUE" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
    const dueVar = "DUE" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";

    //Sortie CAZ-O
    document.getElementById("outCazO").innerHTML = "CAZ-O" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
    //on stocke la sortie également dans une variable pour créer un copier/coller maison
    const cazoVar = "CAZ-O" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + ".pdf";
    

    //Sortie PI
    if (numPi == ""  || numPi.length != 12)
    {
        let txt = "vous ne pouvez pas obtenir de sortie sans numéro correct de PI";
        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='crimson';
        //document.getElementById("pOutPi").style.background='crimson';

        document.getElementById("outPi").innerHTML = txt;
    }
    
    else if (numPi != "" && numPi.length == 12)
    {
        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='seagreen';
        //document.getElementById("pOutPi").style.background='seagreen';

        document.getElementById("outPi").innerHTML = "PI" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + "_" + numPi + ".pdf";
    }
    
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
    
    //Génération de la sortie PI
    // Bricolage en attente de mieux pour coller les éléments du tableau dtdelivr
    /*document.getElementById("outPi").innerHTML = "PI" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + "_" + numPi + ".pdf";
    if (numPi == "" || dtValidPiStatut == true || (piChk == false && passprtChk == false) || dtpiChk == false){
        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='crimson';
    }
    else {
        document.getElementById("outPi").style.color='white';
        document.getElementById("outPi").style.background='seagreen';
    }
    */


    
  
    //Génération de la sortie KBIS
    if (nomEntrV == "") /*|| sirenChk == false || siretChk == false || numSirV == "" || dtKbisV == "")*/
    {
    document.getElementById("outKBIS").style.color='white';
    document.getElementById("outKBIS").style.background='crimson';
    }
    document.getElementById("outKBIS").innerHTML = "KBIS" + "_" + nomEntrV + "_" + numSirV + "_" + dtKBISt[0] + dtKBISt[1] + dtKBISt [2] + ".pdf";
    
    



    

//fin du script
}
