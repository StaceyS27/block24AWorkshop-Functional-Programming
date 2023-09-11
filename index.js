//Higher-order Function

const capitalWords = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

const convertToLowercase = (capitalString) => {
    return capitalString.toLowerCase();
};
const higherOrderFunc1 = (array, modifyingFunc) => {
    return array.map(modifyingFunc);
};
console.log(higherOrderFunc1(capitalWords, convertToLowercase));

//Currying 


