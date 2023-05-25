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
// declare and export MessageForm function to build HTML for message form

import { getChosenUser, setView, saveMessage , fetchUsers} from "../data/TransientState.js"

const chosenUsers = getChosenUser()
const savedMessages = saveMessage()
const preferredView = setView()

export const MessageForm = async () => {
    const users = await fetchUsers()

    let html = `<h1>Create Your Message</h1> 
   <section>
   To:
    <select id="messageRecipientDropdown"> 
    <option value="0">List of Users`
    for (const user of users) {
      html +=  `<option value = "${user.id}">${user.name}</option>`
    }

return html += `</select></section>
<section>
<label for="username">Name:</label><br>
<input type="text" id="name"><br>
<label for="text">Subject:</label><br>
<input type="text" id="subject"><br>
<label for="message">Message:</label><br>
<input type="text" id="message"><br>
<button type="button">Send</button>
</section>
` }
