function showPopup(title, desc) {
    document.getElementById('pop-title').innerText = title;
    document.getElementById('pop-desc').innerText = desc;
    document.getElementById('popup').style.display = "block";
}
function closePopup() {
    document.getElementById('popup').style.display = "none";
}
window.onclick = function(event) {
    let popup = document.getElementById('popup');
    if (event.target == popup) popup.style.display = "none";
}