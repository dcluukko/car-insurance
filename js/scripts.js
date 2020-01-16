$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var quote = (100 - age) * 3;

    $("#quote").show();
    if (gender === "male" && age < 26) {
      quote += 50;
    } else if (gender === "non-binary") {
      quote *= 0;
    } else if (gender === "male" && age >= 26) {
      quote *= 1;
    } else if (gender === "female") {
      quote -= 50;
    } else {
      $("#quote").hide();
      alert("Please enter your age");
    } 
    $("#rate").empty().append(quote);

    



    event.preventDefault();
  });
});