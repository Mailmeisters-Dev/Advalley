var dateCheckout = subprofile.Vertrekdatum;

var dateToday = new Date();
dateCheckout = new Date(dateCheckout + "T16:25:00");
  
var waitTimeInMilliSeconds = dateCheckout.getTime() - dateToday.getTime();
var waitTimeInSeconds = waitTimeInMilliSeconds / 1000;

return waitTimeInSeconds;