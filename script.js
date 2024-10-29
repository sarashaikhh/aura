document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const typewriterElement = document.getElementById('typewriter');

    // Define the full text here
    const fullText = 'welcome to artificial perception. explore the ancient art of aura reading through the delicate craft of silk weaving. Our innovative approach intertwines the threads of your energy with the elegance of digital silk, unveiling the colors and patterns that signify your spiritual essence—interpreted through a machine’s lens. as you navigate this synthetic tapestry, each hue and design serves as an artificial reflection of your aura, created without human intuition. immerse yourself in the mysteries of your aura, but be aware of the emptiness of a mechanized experience. discover the hidden layers of your being, but remain mindful of the hollow echoes that technology leaves behind.';

    // Initially clear the text content of the typewriter element
    typewriterElement.textContent = '';
    let index = 0;

    // Typewriter function
    function typeWriter() {
        if (index < fullText.length) {
            typewriterElement.textContent += fullText.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Speed of typing effect
        }
    }

    // Start the typewriter effect
    typeWriter();
});
