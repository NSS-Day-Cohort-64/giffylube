//Import functions that generate the HTML components for the NavBar, Footer, PostList, PostEntry, MessageForm, etc
//Import function to get transientState


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Define and export a function that generates all the html for main feed page
Don't forget to await functions with embedded fetch calls. 

///Create empty variable for htmlString (or another name)///////////
/// Add NavBar HTML to the htmlString//////////////
///Check these conditions of the transientState to determine which page to generate (only one or none should be true).
1. If transientState.somethingClicked===messageNotificationsClicked, then invoke function that generates all the HTML for the inbox page and add it to the htmlString
2. If transientState.somethingClicked===createMessageClicked, then invoke function that generates all the HTML for the create message page and add it to the htmlString
3. If transientState.somethingClicked===postNewGif, then invoke function that generates all the HTML for the new post page and add it to the htmlString
4. If transientState.somethingClicked===nothingClicked generate the HTML for the main feed page and add it to the htmlString

*//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// export GiffyLube function