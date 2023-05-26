import { fetchMessages, fetchUsers, getCurrentUser } from '../data/TransientState.js';

export const MessageList = async () => {
  const messages = await fetchMessages();
  const users = await fetchUsers();
  const currentUser = getCurrentUser();

  const filteredMessages = messages.filter((message) => {
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

  const container = document.createElement('div');
  container.innerHTML = resultString;

  const replyButtons = container.querySelectorAll('.reply-button');
  replyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setView('createMessage');
      const customEvent = new CustomEvent('stateChanged');
      document.dispatchEvent(customEvent);
    });
  });

  return container;
};