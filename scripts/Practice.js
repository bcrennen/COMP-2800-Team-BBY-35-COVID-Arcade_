
// put data into firebase
var database = firebase.database();

// function addLead() {
//     var clientName = document.getElementById('name').value;
//     var clientScore = document.getElementById('score').value;

//     var newClientKey = database.ref().child('leads').push().key;
//     database.ref('leads/' + newClientKey + '/userName').set(clientName);
//     database.ref('leads/' + newClientKey + '/joggerScore').set(clientScore);
// }


// retrive data F
var leadsRef = database.ref('UsersId');
var userCounts = {};
var numbers = ["1st", "2nd", "3rd", "4th", "5th"];

leadsRef.on('child_added', function (childSnapshot) {
    const childData = childSnapshot.val();
    var scoredata = childData.joggerScore;
    var namedata = childData.userName;
    userCounts[namedata] = scoredata;
    if (childData.joggerScore > 0) {

        var sortable = [];
        for (var datas in userCounts) {
            sortable.push([datas, userCounts[datas]]);
        }
        sortable.sort(function (a, b) {
            return b[1] - a[1];
        });
        var objSorted = {}
        sortable.forEach(function (item) {
            objSorted[item[0]] = item[1]
        })

        // arraylist.length > how many times array run

        if (sortable.length >= 7) {
            var firstvalue = sortable[0];
            var secondvalue = sortable[1];
            var thirdvalue = sortable[2];
            var fourthvalue = sortable[3];
            var fivththvalue = sortable[4];


            var name_value1 = firstvalue[Object.keys(firstvalue)[0]];
            var score_value1 = firstvalue[Object.keys(firstvalue)[1]];

            var name_value2 = secondvalue[Object.keys(secondvalue)[0]];
            var score_value2 = secondvalue[Object.keys(secondvalue)[1]];

            var name_value3 = thirdvalue[Object.keys(thirdvalue)[0]];
            var score_value3 = thirdvalue[Object.keys(thirdvalue)[1]];

            var name_value4 = fourthvalue[Object.keys(fourthvalue)[0]];
            var score_value4 = fourthvalue[Object.keys(fourthvalue)[1]];

            var name_value5 = fivththvalue[Object.keys(fivththvalue)[0]];
            var score_value5 = fivththvalue[Object.keys(fivththvalue)[1]];

            let tr1 = document.getElementById('one');
            tr1.innerHTML = numbers[0] + "<td>" + name_value1 + "<td>" + score_value1;

            let tr2 = document.getElementById('two');
            tr2.innerHTML = numbers[1] + "<td>" + name_value2 + "<td>" + score_value2;

            let tr3 = document.getElementById('three');
            tr3.innerHTML = numbers[2] + "<td>" + name_value3 + "<td>" + score_value3;

            let tr4 = document.getElementById('four');
            tr4.innerHTML = numbers[3] + "<td>" + name_value4 + "<td>" + score_value4;

            let tr5 = document.getElementById('five');
            tr5.innerHTML = numbers[4] + "<td>" + name_value5 + "<td>" + score_value5;
        }

    }
});


function Copy() {
    var Url = document.getElementById("url");
    Url.innerHTML = window.location.href;
    console.log(Url.innerHTML)
    Url.select();
    document.execCommand("copy");
}
