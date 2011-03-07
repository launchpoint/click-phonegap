var deviceIphone = "iphone";
var deviceIpod = "ipod";

//Initialize our user agent string to lower case.
var uagent = navigator.userAgent.toLowerCase();

//**************************
// Detects if the current device is an iPhone.
function DetectIphone()
{
   if (uagent.search(deviceIphone) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPod Touch.
function DetectIpod()
{
   if (uagent.search(deviceIpod) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPhone or iPod Touch.
function DetectRealMobileDevice()
{
    if (DetectIphone())
       return true;
    else if (DetectIpod())
       return true;
    else
       return false;
}


function watchAccel() {
  var x_sum = 0;
  var x_last = 0;
  var x_idle_count = 0;
  var win = function(a){
  	$('#status').val(x_sum);
  	if(Math.abs(a.x)<0.5)
  	{
  		x_idle_count++;
  		if(x_idle_count > 10)
  		{
  			x_idle_count = 0;
  			x_sum = 0;
  		}
  		return;
  	}
  	x_idle_count = 0;
  	if(a.x != x_last && ((x_last >= 0 && a.x < 0) || (x_last <= 0 && a.x > 0)) )
  	{
  		x_last = a.x;
  		x_sum += Math.abs(a.x);
  		if(x_sum > 5)
  		{
  			x_sum = 0;
  			window.location = './';
  		}
  	}
  };
  var fail = function(){};
  var opt = {};
  opt.frequency = 100;
  watchId = navigator.accelerometer.watchAcceleration(win, fail, opt);
}   
 
 
$(function() {
//	document.addEventListener("deviceready",watchAccel,false);
});