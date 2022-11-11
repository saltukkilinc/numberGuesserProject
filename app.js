const myFormDOM = document.querySelector('#myForm'),
  myInputDOM = document.querySelector('#guessedNumber'),
  minNumberDOM = document.querySelector('#minNumber'),
  maxNumberDOM = document.querySelector('#maxNumber'),
  guessBtnDOM = document.querySelector('#guessBtn'),
  resultDOM = document.querySelector('#resultNumber');

let minNumber = 1,
  maxNumber = 9,
  correctNumber = randomNumber ();
  guessedNumber,
  guess = 3;

minNumberDOM.innerHTML = minNumber;
maxNumberDOM.innerHTML = maxNumber;
 console.log (correctNumber)



// adding submit event to form
myFormDOM.addEventListener('submit', numberGuesserFunction);

// adding click event to reload the page
guessBtnDOM.addEventListener('click', reloadFunction);

function numberGuesserFunction (e) {
  // if button is Guess, event will work
 if(e.submitter.innerHTML == 'Guess'){
  e.preventDefault();
  guessedNumber = myInputDOM.value;
  
  if(guessedNumber < minNumber || guessedNumber > maxNumber) {
    resultDOM.innerHTML = `Please enter a number between ${minNumber} and ${maxNumber}`; 
  } else {
    if (guessedNumber != correctNumber) {
      guess -= 1;
      if (guess > 0) {
        fail ();
        setTimeout(endfail, 1000); 
      } else {
        resultDOM.innerHTML = `You couldn't know. The correct answer was ${correctNumber} `;
        myInputDOM.disabled = true;
        guessBtnDOM.innerHTML = 'try again';
      }  
    } else {
      success();
      setTimeout(endSuccess, 1000);
    }
  }
  myInputDOM.value = '';
 }  
}
  
function fail () {
  myInputDOM.classList.add('btn','btn-outline-danger');
  resultDOM.innerHTML = `${guess} guess remain`;
  resultDOM.style.color = 'red';
  // myInputDOM.disabled = true;
}

function endfail () {
  myInputDOM.classList.remove('btn','btn-outline-danger');
  resultDOM.style.color = '#212529';
  // myInputDOM.disabled = false;
}

function success () {
  myInputDOM.classList.add('btn','btn-outline-success');
  resultDOM.innerHTML = `That was correct. Congragulations!`;
  resultDOM.style.color = 'green';
  guessBtnDOM.innerHTML = 'try again';
  myInputDOM.disabled = true;
}

function endSuccess () {
  myInputDOM.classList.remove('btn','btn-outline-success');  
}


// random number producer function
function randomNumber () {
  return Math.floor(Math.random() * (maxNumber - minNumber +1)) + 1;
}


// relaod page function
function reloadFunction(e) {
  if(e.target.innerHTML == 'try again'){
    window.location.reload();
  } 
}











