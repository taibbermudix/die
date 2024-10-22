function openEnvelope() {
    const envelope = document.getElementById("envelope");
    envelope.classList.toggle("open");

    // Create floating hearts when the envelope is opened
    const heartContainer = document.getElementById("heart-container");
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");

        // Random position and animation delay for each heart
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heartContainer.appendChild(heart);

        // Remove hearts after animation ends
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}