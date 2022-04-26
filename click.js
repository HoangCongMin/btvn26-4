
let mg='<div class=\"header\"><a id=\"close\" href="#">close x</a></div>'
mg+='<div><h2> mo mo mo mo </h2>';
mg+='mot doan van ban gi day';
mg+='mot doan van dai hon nua gi day.</div>';

let mk=document.createElement('div')
mk.setAttribute('id','note')
mk.innerHTML=mg;
document.body.appendChild(mk);

function remove() {
    document.body.removeChild(mk);
}

let el=document.getElementById('close');
el.addEventListener('click',remove,false );
