var j = 0;
var modal;

function openNav() {
    document.getElementById("myNav").style.width = "100%";
} 
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function getNewColor(){
    var symbols,color;
    symbols = "0123456789ABCDEF";

    color = '#';
    for(var i =0;i<6;i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;
}


function anjay(){
    var modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
}



function test(){
    if(j >= 0 && j <= 5){
        document.getElementById("input1").innerHTML = j
        document.querySelector(".button5").style.backgroundColor = "grey"
    }
    else if(j > 5){
        document.getElementById("input1").innerHTML = j
        document.querySelector(".button5").style.backgroundColor = "green"
    }
    else if(j < 0 && j >= -5){
        document.getElementById("input1").innerHTML = j
        document.querySelector(".button5").style.backgroundColor = "yellow"
    }
    else if(j < -5 && j > -11){
        document.getElementById("input1").innerHTML = j
        document.querySelector(".button5").style.backgroundColor = "purple"
    }
    else if(j == -11){
        alert("back to home again!");
        window.location.href = 'index.html';
    }
    console.log(j);
}

function tambah(){
    j += 1;
    test();
}
function kurang(){
    j -= 1;
    test();
}


function goHome(){
    alert("back to home again!");
    window.location.href = 'index.html';
}

function goIns(){
    window.open("https://www.instagram.com/rhmndhika/?hl=id");
}

