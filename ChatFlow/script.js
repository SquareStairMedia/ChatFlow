// script.js

// Sample chatbot data
const chatbots = [
    { name: "Chatbot A", url: "https://example.com/chatbot-a" },
    { name: "Chatbot B", url: "https://example.com/chatbot-b" },
    // Add more chatbot objects as needed
];

// Function to generate chatbot links
function generateChatbotLinks() {
    const chatbotList = document.getElementById("chatbotList");

    chatbots.forEach(chatbot => {
        const link = document.createElement("a");
        link.textContent = chatbot.name;
        link.href = chatbot.url;
        link.classList.add("chatbot-link");
        chatbotList.appendChild(link);
        chatbotList.appendChild(document.createElement("br"));
    });
}

// Call the function to generate chatbot links when the page loads
window.onload = function() {
    generateChatbotLinks();
};
