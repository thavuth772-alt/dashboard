import { auth, onAuthStateChanged, signOut } from "./firebase-auth.js";
onAuthStateChanged(auth,user=>{
 if(!user){location.replace("login.html");return}
 const welcome=document.getElementById("welcomeTitle");
 if(welcome) welcome.textContent="Welcome, "+(user.displayName||user.email)+"!";
 const logout=document.getElementById("logoutBtn");
 if(logout) logout.onclick=async()=>{await signOut(auth);location.replace("login.html")};
});
