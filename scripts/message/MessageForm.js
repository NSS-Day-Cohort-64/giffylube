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

        



        import { getChosenUser, setMessage, setView, saveMessage , fetchUsers, saveLike, getCurrentUser} from "../data/TransientState.js"



        // const documentingSetMessage = (event) => {
        //     if(clickEvent.target.id === "send") {
        //     setMessage(parseInt(clickEvent.target.value))
        // }
        // }
        const sendMessageButtonLink = async (clickEvent) => {
             if(clickEvent.target.id === "sendMessageForm") {
                let message = document.getElementById("messageForm").value
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

            else if(clickEvent.target.id === "cancelMessageForm") {
                setView("defaultView")
                const customEvent = new CustomEvent("stateChanged")
                document.dispatchEvent(customEvent)
            }
        
        }
        
        
           
        
                   
        
        
        
        
        export const MessageForm = async () => {
            const users = await fetchUsers()
        
            let html = `<h1>Create Your Message</h1> 
           <section>
           To:
            <select id="messageRecipientDropdown"> 
            <option value="0">List of Users`
            for (const user of users) {
              html +=  `<option value ="${user.id}">${user.name}</option>`
            }
        
            document.addEventListener("click", sendMessageButtonLink)
        
        
        html += `</select></section>
        <section>
        <label for="messageForm">Message:</label><br>
        <input type="text" id="messageForm"><br>
        <button id="sendMessageForm">Send</button>
        <button id="cancelMessageForm">Cancel</button>
        </section>
        ` 
        
        return html}