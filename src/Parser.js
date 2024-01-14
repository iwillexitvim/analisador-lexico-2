class Parser {
  constructor(input) {
    this.lexer = new Lexer(input);
    this.currentToken = this.lexer.getNextToken();
    this.tokens = [];
  }

  eat() {
    this.currentToken = this.lexer.getNextToken();
    this.tokens.push(this.currentToken.toString())

    return this;
  }

  program() {
    while(this.currentToken.type !== Token.EOF) {
      this.eat();
    }

    return this.tokens;
  }

  parse() {
    return this.program();
  }
}