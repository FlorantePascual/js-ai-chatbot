import ChatComponent from './ChatComponent';

// This function will initialize the chat component
function initializeChat() {
  const chatContainerId = 'chat-container';
  let chatContainer = document.getElementById(chatContainerId);

  // If the chat container doesn't exist, create it and append to the body
  if (!chatContainer) {
    chatContainer = document.createElement('div');
    chatContainer.id = chatContainerId;
    document.body.appendChild(chatContainer);
  }

  // Initialize the ChatComponent with the containerId
  ChatComponent.initializeComponent(chatContainerId);
}

// Expose the chat initialization to the global scope so it can be called from the embedding script
window.ChatComponent = {
  init: initializeChat
};
