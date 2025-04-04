// DOM Elements
const targetText = document.getElementById('targetText');
const changeTextBtn = document.getElementById('changeTextBtn');
const colorBox = document.getElementById('colorBox');
const toggleColorBtn = document.getElementById('toggleColorBtn');
const addRemoveBtn = document.getElementById('addRemoveBtn');
const dynamicContainer = document.getElementById('dynamicContainer');

// Text Content Update
const names = ['John Smith', 'Jane Doe', 'Alice Johnson', 'Bob Brown', 'Eve Wilson'];
let currentIndex = 0;

changeTextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % names.length;
    targetText.textContent = names[currentIndex];
});

// Style Modification
const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
let colorIndex = 0;

toggleColorBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    colorBox.style.backgroundColor = colors[colorIndex];
});

// Element Addition/Removal
const elements = [
    { tag: 'div', class: 'dynamic-div', text: 'Dynamic Div' },
    { tag: 'p', class: 'dynamic-p', text: 'Dynamic Paragraph' },
    { tag: 'span', class: 'dynamic-span', text: 'Dynamic Span' },
    { tag: 'button', class: 'dynamic-button', text: 'Dynamic Button' },
    { tag: 'h3', class: 'dynamic-heading', text: 'Dynamic Heading' }
];
let elementIndex = 0;

addRemoveBtn.addEventListener('click', () => {
    if (dynamicContainer.children.length === 0) {
        const newElement = document.createElement('div');
        newElement.textContent = 'New Dynamic Element';
        newElement.classList.add('dynamic-element');
        dynamicContainer.appendChild(newElement);
        addRemoveBtn.textContent = 'Remove Element';
    } else {
        dynamicContainer.removeChild(dynamicContainer.firstElementChild);
        addRemoveBtn.textContent = 'Add Element';
    }
});