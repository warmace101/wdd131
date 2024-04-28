// getdates.js

// Populate current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerText = currentYear;

// Populate last modified date
document.getElementById("lastModified").innerText = "Last modified: " + document.lastModified;
