// listen for a keypress; if we press the right key, then find the matching audio file and play it. The script shouldn't do anything

(() => {
  console.log('drumkit file loaded');

  //removes the highlight form each element after a keypress
  function removeHighlight(e) {
    console.log(e);
  // if this isn't the transform transition, then quit
    if (e.propertyName !== 'transform') {
      return;
    } else { //it IS the transform transition! do stuff!
      e.target.classList.remove('playing'); //takes the highlight back off
    }
  }

  // this should fire every time a key is pushed; do something interesting inside this function
  function playSound(e) {
    //debugger;
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // add a highlight to the element on the screen (the keyboard pressed)
    key.classList.add('playing');
    //if there is no audio (! = does not have), then return. Removes the audio null for any key pressed that has no audio file
    if (!audio) { return; }
    //rewind any audio files b4 playing
    audio.currentTime = 0;
    audio.play();
    //debugger;
  }
  // tell the browser to listen for a keypress event
  window.addEventListener('keydown', playSound);


  // loop through all the keys and take the highlight back off when the transition is done
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
})();
