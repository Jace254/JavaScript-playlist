var noon = 12;

var updateCurrentTime = function()
{
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var Meridian = 'AM';
    var time = document.getElementById("time").getElementsByTagName("span");

    if(hours > noon)
    {
        hours = hours - 12;
        Meridian = 'PM';
    }

    if(seconds < 10)
    {
        seconds = "0"+ seconds;
    }

    if(minutes < 10)
    {
        minutes = "0"+ minutes;
    }

    var currentTime = hours + ":" + minutes + ":" + seconds + " " + Meridian;
    time[0].innerHTML = currentTime;
};

setInterval(updateCurrentTime,1000)

