
$('li').bind('dragstart', function(event) {
    event.originalEvent.dataTransfer.setData("text/plain",  event.target.getAttribute('id'));
  });

  $('ul').bind('dragover', function(event) {
    event.preventDefault();
  });

  $('ul').bind('dragenter', function(event) {
    $(this).addClass("over");
   
  });
  $('ul').bind('dragleave drop', function(event) {
    $(this).removeClass("over");
    
  });
  $('li').bind('drop', function(event) {
    return false;
  });
  
  $('ul').bind('drop', function(event) {
    var listitem = event.originalEvent.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(listitem));
    //alert("ok")
    event.preventDefault();
  });