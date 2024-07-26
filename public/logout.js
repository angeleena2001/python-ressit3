"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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
    document.getElementById("logout-btn").addEventListener(("click"), function () {
        signOut(auth)
            .then((output) => {
                document.cookie = "token=;path=/;SameSite=Strict";
                window.location = "/";
            })
    });
});