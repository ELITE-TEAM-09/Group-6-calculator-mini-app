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

   // Function to animate typing effect
    function typeWriter(text, element, speed) {
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }

    // Text to be typed
    const welcomeMessage = "Hey, stranger! Welcome to Calc Buddy";

    // Function to start typing animation
    function startTypingAnimation() {
        typeWriter(welcomeMessage, document.getElementById("animatedPlaceholder"), 100);
    }

    // Start typing animation initially
    startTypingAnimation();

    // Reset placeholder after user input
    document.getElementById("num1").addEventListener("input", function() {
        document.getElementById("animatedPlaceholder").textContent = "";
        document.getElementById("num1").placeholder = "Enter First number";
    });

    // Function to play the pop sound
function playPopSound() {
    const popSound = document.getElementById('popSound');
    popSound.currentTime = 0; // Reset the sound to the beginning in case it's already playing
    popSound.play();
  }
  
  // Add event listeners to all buttons 
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', playPopSound);
  });
  