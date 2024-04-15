// Select ai-bot elements
const messageInput = document.querySelector(".message-input textarea");
const sendBtn = document.querySelector(".message-input span");
const messageThreadBox = document.querySelector(".message-thread");
const aiBotToggler = document.querySelector(".ai-bot-toggler");
const aiBotCloseBtn = document.querySelector(".ai-bot-close-btn");

// Variables
const inputInitialHeight = messageInput.scrollHeight - 32;;
let userMessage = '';

// Functions

// This function will generate a response to the user's message
const generateResponse = (incomingListItem) => {
    const response = "I'm sorry, I'm just a toy and I don't have the capability to respond to your message yet. But I'm sure you're awesome!";
    incomingListItem.querySelector("p").textContent = response;

    // // simulate error
    // incomingListItem.querySelector("p").textContent = 'An error occurred. Please try again.';
    // incomingListItem.querySelector("p").classList.add('error');

    messageThreadBox.scrollTo(0, messageThreadBox.scrollHeight);
}

// This function will create a message li element
const createMessageLine = (message, className) => {
  const listElement = document.createElement("li");

  listElement.classList.add("message", className);
  const chatContent = className === 'outgoing' ? `<p></p>` : `<span><img src="./img/ai-bot-avatar.png" alt="AI Bot Avatar"></span><p></p>`;

  listElement.innerHTML = chatContent;
  listElement.querySelector("p").textContent = message;
  return listElement;
}

// This function will handle the user's message
const handleChat = () => {
    userMessage = messageInput.value.trim();
    if (!userMessage) return;

    // Clear Chat Input
    messageInput.value = "";
    messageInput.style.height = `${inputInitialHeight}px`;

    // Append user's message to the message-thread and reset to default height
    messageThreadBox.appendChild(createMessageLine(userMessage, 'outgoing'));
    messageThreadBox.scrollTo(0, messageThreadBox.scrollHeight);

    const incomingListItem = createMessageLine("Thinking ...", 'incoming');
    messageThreadBox.appendChild(incomingListItem);
    messageThreadBox.scrollTo(0, messageThreadBox.scrollHeight);
    setTimeout(() => {
        generateResponse(incomingListItem);
    }, 700);
}

// Event listener for the chat message input
messageInput.addEventListener("input", (e) => {
    messageInput.style.height = inputInitialHeight + "px";
    messageInput.style.height = (messageInput.scrollHeight-32) + "px";
    userMessage = e.target.value;
});
messageInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 480) {
        e.preventDefault();
        handleChat();
    }
})

// Event listener for the send button
sendBtn.addEventListener("click", handleChat);

// Event listeners for the ai-bot toggler and close button
aiBotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-ai-bot");
})
aiBotCloseBtn.addEventListener("click", () => {
    document.body.classList.remove("show-ai-bot");
})

