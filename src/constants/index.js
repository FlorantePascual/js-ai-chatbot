// Modify the following constants to customize the chatbot

// API_URL: The URL of the OpenAI API proxy function
export const API_URL = 'http://127.0.0.1:5001/your-firebase-project/us-central1/openaiProxy'
export const OVERRIDE_KEY = 'GODisGood!';

// Custom Colors
const PRIMARY_COLOR = '#7635dc';
const BACKGROUND_COLOR = '#f8f8f8';

// images
export const AI_BOT_AVATAR = 'https://firebasestorage.googleapis.com/v0/b/ai-tutorial-one.appspot.com/o/public%2Fchatbot-demo%2Fimg%2Fai-bot-avatar.png?alt=media&token=efd6de3c-acf2-42e7-9d3b-54351a6824d0';
export const AI_BOT_LAUNCHER = 'https://firebasestorage.googleapis.com/v0/b/ai-tutorial-one.appspot.com/o/public%2Fchatbot-demo%2Fimg%2Fai-bot-launcher.png?alt=media&token=0882d381-653f-4f9d-b528-96b53ad2e73a';

// AI_BOT_NAME: The name of the chatbot
export const AI_BOT_NAME = 'Kernel Bot';

// STYLES: The CSS styles for the chatbot
export const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
#chat-container {
    font-family: "Montserrat", sans-serif;
}

.ai-bot-toggler {
    position: fixed;
    right: 40px;
    bottom: 35px;
    height: 50px;
    width: 50px;
    color: #fff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    background: ${PRIMARY_COLOR};
    border-radius: 50%;
    transition: all 0.2s ease;
}

.show-ai-bot .ai-bot-toggler {
    transform: rotate(90deg);
}

.ai-bot-toggler span {
    position: absolute;
}

.show-ai-bot .ai-bot-toggler span:first-child,
.ai-bot-toggler span:last-child {
    opacity: 0;
}

.show-ai-bot .ai-bot-toggler span:last-child {
    opacity: 1;
}

.ai-bot {
    background: ${BACKGROUND_COLOR};
    position: fixed;
    right: 40px;
    bottom: 100px;
    width: 420px;
    transform: scale(0.5);
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
    background: #fff;
    border-radius: 16px;
    transform-origin: bottom right;
    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
        0 32px 64px -48px rgba(0, 0, 0, 0.5);
    transition: all 0.1s ease;
}

.show-ai-bot .ai-bot {
    transform: scale(1);
    opacity: 1;
    pointer-events: auto;
}

.ai-bot header {
    background: ${PRIMARY_COLOR};
    padding: 10px 0;
    text-align: center;
    position: relative;
    display: flex;
}

.ai-bot header img {
    height: 48px;
    width: 48px;
    padding: 0 10px;
}

.ai-bot header h2 {
    color: #fff;
    font-size: 1.4rem;
    margin-top: 0;
    margin-bottom: 0;
    align-self: flex-start;
    line-height: 48px;
}

.ai-bot header span {
    position: absolute;
    right: 20px;
    top: 50%;
    color: #fff;
    cursor: pointer;
    display: none;
    transform: translateY(-50%);
}

.ai-bot .message-thread {
    height: 510px;
    max-height: calc(100vh - 320px);
    overflow-y: auto;
    padding: 10px 10px 100px 10px;
}

.message-thread .message {
    display: flex;
}

.message-thread .incoming span img {
    height: 32px;
    width: 32px;
}

.message-thread .incoming span {
    height: 32px;
    width: 32px;
    color: #fff;
    text-align: center;
    line-height: 32px;
    border-radius: 32px;
    margin: 0 8px 2px 0;
    align-self: flex-end;
}

.message-thread .outgoing {
    margin: 20px 0;
    justify-content: flex-end;
}

.message-thread .message p {
    color: #fff;
    max-width: 75%;
    white-space: pre-wrap;
    font-size: 0.95rem;
    padding: 12px 16px;
    margin: 0;
    border-radius: 16px 16px 0 16px;
    background: ${PRIMARY_COLOR};
}

.message-thread .message p.error {
    color: #dd3333;
    border: rgba(255, 0, 0, 0.5) 1px solid;
    background: #f0f0f0;
}

.message-thread .incoming p {
    color: #000;
    background: #f4f6f8;
    border: #dedede 1px solid;
    border-radius: 16px 16px 16px 0px;
}

.ai-bot .message-input {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    gap: 5px;
    background: #fff;
    padding: 5px 20px;
    border-top: 1px solid #ccc;
}

.message-input textarea {
    height: 24px;
    width: calc(100% - 55px - 16px);
    border: none;
    outline: none;
    max-height: 180px;
    font-size: 0.95rem;
    resize: none;
    padding: 16px 16px 16px 0;
}

.message-input span {
    align-self: flex-end;
    height: 55px;
    line-height: 55px;
    color: ${PRIMARY_COLOR};
    font-size: 1.5rem;
    cursor: pointer;
    visibility: hidden;
}

.message-input textarea:valid ~ span {
    visibility: visible;
}

@media(max-width: 480px) {
    .ai-bot {
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
    .ai-bot .message-thread {
        height: 90%;

    }
    .ai-bot header span {
        display: block;
    }
}
`;

// CHATBOT_HTML: The HTML structure for the chatbot
export const CHATBOT_HTML = `
<header>
<img src="${AI_BOT_AVATAR}" alt="AI Bot Avatar">
<h2>AI Chatbot</h2>
<span class="ai-bot-close-btn material-symbols-outlined">close</span>
</header>
<ul class="message-thread">
<li class="message incoming">
    <span><img src="${AI_BOT_AVATAR}" alt="AI Bot Avatar"></span>
    <p>Hello there! My name is <b>${AI_BOT_NAME}</b>.<br>How may I assist you today?</p>
</li>
</ul>
<div class="message-input">
<textarea required placeholder="Message here ..."></textarea>
<span id="send-btn" class="material-symbols-outlined">send</span>
</div>`;

export const CHATBOT_TOGGLER_HTML = `
<span><img src="${AI_BOT_LAUNCHER}" height="50" alt="AI Bot Launcher"></span>
<span class="material-symbols-outlined">close</span>`;
