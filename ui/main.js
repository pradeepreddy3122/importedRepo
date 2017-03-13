console.log('Loaded!');

var img = document.getElementById("madi");

var margin = 0;

function move() {
    margin = margin + 6;
    img.style.marginLeft=margin+'px';
}

img.onclick = function() {
    var interval = setInterval(move,50);
};