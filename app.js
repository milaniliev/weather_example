Sugar.extend()
var weather = [
{
    time: Date.create("01/01/2016 7:00 AM"),
    temp: 54,
    icon: "sunny",
    place: "New York, NY"
},
{
    time: Date.create("01/02/2016 7:00 AM"),
    temp: 30,
    icon: "cloudy",
    place: "New York, NY"
},
{
    time: Date.create("01/03/2016 7:00 AM"),
    temp: 70,
    icon: "sunny",
    place: "New York, NY"
}]


var button = document.getElementById("hi_button")
var message = document.getElementById("message")

var now = new Date
message.textContent = now.format('{mm}/{dd}/{year} {Weekday}')

var say_hi = function(){
    var now = new Date
    message.textContent = now.format('{mm}/{dd}/{year} {Weekday}')
}


button.addEventListener("click", say_hi)