/*
sets up event listeners and returns HTML markup for the navigation bar
*/

import { fetchMessages, getCurrentUser, setView, resetTransientState, getTransientState, setCurrentUser } from "../data/TransientState.js"


// import clearFilters (if Footer happens), getMessages, setView, displayUsername from ./data/TransientState.js

//////////////////// event listeners /////////////////////////////////////////////////////////////
const transientState = getTransientState()
// Inbox Notifications - set transient state view to viewMessages
//event listener function
const clickNotifications = (clickEvent) => {
    if (clickEvent.target.id === "inbox") {
        setView("viewMessages")

        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)
        
        console.log(transientState)
    }
}
//listen for event
document.addEventListener("click", clickNotifications)

// Send Message - change view to createMessage
//event listener function
const clickSendMessage = (clickEvent) => {
    if (clickEvent.target.id === "sendMessage") {
        setView("createMessage")

        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)

        console.log(transientState)
    }
}
//listen for event
document.addEventListener("click", clickSendMessage)

// Logout - reset current user to 0
//event listener function
const clickLogout = (clickEvent) => {
    if (clickEvent.target.id === "logout") {
        const resetCurrentUser = {
            "userId": 0,
            "name": "",
            "email": ""
        }
        setCurrentUser(resetCurrentUser)
        resetTransientState()

        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)

        console.log(transientState)
    }
}
//listen for event
document.addEventListener("click", clickLogout)

// Logo - reset transient state view to defaultView
//event listener function
const clickLogo = (clickEvent) => {
    if (clickEvent.target.id === "logo") {
        setView("defaultView")

        const customEvent = new CustomEvent("stateChanged")
        document.dispatchEvent(customEvent)

        console.log(transientState)
    }
}
//listen for event
document.addEventListener("click", clickLogo)

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

    const navBar = `<section class="navbar">
        <img id="logo" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F4NsdHaUJCxhgA%2Fgiphy.gif" alt="giffylube logo" 
        > <h1 class="main-header">GIFFYLUBE REBOOTED</h1
        > <button type="button" id="sendMessage">Send Message</button
        > <button type="button" id="inbox">${userMessages.length}</button
        > <div>${currentUser.name}</div
        > <button type="button" id="logout">Logout</button>
        </section>`

    return navBar
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


