/*
generates the HTML markup for the private message list page
and handling reply button
*/

// import MessageList from ./feed/MessageList.js

    // imports getMessages and getUsers functions from ./data/TransientState.js
import { fetchMessages, fetchUsers, getCurrentUser } from './data/TransientState.js';

// declare and export MessageList function that generates an HTML string representing a list of messages
// make sure you are checking that the message.recipientId===currentUser.userId
// do we need the return in the .filter function?
// make a new variable for the new array of filtered messages and then iterate over that array with .map

export const MessageList = async () => {
  const messages = await fetchMessages();
  const users = await fetchUsers();
  const currentUser = getCurrentUser();

  const filteredMessages = messages.filter((message) => {
    // Filter messages based on the recipientId matching the currentUser's userId
    return message.recipientId === currentUser.userId;
  });
  
  const htmlStrings = filteredMessages.map((message) => {
    const { userId, text } = message;
  
    const sender = users.find((user) => user.id === userId);
    const senderName = sender ? sender.name : 'Unknown User';
  
    const htmlString = `
      <div class="message">
        <span class="user">From: ${senderName}</span>
        <p class="message-text">${text}</p>
        <button class="reply-button">REPLY</button>
      </div>
    `;
  
    return htmlString;
  });
  
  const resultString = htmlStrings.join('');
  
  return resultString;

}
  
  
  // attach click event listener for reply button
    // reply button sends to create message page