// Button click interaction
document.getElementById("visitBtn").addEventListener("click", function () {
    alert("Thank you for visiting!");
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been submitted successfully!");
    this.reset();
});
