{
  document.write("Hello World!<br/>");
  document.write("Hello World!<br/>");
  document.write("Hello World!<br/>");
  document.write("Hello World!<br/>");
  document.write("Hello World!<br/>");
  document.write("Hello World!<br/>");
  document.write("Hello World!<br/>");
  document.write("Hello World!<br/>");
}

document.write("<br/> <br/> <br/>");
let kanter = 0;
/* while (kanter < 12) {
  ++kanter;
  document.write(kanter + " X 2 = " + kanter * 2 + "<br/>");
} */

/* do {
  ++kanter;
  document.write(kanter + " X 2 = " + kanter * 2 + "<br/>");
} while (kanter < 12); */

for (let index = 2; index <= 12; index = index + 2) {
  document.write(index + " X 2 = " + index * 2 + "<br/>");
}
