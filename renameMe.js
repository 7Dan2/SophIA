function renameMe(){
    let docincaz = document.getElementById("chooseFileCAZ");
    let docincaz0 = document.getElementById("chooseFileCAZ0");
    let docinpi = document.getElementById("chooseFilePI");
    console.log(docincaz, docincaz0, docinpi);
}
//A adapter et tester
var file = document.GetElementById('fileupload1');
var blob = file.files[0].slice(0, file.files[0].size, 'image/png'); 
newFile = new File([blob], 'name.png', {type: 'image/png'});