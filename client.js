let OS="UNKNOWN OS";
if(navigator.appVersion.indexOf("Linux")!=-1){
    document.getElementById('space').innerHTML='Linux';
}else if(navigator.appVersion.indexOf("Win")!=-1){
    document.getElementById('space').innerHTML='Windows';
}else if(navigator.appVersion.indexOf("Mac")!=-1){
    document.getElementById('space').innerHTML='Mac';
}else if(navigator.appVersion.indexOf("X11")!=-1){
    document.getElementById('space').innerHTML='UNIX';
}else{
    OS="whats your OS";
    document.getElementById('space').innerHTML=OS;
}
