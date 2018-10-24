getLocation();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
