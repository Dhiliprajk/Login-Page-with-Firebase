import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCy1OTCWbV9E19_qKWIC_980QivAK48D_Y",
    authDomain: "login-2b712.firebaseapp.com",
    projectId: "login-2b712",
    storageBucket: "login-2b712.appspot.com",
    messagingSenderId: "536139132001",
    appId: "1:536139132001:web:4e5226f6238fac26068e20"
  };
const app = initializeApp(firebaseConfig);
document.getElementById("summit").addEventListener("click", () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
   
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
  let auth = getAuth();
  if (email == "" || !emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }
  if (password == "" || !passwordRegex.test(password)) {
    alert(
      "Please enter a valid password that contains at least one uppercase letter, one lowercase letter, one digit, and is at least 8 characters long."
    );
    return false;
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("sign in successful")
      window.location.href = "https://dhiliprajk.github.io/PORTFOLIO_Website/";
    })
    .catch((error) => {
      alert("This email already exist ")
    });
});
document.getElementById("login").addEventListener("click", () => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
  if (email == "" || !emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return false;
  }
  if (password == "" || !passwordRegex.test(password)) {
    alert(
      "Please enter a valid password that contains at least one uppercase letter, one lowercase letter, one digit and is at least 8 characters long."
    );
    return false;
  }
   let auth = getAuth();
   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       const user = userCredential.user;
       window.location.href = "https://dhiliprajk.github.io/PORTFOLIO_Website/";
     })
     .catch((error) => {
       alert("user not found or you enter a wrong password")
     });
});
