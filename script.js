var jakielement = -1;
var jakapora = "";

window.onload = () => {
    var jakapora = setInterval(ktorapora, 5000);
}


var animacja = true;
function ktorapora() {
    if (jakielement >= document.querySelectorAll('.pora').length - 1) {
        clearInterval(jakapora);
        jakapora = "";
        jakielement = 0;
        document.getElementById('calyekran').style.display = 'none';
        animacja = false;
    } else {
        jakielement = parseFloat(jakielement) + parseFloat(1);
    }
    powiekszp(jakielement);
}

function powiekszp(ktory) {
    document.getElementById('numer').innerHTML = parseFloat(ktory) + parseFloat(1) + '/4';
    for (wszystkiepory = 0; wszystkiepory < document.querySelectorAll('.pora').length; wszystkiepory++) {
        document.querySelectorAll('.pora')[wszystkiepory].style.transform = "scale(1)";
    }
    if (animacja == true) {
        let ekran = document.getElementById('calyekran');
        let ekranwyswietl = document.getElementById('calyekranwyswietl');
        ekran.style.display = "flex";
        ekranwyswietl.innerHTML = `<div class="jakapora"> ${document.querySelectorAll('.pora')[ktory].innerHTML} </div> `;
        document.querySelectorAll('.pora')[jakielement].style.transform = "scale(1.1)";
    }
}

function powieksz(ktory) {
    for (wszystkiepory = 0; wszystkiepory < document.querySelectorAll('.pora').length; wszystkiepory++) {
        document.querySelectorAll('.pora')[wszystkiepory].style.transform = "scale(1)";
    }
    let ekran = document.getElementById('calyekranp');
    ekran.style.display = "flex";
    let ekranwyswietl = document.getElementById('calyekranwyswietlp');
    ekranwyswietl.innerHTML = `<div class="jakapora"> ${document.querySelectorAll('.pora')[ktory].innerHTML} </div> `;
    jaki = document.createElement('div');
    jaki.id = "jaki";
    jaki.innerHTML = parseFloat(ktory) + parseFloat(1) + '/4';
    ekranwyswietl.appendChild(jaki);
    document.querySelectorAll('.pora')[ktory].style.transform = "scale(1.1)";
    jaki = ktory;
}

function zamknij() {
    document.getElementById('calyekranp').style.display = 'none';
    document.getElementById('calyekran').style.display = 'none';
}

function nastepne(wktorostrone) {
    if (wktorostrone == "wstecz") {
        if (jaki > 0) {
            jaki -= parseFloat(1);
        } else {
            jaki = document.querySelectorAll('.pora').length - 1;
        }
    }
    else if (wktorostrone == "dalej") {
        if (jaki < document.querySelectorAll('.pora').length - 1) {
            jaki += parseFloat(1);
        } else {
            jaki = 0;
        }
    }
    powieksz(jaki);
}


document.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowRight') {
        nastepne('dalej');
    } else if (e.key == 'ArrowLeft') {
        nastepne('wstecz');
    }
});




//Dominik Łempicki kl.2bLO informatyka
