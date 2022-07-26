// Iteration 1: Names and Input

let hacker1 = `Vabastien`;
console.log(`The driver's name is ${hacker1}`);

let hacker2 = `Valery`;
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let modifiedDriversName = '';
for (let i=0;i<hacker1.length;i++){
    modifiedDriversName+= hacker1[i].toUpperCase();
    if(i!==hacker1.length-1){
        modifiedDriversName+= ` `;
    }
    
}

console.log(modifiedDriversName);

let modifiedNavigatorsName = '';
for (let i = hacker2.length - 1; i >= 0 ;i--){
    modifiedNavigatorsName+= hacker2[i];
}
console.log(modifiedNavigatorsName);

let shortestName = hacker1;
let longestName = hacker2;

if (hacker1.length > hacker2.length) {
    shortestName = hacker2;
    longestName = hacker1;
} 

if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`)
} else if (shortestName === longestName.slice(0, shortestName.length)) {
    if (shortestName === hacker1) {
        console.log(`The driver's name goes first.`);
    } else {
        console.log(`Yo, the navigator goes first definitely.`);
    }
} else {
    for (let i = 0; i < shortestName.length; i++) {
       
        if (hacker1[i].toLowerCase() < hacker2[i].toLowerCase()) {
            console.log (`The driver's name goes first.`);
            break;
        } else if (hacker1[i].toLowerCase() > hacker2[i].toLowerCase()) {
            console.log (`Yo, the navigator goes first definitely.`);
            break;
        }
    }
}

