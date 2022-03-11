let dcDay = document.querySelector('.dcDay')
let dcMonth = document.querySelector('.dcMonth')
let dcDate = document.querySelector('.dcDate')
let dcYear = document.querySelector('.dcYear')
let dcHour = document.querySelector('.dcHour')
let dcMinute = document.querySelector('.dcMinute')
let dcSecond = document.querySelector('.dcSecond')
let dcIndicator = document.querySelector('.dcIndicator')
setInterval(function() {
    let date = new Date
    let setDay = date.getDay()
    let setMonth = date.getMonth()
    let setDate = date.getDate()
        dcDate.textContent = setDate
    let setYear = date.getFullYear()
        dcYear.textContent = setYear
    let setHour = date.getHours()
        dcHour.textContent = setHour
    let setMinute = date.getMinutes()
        dcMinute.textContent = setMinute
    let setSecond = date.getSeconds()
        dcSecond.textContent = setSecond
    switch(date.getDay()) {
        case 1:
            dcDay.textContent = 'Monday'
            break;
        case 2:
            dcDay.textContent = 'Tuesday'
            break;
        case 3:
            dcDay.textContent = 'Wednesday'
            break;
        case 4:
            dcDay.textContent = 'Thursday'
            break;
        case 5:
            dcDay.textContent = 'Friday'
            break;
        case 6:
            dcDay.textContent = 'Saturday'
            break;
        case 7:
            dcDay.textContent = 'Sunday'
            break;
    }
    switch(date.getMonth()) {
        case 0:
            dcMonth.textContent = 'January'
            break;
        case 1:
            dcMonth.textContent = 'February'
            break;
        case 2:
            dcMonth.textContent = 'March'
            break;
        case 3:
            dcMonth.textContent = 'April'
            break;
        case 4:
            dcMonth.textContent = 'May'
            break;
        case 5:
            dcMonth.textContent = 'June'
            break;
        case 6:
            dcMinute.textContent = 'July'
            break;
        case 7:
            dcMonth.textContent = 'August'
            break;
        case 8:
            dcMonth.textContent = 'September'
            break;
        case 9:
            dcMonth.textContent = 'October'
            break;
        case 10:
            dcMonth.textContent = 'November'
            break;
        case 11:
            dcMonth.textContent = 'December'
    }
    if(setHour >= 12) {
        setHour = setHour - 12
        dcHour.textContent = '0'+setHour
        dcIndicator.textContent = 'PM'

    }
    if(setMinute <= 9) {
        setMinute = '0'+setMinute
        dcMinute.textContent = setMinute
    }
    if(setSecond <= 9) {
        setSecond = '0'+setSecond
        dcSecond.textContent = setSecond
    }
}, 5)