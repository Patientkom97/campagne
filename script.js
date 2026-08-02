let photo=document.getElementById("photo");
let profil=document.getElementById("profil");

photo.addEventListener("change",function(){

let fichier=this.files[0];

let reader=new FileReader();

reader.onload=function(e){

profil.src=e.target.result;

}

reader.readAsDataURL(fichier);

});

document.getElementById("nom").addEventListener("input",function(){

document.getElementById("nomAffiche").innerHTML=this.value;

});

function telecharger(){

html2canvas(document.getElementById("affiche")).then(canvas=>{

let lien=document.createElement("a");

lien.download="affiche.png";

lien.href=canvas.toDataURL();

lien.click();

});

}