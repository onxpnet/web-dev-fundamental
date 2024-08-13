


// for (let i = 0; i <= 10; i++) {
//     person.sayHello("ini looping ke "+ i)
// }


// const greetingMessage = [
//     "Selamat pagi",
//     "Selamat malam",
//     "Selamat makan"
// ]

// greetingMessage.forEach(data => {
//     person.sayHello(data)
// });


// switch (color) {
//     case "putih":
//         console.log("bunga putih")
//         break
//     case "merah":
//         console.log("bunga merah")
//         break
//     default :
//         console.log("bunga tidak ditemukan")
// }


const body = document.body;

// const headerText = document.createElement('h1')
// headerText.textContent = "ini h1"
// headerText.setAttribute("style","color:red")

// body.append(headerText)

// const text = document.createElement('a')
// text.innerHTML = "<button>submit</button>"
// text.setAttribute('href', "https://google.com")
// text.setAttribute('id', "1")
// text.classList.add('color-red')
// text.setAttribute('style', 'font-size: 20px;')

// body.append(text)



body.addEventListener("animalfound", (value) => console.log(value.detail));


const button = document.getElementById("button")
button.addEventListener('click', () => {
    body.dispatchEvent(new CustomEvent("animalfound", {
        detail: {
            animal: "kucing"
        }
    }));
})

function callPerson(name, greetingMessage) {
    let person = {
        name: name,
        sayHello: function (greetingMessage) {
            return `Hai ${this.name}, ${greetingMessage}`
        }
    }

    alert(person.sayHello(greetingMessage))
}











function fetchData() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => response.json())
        .then(data => {
            console.log(data.abilities)
        })
        .catch(error => console.error('Error fetching data:', error));
}

// fetchData()


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

// getLocation()


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

// // Call accessCamera function to access the camera
// accessCamera();



// function sendNotification(message) {
//     // Check if the browser supports notifications
//     if (!("Notification" in window)) {
//         console.log("This browser does not support desktop notification");
//     }
//     // Check whether notification permissions have already been granted
//     else if (Notification.permission === "granted") {
//         // If it's okay let's send a notification
//         var notification = new Notification(message);
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
// sendNotification("Hello! This is a notification1.");
// sendNotification("Hello! This is a notification2.");
// sendNotification("Hello! This is a notification3.");
// sendNotification("Hello! This is a notification4.");