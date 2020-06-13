window.onload = function(){
    drawBoxes('blue');  
    drawBoxes('red'); 
    drawBoxes('yellow'); 
}


function drawBoxes(color){
    var html = `<div class="${color}-box"></div>`

    var body = document.getElementsByTagName('body')[0];
    body.innerHTML += html;
}
