var firebaseConfig = {
      apiKey: "AIzaSyAOFMMazvJLkYdirInX3bGx2-utTSLFtO4",
      authDomain: "lwitter-e5134.firebaseapp.com",
      databaseURL: "https://lwitter-e5134-default-rtdb.firebaseio.com",
      projectId: "lwitter-e5134",
      storageBucket: "lwitter-e5134.appspot.com",
      messagingSenderId: "995608401515",
      appId: "1:995608401515:web:4831e55938a2637d9d032e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//YOUR FIREBASE LINKS
user_name=localStorage.getItem("Username");
room_name=localStorage.getItem("Room-Name");
//sel_r_name=localStorage.getItem("selected_room_name");

//document.getElementById("room_name").innerHTML="Welcome In Room "+room_name+"!";

function Send(){
      msg=document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
//End code
      } });  }); }
getData();

function BackToRoom(){
      window.location="kwitter_room.html";
}
