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
    workDay[buttonIndex].description = textContent;

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
        pullLocal = [
            {
                description: '',
                answer: '9',
            },
            {
                description: '',
                answer: '10',
            },
            {
                description: '',
                answer: '11',
            },
            {
                description: '',
                answer: '12',
            },
            {
                description: '',
                answer: '1',
            },
            {
                description: '',
                answer: '2',
            },
            {
                description: '',
                answer: '3',
            },
            {
                description: '',
                answer: '4',
            },
            {
                description: '',
                answer: '5',
            },
        ];
    } else {
        pullLocal = JSON.parse(pullLocal)
    }
    return pullLocal
}

function handleFormSubmit(event) {
    // Prevent the default behavior
    event.preventDefault();
}
$('.container').children().find('#textarea').each((i, e) => $(e).val(workDay[i].description))
//    textContent = $(this).siblings(".text").val("");