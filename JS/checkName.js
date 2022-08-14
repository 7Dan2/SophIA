// ######### Récupération du nom, mise en majuscule, découpage des lettres dans un tableau afin
    // de vérifier la présence de chiffre(s) #########

document.getElementById("name").addEventListener("change", valueEffectName);
    //On declare une variable pour stocker un booleen dont 
//l'utilté est de bloquer les noms de fichiers générés
let nameValueValidity;

// ######### Récupération du prénom #########
document.getElementById("surname").addEventListener("change", valueEffectSurname);

// ######### Fonctions #########

function valueEffectName()
{
    let nameValue = localStorage.getItem('name');
    
    // On génére un tableau des lettres du nom
    let nameValueArray = nameValue.split("");
    
    // Dans lequel on vérifie si un chiffre s'y cache
    let someNumbersInNameLetters = nameValueArray.some(searchSomeNumbersInNameLetters);
    
    // A l'aide d'une fonction cherchant une valeur supérieure à 0, ce qu'une lettre ne peut pas faire
    function searchSomeNumbersInNameLetters(value)
    {
        return value >= 0;
    }
    //La methode .some() renvoie true ou false, dans le cas de true on alerte 
    //l'utilisateur et l'on bloque la sortie si un chiffre est présent dans le nom
    if (someNumbersInNameLetters == true) 
    {
        alert ("Attention:\n-Saisie du nom de famille.\n-Si c'est un nom composé, utilisez le séparateur - \n-Pas d'espaces");
               
        document.getElementById("name").style.background="#ffbf80";
        document.getElementById("name").style.color="red";
        nameValueValidity = false;
        localStorage.setItem('nameValueValidity', nameValueValidity)
    }
    
    if (nameValue.length < 2)
    {
        document.getElementById("name").style.background="#ffbf80";
        document.getElementById("name").style.color="red";
        // document.getElementById("name").value = txt;
    }

    if (someNumbersInNameLetters == false && nameValue.length >= 2) 
    {
        document.getElementById("name").style.background="seagreen";
        document.getElementById("name").style.color="white";
    }
}

//Traitement du prénom
function valueEffectSurname()
{
    let surnameValue = localStorage.getItem('surname');
    
    // Entrée des caractères dans un tableau
    let surnameValueArray = surnameValue.split("");
    
    // On vérifie si un chiffre ou un espace s'y cache
    let someNumbersInNameLetters = surnameValueArray.some(searchSomeNumbersInNameLetters);
    
    // A l'aide d'une fonction cherchant une valeur supérieure à 0, ce qu'une lettre ne peut pas faire
    function searchSomeNumbersInNameLetters(value)
    {
        return value >= 0;
    }

    //const txt = "Votre prénom est requis"; 

    if (someNumbersInNameLetters == true)
    {
        document.getElementById("surname").style.background="#ffbf80";
        document.getElementById("surname").style.color="red";
        alert("Rappel: \n-Vous devez indiquer uniquement le premier prénom\n-Si c'est un prénom composé, utilisez le séparateur -\n-Pas d'espaces");
    }
    if (surnameValue.length < 3)
    {
        document.getElementById("surname").style.background="#ffbf80";
        document.getElementById("surname").style.color="red";
    }

    if (someNumbersInNameLetters == false && surnameValue.length >= 3)
    {
        document.getElementById("surname").style.background="seagreen";
        document.getElementById("surname").style.color="white";
    }
}
