const userLocation = document.querySelector(".location");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(showPosition)
})

function showPosition(position) {
    userLocation.innerHTML += `<br>
    Latitude: ${position.coords.latitude} 
    <br>
    Longitude: ${position.coords.longitude}`;
}