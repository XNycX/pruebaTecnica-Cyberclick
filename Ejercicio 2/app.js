const readLine = require("readline");
const f = require("fs");
let file = "./input.txt";
let rl = readLine.createInterface({
  input: f.createReadStream(file),
  output: process.stdout,
  terminal: false,
});

// ej 1 parte 1
rl.on("line", (text) => {
  text.split(/\r\n|\n/).forEach((element) => {
    let objeto = {
      letter: element.split(/[^a-zA-Z]/).filter((x) => x[0]),
      numbers: element.split(/[^0-9]/).filter((x) => x),
      password: element.split(/[^a-zA-Z]/).filter((x) => x[1]),
    };
    let numberOfTimesLetterAppears =
      objeto.password[0].split(objeto.letter[0]).length - 1;
    if (
      numberOfTimesLetterAppears >= +objeto.numbers[0] &&
      numberOfTimesLetterAppears <= +objeto.numbers[1]
    ) {
      console.count('contraseñas validas');
    }
  });
});

// ej 2 parte 2
rl.on("line", (text) => {
  text.split(/\r\n|\n/).forEach((element) => {
    let objeto = {
      letter: element.split(/[^a-zA-Z]/).filter((x) => x[0]),
      numbers: element.split(/[^0-9]/).filter((x) => x),
      password: element.split(/[^a-zA-Z]/).filter((x) => x[1]),
    };
    if(objeto.password[0][+objeto.numbers[0]]===objeto.letter[0] || objeto.password[0][+objeto.numbers[1]]===objeto.letter[0] ) {
      console.count('contraseñas validas');
    }
  });
});
