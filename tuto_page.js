var firebaseConfig = {
      apiKey: "AIzaSyA0OIRRli7GNeP-CBTbXD_L8XmvEhdmYPo",
      authDomain: "prac-494ae.firebaseapp.com",
      databaseURL: "https://prac-494ae-default-rtdb.firebaseio.com",
      projectId: "prac-494ae",
      storageBucket: "prac-494ae.appspot.com",
      messagingSenderId: "1092979843681",
      appId: "1:1092979843681:web:5400061beb1ad52de88020"
    };
    
   firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
   function send()
   {
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value="";

   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
