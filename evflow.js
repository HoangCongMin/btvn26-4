function showelement() {
    alert(this.innerhtml);
}
el=document.getElementById('list');
el.addEventListener('click',showelement,false);
el=document.getElementById('item');
el.addEventListener('click',showelement,false);
el=document.getElementById('link');
el.addEventListener('click',showelement,false);
el=document.getElementById('list2');
el.addEventListener('click',showelement,true);
el=document.getElementById('item2');
el.addEventListener('click',showelement,true);
el=document.getElementById('link2');
el.addEventListener('click',showelement,true);