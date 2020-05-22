// percentage to represent completion.
const MAX_PERCENT = 100;

let userid;

// put data into firebase
var database = firebase.database();

// retrive data F
var leadsRef = database.ref('UsersId');
var userCounts = {};

// sort data by high scores
leadsRef.on('child_added', function (childSnapshot) {
    const childData = childSnapshot.val();
    var racedata = childData.tpRaceTime;
    var jogger = childData.joggerScore;
    var cough = childData.coughcatcherScore;
    var dogfight = childData.dogfightScore;
    var namedata = childData.userName;

    if (childData.localId != null) {
        userscore += jogger + cough + dogfight + racedata;
        document.getElementById('user').innerHTML = "Hi!" + namedata;
        document.createElement('ul').innerHTML = "Your score: " + jogger + "<span>" + cough + "<span>"  + dogfight + "<span>" + racedata;

    } else {
        // No user is signed in.
    }

    });