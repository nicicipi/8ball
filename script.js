// script.js

// Array of Magic 8-Ball responses
const responses = [
    "Yea..",
    "No?",
    "Siguro",
    "Uhm no",
    "Definitely",
    "Hindi nga",
    "It is certain",
    "Big doubt",
    "Cannot predict now",
    "Oonga",
    "Most likely"
];

// Elements
const answerElement = document.getElementById('answer');
const soundEffect = document.getElementById('sound-effect');

// Function to get a random response
function getRandomResponse() {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to handle the event
function shakeBall() {
    // Change text
    answerElement.textContent = getRandomResponse();

    // Play sound
    soundEffect.play();

    // RGB background and confetti
    document.body.style.background = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    confetti.start();  // Assuming you included a confetti library

    // Reset after 2 seconds
    setTimeout(() => {
        document.body.style.background = 'black';
        confetti.stop();
        answerElement.textContent = "Ask your question...";
    }, 2000);
}

// Function to get a random RGB value
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

// Event listener for tap (click) or shake
document.body.addEventListener('click', shakeBall);

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
        const acceleration = event.accelerationIncludingGravity;
        if (acceleration.x > 15 || acceleration.y > 15 || acceleration.z > 15) {
            shakeBall();
        }
    });
}

function shakeBall() {
    // Add shake class to trigger animation
    answerElement.classList.add('shake');

    // Change text
    answerElement.textContent = getRandomResponse();

    // Play sound
    soundEffect.play();

    // RGB background and confetti
    document.body.style.background = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
    confetti.start();  // Assuming you included a confetti library

    // Reset after 2 seconds
    setTimeout(() => {
        document.body.style.background = 'black';
        confetti.stop();
        answerElement.textContent = "Ask your question...";
        answerElement.classList.remove('shake');  // Remove shake class
    }, 2000);
}

