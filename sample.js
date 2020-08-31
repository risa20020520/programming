var roulette;
function start(){
    var result = document.getElementById("result");
    var omikuji=["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","か","き","く","け","こ","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","ほ","ま","み","む","め","も","や","ゆ","よ","わ"];
    roulette = setInterval(function(){
       var random = Math.round(Math.random()　*　(omikuji.length - 1));
       result.innerHTML = omikuji[random];
     },10);
}

function stop(){
    clearInterval(roulette);
}