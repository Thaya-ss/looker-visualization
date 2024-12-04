// Create elements
const body = document.body;

// Create a heading
const heading = document.createElement('h1');
heading.textContent = 'Display Content Using JavaScript';

// Create a button
const button = document.createElement('button');
button.textContent = 'Click Me to Show Content';

// Create a div for the output
const outputDiv = document.createElement('div');
outputDiv.style.marginTop = '20px';
outputDiv.style.padding = '10px';
outputDiv.style.border = '1px solid #ddd';
outputDiv.style.backgroundColor = '#f9f9f9';

// Add elements to the body
body.appendChild(heading);
body.appendChild(button);
body.appendChild(outputDiv);

// Add event listener to the button
button.addEventListener('click', () => {
  outputDiv.textContent = 'Hello! This is the content displayed using JavaScript.';
});
