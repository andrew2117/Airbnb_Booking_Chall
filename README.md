# Simple Airbnb-Style Reservation System with Weather Information

## Overview
This project is a basic web application that simulates an Airbnb-style reservation system for a single room. It displays current reservations, shows the current weather using a public API, and allows users to make new reservations. The application also handles booking conflicts for dates that are already booked.

---

## Requirements

### User Interface
- Develop a simple UI using HTML and CSS.
- Include:
  - A section to display current weather using a public API.
  - A reservation form with a date picker and number of guests input (1-4).
  - A display area for current reservations.

### Functionality and API Integration
- Use JavaScript for interactivity and logic.
- Integrate a public weather API (like OpenWeatherMap) for current weather data.
- Display a list of current reservations (use pre-set data).

### Reservation Logic
- Allow users to submit reservation requests.
- Check for booking conflicts against current reservations.
- Display error messages for booking conflicts.
- Display a confirmation message for successful reservations.

### Simplified Data Handling
- Use a JavaScript array to store and display reservations.
- No backend or database is required.

---

## Steps to Use the Reservation App

1. Fork the Repository:
    - Go to the GitHub repository page.
    - Click the 'Fork' button on the top right corner of the page. This creates a copy of the repository in your GitHub account.

2. Clone the Forked Repository:
    - On your forked repository page, click the 'Code' button and copy the URL.
    - Open your terminal or command prompt.
    - Run `git clone [URL]` to clone the repository to your local machine.

3. Set Up the Weather API Key:
    - Sign up for a free account on OpenWeatherMap (or any other weather API provider).
    - Obtain an API key.
    - Open the `script.js` file in the project directory.
    - Replace the placeholder `API_KEY` with your actual API key.

4. Run the Application:
    - Open the `index.html` file in a web browser.

5. Make a Reservation:
    - Select a date using the date picker.
    - Enter the number of guests in the input field.
    - Click the "Submit" button to submit the reservation request.

6. View Current Reservations:
    - The current reservations will be displayed in the reservation display area.

7. Handling Booking Conflicts:
    - If there is a booking conflict for the selected date, an error message will be displayed.
    - Otherwise, a confirmation message will be displayed for successful reservations.
    - The booking conlficts handled are: 
            - Arrival date should be less than departure date.
            - Reservations can't be booked if there is a collision in the range of days with the other reservations.
