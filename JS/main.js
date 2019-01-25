var codeContainer = document.getElementById("Existing_Code");
var numberButtons = document.getElementsByClassName('Button_Number');
var greenBox = document.getElementById("Green_Box");
var redBox = document.getElementById("Red_Box");
var numberWins = document.getElementById("Number_Of_Wins");
var numberLosses = document.getElementById("Number_Of_Losses");
var wrongSound = document.getElementById("Wrong_Audio");
var goodSound = document.getElementById("Good_Audio");
var wins = 0;
var losses = 0;
var clickCounter = 0;
var digitNumberOne = 0;
var digitNumberTwo = 0;
var digitNumberThree = 0;

// A function that performs when clicked on a button
function getNumber(clickedButton) {
    // This variable counts how many buttons have been clicked
    clickCounter++;
    
    if (clickCounter == 1)
    {
        // This lets the user see the numbers they pressed
        codeContainer.innerHTML += clickedButton.value;
        // The number that is pressed the first time is stored in this variable
        digitNumberOne = clickedButton.value;
    }
    else if(clickCounter == 2)
    {
        // This lets the user see the numbers they pressed
        codeContainer.innerHTML += clickedButton.value;
        // The number that is pressed the first time is stored in this variable
        digitNumberTwo = clickedButton.value;
    }
    else if (clickCounter >= 3)
    {
        // This lets the user see the numbers they pressed
        codeContainer.innerHTML += clickedButton.value;
        // The number that is pressed the first time is stored in this variable
        digitNumberThree = clickedButton.value;

        // When its the third time they clicked a button the counter start again with 0
        clickCounter = 0;

        // This will set a timeout
        setTimeout(function (){

            // This checks if the code that the user entered is the actual code to enter the vault
            if(digitNumberOne == 1 && digitNumberTwo == 2 && digitNumberThree == 3)
            { 
                // If the code is right then those 2 functions will be called.
                correctCode();
                disableButtons();

                // The number of times you entered the vault will be the wins + 1
                wins++;

                // This shows the user with a pop-up message that the entered code is correct
                alert("The code is correct!");
            }
            else
            {
                // If the code is wrong then those 2 functions will be called.
                wrongCode();
                disableButtons();

                // The number of times the user didn't entered the vault will be the losses + 1
                losses++;
                
                // This shows the user with a pop-up message that the entered code is incorrect
                alert("The code is incorrect!");
            }

        }, /* This is the time of the timeout, 500 milliseconds = 0,5 second */500);
    }

    // This prints on 2 differt HTML-Paragraphs how many time the user entered the vault and didn't enter the vault
    numberWins.innerHTML = "Times correct code: " + wins;
    numberLosses.innerHTML = "Times incorrect code: " + losses;
}

function disableButtons() {
    // This loops trough the different buttons with the class-name: "Button_Number" and it is disableing them one by one
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].setAttribute('disabled', 'disabled');
	}
}

function enableButtons() {
    // This loops trough the different buttons with the class-name: "Button_Number" and it is enableing them one by one
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].removeAttribute('disabled');
	}
}

function correctCode() {
    // This plays a sound-effect so the user knows he pressed the right buttons and that he pressed them in the right order.
    goodSound.play();

    // This sets a variable called: "intervalTimer"
    var intervalTimer = 0;

    // This loops trough the next piece of code
    var blink = setInterval(function() 
    {	
    
    // This is the key for the end of the loop
    intervalTimer++;
    
    // If the greenbox is hidden then it will be visible
    if (greenBox.style.visibility == 'hidden') 
    {
        greenBox.style.visibility = 'visible';
        document.body.style.backgroundColor = "rgba(250, 235, 215, 0.781)";
        document.getElementById("Main_Container").style.marginTop = document.getElementById("Main_Container").style.marginTop + 100 + "px";
    }
    
    // If the greenbox is visible then it will be hidden
    else 
    {
        greenBox.style.visibility = 'hidden';
        document.body.style.backgroundColor = "#00e500";
    }
    
    // When this is loop is performed 10 times, the loop will end and the buttons will be enabled again.
    if(intervalTimer == 6) 
    {
        clearInterval(blink);
        enableButtons();
    }
    
    }, /* This is to wait 500 millisecond before going in the loop again, 500 milliseconds = 0,5 second */ 500);

    // This clears the code so the user can enter a new one
    codeContainer.innerHTML = "";
}

function wrongCode() {
    // This plays a sound-effect so the user knows he pressed the wrong buttons and/or that he pressed them in the wrong order.
    wrongSound.play();

    // This sets a variable called: "intervalTimer"
    var intervalTimer = 0;

    // This loops trough the next piece of code
    var blink = setInterval(function() 
    {	

    intervalTimer++;
    
    // If the greenbox is hidden then it will be visible and background will change color
    if (redBox.style.visibility == 'hidden') 
    {
        redBox.style.visibility = 'visible';
        document.body.style.backgroundColor = "rgba(250, 235, 215, 0.781)";
    
    // If the greenbox is visible then it will be hidden and background will change color
    }else 
    {
        redBox.style.visibility = 'hidden';
        document.body.style.backgroundColor = "#cc0000";
    }

    // When this is loop is performed 10 times, the loop will end and the buttons will be enabled again.
    if(intervalTimer == 6) 
    {
        clearInterval(blink);
        enableButtons();
    }
    
    }, /* This is to wait 500 millisecond before going in the loop again, 500 milliseconds = 0,5 second */ 500);

    // This clears the code so the user can enter a new one
    codeContainer.innerHTML = "";
}
