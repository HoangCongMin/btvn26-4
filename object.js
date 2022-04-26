function checklength(e,minlength) {
var el, elmsg ;
if(!e){
    e=window.event;
}
el=e.target||e.srcElement;
elmsg =el.nextSibling;
if (el.value.length<minlength){
    elmsg.innerhtml='username must be'+minlength+'charrater or more'
}else{
    elmsg.innerhtml='';
}
}
var elusername=document.getElementById('username');
if(elusername.addEventListener){
    elusername.addEventListener('blur', function (e) {
        checklength(e,5);
    }, false);
}else{
    elusername.attachEvent('onblur',function (e) {
      checklength(e,5);
    })
}