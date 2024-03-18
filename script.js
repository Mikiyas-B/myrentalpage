// script.js

function showOwnerPage() {
    // Add functionality to show owner page
    console.log("Owner page shown");
}

function showRenterPage() {
    // Add functionality to show renter page
    console.log("Renter page shown");
}

function contactOwner() {
    // Add functionality to contact the owner
    console.log("Owner contacted");
}
function openGoogleMaps() {
    // Replace the coordinates with the location you want to show on Google Maps
    var latitude = 37.7749;
    var longitude = -122.4194;
    var zoomLevel = 12; // Zoom level for the map
    var mapUrl = 'https://www.google.com/maps?q=' + latitude + ',' + longitude + '&z=' + zoomLevel;
    window.open(mapUrl, '_blank');

function filterItems() {
        var location = document.getElementById("location").value;
        var purpose = document.getElementById("purpose").value;
        var type = document.getElementById("type").value;

        // Example: You can replace this with your own logic to filter items
        var filteredItems = [];

        // Display filtered items
        document.getElementById("filteredItems").innerHTML = "<p>Filtered items: " + filteredItems.join(", ") + "</p>";
    }

// You can add more JavaScript functionality as needed
