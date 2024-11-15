document.addEventListener("DOMContentLoaded", function() {
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const messages = document.querySelector(".messages");

    sendBtn.addEventListener("click", function() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage("Você", userMessage);
            userInput.value = "";
            // Aqui você pode adicionar a lógica para enviar a mensagem ao chatbot e receber a resposta
            setTimeout(() => {
                addMessage("Chatbot", "Esta é uma resposta automática.");
            }, 1000);
        }
    });

    function addMessage(sender, text) {
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerHTML = `<strong>${sender}:</strong> ${text}`;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }
});