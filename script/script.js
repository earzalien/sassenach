
document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById('modal');

    function open_mod() {
        modal.getElementsByClassName('message')[0].innerHTML = 'Exemple';
        modal.className += ' open'; // Ajoute un espace pour séparer les classes correctement
    }

    // ferme la popup au close de la croix et du mask
    let closeButton = modal.getElementsByClassName('close')[0];
    let mask = modal.getElementsByClassName('mask')[0];

    closeButton.addEventListener("click", function () {
        closePopup();
    });
    mask.addEventListener("click", function () {
        closePopup();
    });

    // fonction qui supprime la class
    function closePopup() {
        modal.classList.remove("open");
    }

    // ouverture de la popup via le lien
    document.getElementById('ouvrir-popup').addEventListener("click", function (e) {
        e.preventDefault();
        open_mod();
    });
});