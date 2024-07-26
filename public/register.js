"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA6nx5fzCrJIpiiSD6TKRSAAnScDD1yqEM",
    authDomain: "python-assignmnent.firebaseapp.com",
    projectId: "python-assignmnent",
    storageBucket: "python-assignmnent.appspot.com",
    messagingSenderId: "558421886844",
    appId: "1:558421886844:web:eddd220b9b0608665d46f9",
    measurementId: "G-YRBVXF7KXS"
};


window.addEventListener("load", function () {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    document.getElementById("signup-btn").addEventListener("click", function () {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log("User has been created");

                user.getIdToken().then((token) => {
                    document.cookie = "token=" + token + ";path=/;SameSite=Strict";
                    window.location = "/";
                });
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    });
});
