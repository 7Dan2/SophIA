
//document.getElementById("surname").addEventListener("focusout", valueEffectS);
//document.getElementById("dtNaiss").addEventListener("blur", valueEffectdTN);
function checkNames()
{
//On va vérifier qu'il n'y a pas de chiffres avant de traiter la valeur

//Récupération du nom, mise en majuscule

        
        let nameV = document.getElementById("name").value.toUpperCase();
        let surnameValue = document.getElementById("surname").value.toUpperCase();
        
        
        let nameChk, surnameChk;
        
        if (nameV == "" || isNaN(nameV) == false)
        {
            
            document.getElementById("name").style.background="#ffbf80";
            document.getElementById("name").style.color="crimson";

            nameChk = false;
        }
        else if (nameV != "" && isNaN(nameV) == true)
        {
            document.getElementById("name").style.background="seagreen";
            document.getElementById("name").style.color="white";
            
            nameChk = true;
        }
        

    
 // #########  Traitement du prénom  #########
    
      
        if (surnameValue == "" || isNaN(surnameValue) == false)
        {
            document.getElementById("surname").style.background="#ffbf80";
            document.getElementById("surname").style.color="crimson";
           
            surnameChk = false;
        }
        else if (surnameValue != "" && isNaN(surnameValue) == true)
        {
            document.getElementById("surname").style.background="seagreen";
            document.getElementById("surname").style.color="white";

           surnameChk = true;
        }
    
    // #########  Date de naissance  #########
        //On récupère la valeur du champ date quel que soit son formatage
        let dtNaissV = document.getElementById("dtNaiss").value;
        //Déclaration d'un tableau destiné à recevoir la date de naissance
        let dtNaissArray = [];

        if (dtNaissV == "")
        {
            document.getElementById("dtNaiss").style.background="#ffbf80";
        }


        
        else if(dtNaissV != "")
        {
            document.getElementById("dtNaiss").style.background="seagreen";
            document.getElementById("dtNaiss").style.color="white";

            

   /*
   remplissage du tableau dtNaissArray en séparant les éléments de la date en prenant comme parametre le tiret qui est par 
   présent par défaut dans les champs de type 'date'
   puis inversion des valeurs du tableau pour revenir à un format JJMMAAAA)
   */

   /* 
   Sauf que des fois, le champ de type 'date' ne fonctionne pas sous certains navigateur,
   il faut alors filtrer ce qui est entré par l'utilisateur et voir comment le champ se comporte.
   */
   //Si l'utilisateur entre la date en séparant les élément par " - " :
            if (dtNaissV.includes("-"))
            {
   /*
   On va quand même vérifier qu'il a bien commencé par le jour, si c'est un petit malin qui a mis
   l'année en premier,on inverse les éléments AAAA et JJ
   */
                dtNaissArray = dtNaissV.split("-");
                if (dtNaissArray[0] > 31)
                {
                    dtNaissArray.reverse();
                }
            }
   /*
   //Si l'utilisateur entre la date en séparant les élément par " / " , il faut les remplacer par des " - " 
   */
            if (dtNaissV.includes("/"))
            {
            //On entre les valeurs dans le tableau en gardant les " / "
            //On vérifie aussi que ce n'est pas le même petit malin qui essaie de mettre l'année en premier
                dtNaissArray = dtNaissV.split("/");
                if (dtNaissArray [0] > 31)
                {
                    dtNaissArray.reverse();
                }
   //On créé une boucle qui va permettre de parcourir le tableau
                for (let i = 0 ; i < dtNaissArray.length ; i++)
                {
                dtnaissOut = dtNaissArray[i].replace("/", "-");
                }
            }
   
        }

//controle final
        if (nameChk == true && surnameChk == true)
        {
            document.getElementById("outCaz").style.background="seagreen";
            document.getElementById("outCaz").style.color="white";

            document.getElementById("outCazO").style.background="seagreen";
            document.getElementById("outCazO").style.color="white";

            document.getElementById("outCaz").innerHTML = "CAZ" + "_" + nameV + "_" + surnameValue + "_" +dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2];
            document.getElementById("outCazO").innerHTML = "CAZ-O" + "_" + nameV + "_" + surnameValue + "_" +dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2];
            document.getElementById("outPi").innerHTML = "PI" + "_" + nameV + "_" + surnameValue + "_" +dtNaissArray[0] + dtNaissArray[1] + dtNaissArray[2];
        }

        else 
        {

            document.getElementById("outCaz").style.background="#ffbf80";
            document.getElementById("outCaz").style.color="crimson";

            document.getElementById("outCazO").style.background="#ffbf80";
            document.getElementById("outCazO").style.color="crimson";

            document.getElementById("outPi").style.background="#ffbf80";
            document.getElementById("outpi").style.color="crimson";

            document.getElementById("outCaz").innerHTML = "Données incorrectes ou manquantes";
            document.getElementById("outCazO").innerHTML = "Données incorrectes ou manquantes";
            document.getElementById("outPi").innerHTML = "Données incorrectes ou manquantes";
        }
    
        export {surnameValue};

}

