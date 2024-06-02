function validateForm() {
    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    return isValid;
}