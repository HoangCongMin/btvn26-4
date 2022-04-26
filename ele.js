function gettarget(e) {
    if(!e){
        e= window.event;
    }
    return e.target||e.srcElement;

}
function itemdone(e) {
    var target,elparent,elGrandparent;
    target=gettarget(e);
}
if(target.nodeName.toLowerCase()=="a"){
    ellistitem=target.parentNode;
    ellist=ellistitem.parentNode;
    ellist.removeChild(ellistitem);
}
if(target.nodeName.toLowerCase()=="em"){
    ellistitem=target.parentNode.parentNode;
    ellist=ellistitem.parentNode;
    ellist.removeChild(ellistitem);
}
if(e.preventDefault){
    e.preventDefault();
}else{
    e.returnvalue=false;
}

var el=document.getElementById('shoppingList')
if (el.addEventListener){
    el.addEventListener('click',function (e) {
        itemdone(e);
    }, false)
}else {
    el.attachEvent('onclick', function (e) {

    });
}