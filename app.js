const text = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur maxime nihil quod exercitationem unde magnam, eum nobis? Quo optio error tempore.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.',
    'Pellentesque dapibus suscipit ligula. Donec posuere augue in quam.',
    'Etiam vel tortor sodales tellus ultricies commodo. Suspendisse potenti.',
    'Sed dignissim lacinia nunc. Curabitur tortor.',
];

// Shuffle function using Fisher-Yates Algorithm
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Get input and output elements
const item = document.querySelector('#item');
const dataContainer = document.querySelector('#data');

// Function to generate and display paragraphs
const generate = () => {
    const numberOfParagraphs = parseInt(item.value);

    // Validate input
    if (isNaN(numberOfParagraphs) || numberOfParagraphs < 1 || numberOfParagraphs > 10) {
        alert('Please enter a number between 1 and 10');
        return;
    }

    // Shuffle text and get selected number of paragraphs
    const shuffledText = shuffle([...text]); // shuffle a copy of the array
    const selectedText = shuffledText.slice(0, numberOfParagraphs);

    // Create paragraph elements and add to the DOM
    const paragraphs = selectedText.map(d => `<p>${d}</p>`).join('');
    dataContainer.innerHTML = paragraphs;
};
