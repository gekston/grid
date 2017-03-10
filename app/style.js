document.addEventListener('DOMContentLoaded', function(){
  var bodyStyles = window.getComputedStyle(document.body);
  var paddingSize = bodyStyles.getPropertyValue('--base-box-padding');
  console.log(paddingSize);
})
