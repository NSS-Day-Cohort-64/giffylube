/*
sets up event listeners and returns HTML markup for the navigation bar
*/

import { fetchMessages, getCurrentUser } from "../data/TransientState.js"


// import clearFilters (if Footer happens), getMessages, setView, displayUsername from ./data/TransientState.js

//////////////////// event listeners /////////////////////////////////////////////////////////////
// Notifications - set transient state view to viewMessages
    //event listener function

    //listen for event


// show how many messages view getMessages
    //event listener function

    //listen for event

// Create Message pen icon - change view to createMessage
    //event listener function

    //listen for event

// Logout - reset current user to 0
    //event listener function

    //listen for event

// Logo - reset transient state view to defaultView
    //event listener function

    //listen for event



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/////////// declare and export NavBar function which generates all the HTML for the NavBar/////////////////////
export const NavBarHTML = async () => {
    const currentUser = getCurrentUser()
    const messages = await fetchMessages()

    const userMessages = messages.filter(
        (message) => {
            return message.recipientId === currentUser.userId
        }
    )

    const navBar = `<img src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F4NsdHaUJCxhgA%2Fgiphy.gif" alt="giffylube logo" width="30" height="40"
        > <h1 class="main-header">GIFFYLUBE REBOOTED</h1
        > <button type="button">Send Message</button
        > <button type="button">${userMessages.length}</button
        > <div>${currentUser.name}</div
        > <button type="button">Logout</button>`

    return navBar
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


