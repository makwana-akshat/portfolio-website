const textElement = document.querySelector("#typewriter-text");
const words = ["Web Developer", "DSA Enthusiast", "AI/ML Explorer"];
let wordIdx = 0;
let characterIdx = 0;
let speed = 800;
let isdeleting = false;

function type() {
    let currentWord = words[wordIdx];
    if (isdeleting) {
        textElement.textContent = currentWord.substring(0, characterIdx - 1);
        characterIdx -= 1;
        speed = 100;
    }
    else {
        textElement.textContent = currentWord.substring(0, characterIdx + 1);
        characterIdx += 1;
        speed = 200;
    }

    if (!isdeleting && characterIdx === currentWord.length) {
        isdeleting = true;
        speed = 2000;
    }
    else if (isdeleting && characterIdx === 0){
        isdeleting = false
        wordIdx = (wordIdx+1) % words.length;
        speed = 500;
    }
    setTimeout(type, speed);
}
document.addEventListener('DOMContentLoaded', type);

const modeToggle = document.getElementById('mode');
const body = document.documentElement; //<html> tag

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
}

modeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});