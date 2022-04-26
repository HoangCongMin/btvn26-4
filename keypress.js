var el;
function charcount(e) {
    var textenterred,chardisplay,counter,lastkey;
    textenterred=document.getElementById('message').value;
    chardisplay=document.getElementById('charactersLeft');
    counter=(180-(textenterred.length));
    lastkey=document.getElementById('lastKey');
    lastkey.textContent='last key in:'+e.keyCode;
}
el=document.getElementById('message');
el.addEventListener('keyup',charcount,false);