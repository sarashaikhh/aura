document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const typewriterElement = document.getElementById('typewriter');

    // Define the full text here
    const fullText = `welcome to aura reader. discover the ancient art of reading your aura through the delicate craft of silk weaving. our unique approach intertwines the threads of your energy with the elegance of silk, revealing the colors and patterns that define your spiritual essence. explore the mysteries of your aura and uncover the hidden layers of your being.`;

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
