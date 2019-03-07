/*
Ce fichier est associé à un événement 'click' afin d'obtenir l'ouverture du navigateur 
de fichier
Contrainte :
- Il ne doit être possible d'ouvrir que des fichiers .PDF : ceci est reglé dans le html avec 'accept=".pdf"
*/



//On s'interresse a la mise à jour du fichier dans la sélection 'input'
let oF = document.getElementById("inputCazFile").addEventListener('change', openFile);

//au click sur le bouton 'nommer', lancement du renommage
let gF = document.getElementById("launchNamingCaz").addEventListener('click', createFile);


function openFile(){
    alert('Attention, vous êtes seul responsable du fichier choisi pour créer un fichier CAZ');
}

function createFile(){
    let cazVal = document.getElementById('inputCazFile').value;
    let cazContent = cazVal.type;
    alert('fichier créé');
    console.log (cazVal, cazContent);
}


/*
Utilisation d'un Blob, exemple
*/
var typedArray = GetTheTypedArraySomehow();

// On ajoute un type MIME pertinent
var blob = new Blob([typedArray], {type: 'application/octet-binary'}); 
var url = URL.createObjectURL(blob);

// url ressemblera à :
//   blob:d3958f5c-0777-0845-9dcf-2cb28783acaf

// désormais on peut utiliser l'URL dans tout
// contexte qui utilise des URL (img.src par
// exemple)

/* 
lecture du contenu du Blob exemple
*/
var reader = new FileReader();

FileReader.readAsBinaryString(Blob);

reader.addEventListener("loadend", function() {
   // reader.result contient le contenu du
   // blob sous la forme d'un tableau typé
});
reader.readAsArrayBuffer(blob);