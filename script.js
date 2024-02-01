//your JS code here. If required.
// Function to ask for confirmation
function askForConfirmation() {
    // Display confirmation dialog
    var userConfirmation = confirm("Do you want to proceed?");

    // Check user's response
    if (userConfirmation) {
        alert("You clicked OK. Proceeding...");
    } else {
        alert("You clicked Cancel. Exiting...");
    }
}

// Call the function to initiate the confirmation process
askForConfirmation();

