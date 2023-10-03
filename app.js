function checkGender(){
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
}


let name = prompt('Enter your name please:');
let title = " ";
let gender = "  " ;

checkGender();

let drinkType = prompt(`${title} ${name} ,hot or cold ?`);

let drinkName = prompt(` ${title} ${name} ,What is the drink do you want?`);

// save data by tow array arr_data ---> save data  and  typeOfData -----> for what is the data in the same index in arr data
//  I know I can use dict but now this is not available  

const arr_data=[(title+name),gender,drinkType,drinkName];
const typeOfData =["(title+name)","gender","drinkType","drinkName"];

alert(`Your ${drinkType} ${drinkName}  is getting prepared`);

console.log(`User ${name} ordered a ${drinkType} ${drinkName}.`);
for (let index = 0; index < arr_data.length; index++) {
    console.log(arr_data[index]);
    
};


//create div in index page 
const divElement = document.createElement("div");
document.body.appendChild(divElement);
// create paragraphElement in top of div
const paragraphElement = document.createElement("p");
paragraphElement.textContent= arr_data[0];
divElement.appendChild(paragraphElement);

// create ul in div 
const ulElement = document.createElement("ul");
divElement.appendChild(ulElement);

// create list 
// let liElement = document.createElement("li");
// liElement.textContent= `Gender ${arr[1]}`;
// ulElement.appendChild(liElement);
// liElement = document.createElement("li");
// liElement.textContent= `Drink Type : ${arr[2]}`;
// ulElement.appendChild(liElement);
// liElement = document.createElement("li");
// liElement.textContent= `Drink Name ${arr[3]}`;
// ulElement.appendChild(liElement);


// create list by loop
for(let i =1 ;  i< arr_data.length ; i++){
    liElement = document.createElement("li");
    liElement.textContent= `${typeOfData[i]}: ${arr_data[i]}`;
    ulElement.appendChild(liElement);
}




// arr.forEach((item) => {
//   const paragraphElement = document.createElement("p");
//   paragraphElement.textContent = item;
//   cDiv.appendChild(paragraphElement);
// });