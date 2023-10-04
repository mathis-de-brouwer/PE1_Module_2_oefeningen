//
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
//
//h2

let jaar = parseFloat(await userInput.question('jaartal: '));

if(jaar %4 == 0 || jaar %400 == 0){
    console.log('Schrikkeljaar, er zijn dus 29 dagen in februari '+jaar);
}else{
    console.log('Geen schrikkeljaar, er zijn dus 28 dagen in februari '+jaar);
}

//h1
/*
let num1 = parseFloat(await userInput.question('num1: '));
let num2 = parseFloat(await userInput.question('num2: '));
let num3 = parseFloat(await userInput.question('num3: '));
let num4 = parseFloat(await userInput.question('num4: '));
let num5 = parseFloat(await userInput.question('num5: '));

let min = '';
min = Math.min(num1,num2,num3,num4,num5);
let max = '';
max = Math.max(num1,num2,num3,num4,num5);
let gem = '';
gem = (num1 + num2 + num3 + num4 + num5)/5;

console.log('gem = '+gem+' max = '+max+' min = '+min);
*/

//m3
/*
let answ = '';
let score = parseFloat();
score = 0

console.log('quiz time, answer these 5 questions.');

answ = await userInput.question('question 1: how many idiots?: ');
if(answ == 'idk'){
    console.log('U RIGHT LESGO');
    (score += 1);
}else{
    console.log('Wrong, u dum stupid');
}

answ = await userInput.question('question 2: ur mom: ');
if(answ == 'no u'){
    console.log('U RIGHT LESGO'); 
    (score += 1);
}else{
    console.log('Wrong, u dum stupid');
}

answ = parseFloat(await userInput.question('question 3: how many cores in intel i7 12th gen: '));
if(answ == 8){
    console.log('U RIGHT LESGO'); 
    (score += 1);
}else{
    console.log('Wrong, u dum stupid');
}

answ = await userInput.question('question 4: what best anime: ');
if(answ == 'one piece'){
    console.log('U RIGHT LESGO'); 
    (score += 1);
}else{
    console.log('Wrong, u dum stupid, naruto is not an acceptable answer');
}

answ = parseFloat(await userInput.question('question 5: how old is athar: '));
if(answ == 30){
    console.log('U RIGHT LESGO'); 
    (score += 1);
}else{
    console.log('Wrong, u dum stupid. He is 30');
}

console.log('u score is '+ score + '/5');
*/


//m2
/*
let num1 = parseFloat(await userInput.question('choose num1: '));
let num2 = parseFloat(await userInput.question('choose num2: '));
let math = await userInput.question('What calc u wanna do? \n+\n- \n/ \n* \n: ');

if(math == '+'){
    console.log(num1 + num2);
}else if(math == '-'){
    console.log(num1 - num2);
}else if(math == '/'){
    console.log(num1 / num2);
}else if(math == '*'){
    console.log(num1 * num2);
}
*/

//m1
//switch/case
/*
let artist = parseFloat(await userInput.question('Kies een artiest: \n 1. Red Hot Chili Peppers \n 2. AC/DC \n 3. Nirvana \n 4. Dire Straits \n Geef je keuze in: '));
let hit = '';

switch(artist){
    case 1:
        hit = 'Black Summer by Red Hot Chili Peppers';
        break;
    case 2:
        hit = 'Thunderstruck by AC/DC';
        break;
    case 3:
        hit = 'Come As You Are by Nirvana';
        break;
    case 4:
        hit = 'Sultans Of Swing by Dire Straits';
        break;
    default:
        console.log('Sorry we do not know this band, please choode a band out of the four we provided.');

}
console.log('Je koos voor ' + hit);
*/

/*
// if/else

let artist = parseFloat(await userInput.question('Kies een artiest: \n 1. Red Hot Chili Peppers \n 2. AC/DC \n 3. Nirvana \n 4. Dire Straits \n Geef je keuze in: '));

if(artist == 1){
    console.log('Je koos voor "Red Hot Chili Peppers" \n Ze zijn de artist achter de hit: Black Summer.');
}else if(artist == 2){
    console.log('Je koos voor "AC/DC" \n Ze zijn de artist achter de hit: Thunderstruck.');
}else if(artist == 3){
    console.log('Je koos voor "Nirvana" \n Ze zijn de artist achter de hit: Come As You Are.');
}else if(artist == 4){
    console.log('Je koos voor "Dire Straits" \n Ze zijn de artist achter de hit: Sultans Of Swing.');
}else{
    console.log('Sorry we do not know this band, please choode a band out of the four we provided.');
}
*/

//e3
/*
let maand = await userInput.question('Geef mij een maand: ');
let dagen = '';

switch(maand){
    case 'januari':
        dagen = 31;
        break;
    case 'februari':
        dagen = 28;
        break;
    case 'maart':
        dagen = 31;
        break;
    case 'april':
        dagen = 30;
        break;
    case 'mei':
        dagen = 31;
        break;
    case 'juni':
        dagen = 30;
        break;
    case 'juli':
        dagen = 31;
        break;
    case 'augustus':
        dagen = 31;
        break;
    case 'september':
        dagen = 30;
        break;
    case 'oktober':
        dagen = 31;
        break;
    case 'november':
        dagen = 30;
        break;
    case 'december':
        dagen = 31;
        break;
}

console.log('In de maand '+maand+ ' zijn er '+dagen+' dagen.');
*/

//e2
/*
let min = 2.378273;
let max = 9.893;
let num1 = parseFloat(await userInput.question('Geef een getal: '));

if(num1 > min && num1 < max){
    console.log('Je getal '+num1+' ligt tussen '+min+ ' en '+max);
}else{
    console.log('Je getal ligt buiten de variabelen');
}
*/

//e1
/*
let num = parseFloat(await userInput.question('Geef mij een getal: '));

if(num % 2 == 0){
    console.log('even');
}else{
    console.log('oneven');
}
*/


process.exit();
