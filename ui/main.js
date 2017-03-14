var count = 0;
var span = document.getElementById("count");
var button = document.getElementById("button");
button.onClick = function() {
  counter = counter+1;
  span.innerHTML = counter;
    
};