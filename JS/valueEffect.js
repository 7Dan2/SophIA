//Recherche des sélecteurs et attribution des valeurs
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const birhtdateInput = document.querySelector('#dtNaiss');
const piOriginInput = document.querySelector('#originPi');
const piNumberInput = document.querySelector('#numPi');
const piDeliveryDateInput = document.querySelector('#dtDelivrPi');

//Stockage dans localStorage des valeurs saisies dans le formulaire
document.getElementById("name").addEventListener("focusout", storeMe);
document.getElementById("surname").addEventListener("focusout", storeMe);
document.getElementById("dtNaiss").addEventListener("focusout", storeMe);
document.getElementById("numPi").addEventListener("focusout", storeMe);
document.getElementById("originPi").addEventListener("focusout", storeMe);
document.getElementById("dtDelivrPi").addEventListener("focusout", storeMe);

//Déclaration des actions sur événements
//document.getElementById("name").addEventListener("focusout", valueEffectN);
document.getElementById("surname").addEventListener("focusout", valueEffectS);
document.getElementById("dtNaiss").addEventListener("focusout", valueEffectdTN);


//document.getElementById("originPi").addEventListener("mouseup", valueEffectOpi);
document.getElementById("cIF").addEventListener("mouseup", valueEffectOpi);
//document.getElementById("passPrtF").addEventListener("mouseup", valueEffectOpi);

document.getElementById("numPi").addEventListener("blur", valueEffectNumPi);
document.getElementById("dtDelivrPi").addEventListener("change", valueEffectDtPi);

document.getElementById("outCaz").addEventListener("copy", valueEffectCopyCaz);
document.getElementById("outCazO").addEventListener("copy", valueEffectCopyCazO);
document.getElementById("outPi").addEventListener("copy", valueEffectCopyPi);
document.getElementById("outDUE").addEventListener("copy", valueEffectCopyDue);
document.getElementById("outKBIS").addEventListener("copy", valueEffectCopyKbis);

//Stockage des valeurs recueillies
function storeMe()
{
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('surname', surnameInput.value);
    localStorage.setItem('birthdate', birhtdateInput.value);
    localStorage.setItem('piOrigin', piOriginInput.value)
    localStorage.setItem('piNumber', piNumberInput.value);
    localStorage.setItem('piDeliveryDate', piDeliveryDateInput.value)
}



//Traitement du nom
// function valueEffectN()
//     {
//         let nameValue = localStorage.getItem('name');
        
//         const txt = "Votre nom est requis"; 
        
//         if (nameValue == "")
//         {
//             document.getElementById("name").style.background="#ffbf80";
//             document.getElementById("name").style.color="red";
//             // document.getElementById("name").value = txt;
//         }
//         else (nameValue != "")
//         {
//             document.getElementById("name").style.background="#ff00ff";
//             document.getElementById("name").style.color="white";
//         }
//     }

    
//Traitement du prénom
function valueEffectS()
{
    
    let surnameValue = localStorage.getItem('surname');

    const txt = "Votre prénom est requis"; 

    if (surnameValue == "")
    {
        document.getElementById("surname").style.background="#ffbf80";
        document.getElementById("surname").style.color="red";
        // document.getElementById("surname").value = txt;
    
    }
    else if(surnameValue != "")
    {
        document.getElementById("surname").style.background="seagreen";
        document.getElementById("surname").style.color="white";
    }
}

function valueEffectdTN()
{
    let birthdayValue = localStorage.getItem('birthdate');

    if (birthdayValue == "")
    {
        document.getElementById("dtNaiss").style.background="#ffbf80";
    }
    else
    {
        document.getElementById("dtNaiss").style.background="seagreen";
        document.getElementById("dtNaiss").style.color="white";
    }
}
/*
######### Pieces d'identités #########
    Si c'est la carte d'identité française qui est choisie
    alors on va verifier que le numéro est compatible et la validité de la date de délivrance
*/

