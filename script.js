let counter = 0;

$(document).ready(function () {
  $(".answerbutton").click(function () {
    let useranswer1 = $(".question1").val();
    let useranswer2 = $(".question2").val();
    let useranswer3 = parseInt($(".question3").val());
    let useranswer4 = $(".question4").val();

    let iocharacter;
    let characterImage;

      if (useranswer3 === 10 && useranswer4 === "yellow") {
      iocharacter = "Joy";
      characterImage = "https://i.ytimg.com/vi/hIGF-Fkxbk0/maxresdefault.jpg";
    } else if ((useranswer3 >= 7 && useranswer3 <= 9) && useranswer4 === "yellow") {
      iocharacter = "Joy";
      characterImage = "https://i.ytimg.com/vi/hIGF-Fkxbk0/maxresdefault.jpg";
    } else if (useranswer3 === 10) {
      iocharacter = "Joy";
      characterImage = "https://i.ytimg.com/vi/hIGF-Fkxbk0/maxresdefault.jpg";
    } 
      else if ((useranswer3 >= 7 && useranswer3 <= 9) && useranswer4 === "red")
      {
      iocharacter = "Anger";
      characterImage = "https://i.ytimg.com/vi/-HQIg3ZwAs0/maxresdefault.jpg";
        }
      else if (useranswer3 < 10 && useranswer3 >= 7) {
      iocharacter = "Anger";
      characterImage = "https://i.ytimg.com/vi/-HQIg3ZwAs0/maxresdefault.jpg";
    } 
      else if ((useranswer3 >= 4 && useranswer3 <= 6) && (useranswer4 === "purple")) {
      iocharacter = "Ennui";
      characterImage = "https://i.ytimg.com/vi/k1z0qpak1dc/maxresdefault.jpg";
      }
      else if ((useranswer3 < 7 && useranswer3 >= 0) && (useranswer4 === "blue")){
      iocharacter = "Sadness";
      characterImage = "https://i.ytimg.com/vi/o5c1gIzQoPI/hqdefault.jpg";
      }
      else if (useranswer3 < 7 && useranswer3 >= 4) {
      iocharacter = "Ennui";
      characterImage = "https://i.ytimg.com/vi/k1z0qpak1dc/maxresdefault.jpg";
    } 
      else if (useranswer3 < 4 && useranswer3 >= 0) {
      iocharacter = "Sadness";
      characterImage = "https://i.ytimg.com/vi/o5c1gIzQoPI/hqdefault.jpg";
    }

    $(".history").append("<li>" + "Hello " + useranswer1 + "! The Inside Out character that you most resonate with is " + iocharacter + "!" + " This is because of " + useranswer2 + ", your happiness rating of " + useranswer3 + ", and your favorite color " + useranswer4 + "." + "</li>");

    counter++;
    $(".completion").text("You have completed this quiz " + counter + " times!");

    $(".character-image").attr("src", characterImage);
    $(".character-image-container").show();
  });

  $(".restart").click(function () {
    $(".question1, .question2, .question3, .question4").val("");
    $(".character-image-container").hide();
  });
});
