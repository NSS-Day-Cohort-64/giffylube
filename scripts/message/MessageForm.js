/*
defines the behavior of a message form in a messaging application, 
sets up event listeners for different user interactions with the message form, 
handles toggling the display of the form, and provides functionality 
to save messages sent through the form
*/

// import getUsers, saveMessage, setView functions from ./data/TransientState.js
// attach event listener for two click events -- all outside any function: 
// Cancel button
// will trigger the setView function, which will change the "view" property to default view / main page
// Send button
// will trigger the saveMessage function, which will retrieve the values from user inputs and post them to the API
// return an alert: your message has been sent!
// once the alert is X'd out, setView function triggers, which will change the "view" property to default view / main page





import { setMessage, setView, saveMessage, fetchUsers, getCurrentUser } from "../data/TransientState.js"



// const documentingSetMessage = (event) => {
//     if(clickEvent.target.id === "send") {
//     setMessage(parseInt(clickEvent.target.value))
// }
// }
const sendMessageButtonLink = async (clickEvent) => {
    if (clickEvent.target.id === "sendMessageForm") {
        let message = document.getElementById("messageForm").value
        /* the document.getElementById function is explaining the specific
        spot we want to target in the document. We are targetting message form,
        but we must include the .value property to say that we want to target
        the contents of said property. For example, the "messageForm.value" will 
        be the message itself since line 88 highlights the message. Now the variable message
        will be the message that is sent. On line 48, we are sending the message to the database.
        */
        let currentUser = getCurrentUser()
        let recipientId = document.getElementById("messageRecipientDropdown").value
        //We want to target the value whole select element, and then get the 'values' will come from each option

        let messageObject = {
            "userId": currentUser.userId,
            "recipientId": parseInt(recipientId),
            "read": false,
            "text": message
        }
        setMessage(messageObject)
        await saveMessage()
        setView("defaultView")

    }
    /* 
    Once we created the messageObject to manipulate the transient state which 
    is to be sent to the API database, we must invoke the setMessage with a property
    of messageObject to alter the transient state. The recipientId corresponds with line 41
    and line 
    */

    else if (clickEvent.target.id === "cancelMessageForm") {
        setView("defaultView")
        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)

    }


}









export const MessageForm = async () => {
    const users = await fetchUsers()

    let html = `<h1 class="headerMessageForm">Create Your Message</h1> 
        <div class ="encapsulatedMessageOption">  
        <section class=messageRecipientDropdown>
                    
           To:
            <select id="messageRecipientDropdown"> 
            <option value="0">List of Users`
    for (const user of users) {
        html += `<option value ="${user.id}">${user.name}</option>`
    }

    document.addEventListener("click", sendMessageButtonLink)


    html += `</select></section>
        <section class="messageMessageFormStyling">
          <label for="messageForm" class="messageText">Message:</label><br>
          <input type="text" id="messageForm"><br>
        </section>
        <section class="messageFormButtons">
            <button id="sendMessageForm">Send</button>
            <button id="cancelMessageForm">Cancel</button>
        </section>
        </div>
        `

    return html
}