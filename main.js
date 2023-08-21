function increment(e){
    let count=0;
    const getTheCount=(e.parentNode.parentNode.childNodes[3]);
    const getTheCountField=(e.parentNode.parentNode.childNodes[3].innerText)
    const getTheValue=parseInt(getTheCountField);
    count =getTheValue+1;
    getTheCount.innerText=count;
    if(getTheValue===100){
       return getTheCount.innerText=100;
}
}
function decrement(e){
    let count=0;
    const getTheCount=(e.parentNode.parentNode.childNodes[3]);
    const getTheCountField=(e.parentNode.parentNode.childNodes[3].innerText)
    const getTheValue=parseInt(getTheCountField);
    count =getTheValue-1;
    getTheCount.innerText=count;
    if(getTheValue===0){
        return getTheCount.innerText=0;}

   
}
function reset(){
    window.location.reload();
}