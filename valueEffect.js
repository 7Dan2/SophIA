

//document.getElementById("name").addEventListener("change", valueEffectN);
//document.getElementById("surname").addEventListener("change", valueEffectS);

document.getElementById("cIF").addEventListener("change", valueEffectOpi);
document.getElementById("passPrtF").addEventListener("click", valueEffectOpi);

document.getElementById("numPi").addEventListener("change", valueEffectNumPi);
document.getElementById("dtDelivrPi").addEventListener("change", valueEffectDtPi);

//Traitement du nom
    var nameEff = function valueEffectN(){}
        /*
        let nameV = document.getElementById("name").value;
        if (nameV == ""){
            document.getElementById("name").style.background="#ffbf80";
            
            alert('Votre nom de famille est requis')
        
        }
        else if(nameV != ""){
            document.getElementById("name").style.background="seagreen";
            document.getElementById("name").style.color="white";
        }
    }
*/
    
//Traitement du prénom
    var surnameEff = function valueEffectS(){}
 /*      
        let testValue = document.getElementById("surname").value;
        if (testValue == ""){
            document.getElementById("surname").style.background="#ffbf80";
           
            alert('Votre prénom est requis')
        
        }
        else if(testValue != ""){
            document.getElementById("surname").style.background="seagreen";
            document.getElementById("surname").style.color="white";
            
        
        }
    }
*/

/*
######### Pieces d'identités #########
    Si c'est la carte d'identité française qui est choisie
    alors on va verifier la validité de celle-ci

    


    */

// Traitement de la date de la PI
function valueEffectDtPi(){
}
//Traitement de l'origine de la Pi
function valueEffectOpi(){
        if(cIF.selected == true){
            document.getElementById("originPi").style.background="seagreen";
            document.getElementById("originPi").style.color="white";
        }

    
        
    



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
        
        alert('Votre numéro de document est requis')
    
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
