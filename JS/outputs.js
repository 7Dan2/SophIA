/*
Ce module prend en charge :
- La génération et l'affichage des noms
- La fonctionnalité de sélection du contenu et la copie du champ de sortie 
*/
document.getElementById("generateButton").addEventListener("click", generateTheNames);

// const cazContent = document.querySelector('#outCaz');
// cazContent.addEventListener('copy', (event) => {
//     const selection = document.getSelection();
//     event.clipboardData.setData('text/plain', selection.toString());
//     event.preventDefault();
// });
// cazContent.addEventListener("dblclick", copyCazContent);

let getName = sessionStorage.getItem('name');
let getSurname = sessionStorage.getItem('surname');

function generateTheNames()
{
    document.getElementById("outCaz").value = "CAZ_" + getName + "_" + getSurname;
    document.getElementById("outCaz").style.background = "lightgreen";

    document.getElementById("outCazO").innerHTML = "CAZ-O_" + getName + "_" + getSurname;
}

// function copyCazContent()
// {

// }