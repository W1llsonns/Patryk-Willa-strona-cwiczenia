var obiekt = [
    { nazwa: "Obiekt1", liczba: 30, tekst: "Lorem" },
    { nazwa: "Obiekt2", liczba: 15, tekst: "Ipsum" },
    { nazwa: "Obiekt3", liczba: 5, tekst: "Lorem Ipsum" },
];


document.getElementById("buttonOb").addEventListener("click", function () {
    for (n = 0; n < obiekt.length; n++) {
        console.log(obiekt[n].nazwa, obiekt[n].liczba, obiekt[n].tekst);
    }
}, false);