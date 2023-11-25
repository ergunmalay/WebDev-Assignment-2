function submitForm() {
    // Create overlay
    var overlay = document.createElement("div");
    overlay.className = "overlay";

    // Create popup
    var popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = "<p>Thank you for your message!</p>";

    // Append overlay and popup to the document body
    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    // Set opacity to 1 to make the overlay and popup visible
    overlay.style.opacity = 1;
    popup.style.opacity = 1;

    // Remove the popup and overlay after a certain time (e.g., 3 seconds)
    setTimeout(function () {
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
    }, 3000);
}
