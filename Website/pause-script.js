var frequencyRadios = document.querySelectorAll('[name="dbfield50"]');

var frequencyRadiosArray = Array.from(frequencyRadios);

var openPauseElement = frequencyRadiosArray[frequencyRadiosArray.length -1];
var closePauseElement = frequencyRadiosArray.slice(0, -1);

var pauseElement = document.querySelector('.js-pause-container');

frequencyRadios.forEach(function (radio, index) {
  radio.addEventListener('change', function() {
    if (frequencyRadios[index] == openPauseElement) {
      pauseElement.setAttribute('class', 'row p-b-32 js-pause-container');
    } else {
      pauseElement.setAttribute('class', 'row p-b-32 js-pause-container hide');
    }
  }
}