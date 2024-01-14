let inputCode = "";

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(18);

    let column1 = 100;
    let column2 = 600;
    let column3 = 1000;

    text("Código-fonte <LP>", column1, 100)
    text("Tokens", column2, 100)
    text("Resultado da Análise Sintática", column3, 100)
  
    area = createElement('textarea');
    area.position(column1, 130);
    area.size(300, 400);
    area.elt.placeholder = "Inserir código aqui";

    tokensArea = createElement("h2");
    tokensArea.position(column2, 130);
  
    lexBtn = createButton("Rodar Análise Léxica"); 
    lexBtn.position(column1, 700); 
    lexBtn.mouseClicked(() => {
      const parser = new Parser(inputCode);
      const tokens = parser.parse();
    
      tokensArea.elt.textContent = tokens.join("\n")
    });
  }

function runSyntacticAnalyzer() {}

function draw() {

  if (area.elt.value) {
    inputCode = area.elt.value;
  }
}