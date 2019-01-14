var callback = function() {
  $(".item-skills").each(function() {
    newWidth =
      $(this)
        .parent()
        .width() * $(this).data("percent");
    $(this).width(0);
    $(this).animate(
      {
        width: newWidth
      },
      1000
    );
  });
  $(".icons-red").each(function() {
    height = $(this).height(0);
    $(this).animate(
      {
        height: 14
      },
      2000
    );
  });
};
$(document).ready(callback);

var resize;
window.onresize = function() {
  clearTimeout(resize);
  resize = setTimeout(function() {
    callback();
  }, 100);
};
$(".thumbnail").on("click", function() {
  var index = $(this).attr("data-index");
  $(".item").each(function(i) {
    $(this).removeClass("active");

    if (i == index) {
      $(this).addClass("active");
    }
  });
});
