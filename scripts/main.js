var progressBar = document.querySelector('.clock-progress-bar');
var display = document.querySelector('.clock-display');
var clock = document.querySelector('clock');


function hexClock() {
    var time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var displayStr = hours + ' : ' + minutes + ' : ' + seconds;
    display.textContent = displayStr;

    var hexColorStr = '#' + hours + minutes + seconds;
    document.body.style.backgroundColor = hexColorStr;
    console.log(hours + ":" + minutes + ":" + seconds);
    console.log(seconds/60);
    progressBar.style.width = '{seconds / 60 * 14}rem'
}

hexClock();
setInterval(hexClock, 1000);


//if(isHovering) {
 //   seconds = ('0' + now.getSeconds()).slice(-2);
   // minutes = ('0' + now.getMinutes()).slice(-2);
    //hour = ('0' + now.getHours()).slice(-2);
//} else {
  //  secondsHex = ('0' + now.getSeconds(16)).slice(-2);
    //minutesHex = ('0' + now.getMinutes(16)).slice(-2);
    //hourHex = ('0' + now.getHours(16)).slice(-2);

   // progressBar.style.width = `{seconds / 60 * 14}rem`
    //targets the progress bar
// }
//function setBackground() {
 //   const color = ['#DF5D69', '#D99A5A', '#FF00FF', '#4FC3F7', '#29B6F6']
   // $clock.style.background = '${colors[index]}';
    //index === colors.length - 1 ? index = 0 : index++;
    //if(index === colors.length - 1) {
  //      index = 0;    
// } else {
//    index = index + 1
//} a one line if else statement
  //  }


console.log(new Date);