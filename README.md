# JavaScript AI Chatbot for Websites
This repository contains a basic AI-powered Chatbot that can be embedded on websites. It is lightweight using only plain JavaScript, HTML and CSS, then bundled via WebPack. It demonstrates how to connect to the OpenAI API through a [scalable backend proxy](https://github.com/FlorantePascual/node-email-sms-plus), again minimal using only NodeJS.

[![AI Chatbot Tutorial](https://img.youtube.com/vi/y90O4V5UCGM/0.jpg)](https://youtu.be/y90O4V5UCGM?list=PLDqYEEcESYgxyphKmtXOa2nUc2KIP3pRa)

## Motivation
The motivation behind this project is to provide a foundational learning experience for understanding AI chatbots, their integration, and the process of embedding them into websites. Much like understanding how a car works is essential for a driver, comprehending the underlying principles of AI chatbots and their integration can empower developers and enthusiasts to create more sophisticated and effective chatbot solutions.

By exploring this prototype, developers can gain insights into:

- AI Chatbot Concepts: Learn about the basic concepts of AI chatbots, including natural language processing (NLP) and conversational interfaces.
- Integration Techniques: Understand how to integrate external APIs, such as the OpenAI API, securely into web applications using backend proxies.
- Embedding on Websites: Discover methods for embedding chatbots seamlessly into websites using modular JavaScript components.

This project serves as a starting point for diving deeper into the world of AI chatbots, enabling developers to build interactive and intelligent conversational interfaces that enhance user experiences.

Master it, and you won't have to pay the bot middlemen, your chat conversations secured, and your API keys stay with you. This solution is applicable for a good majority of use-cases.

## Features
- Embeddable chatbot for websites.
- Mobile responsive.
- Utilizes a [backend proxy](https://github.com/FlorantePascual/node-email-sms-plus) to securely call the OpenAI API.
- Minimalistic and lightweight solution requiring plain JavaScript, Node.js, Webpack.

## Repository Structure
```html
- dist/            <!-- will contain final compiled code -->
  - ChatComponent.bundle.js
- prototype-bot/   <!-- Standalone Prototype -->
  - index.html
  - script.js
  - style.css
- src/             <!-- Embeddable Prototype -->
  - index.js
  - ChatComponent.js
  - constants/
    - index.js
- /
  - index.html     <!-- website with embedded chatbot -->
```

## Getting Started
1. Clone the repository to your local machine.
    ```bash
    git clone https://github.com/FlorantePascual/js-ai-chatbot.git
    ```
2. Navigate to the root directory of the project.
    ```bash
    cd js-ai-chatbot
    ```
3. Install dependencies using npm:
    ```bash
    npm install
    ```
4. Customize the chatbot's appearance and behavior by editing variables in `src/constants/index.js` file.
    - API_URL - endpoint for [OpenAI Proxy](https://github.com/FlorantePascual/node-email-sms-plus). Implement this first if you want to test AI Messaging.
    - OVERRIDE_KEY - *password* for allowing other domains to use the endpoint
    - PRIMARY_COLOR and BACKGROUND_COLOR
    - AI_BOT_NAME - catchy name for your bot
    - AI_BOT_AVATAR - URL of chatbot avatar image
    - AI_BOT_LAUNCHER - URL of launcher image
    - STYLES - style info derived from `prototype-bot/style.css`
    - CHATBOT_HTML - the chatbot's DOM elements
5. Build the chatbot bundle using webpack:
    ```bash
    npm run build
    ```
6. Embed the chatbot into your website using two `<script>` tags in the `<head>` element:
    ```html
    <head>
        <!-- title, meta tags etc -->
        ...
        <script src="path/to/ChatComponent.bundle.js" defer></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
            if (window.ChatComponent) {
                ChatComponent.init();
            } else {
                console.error('ChatComponent is not available');
            }
            });
      </script>
    </head>
    ```
    Eventually, you will have to host the `ChatComponent.bundle.js` file via public CDN or hosting service. For testing purposes, the copy in `dist/` folder will do just fine and run a local website.

    Refer to `website-embed/index.html` for a working example of a local website. Right-click on it to run it using **Live Server**.

7. Implement [OpenAI Proxy](https://github.com/FlorantePascual/node-email-sms-plus) if you haven't done so already. Run the firebase functions locally.
    
    Note the endpoint given for **openaiProxy** and reflect it in `src/constants/index.js` API_URL variable. 
    
    If the variables changed, run the build process again in the chatbot IDE and reload the website.
    ```bash
    npm run build
    ```

You can now test your Chatbot!

## License
This project is licensed under the MIT License. Feel free to use any way you want. *Pay it forward* encouraged.
