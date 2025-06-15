# 📍 Real-Time Location Tracker

![Map Demo](https://user-images.githubusercontent.com/111123456/leaflet-demo.gif)

> A full-stack real-time location tracking web app using **Node.js**, **Socket.IO**, and **Leaflet.js**  
> 🔗 Live Demo: [https://realtime-traker-bvej.onrender.com](https://realtime-traker-bvej.onrender.com)

---

## 🚀 Features

- ✅ Real-time location tracking with multiple users
- 🌍 Interactive map with Leaflet.js
- 📡 Socket.IO for live location sync
- 📱 Mobile-friendly UI
- 🧭 Geolocation-based updates
- ⚡ Deployed on **Render**

---

## 🛠️ Tech Stack

| Frontend | Backend | Real-time | Mapping |
|----------|---------|-----------|---------|
| HTML, CSS, JS | Node.js + Express | Socket.IO | Leaflet.js |

---

## 🎯 How It Works

1. Users open the app and click **Start Tracking**
2. App requests location permission from the browser
3. Location is emitted to the server via Socket.IO
4. The server broadcasts all user locations to everyone
5. Live markers are updated on the map in real-time

---

## 📸 UI Preview

<img src="https://user-images.githubusercontent.com/111123456/tracker-ui-preview.png" alt="Map UI" width="600"/>

---

## 🔗 Live Demo

> 🌐 **[Click here to open the live app](https://realtime-traker-bvej.onrender.com)**  
> Works best on **Chrome** and **mobile browsers** with location enabled.

---

## 🧠 Use Cases

- 🚖 Ride tracking system
- 🧭 Event management / meetup locator
- 🚨 Emergency responder maps
- 👨‍👩‍👧‍👦 Family tracker

---
## For Cloning
git clone https://github.com/yourusername/Realtime_traker.git
cd Realtime_traker
npm install
node app.js
