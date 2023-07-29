let calculator = document.querySelector('.calculator');

//Create area to display calculations
let display = document.createElement('div');
display.classList.add('display');
calculator.appendChild(display)

//Create div containing clear and delete buttons
let clearDelete = document.createElement('div')
clearDelete.classList.add('clearDelete');
calculator.appendChild(clearDelete);

    //Create delete button
    let deleter = document.createElement('button');
    deleter.classList.add('deleter');
    clearDelete.appendChild(deleter);
    deleter.textContent = "Delete";

    //Create clear button
    let clear = document.createElement('button');
    clear.classList.add('clear');
    clearDelete.appendChild(clear);
    clear.textContent = "Clear";

//Create container with 7, 8 ,9 and divide
let topRow = document.createElement('div');
topRow.classList.add('topRow');
calculator.appendChild(topRow);

    //Create 7 button
    let seven = document.createElement('button');
    seven.classList.add('seven');
    topRow.appendChild(seven);
    seven.textContent = '7'

    //Create 8 Button
    let eight = document.createElement('button');
    eight.classList.add('eight');
    topRow.appendChild(eight);
    eight.textContent = '8';

    //Create 9 button
    let nine = document.createElement('button');
    nine.classList.add('nine');
    topRow.appendChild(nine);
    nine.textContent = '9';

    //Create Division Button
    let divide = document.createElement('button');
    divide.classList.add('divide');
    topRow.appendChild(divide);
    divide.textContent = "/";

//Create Second Row with 4, 5, 6 and multiply
let secondRow = document.createElement('div');
secondRow.classList.add('secondRow');
calculator.appendChild(secondRow);
    
    //Create 4 button
    let four = document.createElement('button');
    four.classList.add('four');
    secondRow.appendChild(four);
    four.textContent = '4';

    //Create 5 button
    let five = document.createElement('button');
    five.classList.add('five');
    secondRow.appendChild(five);
    five.textContent = '5';

    //Create 6 button
    let six = document.createElement('button');
    six.classList.add('six');
    secondRow.appendChild(six);
    six.textContent = '6';

    //Create multiply button
    let mult = document.createElement('button');
    mult.classList.add('mult');
    secondRow.appendChild(mult);
    mult.textContent = 'X';

//Create Third row containing buttons 1 ,2 ,3 and +
let thirdRow = document.createElement('div');
thirdRow.classList.add('thirdRow');
calculator.appendChild(thirdRow);

    //Create 1 button
    let one = document.createElement('button');
    one.classList.add('one');
    thirdRow.appendChild(one);
    one.textContent = '1';

    //Create 2 button
    let two = document.createElement('button');
    two.classList.add('two');
    thirdRow.appendChild(two);
    two.textContent = '2';

    //Create 3 button
    let three = document.createElement('button');
    three.classList.add('three');
    thirdRow.appendChild(three);
    three.textContent = '3';

    //Create addition button
    let addIt = document.createElement('button');
    addIt.classList.add('addIt');
    thirdRow.appendChild(addIt);
    addIt.textContent = '+';

//Create Bottom Row containing ., 0, =, and -
let bottomRow = document.createElement('div');
bottomRow.classList.add('bottomRow');
calculator.appendChild(bottomRow);

    //Create . button
    let dot = document.createElement('button');
    dot.classList.add('dot');
    bottomRow.appendChild(dot);
    dot.textContent = ".";

    //Create 0 button
    let zero = document.createElement('button');
    zero.classList.add('zero');
    bottomRow.appendChild(zero);
    zero.textContent = "0";

    //Create = button
    let equal = document.createElement('button');
    equal.classList.add('equal');
    bottomRow.appendChild(equal);
    equal.textContent = "=";

    //Create - button
    let minus = document.createElement('button');
    minus.classList.add('minus');
    bottomRow.appendChild(minus);
    minus.textContent = "-";

//Making it so pushing button puts result on display
let displayText = "";

clear.addEventListener('click', () => {
    displayText = "";
    display.innerHTML = displayText;
});

zero.addEventListener('click', () => {
    displayText += '0 ';
    display.innerHTML = displayText;
});

one.addEventListener('click', () => {
    displayText += '1 ';
    display.innerHTML = displayText;
});

two.addEventListener('click', () => {
    displayText += '2 ';
    display.innerHTML = displayText;
});

three.addEventListener('click', () => {
    displayText += '3 ';
    display.innerHTML = displayText;
});

four.addEventListener('click', () => {
    displayText += '4 ';
    display.innerHTML = displayText;
});

five.addEventListener('click', () => {
    displayText += '5 ';
    display.innerHTML = displayText;
});

six.addEventListener('click', () => {
    displayText += '6 ';
    display.innerHTML = displayText;
});

seven.addEventListener('click', () => {
    displayText += '7 ';
    display.innerHTML = displayText;
});

eight.addEventListener('click', () => {
    displayText += '8 ';
    display.innerHTML = displayText;
});

