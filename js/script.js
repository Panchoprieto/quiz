/* global $ */
$(document).ready(function() {
    $("#clicker").click(function() {
        var name = $("#name").val();
        var finalAnswer = "Your controller is...";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = questionOne(q1Result) + questionTwo(q2Result) + questionThree(q3Result);
        $("#word").text(answer(totalScore));
        $("#clicker").hide();
    });
    function questionOne(q1Result){
        if (q1Result === "Microsoft"){
            return 1;
        }
        else if (q1Result === "Sony"){
            return 2;
        }
        else if (q1Result === "Valve"){
            return 3;
        }
    }
    function questionTwo(q2Result){
        if (q2Result === "Power"){
            return 1;
        }
        else if (q2Result === "Story"){
            return 2;
        }
        else if (q2Result === "Flow"){
            return 3;
        }
    }
    function questionThree(q3Result){
        if (q3Result=== "Friends"){
            return 1;
        }
        else if (q3Result==="No one"){
            return 2;
        }
        else if (q3Result==="Everyone") {
            return 3;
        }  
    }
  function answer(totalScore){
      var imgSrc;
      if (totalScore <= 4){
          imgSrc="https://i5.wal.co/asr/b30e1557-556d-4638-a692-7b42cb425b52_1.3d21d0fb85ffc29ebc3435b2d1bd3d75.jpeg-68200587b10341b43b4aae535bac552e4f1bbf7b-optim-450x450.jpg";
          $("#ending").attr("src",imgSrc);
          return "You're an Xbox Controller!";
      }
     else if (totalScore >4 && totalScore <=  6){
         imgSrc="https://images-na.ssl-images-amazon.com/images/I/41ih-c4lfVL.jpg";
         $("#ending").attr("src",imgSrc);
          return "You're a PlayStation Controller!";
     }
     else if(totalScore> 6){
         imgSrc="https://images-na.ssl-images-amazon.com/images/I/51bMB8hKD-L._SL500_AC_SS350_.jpg";
         $("#ending").attr("src",imgSrc);
         return "You're a keyboard and mouse!";
     }
  }
});