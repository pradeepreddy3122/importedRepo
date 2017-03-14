var button = document.getElementById("butt");

button.onclick = function() {
  //create a request

   var request = new XMLHttpRequest();

// capture response and store it in a variable

request.onreadystatechange = function() {
 
 if(request.readystate === XMLHttpRequest.DONE){
     // take some action
     if(request.status === 200){
         var counter = request.responseText;
         var span = document.getElementById("count");
         span.innerHTML = counter.toString();
     }
 }
    
};

// make request

request.open('GET','http://shalikasampath.imad.hasura-app.io/count',true);
request.send(null);
};