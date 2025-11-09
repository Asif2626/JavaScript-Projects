$(document).ready(function(){
  $("#b1").click(function(){
    var x = $("#n1").val();
    $("#n1").val($("#n2").val());
    $("#n2").val($("#n3").val());
    $("#n3").val($("#n4").val());
    $("#n4").val(x); 
  });
});