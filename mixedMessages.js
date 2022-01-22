//array of random options
const messages = {
    isPositive1 =['will', 'can'],
    isRelative =['family', 'friends', 'brother', 'spouse'],
    isNegative =['not'],
    isNeutral =['succeed', 'be strong', 'be positive', 'make it', 'be great']
}

//functions to randomly pick out strings to be put together
function randPositive1() {
    let numPos1 = Math.floor(Math.random() * (isPositive1.length));
    return isPositive1[numPos1];
}

function randRelative() {
    let numPos2 = Math.floor(Math.random() * (isRelative.length));
    return isRelative[numPos2];
}

function randNegative() {
    let numPosN = Math.floor(Math.random() * (isNegative.length));
    return isNegative[numPosN];
}

function randNeutral() {
    let numPosNeu = Math.floor(Math.random() * (isNeutral.length));
    return isNeutral[numPosNeu];
}

// function to take an option from user and returns messages
// if take side is 1, we go for positive output else, negative
const bringMessage = () => {
    let myOption = Math.floor(Math.random() * 2);
    let input = ['me', 'mine'][myOption];

    if (input.toUpperCase() === 'ME') {
        let takeSide = Math.floor(Math.random() * 2);
        if (takeSide === 1) {
            return `You ${randPositive1()} ${randNeutral()}.`;
        }
        else {
            return `You ${randPositive1()} ${randNegative()} ${randNeutral()}.`;
        }
    }
    else if (input.toUpperCase() === 'MINE') {
        let takeSide = Math.floor(Math.random() * 2);
        if (takeSide === 1) {
            return `Your ${randRelative()} ${randPositive1()} ${randNeutral()}.`;
        }
        else {
            return `Your ${randRelative()} ${randPositive1()} ${randNegative()} ${randNeutral()}.`;
        }
    }
}
const output = bringMessage();
console.log(output);
//additional features wouldnt be bad. But this for now.
