class Token {
    constructor(type, value) {
      this.type = type;
      this.value = value;
    }
  
    getType() {
      return this.type || null;
    }
  
    getValue() {
      return this.value || null;
    }
  
    is(tokenType) {
      return this.getType() === tokenType;
    }
  
    toString() {
      return `<${this.getType()}, ${this.getValue()}>`;
    }
  
    static create(type, value) {
      return new this(type, value);
    }
  
    static get PLUS() {
      return 'PLUS';
    }
  
    static get MINUS() {
      return 'MINUS';
    }
  
    static get ASTERISK() {
      return 'ASTERISK';
    }
  
    static get SLASH() {
      return 'SLASH';
    }
  
    static get BACKSLASH() {
      return 'BACKSLASH';
    }
  
    static get COMMA() {
      return 'COMMA';
    }
  
    static get DOT() {
      return 'DOT';
    }
  
    static get COLON() {
      return 'COLON';
    }
  
    static get SEMICOLON() {
      return 'SEMICOLON';
    }
  
    static get LEFT_PARENTHESIS() {
      return 'LEFT_PARENTHESIS';
    }
  
    static get RIGHT_PARENTHESIS() {
      return 'RIGHT_PARENTHESIS';
    }
  
    static get ASSIGN() {
      return 'ASSIGN';
    }
  
    static get EOF() {
      return 'EOF';
    }
  
    static get BEGIN() {
      return 'BEGIN';
    }
  
    static get END() {
      return 'END';
    }
  
    static get IDENTIFIER() {
      return 'IDENTIFIER';
    }
  
    static get PROGRAM() {
      return 'PROGRAM';
    }
  
    static get VAR() {
      return 'VAR';
    }
  
    static get INTEGER_TYPE() {
      return 'INTEGER_TYPE';
    }
  
    static get REAL_TYPE() {
      return 'REAL_TYPE';
    }
  
    static get INTEGER_LITERAL() {
      return 'INTEGER_LITERAL';
    }
  
    static get REAL_LITERAL() {
      return 'REAL_LITERAL';
    }
  
    static get INTEGER_DIV() {
      return 'INTEGER_DIV';
    }
  
    static get REAL_DIV() {
      return 'REAL_DIV';
    }
  
    static get PROCEDURE() {
      return 'PROCEDURE';
    }
  }
