// import NavBar from ./nav/NavBar.js
import { getView } from "./data/TransientState.js"
import { MessageList } from "./message/PrivateMessages.js"
import { NavBarHTML } from "./nav/NavBar.js"
// import PostEntry from ./feed/PostEntry.js
// import PostList from ./feed/PostList.js
// import Footer from ./nav/Footer.js
// import MessageForm from ./message/MessageForm.js
// import MessageList from ./message/PrivateMessages.js
// import getView function from ./data/TransientState.js

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    Define and export GiffyLube function that generates all the html for main feed page
export const GiffyLube = async () => {
    const navBar = await NavBarHTML()
    const messages = await MessageList()
    const view = getView()
    
    //Create variable for htmlList = NavBar 
    let htmlList = `${navBar}`

    //check these conditions of the transientState to determine which page to generate 
        //1. If transientState.view===viewMessages, then invoke function that generates all the HTML for the inbox page and add it to the htmlString
        if(view === "viewMessages") {
            htmlList += `${}`
        }

        //2. If transientState.view===createMessage, then invoke function that generates all the HTML for the create message page and add it to the htmlString
        if(view === "createMessage") {
            htmlList += `${}`
        }

        //3. If transientState.view===postGif, then invoke function that generates all the HTML for the new post page and add it to the htmlString
        if(view === "postGif") {
            htmlList += `${}`
        }
        
        //4. If transientState.view===defaultView, generate the HTML for the main feed page and add it to the htmlString
        if(view === "defaultView") {
            htmlList += `${}`
        }
        

    htmlList += `
    <h1>This will be the main page</h1>
    `
    return htmlList
}


// click event listener for "have a gif to post?" to change transient state (outside any function)

