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
// - Eine Funktion mit der wir den ersten Buchstaben des jeweiligen wortes groß schreiben(pascalcase)
// - Eine Funktion mit der wir den benuzernamen generiren und auf die ergibnisse der anderen funktionen zugreifen
// - Einen export, um die Applikation in einer anderen datei zu nutzen 


