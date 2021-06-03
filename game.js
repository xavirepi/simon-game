//while (gamePattern === userClikedPattern) {



  // USER INTERACTION

  // Start - Checking for keypresses
  $(document).keypress(function() {
    if (!started) {
      $("#level-title").html("Level " + level);
      nextSequence();
      started = true;
    }
  });

  let buttonColours = ["red", "blue", "green", "yellow"];

  let gamePattern = [];

  let userClickedPattern = [];

  let started = false;

  let level = 0;

  // User clicks
  $(".btn").click(function(){

    let userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length);

    console.log(userClickedPattern);

  });

  // PROGRAM INTERACTION

  // Program creates nextSequence
  function nextSequence() {

    level++;

    $("#level-title").html("Level " + level);

    var randomNumber = Math.round(Math.random() * 3);

    let randomChosenColour = buttonColours[randomNumber]; // Will return a string or a number?

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(75).fadeIn(75); // Visual animation

    playSound(randomChosenColour);

    return gamePattern;

  };

  // ANIMATIONS

  //Sound animation
  function playSound(name) {

    let audio = new Audio("sounds/" + name + ".mp3");

    audio.play();

  }

  // Visual animation
  function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
      $("#" + currentColor).removeClass("pressed");
    }, 100);

  }

// CHECKING ANSWERS:
function checkAnswer(currentLevel) {

  if (userChosenColour === randomChosenColour) {
    console.log("success");
  } else {
    console.log("wrong");
  }
 };
