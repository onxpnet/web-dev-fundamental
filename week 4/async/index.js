// let getStatus = function() {
//     setTimeout(() => {
//         let status = "OK"
//         outputStatus(status)
//         return status
//     }, "1000"); //ms
// };


// function outputStatus(status){
//     console.log("getStatus", status)
// }

// getStatus()



// let getAnimalFromAPI = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let isSuccess = false
            
//             if (isSuccess) {
//                 resolve("berhasil")
//             }
//             reject("gagal : ada error di backend")
//         }, "1000");
//     }
// );


// getAnimalFromAPI.then((data) => {
//     console.log(data)
// }).catch((error) => {
//     console.log(error)
// })

// const asyncTimeout = (ms) => {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   };

// async function ambilDataUser() {
//         await asyncTimeout(1000);
//         return {
//             username: "onxp",
//             nomor: "236128273"
//         }
// }

// async function ambilTicket(username) {
//     await asyncTimeout(1000);
//     return {
//             user: username,
//             ticket: "AHGDUSJK"
//         }
// }

// async function startTicket() {
//     const dataUser = await ambilDataUser()
//     const dataTicket = await ambilTicket(dataUser.username)

//     return dataTicket
// }
  
// const start = startTicket().then(((data) => {
//     console.log(data)
// })).catch((error) => {
//     console.log(error)
// })


document.getElementById("loginForm").addEventListener("submit",async function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    debugger;

    const loggedData = await login(username, password)
    console.log(loggedData)

    const photo = await profilePicture(loggedData.token)
    console.log(photo)

    dataUser(function (dataUser) {
        console.log(dataUser)
    })
});

function login(username, password){
    debugger;
    console.log('login di process')
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('login selesai')
            resolve({
                    token: "AJSBDIU@12312",
                    username: username
            })
        }, 2000);
    })
}

function profilePicture(token){
    debugger;
    console.log('profilePicture di process')
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('profilePicture selesai')
            if (!token) {
                reject("perlu token")
            }
            resolve({
                    photo : "image.png"
            })
        }, 2000);
    })
}

function dataUser(callback){
    debugger;
    setTimeout(() => {
        const dataUser = {
            nama: "onxp",
            email: "onxp@gmail.com",
            alamat: "jakarta"
        }

        console.log("data")
        callback(callback)
    }, 2000);
}