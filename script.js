
let inputElement = document.getElementById('inputChat');
let button = document.getElementById('input-btn');
let messageArea = document.querySelector('.message-area');
let me = document.querySelector('.me');
let close = document.getElementById('close');
let chatIcon = document.getElementById('chatIcon');

// add the message to the bot side
let addMessage = (text, className) => {
    let message = document.createElement('div');
    message.className = 'message-area';
    messageArea.className = 'marginTop';

    message.textContent = text;
    message.setAttribute('class', className);
    messageArea.appendChild(message);
};


// takes input value and print to the user side as message
button.addEventListener('click', () => {
    let messageText = inputElement.value;
    addMessage(messageText, "me");
    inputElement.value = '';
   
});

// times icon closes the window
close.addEventListener('click', (e) => {
    document.getElementById('chat-box').style.display = 'none';
    chatIcon.style.display = 'block';
    e.preventDefault();

});

// chat icon onclick event
chatIcon.addEventListener('click', (e) => {
    chatIcon.style.display = 'none';
    document.getElementById('chat-box').style.display = 'flex';
    e.preventDefault();

});


function main() {   
      addMessage('Welcome to FlySmart airlines. My name is Smarty 😄', 'message-area');
addMessage('How can I help you?', 'message-area');

function greeting() {
    addMessage("1: Flight information\n 2: Buy a ticket\n 3: Cancel a ticket\n Please select 1, 2 or 3:\n", `message-area`)


    let selection1 = parseInt(prompt("please select 1,2 or 3"));

    if (selection1 === 1) {
        addMessage(selection1, 'me');
        pnr_tc_selection();
        // addMessage('you chose 1', 'message-area');
    }

    if (selection1 === 2) {
        addMessage(selection1, 'me');
        // take_Value();
    }

    if (selection1 === 3) {
        addMessage(selection1, 'me');
        // cancel_tic();
    }
}

greeting();
}

main();

// pnr_tc_selection()
function pnr_tc_selection() {
    let pnrTCid = prompt("\nDo you have PNR number? \n1: Yes \n2: No \n3: Go Back \nPlease select 1, 2 or 3: ")
    if (pnrTCid == "1") {
        addMessage(pnrTCid, 'me');
        let pnr = prompt("\nYAAAYYY!! Then please enter PNR number: ")
        pnr_tc_query(pnr)
        return pnr
    }

    else if (pnrTCid == "2") {
        tcId = input("\nNo worry, I can query with TCid number. \n Please enter TCid number: ")
        pnr_tc_query(tcId)
        return tcId
    }

    else {
        print("\nhahahaha You trying to fool me :) " + pnrTCid + " was not among the options.")
        pnr_tc_selection()
    }

}


//pnr_tc_query(pnr)
function pnr_tc_query(pnr) {
    let array = ["4R5G7B","12345678912", "Yagnur", "Tetikcan", "Female", "1234", "Adana", "Konya", "25-01-2021", "19:30", "105", "28B"];

    for(let i=0; i<array.length; i++) {
        if(pnr == array[i]) {
            addMessage('Here is your flight information', 'message-area');
            addMessage(`
            PNR: ${array[0]}\n
            TC: ${array[1]}\n
            Name: ${array[2]}\n
            Lastname: ${array[3]}
            Gender: ${array[4]}
            Flight Number: ${array[5]}
            Departure - Arrive: ${array[6]}
            Flight Date: ${array[7]}
            Boarding Time: ${array[8]}
            Gate: ${array[9]}
            Seat: ${array[10]}
            
            `, 'message-area');
            } else {
                addMessage('Please enter a valid PNR', 'message-area');
                break;
            }
           
        }
     
    }

    

     












