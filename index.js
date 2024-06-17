// Add event listeners to each drum element
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML.toLowerCase(); // Ensure lowercase for consistency
        check_key_and_sound(buttonInnerHTML);
        highlight_btn(buttonInnerHTML);
    });
}

// Detect keyboard press
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase(); // Ensure lowercase for consistency
    check_key_and_sound(keyPressed);
    highlight_btn(keyPressed);
});

// Function to check the key and play the corresponding sound
function check_key_and_sound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
        default:
            //did not include a defualt case, becasue it interfere with the user experirence
            break;
    }
}

// Function to highlight the button
function highlight_btn(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (activeButton) {
        activeButton.classList.add("pressed"); // Add animation
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100); // Remove animation after 100 milliseconds
    }
}
