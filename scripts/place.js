// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed, units) {
    if ((units === "metric" && temperature <= 10 && windSpeed > 4.8) ||
        (units === "imperial" && temperature <= 50 && windSpeed > 3)) {
        // Calculate wind chill factor based on temperature and wind speed
        // Formula: wind chill = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
        // Adjust formula based on units (°C or °F)
        if (units === "metric") {
            return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + 
                    (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2) + " °C";
        } else if (units === "imperial") {
            return (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + 
                    (0.4275 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2) + " °F";
        }
    } else {
        return "N/A";
    }
}

// Static values for temperature, wind speed, and units (for demonstration purposes)
const temperature = 5; // Example temperature
const windSpeed = 10; // Example wind speed
const units = "metric"; // Example units (metric or imperial)

// Call calculateWindChill function and display wind chill factor
const windChill = calculateWindChill(temperature, windSpeed, units);

// Display wind chill factor in the footer
document.getElementById("wind-chill").textContent = windChill;

// Function to get current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to get last modified date of the document
function getLastModifiedDate() {
    return document.lastModified;
}

// Display current year and last modified date in the footer
document.getElementById("current-year").textContent = getCurrentYear();
document.getElementById("last-updated").textContent = getLastModifiedDate();
