/*
Ce fichier est un fichier de test pour bidouiller les blob et file
*/

// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    // Great success! All the File APIs are supported.
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }
/*
var inputBlob = document.getElementById("inpBlob").value;
var myBlob = new Blob(["This is my firstblob content"], {type : "text/plain"});
var myReader = new FileReader();
//handler executed once reading(blob content referenced to a variable) from blob is finished. 
myReader.addEventListener("loadend", function(e){
    document.getElementById("paragraph").innerHTML = e.srcElement.result;//prints a string
});
//start the reading process.
myReader.readAsText(myBlob);
console.log(inputBlob, myBlob);
*/

/*
autre chose venant de MDN
*/
window.URL = window.URL || window.webkitURL;

const fileSelect = document.getElementById("outCaz"),
fileElem = document.getElementById("inputCazFile"),
fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e){
    if (fileElem){
        fileElem.click();
    }
    e.preventDefault(); // empêche la navigation jusqu'à la source
    }, false);

function handleFiles(files){
    if(!files.length){
        fileList.innerHTML = "<p>No files selected!</p>";
    } else {
        fileList.innerHTML = "";
        const list = document.createElement("ul");
        fileList.appendChild(list);
        for (let i = 0; i < files.length; i++){
            const li = document.createElement("li");
            list.appendChild(li);

            const img = document.createElement("img");
            img.src = window.URL.createObjectURL(files[i]);
            img.height = 60;
            img.onload = function(){
                window.URL.revokeObjectURL(this.src);
            }
            li.appendChild(img);
            const info = document.createElement("span");
            info.innerHTML = "Fichier a nommer" + "" + files[i].name + ": " + files[i].size + "" + "bytes";
            li.appendChild(info);


        }
    }
}