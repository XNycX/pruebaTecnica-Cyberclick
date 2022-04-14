// //Haz un script, que imprima por
// pantalla una lista ordenada de números del 1 al 100 sustituyendo los múltiplos de 3
// por la cadena “cyber”, los múltiplos de 5 por la cadena “click” y los que son múltiplos
// de 3 y de 5 por “cyberclick”

for (let i = 1; i <= 100; i++) {
  switch (true) {
      case  (i % 3 == 0 && i % 5 == 0) :
        document.write(`cyberclick`);
        document.write("<br>");
      break;
      case (i % 3 == 0):
        document.write(`cyber`);
        document.write("<br>");
      break;
      case (i % 5 == 0):
        document.write(`click`);
        document.write("<br>");
      break;
      default:
        document.write(i);
        document.write("<br>");
      break;
  }
//   if (i % 3 == 0 && i % 5 == 0) {
//     document.write(`cyberclick`);
//     document.write("<br>");
//   } else if (i % 3 == 0) {
//     document.write(`cyber`);
//     document.write("<br>");
//   } else if (i % 5 == 0) {
//     document.write(`click`);
//     document.write("<br>");
//   } else {
//     document.write(i);
//     document.write("<br>");
//   }
}
