const firebaseConfig = {
      apiKey: "AIzaSyBtASjuqNjPnuMdRTiCMsa37DxloOFwEFc",
      authDomain: "project-chatapp-58fe1.firebaseapp.com",
      databaseURL: "https://project-chatapp-58fe1-default-rtdb.firebaseio.com",
      projectId: "project-chatapp-58fe1",
      storageBucket: "project-chatapp-58fe1.appspot.com",
      messagingSenderId: "911654624286",
      appId: "1:911654624286:web:5a462159c6c6ab27b6620f"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
