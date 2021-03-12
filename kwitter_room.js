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


//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("Username");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function AddRoom(){
      room_name=document.getElementById("add_room").value;
      localStorage.setItem("Room-Name", room_name);

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot){
            childKey  = childSnapshot.key;
            Room_names = childKey;
      //Start code
      console.log("Room Name- "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(r_name){
      console.log(r_name);
      localStorage.setItem("Room-Name",r_name);
      window.location="kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Room-Name");
      localStorage.removeItem("selected-room-name");
      window.location="index.html";
}