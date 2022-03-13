// Declare global variables 
var timeNow = moment().format('LT');
var todayDate = moment().format('LL');
var hour = $('#time');
var jumbo = $('.jumbotron');
var buttonIndex = 0;
var workDay = getLocal();

// Display current date and time to header
$('h1').text(todayDate);
$('h2').text(timeNow);

// Activates planner and updates with local storage
$('.container').on('click', '.saveBtn', function () {
    getLocal();
    buttonIndex = $(this).index('.saveBtn')

    var textContent = $(this).siblings('.text').val();
    workDay[buttonIndex] = textContent;

    pushLocal()
})

// Pass new calendar data to local storage
function pushLocal() {
    textString = JSON.stringify(workDay);
    localStorage.setItem("appointment", textString);
}

// Retrieve stored calendar data from local storage
function getLocal() {
    var pullLocal = localStorage.getItem("appointment");
    if (pullLocal === null) {
        pullLocal = Array(9).fill('');
    } else {
        pullLocal = JSON.parse(pullLocal)
    }
    return pullLocal
}

// Time-block attributes
$('.container').children().each((i, e) => {
    var timeNow = moment().format('H');
    if ((i + 9) < timeNow) {
        $(e).css("background-color", "#f98e8e")
    } else if ((i + 9) > timeNow) {
        $(e).css("background-color", "#85b3ed")
    }
})

$('.container').children().find('#textarea').each((i, e) => $(e).val(workDay[i]))