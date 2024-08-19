// Example of using Browser API in JavaScript

// Accessing the Document Object Model (DOM) API to manipulate HTML elements
const button = document.querySelector('#button');
const buttonShowData = document.querySelector('#tampilan_data');

// Using the Fetch API to make network requests
function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => response.json())
        .then((data) => {
            sessionStorage.setItem("kekuatan pokemon", JSON.stringify(data.abilities));
        })
        .catch((error) => console.error('Error fetching data:', error));
}

// Listening for a click event on the button using the EventListener API
button.addEventListener('click', () => {
    console.log('Button was clicked!');
    fetchData(); // Call fetchData function when button is clicked
});

buttonShowData.addEventListener('click', () => {
    const data = sessionStorage.getItem("kekuatan pokemon")
    console.log(data);
})

// // Example of using both Local Storage and Session Storage

// // Using the Web Storage API to store data locally in Local Storage
// localStorage.setItem('localKey', 'localValue'); // Stores a value by key in local storage
// console.log(localStorage.getItem('localKey')); // Retrieves the value by key from local storage

// // Using the Web Storage API to store data temporarily in Session Storage
// sessionStorage.setItem('sessionKey', 'sessionValue'); // Stores a value by key in session storage
// console.log(sessionStorage.getItem('sessionKey')); // Retrieves the value by key from session storage

// Using the Cache API to cache assets for offline use
// if ('caches' in window) {
//     caches.open('my-site-cache-v1').then(function(cache) {
//         cache.addAll([
//             '/',
//             '/advanced.js',
//             '/index.html'
//         ]).then(function() {
//             console.log('Assets added to cache');
//         }).catch(function(error) {
//             console.error('Failed to add assets to cache:', error);
//         });
//     });
// }

// // Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }

    // create cookies
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// // Function to get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// // Function to check if a cookie exists
function checkCookie() {
    let user = getCookie("username");
    console.log(user)
    if (user) {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

// // Example usage
setCookie("testCookie", "Hello World", 7);
// console.log(getCookie("testCookie"));
// checkCookie();





// // Using the Geolocation API to get the user's current position
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {
//     console.log("Latitude: " + position.coords.latitude + 
//     ", Longitude: " + position.coords.longitude);
// }

// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             console.log("User denied the request for Geolocation.");
//             break;
//         case error.POSITION_UNAVAILABLE:
//             console.log("Location information is unavailable.");
//             break;
//         case error.TIMEOUT:
//             console.log("The request to get user location timed out.");
//             break;
//         case error.UNKNOWN_ERROR:
//             console.log("An unknown error occurred.");
//             break;
//     }
// }

// // Call getLocation function to get the current position
// getLocation();

// function accessCamera() {
//     // Check if the browser supports the getUserMedia API
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         // Request access to the camera
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(function(stream) {
//                 // Stream the video to a video element
//                 var video = document.createElement('video');
//                 video.srcObject = stream;
//                 video.play();
//                 // Optionally, append the video element to the DOM to display the video
//                 document.body.appendChild(video);
//             })
//             .catch(function(error) {
//                 console.error("Error accessing the camera:", error);
//             });
//     } else {
//         console.log("getUserMedia not supported by this browser.");
//     }
// }

// // // Call accessCamera function to access the camera
// accessCamera();


function initializeCanvas() {
    // Create a canvas element
    var canvas = document.createElement('canvas');
    // Set canvas width and height
    canvas.width = 400;
    canvas.height = 400;
    // Append canvas to the body of the document
    document.body.appendChild(canvas);
    // Get the drawing context of the canvas
    var context = canvas.getContext('2d');
    // Set some properties for the drawing
    context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(88, 69);
context.lineTo(89, 70);
context.stroke();
context.lineTo(91, 73);
context.stroke();
context.lineTo(94, 77);
context.stroke();
context.lineTo(100, 83);
context.stroke();
context.lineTo(107, 90);
context.stroke();
context.lineTo(115, 99);
context.stroke();
context.lineTo(122, 106);
context.stroke();
context.lineTo(133, 115);
context.stroke();
context.lineTo(141, 124);
context.stroke();
context.lineTo(151, 132);
context.stroke();
context.lineTo(159, 139);
context.stroke();
context.lineTo(166, 144);
context.stroke();
context.lineTo(173, 150);
context.stroke();
context.lineTo(179, 154);
context.stroke();
context.lineTo(183, 157);
context.stroke();
context.lineTo(187, 160);
context.stroke();
context.lineTo(190, 161);
context.stroke();
context.lineTo(192, 163);
context.stroke();
context.lineTo(194, 164);
context.stroke();
context.lineTo(195, 165);
context.stroke();
context.lineTo(198, 167);
context.stroke();
context.lineTo(200, 168);
context.stroke();
context.lineTo(203, 171);
context.stroke();
context.lineTo(208, 175);
context.stroke();
context.lineTo(213, 179);
context.stroke();
context.lineTo(220, 184);
context.stroke();
context.lineTo(229, 190);
context.stroke();
context.lineTo(239, 197);
context.stroke();
context.lineTo(251, 204);
context.stroke();
context.lineTo(263, 209);
context.stroke();
context.lineTo(275, 214);
context.stroke();
context.lineTo(285, 216);
context.stroke();
context.lineTo(294, 216);
context.stroke();
context.lineTo(305, 217);
context.stroke();
context.lineTo(313, 217);
context.stroke();
context.lineTo(320, 216);
context.stroke();
context.lineTo(325, 214);
context.stroke();
context.lineTo(328, 211);
context.stroke();
context.lineTo(330, 208);
context.stroke();
context.lineTo(330, 206);
context.stroke();
context.lineTo(331, 203);
context.stroke();
context.lineTo(331, 199);
context.stroke();
context.lineTo(331, 195);
context.stroke();
context.lineTo(331, 191);
context.stroke();
context.lineTo(331, 186);
context.stroke();
context.lineTo(330, 178);
context.stroke();
context.lineTo(327, 172);
context.stroke();
context.lineTo(327, 172);
context.stroke();
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(242, 125);
context.lineTo(241, 127);
context.stroke();
context.lineTo(240, 128);
context.stroke();
context.lineTo(238, 131);
context.stroke();
context.lineTo(236, 133);
context.stroke();
context.lineTo(233, 137);
context.stroke();
context.lineTo(231, 142);
context.stroke();
context.lineTo(229, 148);
context.stroke();
context.lineTo(227, 154);
context.stroke();
context.lineTo(223, 161);
context.stroke();
context.lineTo(220, 169);
context.stroke();
context.lineTo(217, 176);
context.stroke();
context.lineTo(214, 183);
context.stroke();
context.lineTo(211, 190);
context.stroke();
context.lineTo(208, 196);
context.stroke();
context.lineTo(205, 202);
context.stroke();
context.lineTo(203, 207);
context.stroke();
context.lineTo(200, 212);
context.stroke();
context.lineTo(198, 217);
context.stroke();
context.lineTo(197, 221);
context.stroke();
context.lineTo(195, 223);
context.stroke();
context.lineTo(193, 226);
context.stroke();
context.lineTo(192, 227);
context.stroke();
context.lineTo(192, 228);
context.stroke();
context.lineTo(191, 228);
context.stroke();
context.lineTo(191, 228);
context.stroke();

}

// // Call initializeCanvas function to setup and display the canvas
initializeCanvas();

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }

// if (window.Worker) {
//     const myWorker = new Worker('worker.js');

//     myWorker.onmessage = function(e) {
//         console.log('Message received from worker', e.data);
//     };

//     myWorker.postMessage('Hello');
// }

// function sendNotification(message) {
//     // Check if the browser supports notifications
//     if (!("Notification" in window)) {
//         console.log("This browser does not support desktop notification");
//     }
//     // Check whether notification permissions have already been granted
//     else if (Notification.permission === "granted") {
//         // If it's okay let's send a notification
//         var notification = new Notification(message, {
//             image:
//         });
//     }
//     // Otherwise, we need to ask the user for permission
//     else if (Notification.permission !== "denied") {
//         Notification.requestPermission().then(function (permission) {
//             // If the user accepts, let's send a notification
//             if (permission === "granted") {
//                 var notification = new Notification(message);
//             }
//         });
//     }
// }

// // Example usage:
// sendNotification("Hello! This is a notification.");

// // Simple WebRTC example
// navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//   .then(stream => {
//     const video = document.createElement('video');
//     video.srcObject = stream;
//     video.autoplay = true;
//     document.body.appendChild(video);
//   })
//   .catch(err => {
//     console.error('Error accessing media devices.', err);
//   });