const main = document.querySelector('#main');

let name = prompt('Enter your name please:');
let title = " ";
let gender = "  " ;


gender = prompt('Enter your gender (male or female) please:');
let condition = true;
while (condition) {
gender = gender.toLowerCase();
if (gender === 'male') {
    title = 'Mr.';
    alert(`Welcome ${title} ${name}!`);
    condition = false;
} else if (gender === 'female') {
    title = 'Ms.';
    alert(`Welcome ${title} ${name}!`);
    condition = false;
} else {
    gender = prompt('Enter your gender (male or female) *not correct*: ');
}
}



let drinkType = prompt(`${title} ${name} ,hot or cold ?`);

let drinkName = prompt(` ${title} ${name} ,What is the drink do you want?`);

const arr=[(title+name),gender,drinkType,drinkName]

alert(`Your ${drinkType} ${drinkName}  is getting prepared`);

// console.log(`User ${name} ordered a ${drinkType} ${drinkName}.`);
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    
}