function valueEffectOpi()
{
    
    let numPi = document.getElementById("numPi").value;
    let testValue = document.getElementById("dtDelivrPi").value;
    let numPiValid;
    let piChkStatus;
    if(cIF.selected == true  && numPiValid == true )
    {
        document.getElementById("originPi").style.background="seagreen";
        document.getElementById("originPi").style.color="white";
        piChkStatus = true;
    }
    else if (cIF.selected == false  || passPrtF.selected == false || cIEu.selected == false || titrSej.selected == false)
    {
        document.getElementById("originPi").style.background="#ffbf80";
        document.getElementById("originPi").style.color="white";
        piChkStatus = false;

    }
    
}

//Traitement du numéro de Pi
function valueEffectNumPi()
{
    let numPi = localStorage.getItem('piNumber');
    let numPiValid;
    let ciChoice = document.getElementById("cIF").selected;
    let pprtChoice = document.getElementById("passPrtF").selected;

/*
Pour la carte d'identité
*/
    if (ciChoice == true)
    {
        if (numPi == "")
        {
        document.getElementById("numPi").style.background="#ffbf80";
        const txt = "vous ne pouvez pas obtenir de sortie sans fournir de numéro de carte d'identité";
        document.getElementById("outPi").style.color='crimson';
        document.getElementById("outPi").innerHTML = txt;
        }

        if ((numPi.length > 1 && numPi.length < 12) || numPi.length > 12)
        {   // La carte d'identité est constituée de 12 caractères
            alert ("la carte d'identité comporte 12 caractères");
            document.getElementById("numPi").style.background="#ffbf80";
            document.getElementById("numPi").style.color="crimson";
            document.getElementById("originPi").style.background="#ffbf80";
            document.getElementById("originPi").style.color="crimson";
            numValidPi = false;
        }

        if (numPi.length == 12)
        {
            document.getElementById("numPi").style.background="seagreen";
            document.getElementById("numPi").style.color="white";
            document.getElementById("originPi").style.color="white";
            document.getElementById("originPi").style.background="seagreen";
            numValidPi = true;
        }
    }
/*
Pour le passeport
*/
    if (pprtChoice == true)
    {
        if (numPi == "")
        {
        document.getElementById("numPi").style.background="#ffbf80";
        const txt = "vous ne pouvez pas obtenir de sortie sans fournir de numéro de passeport";
        document.getElementById("outPi").style.color='crimson';
        document.getElementById("outPi").innerHTML = txt; 
        }
        
        if (numPi != "")
        {
        document.getElementById("numPi").style.background="seagreen";
        document.getElementById("numPi").style.color="white";
        document.getElementById("originPi").style.color="white";
        document.getElementById("originPi").style.background="seagreen";
        }
    }
}
// Traitement de la date de la PI
function valueEffectDtPi()
{
    let testValue = localStorage.getItem('dtDelivrPi');

        if (testValue == "")
        {
            document.getElementById("dtDelivrPi").style.background="#ffbf80";
        }
        else if(testValue != "")
        {
            document.getElementById("dtDelivrPi").style.background="seagreen";
            document.getElementById("dtDelivrPi").style.color="white";   
        }
}

//Traitement de la date de la Pi
/*function valueEffectDtPi(){
        
    let dtPi = document.getElementById("dtDelivrPi").value;
    if (dtPi == ""){
        document.getElementById("dtDelivrPi").style.background="#ffbf80";
        
        alert('Vous devez indiquer la date de votre piece d\'identité');
    
    }
    //voir pour inclure la fonction de validité 
    else if(dtPi != ""){
        document.getElementById("dtDelivrPi").style.background="seagreen";
        document.getElementById("dtDelivrPi").style.color="white";
        
    
    }
}
*/
function valueEffectCopyCaz()
{
    document.getElementById("outCpyCaz").innerHTML = "Copié dans le presse-papier";
    document.getElementById("outCpyCaz").style.color = "lightgreen";
}

function valueEffectCopyCazO()
{
    document.getElementById("outCpyCazO").innerHTML = "Copié dans le presse-papier";
}

function valueEffectCopyPi()
{
    document.getElementById("outCpyPi").innerHTML = "Copié dans le presse-papier";
}

function valueEffectCopyDue()
{
    document.getElementById("outCpyDue").innerHTML = "Copié dans le presse-papier";
}

function valueEffectCopyKbis()
{
    document.getElementById("outCpyKbis").innerHTML = "Copié dans le presse-papier";

}