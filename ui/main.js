var counter = 0;

var button = document.getElementById("button");
button.onClick = function() {
    var span = document.getElementById("count");
  counter = counter+1;
  span.innerHTML = counter.toString();
    
};