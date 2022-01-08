const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    const MORSE_SYMBOLS = {
        '10': '.',
        '11': '-',
    };

    let letterArr = expr.match(/[01*]{10}/g);
    let encodeArr = [];
    let decodeArr = [];

    letterArr.forEach(letter => {
        let letterStr = '';
        let morseSymbol = '';

        for (let i = 0; i < 10; i += 2) {

            if (letter[i] + letter[i + 1] === '00') continue;

            if (letter[i] === '*') {
                encodeArr.push(' ');
                i += 8;
                break;
            }

            morseSymbol = letter[i] + letter[i+1];

            letterStr = letterStr + MORSE_SYMBOLS[morseSymbol];
        }

        if (letterStr) encodeArr.push(letterStr);
        
    });

    decodeArr = encodeArr.map(function(letter) {
        return letter === ' ' ? letter : MORSE_TABLE[letter]
    })

    return decodeArr.join('');
}

module.exports = {
    decode
}