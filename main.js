$(document).ready(function () {
  $("#button").on("click", function () {
    $("#lightbox").fadeIn(1000);
    $(this).hide();
    var videoURL = $("#video").prop("src");
    videoURL += "?autoplay=1";
    $("#video").prop("src", videoURL);
  });

  $("#close-btn").on("click", function () {
    var videoURL = $("#video").prop("src");
    videoURL = videoURL.replace("?autoplay=1", "");

    $("#video").prop("src", videoURL);

    $("#lightbox").fadeOut(500);
    $("#button").show(250);
  });
});

$(document).ready(function () {
  var projectsCompleted = 200;
  var trucks = 224;

  var startProjects = 0;
  var startTrucks = 0;

  var duration = 2000;

  var intervalProjects = duration / projectsCompleted;
  var intervalTrucks = duration / trucks;

  var projectsCounter = setInterval(function () {
    startProjects++;
    $(".project-completed h1").text(startProjects + "+");
    if (startProjects == projectsCompleted) {
      clearInterval(projectsCounter);
    }
  }, intervalProjects);

  var trucksCounter = setInterval(function () {
    startTrucks++;
    $(".trucks h1").text(startTrucks);
    if (startTrucks == trucks) {
      clearInterval(trucksCounter);
    }
  }, intervalTrucks);
});
