$(function () {
   $(".search-input input")
      .focus(function () {
         $(this)
            .parent(".search-input")
            .each(function () {
               $(".spin", this).css({
                  width: "95.2%",
               });
            });
      })
      .blur(function () {
         $(".spin").css({
            width: "0",
         });
      });
});
