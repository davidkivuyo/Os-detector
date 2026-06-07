let OS= navigator.userAgent;
if(navigator.userAgent.indexOf("Android")!==-1){
   document.getElementById('space').innerHTML='android';
    document.getElementById('info').innerHTML=OS;
}else if(navigator.userAgent.indexOf("iphone")!==-1 || navigator.userAgent.indexOf("ipad")!==-1 || navigator.userAgent.indexOf("ipod")!==-1){
    document.getElementById('space').innerHTML='IOS';
    document.getElementById('info').innerHTML=OS;
}else if(navigator.userAgent.indexOf("Win")!==-1){
    document.getElementById('space').innerHTML='Windows';
    document.getElementById('info').innerHTML=OS;
}else if(navigator.userAgent.indexOf("Mac")!==-1){
   document.getElementById('space').innerHTML='Macintosh';
    document.getElementById('info').innerHTML=OS;
}else if(navigator.userAgent.indexOf("Linux")!==-1){
    document.getElementById('space').innerHTML='Linux';
    document.getElementById('info').innerHTML=OS;
}else{
    OS="whats your OS?";
    document.getElementById('space').innerHTML=OS;
}

