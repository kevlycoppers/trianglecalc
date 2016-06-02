$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var triangle;

    if(side1+side2>side3 && side1+side3>side2 && side2+side3>side1){

      if(side1===side2 && side2===side3){
        triangle = "Equilateral";
      }
      else if(side1===side2 || side2===side3 ||side1===side3){
        triangle = "Isosceles";
      }
      else if(side1!=side2 && side2!=side3 && side1!==side3){
        triangle = "Scalene";
      }
    }
    else{
      triangle = "NOT a triangle";
    }
    $(".name").text(triangle);
    $("#paragraph").show();
    event.preventDefault();
  });
});
