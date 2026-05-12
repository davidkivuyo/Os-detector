let OS;
if(navigator.appVersion.indexOf("Linux")!==-1){
    OS=navigator.userAgent;
    document.getElementById('space').innerHTML='Linux';
    document.getElementById('info').innerHTML=OS;
}else if(navigator.appVersion.indexOf("Win")!==-1){
    OS=navigator.userAgent;
    document.getElementById('space').innerHTML='Windows';
    document.getElementById('info').innerHTML=OS;
}else if(navigator.appVersion.indexOf("Mac")!==-1){
    OS=navigator.userAgent;
    document.getElementById('space').innerHTML='Macintosh';
    document.getElementById('info').innerHTML=OS;
}else if(navigator.appVersion.indexOf("X11")!==-1){
    OS=navigator.userAgent;
    document.getElementById('space').innerHTML='UNIX based';
    document.getElementById('info').innerHTML=OS;
}else{
    OS="whats your OS?";
    document.getElementById('space').innerHTML=OS;
}

