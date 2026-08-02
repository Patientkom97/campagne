let photo = document.getElementById("photo");
let profil = document.getElementById("profil");
let nomInput = document.getElementById("nom");
let nomAffiche = document.getElementById("nomAffiche");
let messageInput = document.getElementById("messageInput");
let messageAffiche = document.getElementById("messageAffiche");

// 1. Photo de profil
photo.addEventListener("change", function () {
    let fichier = this.files[0];
    if (fichier) {
        let reader = new FileReader();
        reader.onload = function (e) {
            profil.src = e.target.result;
        };
        reader.readAsDataURL(fichier);
    }
});

// 2. Mise à jour dynamique du Nom
nomInput.addEventListener("input", function () {
    if (this.value.trim() === "") {
        nomAffiche.innerText = "VOTRE NOM ICI";
    } else {
        nomAffiche.innerText = this.value.toUpperCase();
    }
});

// 3. Mise à jour dynamique du Message
if (messageInput) {
    messageInput.addEventListener("input", function () {
        messageAffiche.innerText = this.value.toUpperCase();
    });
}

// 4. Téléchargement de l'affiche
function telecharger() {
    let afficheElement = document.getElementById("affiche");

    html2canvas(afficheElement, {
        useCORS: true,
        scale: 2
    }).then(canvas => {
        let lien = document.createElement("a");
        lien.download = "affiche-campagne.png";
        lien.href = canvas.toDataURL("image/png");
        lien.click();
    });
}