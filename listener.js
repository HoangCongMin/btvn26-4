function checkusename() {



var ml=document.getElementById('feedback');
if(this.value.length<5){
    ml.innerHTML=' it hon 5'
}else{
    ml.innerHTML='hop le'
}}
 var mk=document.getElementById('username')
mk.addEventListener('blur',checkusename,false)