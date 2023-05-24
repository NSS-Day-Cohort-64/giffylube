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

import { getChosenUser, setView, saveMessage } from "../data/TransientState.js"

const chosenUsers = getChosenUser()
const messages = saveMessage()
const preferredView = setView()


