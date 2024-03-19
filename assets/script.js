//Variable to our current input

//assume this our notepad for our input

let currentInput = '';

//something to write down on the note pad
function appendToInput(value){
//append value to current input
currentInput += value;
//update input field with the currfet input
document.getElementById('num1').value = currentInput;

}

//clear everything on our notepad

function clearInput(){
    //clear current input
    currentInput = '';
    //clear the input field
    document.getElementById('num1').value = '';
    //clear result display
    document.getElementById('result').innerText = '';

}

//clear individual character on our notepad

function backspace(){
    //deletes the last character input
    currentInput = currentInput.slice(0, -1);
    //update the input field
    document.getElementById('num1').value = currentInput;
}

//writes down our operators

function setOperation(operation){
    //add operation to current input
    currentInput += operation;
    //updates input field
    document.getElementById('num1').value = currentInput;
}

//getting our calculation results

function calculate(){
    //Retr input expressions
    let expression = document.getElementById('num1').value ;
    try{
        //evalute the expression
        let results = eval(expression);
        //check if results are valid
        if (isNaN(results) || !isFinite(results) ) {
            //throw an error for invalid input
            throw new Error('Msee wacha jaba')
        }
        //display results
        document.getElementById('results').innerText = 'Ans=' + results;
    } 
    catch (error) {
        //display our error message
        document.getElementById('results').innerText = 'Yoh' + ' Msee wacha jaba';
    }
    
    
}