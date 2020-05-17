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
    return value >= 0;
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

    export {nameValueValidity, nameValue};

