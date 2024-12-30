// Recover the calendar div from the DOM
const calendar = document.querySelector('.calendar');
// Recover reset button
const resetButton = document.querySelector('.reset-btn');

// Recover modal overlay and close button
const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
const closeModalButton = document.querySelector('.close-modal');

// Function to open the modal
function openModal(content) {
    modalContent.innerHTML = content;
    modalOverlay.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modalOverlay.style.display = 'none';
}

// Base path for images
const basePath = './images/icons/';
const extension = '.png';

// Generate the calendar
for (let i = 1; i <= 25; i++) {
    // Define the day box
    const dayBox = document.createElement('div');
    if (i === 25) {
        dayBox.classList.add('last-day');
    } else {
        dayBox.classList.add('day-box');
    }

    // Add a click event listener to open the modal
    dayBox.addEventListener('click', () => {
        openModal();
        dayBox.classList.add('opened');
    });

    // Add a click event listener to reset the calendar
    resetButton.addEventListener('click', () => {
        dayBox.classList.remove('opened');
    })

    // Add a click event listener to close the modal
    closeModalButton.addEventListener('click', () => {
        closeModal();
    });
    
    // Allign the values of the source array to the day number
    const iconData = source[i - 1]; 
    
    // Create the image element
    const img = document.createElement('img');
    img.src = `${basePath}${iconData.icon}${extension}`;
    img.alt = `Icon for day ${i}`;
    img.classList.add('day-icon');

    // Append the image to the day box
    dayBox.appendChild(img);
    
    
    
    // Define the day number
    const dayNumber = document.createElement('span');
    dayNumber.textContent = i;

    // Append the day number to the day box
    dayBox.appendChild(dayNumber);

    // Append the day box to the calendar
    calendar.appendChild(dayBox);
}