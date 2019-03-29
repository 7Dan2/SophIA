

document.getElementById("name").addEventListener("blur", valueEffectN);
document.getElementById("surname").addEventListener("focusout", valueEffectS);
document.getElementById("dtNaiss").addEventListener("blur", valueEffectdTN);

document.getElementById("cIF").addEventListener("mouseup", valueEffectOpi);
document.getElementById("passPrtF").addEventListener("mouseup", valueEffectOpi);

document.getElementById("numPi").addEventListener("blur", valueEffectNumPi);
document.getElementById("dtDelivrPi").addEventListener("change", valueEffectDtPi);

document.getElementById("outCaz").addEventListener("copy", valueEffectCopyCaz);
document.getElementById("outCazO").addEventListener("copy", valueEffectCopyCazO);


//Traitement du nom
    function valueEffectN()
    {
        
        let nameV = document.getElementById("name").value;
        
        if (nameV == "")
        {
            
            document.getElementById("name").style.background="#ffbf80";
            document.getElementById("name").style.color="white";
           
            
            //alert('Votre nom de famille est requis');
        
        }
        else if (nameV != "")
        {
            document.getElementById("name").style.background="seagreen";
            document.getElementById("name").style.color="white";
        }
    }

    
//Traitement du prénom
    function valueEffectS()
    {
      
        let testValue = document.getElementById("surname").value;

        let txt = "Votre prénom est requis"; 

        if (testValue == "")
        {
            document.getElementById("surname").style.background="#ffbf80";
            document.getElementById("surname").style.clor="white";
            document.getElementById("name").innerHTML = txt;
            //alert('Votre prénom est requis')
        
        }
        else if(testValue != "")
        {
            document.getElementById("surname").style.background="seagreen";
            document.getElementById("surname").style.color="white";
            
        
        }
    }

    function valueEffectdTN()
    {
        let testValue = document.getElementById("dtNaiss").value;

        if (testValue == "")
        {
            document.getElementById("dtNaiss").style.background="#ffbf80";
        }
        else if(testValue != "")
        {
            document.getElementById("dtNaiss").style.background="seagreen";
            document.getElementById("dtNaiss").style.color="white";
        }
    }
/*
######### Pieces d'identités #########
    Si c'est la carte d'identité française qui est choisie
    alors on va verifier la validité de celle-ci

    


    */

// Traitement de la date de la PI
function valueEffectDtPi(){
}
//Traitement de l'origine de la Pi
function valueEffectOpi()
{
    if(cIF.selected == true)
    /*{
            document.getElementById("originPi").style.background="seagreen";
            document.getElementById("originPi").style.color="white";
    }*/
    alert("oui ca marche");

    
        
    



    let Opi = document.getElementById("originPi").value;
    if (Opi == ""){
        document.getElementById("originPi").style.background="#ffbf80";
        
        alert('Choisissez un document')
    
    }
    if(Opi != ""){
        document.getElementById("cIF").style.background="seagreen";
        document.getElementById("cIF").style.color="white";
        
    
    }
}
//Traitement du numéro de Pi
function valueEffectNumPi(){
        
    let numPi = document.getElementById("numPi").value;
    if (numPi == ""){
        document.getElementById("numPi").style.background="#ffbf80";
        
        //alert('Votre numéro de document est requis')
    
    }
    else if(numPi != ""){
        document.getElementById("numPi").style.background="seagreen";
        document.getElementById("numPi").style.color="white";
        
    
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
    document.getElementById("outCpyCaz").innerHTML = "ce texte a été copié";
    document.getElementById("outCpyCazO").innerHTML = "ce texte a été copié";
}
function valueEffectCopyCazO()
{
    document.getElementById("outCpyCazO").innerHTML = "ce texte a été copié";
}