var firebaseConfig = {
    apiKey: "AIzaSyBwQIrRhoaXS18Qhy_L1BSHQb89DmwCGqI",
    authDomain: "ipltable2020-hluw.firebaseapp.com",
    databaseURL: "https://ipltable2020-hluw-default-rtdb.firebaseio.com",
    projectId: "ipltable2020-hluw",
    storageBucket: "ipltable2020-hluw.appspot.com",
    messagingSenderId: "724577578038",
    appId: "1:724577578038:web:b3a0210704082904bdfc97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //YOUR FIREBASE LINKS
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function send(){
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,like:0
  });
  document.getElementById("msg").value="";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}