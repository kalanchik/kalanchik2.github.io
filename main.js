const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');
const images = ["room1.png", "room2.png", "room3.png"];
const roomImage = document.querySelector(".room");
let roomIdx = 0;

updateImage(0);


function updateImage(index) {
    roomImage.src = images[index];
}

arrowLeft.addEventListener("click", () => {
    if (roomIdx == 0) {
        roomIdx = 2;
        updateImage(roomIdx);
        return;
    }
    if ((roomIdx < 3) && (roomIdx > -1)) {
        roomIdx = roomIdx - 1;
        updateImage(roomIdx);
    }
});

arrowRight.addEventListener("click", () => {
    if (roomIdx == 2) {
        roomIdx = 0;
        updateImage(roomIdx);
        return;
    }
    if ((roomIdx < 3) && (roomIdx > -1)) {
        roomIdx = roomIdx + 1;
        updateImage(roomIdx);
    }
});

function openModal() {
    document.getElementById('myModal').style.display = 'flex';
    console.log('adasdasda');
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Закрыть модальное окно при клике вне его области
window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
