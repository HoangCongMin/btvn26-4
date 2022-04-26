var ellist, addlink,newel,newtext,counter,listitem;
ellist=document.getElementById('list');
addlink=document.querySelector('a');
counter=document.getElementById('counter');
function additem(e) {
    e.preventDefault();
    newel=document.createElement('li');
    newtext=document.createTextNode('New list item');
    newel.appendChild(newtext);
    ellist.appendChild(newel);

}
function updatecount() {
    listitem=ellist.getElementsByTagName('li').length;
    counter.innerhtml=listitem;

}
addlink.addEventListener('click',additem,false);
ellist.addEventListener('DOMNoneInserted',updatecount,false);