$(document).ready(function() {
    $(".toggle-right-column").click(function() {
        const direction = $(this).data("direction");
        console.log("toggle clicked, direction", direction);
        
        if (direction === "out") {
            // setTimeout(function () {
                $("#shrink_button").removeClass("hide");
                $("#expand_button").addClass("hide");
                $("#center_column").removeClass("col-lg-6");
                $("#center_column").addClass("col-lg-9");
                $("#right_column").hide();
                // $("#right_column").removeClass("slide-in");
                // $("#right_column").addClass("slide-out");
            // }, 250);
            
        } else {
            // setTimeout(function () {
                $("#right_column").show();
                $("#right_column").removeClass("slide-out");
                $("#right_column").addClass("slide-in");
                $("#shrink_button").addClass("hide");
                $("#expand_button").removeClass("hide");
                $("#center_column").removeClass("col-lg-9");
                $("#center_column").addClass("col-lg-6");
            // }, 250);
        }
        
    });
  });