var noteinput,notename,textentered,target;
notename=document.getElementById('noteName');
noteinput=document.getElementById('noteInput');
function wirtelabe(e) {
    if (!e){
        e=window.event;
    }
    target=e.target||e.srcElement;
    textentered=target.value;
    notename.textContent=textentered;
}
function recordercontrols(e) {
    if (!e){
        e=window.event;
    }
    target=e.target||e.srcElement;
    if(e.preventDefault){
        e.preventDefault();
    }else{
        e.returnvalue=false
    }
    switch (target.getAttribute('data-state')) {
        case 'record':
            record (target);
            break;
        case 'stop':
            stop (target);
            break;

    }
}

function record(target) {
    target.setAttribute('data-state', 'record');
    target.textContent='record';
}
if(document.addEventListener){
    document.addEventListener('click', function(e){
        recordercontrols(e);} ,false  );

    noteinput.addEventListener('input',wirtelabe,false ) ;
}else{
    document.attachEvent('onclick',function (e) {
        recordercontrols(e);
    });
    noteinput.attachEvent('onkeyup',wirtelabe);
}