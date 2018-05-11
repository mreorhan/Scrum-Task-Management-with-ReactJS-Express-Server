import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
$(".mcell-task").draggable({
  appendTo: "body",
  cursor: "move",
  helper: 'clone',
  revert: "invalid"
});
$(".mcell").droppable({
  tolerance: "intersect",
  accept: ".mcell-task",
  activeClass: "ui-state-default",
  hoverClass: "ui-state-hover",
  drop: function(event, ui) {        
      $(this).append($(ui.draggable));
  }
});