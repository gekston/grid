'use strict';
document.addEventListener('DOMContentLoaded', function(){

  let colRange = document.querySelector('.colWidth');
  colRange.addEventListener('input', function(){
    let colWidth = colRange.value + '%';
    document.documentElement.style.setProperty('--base-col-width', colWidth);
  })
  /*
  colorInput.addEventListener('input', function() {
    document.documentElement.style.setProperty('--box-color', '#' + colorInput.value);
    if (colorInput.value.length <= 0) {
      document.documentElement.style.setProperty('--box-color', '#444444');
    }
  })*/
  let colorInput = document.querySelector('.boxColor');
  let rangeColor = document.querySelectorAll('.boxColor input[type=range]');
  colorInput.addEventListener('input', function(event) {
    if (event.target.classList === 'boxColor__red') {
      document.documentElement.style.setProperty('--box-color-red', event.target.value);
    } else if (event.target.classList === 'boxColor__green') {
      document.documentElement.style.setProperty('--box-color-green', event.target.value);
    } else {
      document.documentElement.style.setProperty('--box-color-blue', event.target.value);
    }
  })
})
