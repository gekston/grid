window.addEventListener('load', function(){

let getVariable = function(styles, propertyName) {
  return String(styles.getPropertyValue(propertyName)).trim();
};
let setDocumentVariable = function(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
};

  let colRange = document.querySelector('.colWidth');
  colRange.addEventListener('input', function(){
    let colWidth = colRange.value + '%';
    setDocumentVariable('--base-col-width', colWidth);
  })

  let colorInput = document.querySelector('.boxColor');
  let rangeColor = document.querySelectorAll('.boxColor input[type=range]');
  colorInput.addEventListener('input', function(event) {
    if (event.target.classList === 'boxColor__red') {
      setDocumentVariable('--box-color-red', event.target.value);
    } else if (event.target.classList === 'boxColor__green') {
      setDocumentVariable('--box-color-green', event.target.value);
    } else {
      setDocumentVariable('--box-color-blue', event.target.value);
    }
  })
})
