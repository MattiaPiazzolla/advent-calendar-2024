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

// Set to track opened days
const openedDays = new Set();
const totalDays = 25; 

// Initially hide the reset button
resetButton.style.display = 'none';

// Generate the calendar
for (let i = 1; i <= totalDays; i++) {
    // Define the day box
    const dayBox = document.createElement('div');
    if (i === totalDays) {
        dayBox.classList.add('last-day');
    } else {
        dayBox.classList.add('day-box');
    }

    // Add a click event listener to open the modal
    dayBox.addEventListener('click', () => {
        if (!dayBox.classList.contains('opened')) {
            openedDays.add(i); 
        }
        dayBox.classList.add('opened'); 

        // Check if all days are opened
        if (openedDays.size === totalDays) {
            resetButton.style.display = 'block'; 
        }

        // Prepare modal content
        let modalHTML = '';

        // Check if the day has a URL or text in the source data
        const iconData = source[i - 1]; 
        if (iconData.url) {
            // Create an image element if URL is true
            modalHTML = `
                <img src="${iconData.url}" alt="Image for day ${i}" />
            `;
        } else if (iconData.text) {
            // Create a paragraph if text is true
            modalHTML = `
                <p>${iconData.text}</p>
            `;
        } else {
            // Fallback content if neither URL nor text is present
            modalHTML = `
                <p>Nessun contenuto disponibile per questo giorno.</p>
            `;
        }
        openModal(modalHTML);
    });

    // Append the day number to the day box
    const dayNumber = document.createElement('span');
    dayNumber.textContent = i;

    // Append the image and day number to the day box
    const iconData = source[i - 1];
    const img = document.createElement('img');
    img.src = `${basePath}${iconData.icon}${extension}`;
    img.alt = `Icon for day ${i}`;
    img.classList.add('day-icon');
    dayBox.appendChild(img);
    dayBox.appendChild(dayNumber);

    // Append the day box to the calendar
    calendar.appendChild(dayBox);
}

// Add click event to reset button
resetButton.addEventListener('click', () => {
    // Clear the set of opened days
    openedDays.clear();

    // Hide the reset button
    resetButton.style.display = 'none';

    // Reset the calendar visually
    document.querySelectorAll('.day-box, .last-day').forEach(box => {
        box.classList.remove('opened');
    });
});

// Add a click event listener to close the modal
closeModalButton.addEventListener('click', () => {
    closeModal();
});
// Add a click event listener to close the modal when clicking outside
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});