nine.addEventListener('click', () => {
    displayText += '9 ';
    display.innerHTML = displayText;
});

divide.addEventListener('click', () => {
    displayText += '/ ';
    display.innerHTML = displayText;
});

addIt.addEventListener('click', () => {
    displayText += '+ ';
    display.innerHTML = displayText;
});

mult.addEventListener('click', () => {
    displayText += 'x ';
    display.innerHTML = displayText;
});

minus.addEventListener('click', () => {
    displayText += '- ';
    display.innerHTML = displayText;
});

dot.addEventListener('click', () => {
    displayText += '. ';
    display.innerHTML = displayText;
});

deleter.addEventListener('click', () => {
    displayText = displayText.slice(0, -1);
    display.innerHTML = displayText;
});

//Everything is good, just have to figure out how to get string in display into a mathematical equation


function doMath() {
    let mathArray = displayText.split(" ");
    let number1 = "";
    let array = [];
    let x = 0;
    let y = 0;
    let a = 0;
    let b = 0;

    console.log(mathArray);

    for (let i = 0; i < mathArray.length ; i++) {
        console.log(mathArray[i]);
        if (mathArray[i] == 1 || mathArray[i] == 2 || mathArray[i] == 3 || mathArray[i] == 4 || mathArray[i] == 5 || mathArray[i] == 6 || mathArray[i] == 7 || mathArray[i] == 8 || mathArray[i] == 9 || mathArray[i] == '.' || mathArray[i] == 0) {
            number1 += mathArray[i];
            console.log(number1);
        }
        else if (mathArray[i] == '+' || mathArray[i] == '-' || mathArray[i] == 'x' || mathArray[i] == '/' || mathArray[i] == "="){
            number1 = parseFloat(number1);
            console.log(mathArray[i]);
            array.push(number1);
            array.push(mathArray[i]);
            array = array.flat();
            console.log(array);
            number1 = "";
        }
        else if (typeof array[i] === NaN) {
            delete array[i];
            array = array.flat();
            console.log(array[i]);
        }
        else {
            console.log(array[i]);
            mathArray[i] = parseFloat(mathArray[i]);
            array.push(mathArray[i]);
            array = array.flat();
            console.log(array[i]);
            continue;
        }
        array = array.flat();
    }

    array = array.flat();
    console.log(array);

    let newArray = array.filter(elements => {
        return !Number.isNaN(elements);
    });
    console.log(newArray);
    array = newArray;
    console.log(array);

    function multiArray() {
        for (let j = 0; j < array.length; j++) {
            if (array[j] == 'x') {
                x = array[j - 1] * array[j + 1];
                delete array[j - 1]
                delete array[j + 1];
                array[j] = x;
                array = array.flat();
                console.log(array);
                multiArray();
            }
            else {
                continue;
            }
        }
    }
    multiArray();

    array = array.flat();
    console.log(array);

    function diviArray() {
        for (let j = 0; j < array.length; j++) {
            if (array[j] == '/') {
                y = array[j - 1] / array[j + 1];
                delete array[j - 1]
                delete array[j + 1];
                array[j] = y;
                array = array.flat();
                console.log(array);
                diviArray();
            }
            else {
                continue;
            }
        }
    }
    diviArray();
    array = array.flat();
    console.log(array);

    function addArray() {
        for (let j = 0; j < array.length; j++) {
            if (array[j] == '+') {
                a = array[j - 1] + array[j + 1];
                delete array[j - 1]
                delete array[j + 1];
                array[j] = a;
                array = array.flat();
                console.log(array);
                addArray();
            }
            else {
                continue;
            }
        }
    }
    addArray();


    array = array.flat();
    console.log(array);


    function subtrArray() {
        for (let j = 0; j < array.length; j++) {
            if (array[j] == '-') {
                b = array[j - 1] - array[j + 1];
                delete array[j - 1]
                delete array[j + 1];
                array[j] = b;
                array = array.flat();
                console.log(array);
                subtrArray();
            }
            else {
                continue;
            }
        }
    }
    subtrArray();
    
    array = array.flat();
    console.log(array);

    let c = array[0];
    console.log(c);

    displayText = array[0].toFixed(2) + " ";
    display.innerHTML = displayText;
    mathArray = [];
    mathArray[0] = parseFloat(displayText);
    array = [];
    console.log(mathArray);

}


equal.addEventListener('click', () => {
    displayText += '=';
    display.innerHTML = displayText;
    doMath();
});



//Let's think this through: We need to find a way to take the string formed in the 
//display box, turn each number into an int, and do the appropriate operation
//For example, say someone types '123 + 45 x 6 ='. We take the string, stores those numbers
//as ints, then do operations appropriately. We could iterate through the array and make
//sure all numbers go from strings to ints. Then, we can iterate again, then do a series of 
//if else statements for each operation and say "if mathArray[i] == x, number = mathArray [i-1] x mathArray[i + 1]."




