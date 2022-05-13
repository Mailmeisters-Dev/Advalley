<script type="text/javascript">
      var initialFrequencyValue = document.getElementById('js-initial-frequency-radio').value;
</script>

<!-- Open / close pause element and reset checked radios -->
<script type="text/javascript">
      // Retrieve frequency and pause radios
      var frequencyRadios = document.querySelectorAll('input[name="dbfield178"]');
      var pauseRadios = document.querySelectorAll('input[name="dbfield177"]');

      // Retrieve button to change innerText later
      var submitButton = document.querySelector('.submit__button');

      // Create array from frequencyRadios so we can get the specific, needed radio for functions
      var frequencyRadiosArray = Array.from(frequencyRadios);

      // This is 'Geen' radio
      var openPauseElement = frequencyRadiosArray[frequencyRadiosArray.length -1];

      // All radio's but 'Geen'
      var closePauseElement = frequencyRadiosArray.slice(0, -1);

      // The pause element to show or hide
      var pauseElement = document.querySelector('.js-pause-container');

      // Called from clicking frequency radios
      function hideShowPauseElement(action) {
        if (action === 'hide') {
          pauseElement.setAttribute('class', 'row p-t-32 js-pause-container hide');
        } else {
          pauseElement.setAttribute('class', 'row p-t-32 js-pause-container');
        }
      }

      function resetPauseRadios() {
        pauseRadios.forEach(function (radio) {
          radio.checked = false;
        });
      };

      function resetFrequencyRadios() {
        frequencyRadios.forEach(function (radio) {
          radio.checked = false;
        });
      }

      // We created a dummy, hidden checkbox with the Initial frequency which is checked when customer selects a temporary pause. When customer then selects a frequency radio we uncheck this
      // Retrieve the hidden radio
      var hiddenInitialFrequencyRadio = frequencyRadiosArray[0];

      function checkInitialFrequency() {
        hiddenInitialFrequencyRadio.checked = true;
      }

      function uncheckInitialFrequency() {
        hiddenInitialFrequencyRadio.checked = false;
      }

      // If customer clicks 'Geen' radio: set status to 'Unsubscribed' otherwise set to 'Subscribed'
      var hiddenStatusValue = document.getElementById('js-initial-status-hidden');

      function setStatusUnsubscribed() {
        hiddenStatusValue.value = 'Unsubscribed';
      }

      function setStatusSubscribed() {
        hiddenStatusValue.value = 'Subscribed';
      }

      // Call function to hide or show pause element based on which radio is clicked
      frequencyRadios.forEach(function (radio, index) {
        radio.addEventListener('click', function() {
          // Check if customer clicks frequency radio 'Geen' or a different one
          if (frequencyRadios[index] == openPauseElement) {
            hideShowPauseElement('show');
            submitButton.value = 'Afmelden voor nieuwsbrief';
            setStatusUnsubscribed();
          } else {
            hideShowPauseElement('hide');
            submitButton.value = 'Voorkeuren wijzigen';
            setStatusSubscribed();
          }
          // If customer clicks any frequency radio: uncheck all pause radios
          resetPauseRadios();
          // If customer clicks any frequency radio: uncheck the Initial frequency radio
          uncheckInitialFrequency(); 
        })
      });

      // If customer clicks any pause radio: change button text, uncheck all frequency radios and check the Initital frequency radio
      pauseRadios.forEach(function (radio) {
        radio.addEventListener('click', function() {
          submitButton.value = 'Tijdelijke pauze bevestigen';
          resetFrequencyRadios();
          checkInitialFrequency();
          setStatusSubscribed();
        });
      });

      // If customer clicks reset pause text under the radios: change button text, set frequency to 'Dagelijks', uncheck all pause radios and uncheck the Initial frequency radio
      var resetPause = document.querySelector('.js-pause-reset');
      resetPause.addEventListener('click', function() {
        submitButton.value = 'Voorkeuren wijzigen';
        frequencyRadiosArray[1].checked = true;
        hideShowPauseElement('hide');
        resetPauseRadios();
        uncheckInitialFrequency();
        setStatusSubscribed();
      });
      
</script>