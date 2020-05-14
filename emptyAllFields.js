function emptyAllFields()
{
    const initialTxt = "En attente de données"

    document.getElementById("name").style.background="white";
    document.getElementById("name").style.color="black";

    document.getElementById("surname").style.background="white";
    document.getElementById("surname").style.color="black";

    document.getElementById("dtNaiss").style.background="white";
    document.getElementById("dtNaiss").style.color="black";

    document.getElementById("numPi").style.background="white";
    document.getElementById("numPi").style.color="black";

    document.getElementById("originPi").style.background="white";
    document.getElementById("originPi").style.color="black";

    document.getElementById("cIF").style.background="white";
    document.getElementById("cIF").style.color="black";

    document.getElementById("dtDelivrPi").style.background="white";
    document.getElementById("dtDelivrPi").style.color="black";

// Réinitialisation des sorties 

    document.getElementById("outCaz").style.background = "";
    document.getElementById("outCaz").innerHTML = initialTxt;

    document.getElementById("outCazO").style.background = "";
    document.getElementById("outCazO").innerHTML = initialTxt;

    document.getElementById("outPi").style.background = "";
    document.getElementById("outPi").innerHTML = initialTxt;

    document.getElementById("outDUE").style.background = "";
    document.getElementById("outDUE").innerHTML = initialTxt;

}