class Lexer {
  constructor(input) {
    this.input = input;
    this.position = 0;
    this.currentChar = this.input[this.position];
  }

  advance() {
    this.position += 1;

    if (this.position > this.input.length - 1) {
      this.currentChar = null;
    } else {
      this.currentChar = this.input[this.position];
    }

    return this;
  }

  peek() {
    const position = this.position + 1;

    if (position > this.input.length - 1) return null;

    return this.input[position];
  }

  skipWhitespace() {
    while (this.currentChar && /\s/.test(this.currentChar)) {
      this.advance();
    }

    return this;
  }

  skipComment() {
    while (this.currentChar && this.currentChar !== '}') {
      this.advance();
    }

    return this.advance();
  }

  number() {
    let number = '';

    while (this.currentChar && /\d/.test(this.currentChar)) {
      number += this.currentChar;
      this.advance();
    }

    if (this.currentChar === '.') {
      number += this.currentChar;
      this.advance();

      while (this.currentChar && /\d/.test(this.currentChar)) {
        number += this.currentChar;
        this.advance();
      }

      return Token.create(Token.REAL_LITERAL, parseFloat(number));
    }

    return Token.create(Token.INTEGER_LITERAL, parseInt(number));
  }

  identifier() {
    let identifier = '';

    while (this.currentChar && /[a-zA-Z0-9]/.test(this.currentChar)) {
      identifier += this.currentChar;
      this.advance();
    }

    return Lexer.RESERVED_WORDS[identifier] || Token.create(Token.IDENTIFIER, identifier);
  }

  getNextToken() {
    while (this.currentChar) {
      if (/\s/.test(this.currentChar)) {
        this.skipWhitespace();
        continue;
      }

      if (this.currentChar === '{') {
        this.advance();
        this.skipComment();
        continue;
      }

      if (/\d/.test(this.currentChar)) {
        return this.number();
      }

      if (/[a-zA-Z]/.test(this.currentChar)) {
        return this.identifier();
      }

      if (this.currentChar === ':' && this.peek() === '=') {
        this.advance().advance();
        return Token.create(Token.ASSIGN, ':=');
      }

      if (this.currentChar === ':') {
        this.advance();
        return Token.create(Token.COLON, ':');
      }

      if (this.currentChar === ',') {
        this.advance();
        return Token.create(Token.COMMA, ',');
      }

      if (this.currentChar === ';') {
        this.advance();
        return Token.create(Token.SEMICOLON, ';');
      }

      if (this.currentChar === '.') {
        this.advance();
        return Token.create(Token.DOT, '.');
      }

      if (this.currentChar === '+') {
        this.advance();
        return Token.create(Token.PLUS, '+');
      }

      if (this.currentChar === '-') {
        this.advance();
        return Token.create(Token.MINUS, '-');
      }

      if (this.currentChar === '*') {
        this.advance();
        return Token.create(Token.ASTERISK, '*');
      }

      if (this.currentChar === '/') {
        this.advance();
        return Token.create(Token.SLASH, '/');
      }

      if (this.currentChar === '(') {
        this.advance();
        return Token.create(Token.LEFT_PARENTHESIS, '(');
      }

      if (this.currentChar === ')') {
        this.advance();
        return Token.create(Token.RIGHT_PARENTHESIS, ')');
      }

      Lexer.error(`Unexpected character: ${this.currentChar}`);
    }

    return Token.create(Token.EOF, null);
  }

  static error(msg) {
    throw new Error(`[Lexer]\n${msg}`);
  }

  static get RESERVED_WORDS() {
    return {
      PROGRAM: Token.create(Token.PROGRAM, 'PROGRAM'),
      VAR: Token.create(Token.VAR, 'VAR'),
      DIV: Token.create(Token.INTEGER_DIV, 'DIV'),
      INTEGER: Token.create(Token.INTEGER_TYPE, 'INTEGER_TYPE'),
      REAL: Token.create(Token.REAL_TYPE, 'REAL_TYPE'),
      BEGIN: Token.create(Token.BEGIN, 'BEGIN'),
      END: Token.create(Token.END, 'END'),
      PROCEDURE: Token.create(Token.PROCEDURE, 'PROCEDURE')
    }
  }
}