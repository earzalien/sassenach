
var modal = document.getElementById('modal');

function open_mod() {
    modal.getElementsByClassName('message')[0].innerHTML = 'Exemple';
    modal.className += 'open';
}

// ferme la popup au close de la croix et du mask
var closeButton = modal.getElementsByClassName('close')[0];
var mask = modal.getElementsByClassName('mask')[0];

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
