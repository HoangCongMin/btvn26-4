function checkUsername() {
    

var ml=document.getElementById('feedback');
var mk=document.getElementById('username');
if(mk.value.length <5 ) {
    ml.innerHTML='loi it hon 5 ky tu'
}else{
    ml.innerHTML='hop le '
}
}