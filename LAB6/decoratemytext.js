
function changeIt(){
    setInterval(changeTextarea, 500);
}

function makePig() {
}

function makeMalkovich(){
    var bigText = document.getElementById('big_text');
    var strArray = bigText.value.split(' ');
    for(var str of strArray) {
        if(str.length >= 5) {
            bigText.value = bigText.value.replace(str, 'Malkovich');
        }
    }
}

function changeTextarea(){
    var bigText = document.getElementById('big_text');
    var fontSize = parseInt(window.getComputedStyle(bigText).fontSize) + 2;
    bigText.style.fontSize = fontSize + "pt";
}

function changeWeigth(check){
    var bigText = document.getElementById('big_text');
    bigText.style.color = check.checked ? "#00FF00" : "#000";
    bigText.style.textDecoration = check.checked ? "underline" : "none";
    document.body.style.backgroundImage = check.checked ? "url(https://media.istockphoto.com/vectors/decorative-dividers-text-lines-vintage-hand-drawn-border-decoration-vector-id1130251295)" : "unset";
}