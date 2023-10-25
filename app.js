var color1 = new Array("yellow");
var color2 = new Array("yellow");
var color3 = new Array("green");



function redlight(){
    trafficOffcorse();
    document.getElementById('stoplight').style.backgroundColor = "red";
}

function yellowlight(){
    trafficOffcorse();
    document.getElementById('slowlight').style.backgroundColor = "yellow";
}

function greenlight(){
    trafficOffcorse();
    document.getElementById('golight').style.backgroundColor = "green";
}

function trafficOffcorse() {
    document.getElementById('stoplight').style.backgroundColor = "black";
    document.getElementById('slowlight').style.backgroundColor = "black";
    document.getElementById('golight').style.backgroundColor = "black";
}

function surpriceeee(){
    document.getElementById('stoplight').style.backgroundColor = "rgb(209, 128, 198)";
    document.getElementById('slowlight').style.backgroundColor = "rgb(209, 128, 198)";
    document.getElementById('golight').style.backgroundColor = "rgb(209, 128, 198)";
}


document.getElementById('stopButton').onclick = redlight;
document.getElementById('slowButton').onclick = yellowlight;
document.getElementById('goButton').onclick = greenlight;
document.getElementById('trafficOff').onclick = trafficOffcorse;
document.getElementById('surprise').onclick = surpriceeee;