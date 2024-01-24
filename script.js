/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati 
inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare 
sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

console.log('funziona');

// generazione input per numeri random

/*
const generaInput = document.getElementById('genera');
let numberComputerArray = [];

generaInput.addEventListener('click', function () {

    
    let xRandomOne = Math.floor(Math.random() * 10);

    numberComputerArray.push(xRandomOne);

    console.log(xRandomOne);

    let xRandomTwo = Math.floor(Math.random() * 10);

    numberComputerArray.push(xRandomTwo);

    console.log(xRandomTwo);

    let xRandomThree = Math.floor(Math.random() * 10);
    numberComputerArray.push(xRandomThree);

    console.log(xRandomThree);

    let xRandomFour = Math.floor(Math.random() * 10);
    numberComputerArray.push(xRandomFour);

    console.log(xRandomFour);

    let xRandomFive = Math.floor(Math.random() * 10);
    numberComputerArray.push(xRandomFive);

    console.log(xRandomFive);

    console.log(numberComputerArray);


    document.getElementById('numberone').innerHTML = xRandomOne;
    document.getElementById('numbertwo').innerHTML = xRandomTwo;
    document.getElementById('numberthree').innerHTML = xRandomThree;
    document.getElementById('numberfour').innerHTML = xRandomFour;
    document.getElementById('numberfive').innerHTML = xRandomFive;

    setTimeout(myFunction, 5000);

    function myFunction() {

        document.getElementById('numberone').innerHTML = " ";
        document.getElementById('numbertwo').innerHTML = " ";
        document.getElementById('numberthree').innerHTML = " ";
        document.getElementById('numberfour').innerHTML = " ";
        document.getElementById('numberfive').innerHTML = " ";


    };

});


let userNumberArray = [];

setTimeout(myFunction, 15000);

function myFunction() {
   
    

    for (let i = 0; i <= 4; i++) {

       let userNumber = parseInt(prompt("Inserisci i 5 numeri ordine visualizzato:"));
       console.log(userNumber);

        if (!isNaN(userNumber)) {

            userNumberArray.push(userNumber)
        }   else {
            alert("Numero non inserito, per favore inserisci un numero");
            i--;
        }   
        
    }

    console.log(userNumberArray);

    for (let i = 0; i <= 4; i++) {
        if (numberComputerArray[i] === userNumberArray[i]) {
            console.log('the winner is user');
        } else {
            console.log('the winner is computer');
        }
        
    }
};
*/

// Esercizio con suggerimenti di Luigi

const generaInput = document.getElementById('genera');
let numberComputerArray = [];

generaInput.addEventListener('click', function () {
    

    let boxElements = document.querySelectorAll(".box");

    for (let i = 0; i < 5; i++) {
        let xRandom = Math.floor(Math.random() * 10);
        numberComputerArray.push(xRandom);
        console.log(xRandom);

        // Stampa in pagina i numeri random generati
        boxElements[i].innerHTML = xRandom;
    }

    console.log(numberComputerArray);

    
    setTimeout(resetNumbers, 5000);

    function resetNumbers() {
        let boxElements = document.querySelectorAll(".box");
        for (let i = 0; i < boxElements.length; i++) {
            boxElements[i].innerHTML = " ";
        }
        
    }
});




let userNumberArray = [];

setTimeout(myFunction, 15000);

function myFunction() {
   
    

    for (let i = 0; i < 5; i++) {

       let userNumber = parseInt(prompt("Inserisci i 5 numeri ordine visualizzato:"));
       console.log(userNumber);

        if (!isNaN(userNumber)) {

            userNumberArray.push(userNumber)
        }   else {
            alert("Numero non inserito, per favore inserisci un numero");
            i--;
        }   
        
    }

    console.log(userNumberArray);

    for (let i = 0; i < 5; i++) {
        if (userNumberArray[i] === numberComputerArray[i]) {
            console.log('the winner is user');

        } else {
            console.log('the winner is computer');
        }
        
    }
};