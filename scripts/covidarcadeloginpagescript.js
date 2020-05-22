
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;
    // window.location.href = "main.html";

    // getting user profile 
    if (user != null) {
      var email_id = user.email;
      var uid_id = user.uid;
      document.getElementById("user_para").innerHTML = email_id;
      console.log(uid_id);

      var firebaseRef = database.ref('UsersId/' + uid_id);
      var joggerScore = 0;
      var dogfightScore = 0;
      var tfScore = 0;
      var tpRaceTime = 0;
      var coughcatcherScore = 0;
      var blitzmodeScore = 0;
      console.log(joggerScore);

      firebaseRef.on('child_added', function (childSnapshot) {
        const childData = childSnapshot.val();
        joggerScore = childData.joggerScore;
        dogfightScore = childData.dogfightScore;
        tfScore = childData.tfScore;
        tpRaceTime = childData.tpRaceTime;
        coughcatcherScore = childData.coughcatcherScore;
        blitzmodeScore = childData.blitzmodeScore;

        firebaseRef.set({
          userName: email_id,
          joggerScore: user.joggerScore,
          dogfightScore: user.dogfightScore,
          tfScore: user.tfScore,
          tpRaceTime: user.tpRaceTime,
          coughcatcherScore: user.coughcatcherScore,
          blitzmodeScore: user.blitzmodeScore,
        });
      });

    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  // window.location.href = "main.html";

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);
    // ...
  });
}

function logout() {
  firebase.auth().signOut();
  window.location.href = "index.html";
}

function signup() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error: " + errorMessage);

    // ...
  });
}

function backHome() {
  window.location.href = "index.html";
}

