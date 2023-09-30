const main = document.querySelector('#main');

let name = prompt('Enter your name please:');

let gender = prompt('Enter your gender (male or female) please:');
let title = " ";

if (gender === 'male') {
    title = "Mr.";
    alert(`Welcome ${title} ${name}!`);
}else if (gender === 'female') {
    title = "Ms.";
    alert(`Welcome ${title} ${name}!`);
} else {
    alert(`Welcome ${title} ${name}!`);

}

let drinkType = prompt(`${title} ${name} ,hot or cold ?`);

let drinkName = prompt(` ${title} ${name} ,What is the drink do you want?`); 

alert(`Your ${drinkType} ${drinkName}  is getting prepared`);

console.log(`User ${name} ordered a ${drinkType} ${drinkName}.`);
