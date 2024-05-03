import { CHATBOT_HTML, CHATBOT_TOGGLER_HTML } from "./constants";
import { API_URL, OVERRIDE_KEY, STYLES, AI_BOT_AVATAR } from "./constants/index";

class ChatComponent {

    constructor(container) {
        this.container = container;
        if (!this.container) {
            console.error("Chatbot container not found");
            return;
        }
        this.createChatbotUI();
        this.injectStyles();
        this.attachEventListeners();

        this.userMessage = "";
        this.inputInitialHeight = this.messageInput.scrollHeight - 32;
    }

    createChatbotUI() {
        // Create the link element for Material Symbols font
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0";
        document.head.appendChild(link);

        // Create chatbot toggle button
        const toggler = document.createElement("button");
        toggler.className = "ai-bot-toggler";
        toggler.innerHTML = CHATBOT_TOGGLER_HTML;
        this.container.appendChild(toggler);

        // Create chatbot main container
        const chatbot = document.createElement("div");
        chatbot.className = "ai-bot";
        chatbot.innerHTML = CHATBOT_HTML;
        this.container.appendChild(chatbot);
    }

    injectStyles() {
        // Inject styles for the chatbot
        const style = document.createElement("style");
        style.textContent = STYLES; 
        document.head.appendChild(style);
    }

    attachEventListeners() {
        // Define DOM elements and attach event listeners
        this.messageInput = document.querySelector(".message-input textarea");
        this.sendBtn = document.querySelector(".message-input span");
        this.messageThreadBox = document.querySelector(".message-thread");
        this.aiBotToggler = document.querySelector(".ai-bot-toggler");
        this.aiBotCloseBtn = document.querySelector(".ai-bot-close-btn");

        this.aiBotToggler.addEventListener("click", () => {
            this.container.classList.toggle("show-ai-bot");
        })
        this.aiBotCloseBtn.addEventListener("click", () => {
            this.container.classList.remove("show-ai-bot");
        })
        this.sendBtn.addEventListener("click", this.handleChat.bind(this));
        this.messageInput.addEventListener("input", (e) => {
            this.messageInput.style.height = `${this.inputInitialHeight}px`;
            this.messageInput.style.height = `${this.messageInput.scrollHeight-32}px`;
            this.userMessage = e.target.value;
        });
        this.messageInput.addEventListener("keyup", (e) => {
            if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 480) {
                e.preventDefault();
                this.handleChat();
            }
        })
    }

    handleChat() {
        this.userMessage = this.messageInput.value.trim();
        if (!this.userMessage) return;

        // Clear Chat Input
        this.messageInput.value = "";
        this.messageInput.style.height = `${this.inputInitialHeight}px`;

        // Append user's message to the message-thread and reset to default height
        this.messageThreadBox.appendChild(this.createMessageLine(this.userMessage, "outgoing"));
        this.messageThreadBox.scrollTo(0, this.messageThreadBox.scrollHeight);

        const incomingListItem = this.createMessageLine("Thinking ...", "incoming");
        this.messageThreadBox.appendChild(incomingListItem);
        this.messageThreadBox.scrollTo(0, this.messageThreadBox.scrollHeight);
        setTimeout(() => {
            this.generateResponse(incomingListItem);
        }, 100);
    }

    createMessageLine(message, className) {
        // Create a chat <li> element with passed message and className
        const listElement = document.createElement("li");
        listElement.classList.add("message", className);
        const chatContent = className === "outgoing" ? `<p></p>` : `<span><img src="${AI_BOT_AVATAR}" alt="AI Bot Avatar"></span><p></p>`;
        listElement.innerHTML = chatContent;
        listElement.querySelector("p").textContent = message;
        return listElement;
    }

    generateResponse(incomingListItem) {
        let messageElement = incomingListItem.querySelector("p");
        const domainOverride = OVERRIDE_KEY; // Replace OVERRIDE_KEY with your domain override key
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: this.userMessage, domainOverride })
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    messageElement.textContent = data.error;
                    messageElement.classList.add("error");
                } else {
                    messageElement.textContent = data.choices[0].message.content;
                }
                this.messageThreadBox.scrollTo(0, this.messageThreadBox.scrollHeight);
            })
            .catch(error => {
                console.log({ error });
                messageElement.textContent = "An error occurred. Please try again.";
                messageElement.classList.add("error");
                this.messageThreadBox.scrollTo(0, this.messageThreadBox.scrollHeight);
            });
    }

    // The initializeComponent method to be called externally to create an instance of the chat component
    static initializeComponent(containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error("Chat container not found");
            return;
        }
        new ChatComponent(container);
    }

}

export default ChatComponent;
