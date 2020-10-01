
// Set the date we're counting down to
var countDownDate = new Date("Dec 28, 2020 23:59:59")
 .getTime();

// Update the count down every 1 second
var x = setInterval(function() {
 
 // Get today's date and time
 var now = new Date().getTime();
 
 // Find the distance between now and the count down date
 var distance = countDownDate - now;
 
 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 *
  24));
 var hours = Math.floor((distance % (1000 * 60 * 60 *
  24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 *
  60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) /
  1000);
 
 // Display the result in the element with id="demo"
 document.getElementById("demo").innerHTML = days +
  "d " + hours + "h " +
  minutes + "m " + seconds + "s";
 
 // If the count down is finished, write some text 
 if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML =
   "EXPIRED";
 }
}, 1000);


//side nav
function openNav() {
 document.getElementById("mySidenav").style.width =
  "250px";
 document.getElementById("main").style.marginLeft =
  "250px";
}

function closeNav() {
 document.getElementById("mySidenav").style.width = "0";
 document.getElementById("main").style.marginLeft = "0";
}



/*FUNKTION FIR BUTTON 1 */
function aA() {
 if (document.getElementById("login_").style.display ==
  //login fenster kennt raus wann et net raus aus
  "none") {
  if (document.getElementById("button_1").innerHTML ==
   "logged in") {
   return logout();
  } else {
   document.getElementById("login_").style.display =
    "initial";
   document.getElementById("button_1").innerHTML =
    "return";
   /* Username an passwuerd löschen sech wann een raus an ran geht an failure message*/
   document.getElementById("username").value = "";
   document.getElementById("password").value = "";
   document.getElementById("failure").innerHTML = "";
  }
 } else {
  document.getElementById("login_").style.display =
   "none";
  document.getElementById("button_1").innerHTML =
   "Login";
 }
}
/*den close X ass dei funktion */
function bB() {
 document.getElementById("login_").style.display =
  "none";
 document.getElementById("button_1").innerHTML =
  "Login";
}
//WAAT geschitt wann een AGELOGGED ASSS     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var logged_in = false;
var logged_in_hengover = false;


function loggedIn() {
 if (logged_in == true || logged_in_hengover == true) {
  document.getElementById("logged_in_1").style.display =
   "initial";
  return crrnt();
 }
 if (logged_in == false && logged_in_hengover ==
  false) {
  
  document.getElementById("logged_in_1").style.display =
   "none";
  
 }
}

function crrnt() {
 document.getElementById("current").innerHTML =
  "Meng challenge ass eng ganz einfach challenge den padre yann waert den wächter sen an den maître fier sechen ze sen dass alles no plang leeft well ech jo bis am enn vun daer challenge net sur place disponibel waert sen deng challenge ass wkl ganz einfach du muss just eng nummer klären vun enger gaus ech well beweis an well ech esou fein sen well ech proof of insta 😉 et muss eng fein gaus sen ech mengen den el Hengo hat jo dei letzt deeg esou eng grande geule dann kucke ma wat geschitt.";
}





//funktion vun login
function login() {
 var username = document.getElementById("username")
  .value;
 var password = document.getElementById("password")
  .value;
 var failure = document.getElementById("failure");
 
 var button_1 = document.getElementById("button_1");
 
 var login = document.getElementById("login_");
 
 console.log(username + "/" + password);
 //dkboyzz login
 if (username == "Dkboyzzz" || username == "dkboyzzz") {
  
  if (password == "peperoninippel") {
   button_1.innerHTML = "logged in";
   button_1.style.backgroundColor =
    "rgba(0, 198,  27, 0.7)";
   login.style.display = "none";
   logged_in = true;
   console.log("login:" + logged_in);
   console.log("login_heng:" + logged_in_hengover);
   return loggedIn();
   
   
  } else {
   failure.innerHTML = "Wrong Username or Password";
   
  }
  
 }
 //Hengover login
 else if (username == "Hengover") {
  if (password == "petit") {
   button_1.innerHTML = "logged in";
   button_1.style.backgroundColor =
    "rgba(0, 198,  27, 0.7)";
   login.style.display = "none";
   logged_in_hengover = true;
   console.log("login_heng:" + logged_in_hengover);
   console.log("login:" + logged_in);
   return loggedIn();
  } else {
   failure.innerHTML =
    "Den Heng ass een klengen Spiller";
  }
  
 }
 //keen bekannten login
 else {
  failure.innerHTML =
   "Wrong Username or Password";
 }
 
}

//funktionen fir AUZELOGGEN
function logout() {
 if (document.getElementById("logout_").style.display ==
  "none") {
  document.getElementById("logout_").style.display =
   "initial";
 } else {
  document.getElementById("logout_").style.display =
   "none";
 }
}
//YES
function logoutYes() {
 document.getElementById("logout_").style.display =
  "none";
 document.getElementById("button_1").style
  .backgroundColor = "rgba(77, 77, 255, 0.7)";
 document.getElementById("button_1").innerHTML =
  "Login";
 logged_in_hengover = false;
 logged_in = false;
 console.log("login_heng:" + logged_in_hengover);
 console.log("login:" + logged_in);
 return loggedIn();
}
//NO
function logoutNo() {
 document.getElementById("logout_").style.display =
  "none";
}
//funktion cC
function cC() {
 document.getElementById("logout_").style.display =
  "none";
}

//FIR DEN VERSTOPPTEN TEXT
document.getElementById("current").innerHTML = "test";








