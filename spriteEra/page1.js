document.addEventListener("DOMContentLoaded", function() {
    // Get references to the warrior images
    var staticWarrior = document.getElementById("static-warrior");
    var animatedWarrior = document.getElementById("animated-warrior");

    // Get reference to the Start Game button
    var startButton = document.getElementById("start-button");

    // Add event listener to the Start Game button
    startButton.addEventListener("click", function() {
        // Hide the static warrior image
        staticWarrior.style.display = "none";
        // Show the animated warrior GIF
        animatedWarrior.style.display = "block";

        // Redirect to Page 2 (replace this line with your redirection logic)
        window.location.href = "page2.html";
    });
});
