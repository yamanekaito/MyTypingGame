'use strict'
{
  let target = document.getElementById('target');
  let letterCount = document.getElementById('letterCount');
  let missCount = document.getElementById('missCount'); 
  let timer = document.getElementById('timer');

  let correctCount = 0;
  let incorrectCount = 0;
  let loc = 0;
  let isPlaying = false;
  let word;
  
  const words = ['apple','banana','fish','point'];


  window.addEventListener('click',() => {
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    word = words[Math.floor(Math.random() * words.length)];
    target.textContent = word;
  });

  window.addEventListener('keydown',e => {
    if (e.key === word[loc]) {
      console.log(e.key);
      loc ++ ;
      correctCount ++ ;
      letterCount.textContent = correctCount;
      // let currentLetter = word[loc];
      // currentLetter.style.color = '#ddd';
      if(loc === word.length) {
        loc = 0;
        word = words[Math.floor(Math.random() * words.length)];
        target.textContent = word;
      }
    }else {
      console.log('default');
      incorrectCount ++ ;
      missCount.textContent = incorrectCount;
    }
  });









}





