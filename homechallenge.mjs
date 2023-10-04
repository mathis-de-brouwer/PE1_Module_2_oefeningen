//
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
//

let jaar = parseFloat(await userInput.question('jaartal: '));
if(jaar %4 == 0 || jaar %400 == 0){
    console.log('Schrikkeljaar, er zijn dus 29 dagen in februari '+jaar);
}else{
    let month = await userInput.question('maand: ');
    if(month == 'januari','maart','mei','juli','augustus','oktober','december'){
        //month == parseFloat(31);
        console.log('Geen schrikkeljaar, er zijn dus 31 dagen in '+month+' '+jaar);
    }else if(month == 'april','juni','september','november'){
        //month == parseFloat(30);
        console.log('Geen schrikkeljaar, er zijn dus 30 dagen in '+ month +' ' + jaar);
    }
}

process.exit();