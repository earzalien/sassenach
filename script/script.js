
document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById('modal');

    function open_mod() {
        modal.getElementsByClassName('message')[0].innerHTML = '<div id="bromance"><img src="img/micka2.png" width="50%" alt="Micka le bel"/>Mickael le bel&nbsp;<img width="50%" src="img/simon.png" alt="Simon le beau"/>Simon le beau</div>';
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