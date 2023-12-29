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
  
    lexBtn = createButton("Rodar Análise Léxica"); 
    lexBtn.position(column1, 700); 
    lexBtn.mouseClicked(runLexicalAnalyzer);
  
    synBtn = createButton("Rodar Análise Sintática"); 
    synBtn.position(column2, 700); 
    synBtn.mouseClicked(runSyntacticAnalyzer); 
  }

function runLexicalAnalyzer() {
  const parser = new Parser(inputCode);
  console.log()
}

function runSyntacticAnalyzer() {}

function draw() {

  if (area.elt.value) {
    inputCode = area.elt.value;
  }
}