document.getElementById("cIF").addEventListener("blur", pi);
/*######### Pieces d'identités #########
Si c'est la carte d'identité française qui est choisie
alors on va verifier que le numéro est compatible et la validité de la date de délivrance
*/
//Traitement de l'origine de la Pi et du champ du numéro et de la validité 
function pi()
{
    //On recueille le choix de la PI
    let ciFStatut =  document.getElementById("cIF").selected;
    let passPrtF = document.getElementById("passPrtF").selected;
    let cIEu = document.getElementById("cIEu").selected;
    let titrSej = document.getElementById("titrSej").selected;
    //on recueille le numéro renseigné
    let numPi = document.getElementById("numPi").value;
    //et la date de délivrance 
    let dtDelivrPi = document.getElementById("dtDelivrPi").value;

    let numPiValid;
    let dtPiValid;
    console.log(ciFStatut,passPrtF,cIEu,titrSej,numPi,dtDelivrPi)

    //on traite la longueur du numéro de la Carte d'identité si elle est sélectionné
//Si c'est la carte d'identit équi est sélectionnée
    if (ciFStatut == true)
// La carte d'identité est constituée de 12 caractères, on va vérifier 
    { 
        if (numPi.length < 12 || numPi.length > 12) 
        {
            //si il est incorect (trop long ou trop court)une alerte s'affiche
            alert ("la carte d'identité comporte 12 caractères");
            //le fond du numéro se colore en orange ecriture rouge
            document.getElementById("numPi").style.background="#ffbf80";
            document.getElementById("numPi").style.color="crimson";
            //ainsi que le fond du chmap de sélection de la Pi
            document.getElementById("originPi").style.background="#ffbf80";
            document.getElementById("originPi").style.color="crimson";
            //la sortie outPi change de couleur et renvoie un message et ne génere pas le nom
            
            numPiValid = false;
        }
        //Une fois le numéro à la bonne longueur tout est ok, le champ de selection et le numéro se mettent en vert
        else 
        {
            document.getElementById("numPi").style.background="seagreen";
            document.getElementById("numPi").style.color="white";
            document.getElementById("originPi").style.background="seagreen";
            document.getElementById("originPi").style.color="white";

            numPiValid = true;
        }
// ### Vérification de la validité de la carte d'identité ###
        if (dtDelivrPi == "")
        {
            document.getElementById("dtDelivrPi").style.background="#ffbf80";
        }
        else if(dtDelivrPi != "")
        // ### Vérification de la validité de la carte d'identité ###

    
    //Détermination des ms depuis le 01-01-1970 au moment de l'entrée de la date de la PI
        {
            let dtOrigin = new Date();
            let origin = Date.now();
            //Détermination des ms au 01-01-2014 (date de passage de la validité de la CI à 15 ans)
            var dCi = Date.parse("January 01, 2014");
            //Détermination des ms à la valeur entrée comme date de délivrance de la PI OU du passport
            let dtValidPi = Date.parse(dtDelivrPi);
            
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
                    alert("la validité de votre carte est dépassée");
                    
                }
                document.getElementById("dtDelivrPi").style.background="crimson";
                    document.getElementById("dtDelivrPi").style.color="white";
                dtPiValid = false;
            }
        
            else if (dtValidPi > dCi)
            {
            document.getElementById("dtDelivrPi").style.background="seagreen";
            document.getElementById("dtDelivrPi").style.color="white";
            dtPiValid = true;
            }
        }
    }

    if (numPiValid == true && dtPiValid == true)
    {
    document.getElementById("outPi").style.background="seagreen";
    document.getElementById("outPi").style.color="white";
    document.getElementById("outPi").innerHTML = "Données carte identité valides";
    }   
    else
    {
        let txt = "vous ne pouvez pas obtenir de sortie sans données correctes";
        document.getElementById("outPi").style.background="#ffbf80";
        document.getElementById("outPi").style.color="crimson";
        document.getElementById("outPi").innerHTML = txt;
    }

console.log(numPiValid, dtPiValid)

        //fin de la fonction
}
//document.getElementById("outPi").innerHTML = "PI" + "_" + nameValue + "_" + surnameFirstLetter + abc + "_" + dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2] + "_" + numPi + ".pdf";
    
