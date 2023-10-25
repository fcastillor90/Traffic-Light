function redlight(){
    document.getElementById('stoplight').style.backgroundColor = "red, glow";
}

function yellowlight(){
    document.getElementById('slowlight').style.backgroundColor = "yellow, glow";
}

function greenlight(){
    document.getElementBy('golight').style.backgroundColor = "green, glow";

document.getElementById("golight").onclick = function (){
    greenlight();
    }
}

