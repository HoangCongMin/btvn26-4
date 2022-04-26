var elusername=document.getElementById('username');
var elmsg=document.getElementById('feedback');
function checkusername(minlength) {
   if(elusername.value.length<minlength){
       elmsg.innerHTML='usename must be'+minlength+'charreter of'
   } else{
       elmsg.innerHTML='';
   }
}
if(elusername.addEventListener){
    elusername.addEventListener('blur', function () {checkusername(5)
        
    }, false);
}else {
    elusername.attachEvent('onblur',function () {
        checkusername(5);
    })
}