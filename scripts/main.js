var progressBar = document.querySelector('.clock-progress-bar');
var display = document.querySelector('.clock-display');
var clock = document.querySelector('clock');

let mouseIsOver = false;

display.addEventListener("mouseover", mouseEnter);
display.addEventListener("mouseout", mouseLeave);

function mouseEnter() {
  mouseIsOver = true;
}

function mouseLeave() {
  mouseIsOver = false;
}

function hexClock() {
    var time = new Date();
    let hours = (time.getHours() % 12);
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let hexColorStr = '#' + hours.toString(16) + minutes.toString(16) + seconds.toString(16);
    let displayStr = hours + ' : ' + minutes + ' : ' + seconds;


    if(mouseIsOver) {
      // show the hex code
      
      display.textContent = hexColorStr;

    } else {
      // show the regular time
      
      display.textContent = displayStr;
    }

   

    
    document.body.style.backgroundColor = hexColorStr;
    // console.log(hours + ":" + minutes + ":" + seconds);
    // console.log(seconds/60);
    
    progressBar.style.width = `${seconds / 60 * 14}rem`;
    
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