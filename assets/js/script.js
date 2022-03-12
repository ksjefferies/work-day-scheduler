// var todayDate = moment().format('dddd, MMM Do YYYY');
// $("#currentDay").html(todayDate);

// var timeNow = moment().hour();

var textContent = $("textarea");
var hour = $('#time');


var workDay = []

var description = textContent


$(document).ready(function () {
    $("button").on("click", function () {
        workDay = textContent.val();
        console.log(workDay)     
})});
$()

// Retrience stored calendar data from local storage
function getData() {

    // var highList = localStorage.getItem('highScoreList')
    // if (highList === null) {
    //     highList = []
    // } else {
    //     highList = JSON.parse(highList)
    // }
    // return highList
}

// pass new calendar data to local storage
function setData(newAppt) {

    // var highList = getHighScore()

    // highList.push({
    //     highScore: score,
    // });

    // highList = highList.sort((a, b) => (a.highScore < b.highScore ? 1 : -1))
    // if (highList.length > 3) {
    //     highList.pop();
    // }

    // var stringInfo = JSON.stringify(highList);

    // localStorage.setItem('highScoreList', stringInfo)
}


function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();
}



