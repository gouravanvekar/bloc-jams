function myFunction(text, callback, stark) {
    console.log(text);
    callback(stark);
}

function myCallback(stark) {
    console.log(stark);
}

var houseStark = ["Ned", "Catelyn", "Robb", "Sansa", "Arya", "Bran", "Rickon"];

for (var index in houseStark) {
    myFunction("Hello ", myCallback, houseStark[index]);
};