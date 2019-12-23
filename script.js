$(document).ready(function() {
    $(".toggle-right-column").click(function() {
        console.log("toggle clicked");
        const direction = $(this).data("direction");
        if (direction === "out") {
            setTimeout(function () {
                $("#shrink_button").removeClass("hide");
                $("#expand_button").addClass("hide");
                $("#center_column").removeClass("col-lg-6");
                $("#center_column").addClass("col-lg-9");
            }, 250);
            
            $("#right_column").removeClass("slide-in");
            $("#right_column").addClass("slide-out");
        }
        else {

            setTimeout(function () {
                $("#right_column").removeClass("slide-out");
                $("#right_column").addClass("slide-in");
            }, 250);
            
            $("#shrink_button").addClass("hide");
            $("#expand_button").removeClass("hide");
            $("#center_column").removeClass("col-lg-9");
            $("#center_column").addClass("col-lg-6");
        }
    });
  });