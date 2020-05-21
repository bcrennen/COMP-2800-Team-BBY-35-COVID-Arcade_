
// put data into firebase
var database = firebase.database();

// retrive data F
var leadsRef = database.ref('UsersId');
var userCounts = {};
var numbers = ["1st", "2nd", "3rd", "4th", "5th" , "6th" , "7th" , "8th"];


// sort data by high scores
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


        // 
        if (sortable.length >= 1) {
            var firstvalue = sortable[0];
            var secondvalue = sortable[1];
            var thirdvalue = sortable[2];
            var fourthvalue = sortable[3];
            var fivththvalue = sortable[4];
            var sixththvalue = sortable[5];
            var sevenththvalue = sortable[6];
            var eighthvalue = sortable[7];


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

            var name_value6 = sixththvalue[Object.keys(sixththvalue)[0]];
            var score_value6 = sixththvalue[Object.keys(sixththvalue)[1]];

            var name_value7 = sevenththvalue[Object.keys(sevenththvalue)[0]];
            var score_value7 = sevenththvalue[Object.keys(sevenththvalue)[1]];

            var name_value8 = eighthvalue[Object.keys(eighthvalue)[0]];
            var score_value8 = eighthvalue[Object.keys(eighthvalue)[1]];

            let tr1 = document.getElementById('one');
            tr1.innerHTML = "<td>" + numbers[0] + "<td>" + name_value1 + "<td>" + score_value1;

            let tr2 = document.getElementById('two');
            tr2.innerHTML = "<td>" +  numbers[1] + "<td>" + name_value2 + "<td>" + score_value2;

            let tr3 = document.getElementById('three');
            tr3.innerHTML = "<td>" +  numbers[2] + "<td>" + name_value3 + "<td>" + score_value3;

            let tr4 = document.getElementById('four');
            tr4.innerHTML = "<td>" +  numbers[3] + "<td>" + name_value4 + "<td>" + score_value4;

            let tr5 = document.getElementById('five');
            tr5.innerHTML = "<td>" +  numbers[4] + "<td>" + name_value5 + "<td>" + score_value5;

            let tr6 = document.getElementById('six');
            tr6.innerHTML = "<td>" +  numbers[5] + "<td>" + name_value6 + "<td>" + score_value6;

            let tr7 = document.getElementById('seven');
            tr7.innerHTML = "<td>" +  numbers[6] + "<td>" + name_value7 + "<td>" + score_value7;

            let tr8 = document.getElementById('eight');
            tr8.innerHTML = "<td>" +  numbers[7] + "<td>" + name_value8 + "<td>" + score_value8;
        }

    }
});


(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));