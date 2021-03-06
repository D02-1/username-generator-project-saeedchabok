const fs = require('fs');// FileSystem, zum lesen des dateisystems
const path = require('path'); // path, zum arbeiten mit dateipfaden
//Benuzername Generator 
//Beispiel für bnuzername ShinySunflower55555

//was benötigen wir?
// - Eine Function um die werte aus der JSON datei zu lesen
/**
 * @function getWords
 * @description Reads words from json file. 
 * @returns { object}
*/
function getWords()
{
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    return json;
} 

getWords();
// - Eine Funktion um die zufällige Nummer hinter dem namen zu generieren
/**
 * @function createTandomNumber
 * @description Creates a random number according to a minimal and maximalen zahl 
 * @param {number} minNumber 
 * @param {number} maxNumber 
 * @returns { number }
 */
function createRandomNumber(minNumber,maxNumber)
{

    const num = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber );

    // wir geben die zufällige nummer zurück
    return num;
}


// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen wortes groß schreiben(pascalcase)
/**
 * @function capitalizeString
 * @description Takes the first letter of a string and changes it to UpperCase then returns string
 * @param {string} word 
 * @returns { string }
 */
function capitalizeString(word)
{
    if(word === undefined || word.length === 0 || !isNaN(word))
    {
        return "Default";
    }

    // wir nehmen den ersten buchstaben von unserem String und ändern ihn auf UpperCase
    const wordStart = word.charAt(0).toUpperCase();
    const wordRest  = word.substring(1).toLowerCase();

    return wordStart + wordRest;
}

// - Eine Funktion mit der wir den benuzernamen generiren und auf die ergibnisse der anderen funktionen zugreifen 
/**
 * @function creatRandomUserName
 * @description Creates a random username
 * @param {number} maxNumber 
 * @returns { string }
 */
function createRandomUserName(maxNumber)
{
    const words = getWords();

    const adj = words.adjs[ Math.floor(Math.random() * (words.adjs.length - 1))];

    const noun = words.nouns[ Math.floor(Math.random() * (words.nouns.length - 1))];

    const randomNumber = createRandomNumber (10000, maxNumber);

    const finalUserName = `${capitalizeString(adj)}${capitalizeString(noun)}${maxNumber !== 0 ? randomNumber : ''}`;

    return finalUserName;
}

// - Einen export, um die Applikation in einer anderen datei zu nutzen

exports.createUserName = (maxNumber) => createRandomUserName(maxNumber);




