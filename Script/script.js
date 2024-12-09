// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Add event listener to the form submit event
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get the form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Display the thank you message
        thankYouMessage.textContent = `Thank you, ${name}, for reaching out! We will contact you at ${email} shortly.`;

        // Clear the form fields
        form.reset();
    });
});
