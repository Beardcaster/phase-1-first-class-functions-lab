let driversArray = ['tacos', 'burritos', 'hotdogs', 'hamburgers', 'beans'];
//let multiplier = 4;
//let fare = 5;

console.log(driversArray);

const returnFirstTwoDrivers = function(driversArray){
    const newArray = [driversArray[0],driversArray[1]];
    console.log(newArray);
    return newArray;
}

const returnLastTwoDrivers = function(driversArray){
    let incomingLength = driversArray.length;
    const newArray = [driversArray[incomingLength - 2], driversArray[incomingLength - 1]];
    console.log(newArray); //for testing
    return newArray
}

 returnFirstTwoDrivers(driversArray);
 returnLastTwoDrivers(driversArray);

 console.log("made it this far"); //for testing

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){    
    return function(fare){ 
        return fare * multiplier
}}; 
    
// the only possible parameter that can be passed to the inner function is whatever was passed
// into the outer function.

//console.log("made it this far"); // for testing
// return newMultiplier(fare)};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, func){
    const newArray = func(driversArray);
    return newArray;
}


