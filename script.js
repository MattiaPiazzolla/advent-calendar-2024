
// recover the calendar div from the DOM
const calendar = document.querySelector('.calendar');

// Generate the calendar
for (let i = 1; i <= 25; i++) {
    // Define the day box
    const dayBox = document.createElement('div');
    dayBox.classList.add('day-box');
    
    // Define the day number
    dayBox.textContent = i;

    // Append the day box to the calendar
    calendar.appendChild(dayBox);
}

