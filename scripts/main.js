// import GiffyLube from './GiffyLube.js’
// import fetchUsers from './data/TransientState.js'
import { GiffyLube } from "./GiffyLube.js"
import { fetchUsers, getCurrentUser } from "./data/TransientState.js"

/* The main job of this module is to invoke one of two functions within the renderApp function that will render 
    HTML to the DOM. Depending on if the user has been authenticated, they will either be taken to the login 
    view or to the main feed. An event listener will cause the renderApp function to be invoked every time
    the state of the application has changed. Depending on that state, the function imported from GiffyLube may
    cause the html rendered to either display the main feed, the 'create message' view, the 'view messages' 
    view, or the 'make a post' view.  */

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Define function called renderApp() that puts together all of the html for the app.            //////////
// It should check if the user has been authenticated, and either load the html for              //////////
// the login page or the GiffyLube module, which will put together all of the components for the //////////
// main page, including the header nav, feed, and footer.                                        //////////
*//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const renderApp = async () => {
  // Invoke and assign imported functions to variables.
  // Fetch the users information

  /* 
    Use document.querySelector to get the element id for where the HTML 
    will be added in the document and assign it to a variable called container 
  */
  const container = document.querySelector("#container")
  // Assign an empty html string to a variable called 'UI'
  let UI = ""
  // Get the current user(or check if there is one)
  const thisUser = getCurrentUser()
  console.log("Here is the current user:")
  console.log(thisUser)
  // Iterate through the users and check if the user has been authenticated
  const users = await fetchUsers()
  console.log("Here are all of the users:")
  console.log(users)
  const verifiedUser = users.find(user => user.id === thisUser.userId)
    // If user has not been authenticated:
    if (verifiedUser) {
      // If the user has been authenticated:
      // UI = GiffyLube()
      UI = GiffyLube()
    } else {
      // UI = Login()
      UI = `<div>User Not Authenticated. Showing main page to test code</div>` + GiffyLube()
    }
    
    
    

  // Add the html to the DOM:
  // container.innerHTML = UI
  container.innerHTML = UI
}

// Invoke renderApp()
renderApp()
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add an event listener that will listen for a custom event that dispatches every time the application ///
// state has changed. When the event happens, invoke the renderApp() function to re-render the HTML ///////
///////////////////////////////////////////////////////////////////////////////////////////////////////////




import { NavBarHTML } from "./nav/NavBar.js"
//test code
const container = document.querySelector("#container")
const test = await NavBarHTML()
container.innerHTML = test