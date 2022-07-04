const gameTitle = () => {
    const text = 'snake game by Gabor Nagy';
    const textLength = text.length;
    const terminalLength = 80; //process.stdout.columns;
    console.log(terminalLength);
    const offset = (terminalLength - textLength) / 2;
    let offsetString = '';
    for (let i = 0; i < offset; i++) {
      offsetString = ' ' + offsetString;
    }
    const resultText = offsetString + text;
    console.log(resultText);
  };

  module.exports = {
    gameTitle: gameTitle,
  };