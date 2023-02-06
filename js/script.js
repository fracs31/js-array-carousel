let images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"] //array con le immagini del carosello
let img = document.getElementById("img"); //immagine del carosello
let btnLeft = document.getElementById("btn-left"); //bottone per andare indietro con le immagini del carosello
let btnRight = document.getElementById("btn-right"); //bottone per andare avanti con le immagini del carosello
let index = 0; //indice

//Quando viene premuto il tasto per andare avanti con le immagini del carosello
btnRight.addEventListener("click", function() {
    //Se l'indice è minore della lunghezza dell'array di immagini
    if (index < (images.length - 1)) {
        index++; //incremento l'indice
        img.src = images[index]; //cambio l'immagine
    } else if (index == (images.length - 1)) { //se l'indice è uguale alla lunghezza dell'array di immagini
        index = 0; //azzero l'indice
        img.src = images[index]; //cambio l'immagine
    }
});

//Quando viene premuto il tasto per andare avanti con le immagini del carosello
btnLeft.addEventListener("click", function() {
    
});