// Practice with object
const foodDatabase = [
    { name: "Apple (1 medium)", cal: 95 },
    { name: "Banana (1 medium)", cal: 105 },
    { name: "Orange (1 medium)", cal: 62 }
];

let food = [
    { name: "Chicken (1 piece)", cal: 150},
    { name: "Steak (1 piece)", cal: 300}
];
// if you want to change the value -- food.cal = 300;
foodDatabase.push(food);
console.log(foodDatabase);
for(let i in foodDatabase){
    let name = foodDatabase[i].name;
    let cal = foodDatabase[i].cal;
    if (cal < 100){
        console.log("index: "+ i + " name: " + name + " cal: " + cal);
    }
}

// hotel reservation -- array to store reservations
let reservationList = [];
function saveReservation(){
    let reservation = {
        name: document.querySelector('#guestname').value,
        checkin: document.getElementById('checkin').value,
        checkout: document.getElementById('checkout').value, 
        guests: document.getElementById('guestnum').value,
        roomtype: document.getElementById('room').value  
    }; 
    
    reservationList.push(reservation);
    alert("Thank you " + reservation.name + " for your reservation!");
    console.log("the current reservation list -- ", reservationList);
    
    // Call displayR function
    displayR();
}
// Event --> action
const sE = document.querySelector("#submit");
if (sE) {
    sE.addEventListener('click', saveReservation);
}
// implement the result reservation list
function displayR(){
    let resultHTML = "<ul>";
    
    for (let i = 0; i < reservationList.length; i++) {
        let r = reservationList[i];
        resultHTML += `<li>Guest: ${r.name} | Check-in: ${r.checkin} | Room: ${r.roomtype}</li>`;
    }
    resultHTML += "</ul>";
    
    let outputArea = document.getElementById('reservation-output');
    if (!outputArea) {
        outputArea = document.createElement('div');
        outputArea.id = 'reservation-output';
        document.body.appendChild(outputArea);
    }
    outputArea.innerHTML = resultHTML;
}