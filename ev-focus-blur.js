var el=document.getElementById('username')
var ml=document.getElementById('feedback')
function mlb() {
    ml.className='tip'
    ml.innerHTML='moi nhap tk'
    
}
function mlk() {
   var usename=el.value
    if(usename.length<5){
        ml.innerHTML='sai'
        ml.className='warning'
    }else{
        ml.innerHTML='hop le'
    }

}
el.addEventListener('focus',mlb,false)
el.addEventListener('blur',mlk,false)