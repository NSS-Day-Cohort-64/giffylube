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
     if(clickEvent.target.id === "send") {
        let message = document.getElementById("message").value
        let currentUser = getCurrentUser()
        let recipientId = document.getElementById("chooseRecipient").value

        let messageObject = {
        "userId": currentUser.userId,
        "recipientId": recipientId,
        "read": false,
        "text": message}
            if(message.length > 0) {

    setMessage(messageObject)    
    await saveMessage()
}
        window.alert(`Your message has been sent`)
        setView(defaultView)
        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)
    }
    else if(clickEvent.target.id === "cancel") {
        setView(defaultView)
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
      html +=  `<option value = "${user.id}" id = "chooseRecipient" >${user.name}</option>`
    }

    document.addEventListener("click", sendMessageButtonLink)


html += `</select></section>
<section>
<label for="username">Name:</label><br>
<input type="text" id="name"><br>
<label for="text">Subject:</label><br>
<input type="text" id="subject"><br>
<label for="message">Message:</label><br>
<input type="text" id="message"><br>
<button id="send">Send</button>
<button id="cancel">Cancel</button>
</section>
` 

return html}




