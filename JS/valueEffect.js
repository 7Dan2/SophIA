//Recherche des sélecteurs et attribution des valeurs
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const birhtdateInput = document.querySelector('#dtNaiss');
const piOriginInput = document.querySelector('#originPi');
const piNumberInput = document.querySelector('#numPi');
const piDeliveryDateInput = document.querySelector('#dtDelivrPi');
const kbisSocietyNameInput = document.querySelector('#nomEntr');

//Stockage dans localStorage des valeurs saisies dans le formulaire
nameInput.addEventListener("input", storeMe);
surnameInput.addEventListener("input", storeMe);
birhtdateInput.addEventListener("focusout", storeMe);
piNumberInput.addEventListener("change", storeMe);
piDeliveryDateInput.addEventListener("focusout", storeMe);

kbisSocietyNameInput.addEventListener("change", storeMe);
kbisSocietyNameInput.addEventListener("change", showOutPut);

//Déclaration des actions sur événements
document.getElementById("dtNaiss").addEventListener("focusout", valueEffectdTN);

//On s'occupe de la sélection de la pièce d'identité
const selectElement = document.querySelector('#originPi');

selectElement.addEventListener('change', (event) => {
	
	var optionChoice = event.target.value;
    localStorage.setItem('piOrigin', optionChoice);

    
});

// document.getElementById("originPi").addEventListener("mouseup", valueEffectOpi);
// document.getElementById("cIF").addEventListener("blur", valueEffectOpi);
// document.getElementById("passPrtF").addEventListener("blur", valueEffectOpi);

document.getElementById("numPi").addEventListener("blur", valueEffectNumPi);
document.getElementById("dtDelivrPi").addEventListener("change", valueEffectDtPi);

//Gestion des actions de copie du champ de sortie
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
    //localStorage.setItem('piOrigin', piOriginInput.value)
    localStorage.setItem('piNumber', piNumberInput.value);
    localStorage.setItem('piDeliveryDate', piDeliveryDateInput.value);
    localStorage.setItem('kbisSocietyName', kbisSocietyNameInput.value);
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
    if (cIF.selected == false  || passPrtF.selected == false || cIEu.selected == false || titrSej.selected == false)
    {
        document.getElementById("originPi").style.background="#ffbf80";
        document.getElementById("originPi").style.color="white";
        piChkStatus = false;

    }
    if ( passPrtF.selected == true )
    {
        alert('passeport detecté');
    }
    
}

//Traitement du numéro de Pi
function valueEffectNumPi()
{
    let numPi = localStorage.getItem('piNumber');
    let identity = localStorage.getItem('piOrigin');

    let numPiValid;
    
    // let ciChoice = document.getElementById("cIF").selected;
    // let pprtChoice = document.getElementById("passPrtF").selected;

/*
Pour la carte d'identité
*/
    if ( identity == "cIF" )
    {
        // if (numPi == "")
        // {
        // document.getElementById("numPi").style.background="#ffbf80";
        // const txt = "vous ne pouvez pas obtenir de sortie sans fournir de numéro de carte d'identité";
        // document.getElementById("outPi").style.color='crimson';
        // document.getElementById("outPi").innerHTML = txt;
        // }

        // if ((numPi.length > 1 && numPi.length < 12) || numPi.length > 12)
        // {   // La carte d'identité est constituée de 12 caractères
        //     alert ("la carte d'identité comporte 12 caractères");
        //     document.getElementById("numPi").style.background="#ffbf80";
        //     document.getElementById("numPi").style.color="crimson";
        //     document.getElementById("originPi").style.background="#ffbf80";
        //     document.getElementById("originPi").style.color="crimson";
        //     numValidPi = false;
        // }

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
    if ( identity == "passPrtF")
    {
        // if (numPi == "")
        // {
        // document.getElementById("numPi").style.background="#ffbf80";
        // const txt = "vous ne pouvez pas obtenir de sortie sans fournir de numéro de passeport";
        // document.getElementById("outPi").style.color='crimson';
        // document.getElementById("outPi").innerHTML = txt; 
        // }
        
        // if (numPi != "")
        // {
        document.getElementById("numPi").style.background="seagreen";
        document.getElementById("numPi").style.color="white";
        document.getElementById("originPi").style.color="white";
        document.getElementById("originPi").style.background="seagreen";
        //}
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
    document.getElementById("outCpyCaz").style.color = "#00FF7F";
}

function valueEffectCopyCazO()
{
    document.getElementById("outCpyCazO").innerHTML = "Copié dans le presse-papier";
    document.getElementById("outCpyCazO").style.color = "#00FF7F";
}

function valueEffectCopyPi()
{
    document.getElementById("outCpyPi").innerHTML = "Copié dans le presse-papier";
    document.getElementById("outCpyPi").style.color = "#00FF7F";
}

function valueEffectCopyDue()
{
    document.getElementById("outCpyDue").innerHTML = "Copié dans le presse-papier";
    document.getElementById("outCpyDue").style.color = "#00FF7F";
}

function valueEffectCopyKbis()
{
    document.getElementById("outCpyKbis").innerHTML = "Copié dans le presse-papier";
    document.getElementById("outCpyKbis").style.color = "#00FF7F";
}

function showOutPut()
{
    let getkbisSocietyName = localStorage.getItem('kbisSocietyName');

    if (getkbisSocietyName != "")
    {
        document.getElementById("form-group-kbis").style.display = 'block';
    }
}

// Sélection et copie dans le presse-papier du contenu p

//solution Damien

const getOutputs = document.querySelectorAll('.all_Pouts');
getOutputsLength = getOutputs.length;

for ( i = 0; i < getOutputsLength; i ++ )
	{
     	getOutputs[i].addEventListener('dblclick', (ev) => {
         // On récupère la sélection actuelle
   	const selection = window.getSelection();
         // On créé un objet range qui définit où commence et où s'arrête la sélection
    	const range = document.createRange();
         // On passe la div du paragraphe à notre objet range pour y définir le début et la fin du texte
    	range.selectNodeContents((ev.currentTarget));
         // On enlève la sélection actuelle (qui est incomplète car pas sur l'entièreté de la div)
    	selection.removeAllRanges();
         // On force la sélection sur l'entièreté de la div en passant notre objet range
    	selection.addRange(range);
         // On exécute un copier
    	document.execCommand('copy', true);
	})
	}
