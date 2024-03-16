///////////// CHANGE BACKGROUND ///////////////

// Check if the background change state is stored in localStorage
let backgroundChanged = localStorage.getItem('backgroundChanged') === 'true';

const clickBox = document.getElementById('clickBox');

clickBox.addEventListener('click', function() {
    backgroundChanged = !backgroundChanged; // Toggle between true and false
    changeBackground(); // Call the function to change the background
});

// Function to change the background
function changeBackground() {
    if (backgroundChanged) {
        document.body.style.background = 'linear-gradient(to bottom, #1d0c7e, #6128bb, #db8635, #f8c057)';
    } else {
        document.body.style.background = 'linear-gradient(to bottom, #5d6ba5, #aac8ec)';
    }
    
    // Store the background change state in localStorage
    localStorage.setItem('backgroundChanged', backgroundChanged);
}

// Apply the background change on page load
changeBackground();




/////////////////// SECRET MESSAGE ///////////////////////

document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0; // Keep track of the current index of the secret code being typed

    // Define the secret code
    var secretCodeChars = ["1", "3", "3", "7"];

    // Listen for keydown event on the document
    document.addEventListener("keydown", function(event) {
        // Get the pressed key
        var keyPressed = event.key;

        // Check if the pressed key matches the current character in the secret code
        if (keyPressed === secretCodeChars[currentIndex]) {
            // Increment the current index
            currentIndex++;

            // If the current index reaches the end of the secret code, show the modal popup
            if (currentIndex === secretCodeChars.length) {
                var modal = document.getElementById("myModal");
                var closeButton = document.getElementsByClassName("close")[0];

                // Show the modal popup
                modal.style.display = "block";

                // Close the modal when the close button is clicked
                closeButton.onclick = function() {
                    modal.style.display = "none";
                    currentIndex = 0; // Reset the current index for the next input
                }
            }
        } else {
            // Reset the current index if the pressed key does not match the current character in the secret code
            currentIndex = 0;
        }
    });
});