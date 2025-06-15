const socket = io();
const startBtn = document.getElementById("startBtn");
const statusText = document.getElementById("status");
const mapDiv = document.getElementById("map");

let map, marker;
let markers = {};
let watchId = null;

startBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    mapDiv.style.display = "block";
    statusText.innerText = "🟢 Tracking started";

    // Initialize the map only once
    if (!map) {
      map = L.map("map").setView([0, 0], 16);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(map);
    }

    watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Send to server
        socket.emit("send-location", { latitude, longitude });

        // Center and mark current location
        if (!marker) {
          marker = L.marker([latitude, longitude]).addTo(map);
          map.setView([latitude, longitude], 16);
        } else {
          marker.setLatLng([latitude, longitude]);
        }
      },
      (error) => {
        console.log("Geolocation error:", error);
        statusText.innerText = "🔴 Location access denied";
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
});

// When other users' locations are received
socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;

  // Don't update own marker
  if (id === socket.id) return;

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

// Remove user marker on disconnect
socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
