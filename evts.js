function setup() {
    var textinput;
    textinput=document.getElementById('message');
    textinput.focus()
}
window.addEventListener('DOMContentloaded',setup,false);
window.addEventListener('beforeunload',function (event) {
  var message='you have that have not been';
  return message;
})