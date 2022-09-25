// Ce module doit regrouper les fonctionnalités sur les trois 
// champs d'entrées du bloc identité : nom, prénom, date de naissance
// et leurs fonctionnalités associées.


// ###########################
//      TRAITEMENT DU NOM
// ###########################

// ######### Récupération du nom, découpage des lettres dans un tableau afin
    // de vérifier la présence de chiffre(s) #########

    const getNameInput = document.getElementById("name");
    getNameInput.addEventListener("change", checkName);
    
    function checkName(aName)
    {
        aName = document.getElementById("name").value;
        aNameLength = aName.length;
    
        //On génére un tableau des lettres du nom
        let nameValueArray = aName.split("");
        
        // Dans lequel on vérifie si un chiffre s'y cache
        // La methode .some() renvoie true ou false
        let someNumbersInNameLetters = nameValueArray.some(searchSomeNumbersInNameLetters);
        
        // A l'aide d'une fonction cherchant une valeur supérieure à 0, ce qu'une lettre ne peut pas faire
        function searchSomeNumbersInNameLetters(value)
        {
            return value >= 0;
        }
        
        try
        {
            if (aName == "")
            {
                document.getElementById("name").style.background="#ffbf80";
                document.getElementById("name").style.color="red";
                localStorage.setItem('name', "INVALID");
                throw `Valeur manquante : </br>
                - Ne continuez pas sans avoir renseigné votre ou vos noms de famille`
            }
        
            if (someNumbersInNameLetters == true) 
            {
                document.getElementById("name").style.background="#ffbf80";
                document.getElementById("name").style.color="red";
                localStorage.setItem('name', "INVALID");
                throw `Erreur(s) de saise dans le nom </br>
                Rappel : </br>
                - Dans ce champ vous devez indiquez votre ou vos noms de famille </br>
                - Si vous souhaitez faire apparaitre deux noms, utilisez le tiret - comme séparateur et non un espace </br>
                - Un minimum de 2 caractères est requis \n - La saisie se fait sans aucun espaces </br>
                - Les chiffres ne sont pas acceptés`
            }
        
            if (aNameLength < 2)
            {
                document.getElementById("name").style.background="#ffbf80";
                document.getElementById("name").style.color="red";
                localStorage.setItem('name', "INVALID");
                throw `Erreur sur le nombre de caractères : </br>
                - Deux caractères minimum sont requis dans la saisie du ou des noms de famille`
            }
        
            if (someNumbersInNameLetters == false && aName.length >= 2) 
            {
                document.getElementById("name").style.background="green";
                document.getElementById("name").style.color="white";
                localStorage.setItem('name', aName);
                throw "Valeur du champ nom correcte et enregistrée"
            }

        }
        catch(error)
        {
            document.querySelector('#info-dialog').innerHTML = error;
            // alert(error)
        }
    }
    
    
    // ###########################
    //     TRAITEMENT DU PRENOM
    // ###########################
    
    const getSurnameInput = document.getElementById("surname")
    getSurnameInput.addEventListener("change", checkSurname);
    
    function checkSurname(aSurname)
    {
        aSurname = getSurnameInput.value;
    
        //On génére un tableau des lettres du prénom
        let surnameValueArray = aSurname.split("");
        
        // Dans lequel on vérifie si un chiffre s'y cache
        // La methode .some() renvoie true ou false
        let isSomeNumbersInSurnameLetters = surnameValueArray.some(someNumbersInSurnameLetters);
        
        // A l'aide d'une fonction cherchant une valeur supérieure à 0, ce qu'une lettre ne peut pas faire
        function someNumbersInSurnameLetters(value)
        {
            return value >= 0;
        }

        try
        {
            if (aSurname == "")
            {
                document.getElementById("surname").style.background="#ffbf80";
                document.getElementById("surname").style.color="red";
                localStorage.setItem('surname', "INVALID");
                throw `Valeur manquante : </br> 
                - Ne continuez pas sans avoir renseigné votre premier prénom`;
            }
            
        
            if (isSomeNumbersInSurnameLetters == true) 
            {
                document.getElementById("surname").style.background="#ffbf80";
                document.getElementById("surname").style.color="red";
                localStorage.setItem('surname', "INVALID");
                throw `Erreur(s) de saisie dans le(s) prénom(s) </br> 
                Rappel : </br> 
                - Dans ce champ vous devez indiquer uniquement le premier prénom </br> 
                - Si c'est un prénom composé, utilisez le séparateur - et non un espace </br>
                - Un minimum de trois caractères est requis </br>
                - La saisie se fait sans aucun espaces`;
                
            }
        
            if (aSurname.length < 3)
            {
                document.getElementById("surname").style.background="#ffbf80";
                document.getElementById("surname").style.color="red";
                localStorage.setItem('surname', "INVALID");
                throw `Erreur sur le nombre de caractères : </br> 
                - Trois caractères minimum sont requis dans la saisie du prénom`
            
            }
        
            if (isSomeNumbersInSurnameLetters == false && aSurname.length >= 3) 
            {
                document.getElementById("surname").style.background="green";
                document.getElementById("surname").style.color="white";
                localStorage.setItem('surname', aSurname);
                throw "Valeur du champ prénom correcte et enregistrée"
            }
        }

        catch(error)
        {
            document.querySelector('#info-dialog').innerHTML = error;
            
            // alert(error)
        }
    }


    
    // ###########################
    // TRAITEMENT DATE DE NAISSANCE
    // ############################
    
    // Fonctionnalité de vérification de l'âge légal
    // de travail en France : 16 ans
    
    const getBirthdate = document.getElementById("dtNaiss");
    getBirthdate.addEventListener("blur", checkLegalAge);
    
    function checkLegalAge(aBirthdate)
    {
        // On transforme la date de naissance en ms
        aBirthdate = Date.parse(getBirthdate.value);
        
        // On récupère également la date brute qui sera stockée
        // si elle passe le test de validité
        let rawBirthdate = getBirthdate.value;
    
        let origin = Date.now();
        
        console.log("date de naissance : " + aBirthdate, "date du jour :" + origin )
    
        // 16 ans :
        // 12 ans à 365 jours + 4 ans à 366 jours - 4 jours (addition)
        const sixteenYears = 378432000000 + 126144000000 + 345600000;
        
        try
        {
            if(aBirthdate + sixteenYears > origin)
            {
                document.getElementById("dtNaiss").style.background = "red";
                document.getElementById("dtNaiss").style.color = "orange";
                localStorage.setItem("birthdate", "INVALID");
                throw `Information: </br> 
                - Vous n'avez pas l'âge légal de travailler`
            }

            if(aBirthdate + sixteenYears < origin)
            {
                document.getElementById("dtNaiss").style.background = "green";
                document.getElementById("dtNaiss").style.color = "white";
                localStorage.setItem("birthdate", rawBirthdate);
                throw `Date de naissance autorisée et enregistrée`
            }
            
        }
        catch(error)
        {
            document.querySelector('#info-dialog').innerHTML = error;
            //alert(error);
        }
    
    }