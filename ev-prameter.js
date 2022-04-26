var elusername=document.getElementById('username');
var elmsg=document.getElementById('feedback');
function checkusername(minlength) {
    if(elusername.value.length<minlength){
        elmsg.innerHTML='username must be'+minlength+'charater or more'
    }else{
        elmsg.innerHTML='';
    }
}
elusername.addEventListener('blur',function () {
   checkusername(5);
}, false);