//function renameMe(){
    //let docincaz = document.getElementById("chooseFileCAZ").files;
    //let oFiles = docincaz.name;
    //let files = 0;
    //let out = File.name;
    //for (var i = 0, numFiles = files.length; i < numFiles; i++) {
    //    var file = files[i];
        
    //  }
      
    //let blob = new Blob;
    //blob = docincaz.docincaz[0].slice(0, docincaz.docincaz[0].size, 'application/pdf'); 
    //newFile = new File([blob], 'renamed.png', {type: 'application/pdf'});

    /*let docincaz0 = document.getElementById("chooseFileCAZ0").files[0];
    let docinpi = document.getElementById("chooseFilePI").files[0];
    let docindue = document.getElementById("chooseFileDUE").files[0];
    console.log(docincaz, oFiles, out);
    
    //document.getElementById("fileSizeOut") = ;

//var file = document.GetElementById('chooszFileCAZ');//


}*/
const input = document.querySelector('input[type="file"]')
input.addEventListener('input', function (e){
    console.log(input.files)
},false)
//}