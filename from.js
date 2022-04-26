var elform, elselectpackge, elpackagehint, elterms, eltermshint;
elform=document.getElementById('formSignup');
elselectpackge=document.getElementById('package');
elpackagehint=document.getElementById('packageHint');
elterms=document.getElementById('terms');
eltermshint=document.getElementById('termsHint');
function packagehint() {
    var pack=this.options[this.selectedIndex].value;
    if(pack==='monthly'){
        elpackagehint.innerhtml='save $10 if you pay for 1 year';
    }else {
        elpackagehint.innerhtml='wise choice';
    }

}
function checkterms(event) {
    if(!elterms.checked){
        eltermshint.innerhtml='you must agree to the term';
    }

}
elform.addEventListener('submit',checkterms,false);
elselectpackge.addEventListener('change',packagehint,false);