//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

//Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

//Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

//Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.

//1
const aktorius1 = "Jackie Chan";
const aktorius2 = "Megan Fox";

(aktorius1.length > aktorius2.length) 
{
    console.log(aktorius1)
    console.log(aktorius2)
} 

//2

const vardas = "Modestas";
const pavarde = "Andrulis";
const gimimoMetai = "1997";
const dabartiniaiMetai = "2023";

const skirtumas = dabartiniaiMetai - gimimoMetai;

console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${skirtumas} metai.`)


//3

const aktoriausVardas = "Jackie ";
const aktoriausPavarde = "Chan";

const vardoIndex = aktoriausVardas.length;
const pavardeIndex = aktoriausPavarde.length;



console.log(aktoriausVardas[vardoIndex - 4] + aktoriausVardas[vardoIndex - 3] + aktoriausVardas[vardoIndex - 2] + " " + aktoriausPavarde[pavardeIndex - 3] + aktoriausPavarde[pavardeIndex - 2] + aktoriausPavarde[pavardeIndex - 1]);

//4

const storyLine = 'Once upon a time in Holllywood.';
console.log(storyLine.replaceAll('o', '*').replace('O', '*'));



