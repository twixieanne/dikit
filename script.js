$(document).ready(function () {
  $("nav a").on("click", function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $("html, body").animate(
              {
                  scrollTop: $(hash).offset().top,
              },
              800
          );
      }
  });

  $(".image-card").on("click", function () {
      $(".image-card").removeClass("active");
      $(this).toggleClass("active");

      $(".popover").not($(this).find(".popover")).fadeOut();
      $(this).find(".popover").fadeToggle();
  });

  $(document).on("click", function (e) {
      if (!$(e.target).closest(".image-card").length) {
          $(".popover").fadeOut();
      }
  });
});

function toggleFlower(rowId) {
  $("#" + rowId).toggleClass("hidden");
}

$(document).ready(function() {
  function createPopover(text, button) {
      $('.popover-info').remove();
      var popover = $('<div class="popover-info"></div>').text(text);
      $(button).after(popover);
      popover.hide().fadeIn(300);
  }

  $('button[onclick*="showArmor(\'Arrow\')"]').click(function(e) {
      e.stopPropagation();
      createPopover('Arrows: Swift and accurate, ideal for long-range attacks.', this);
  });

  $('button[onclick*="showArmor(\'Sword\')"]').click(function(e) {
      e.stopPropagation();
      createPopover('Swords: Versatile melee weapons for close combat.', this);
  });

  $('button[onclick*="showArmor(\'Armor\')"]').click(function(e) {
      e.stopPropagation();
      createPopover('Armor: Provides essential protection during battles.', this);
  });

  $(document).click(function() {
      $('.popover-info').fadeOut(200, function() {
          $(this).remove();
      });
  });
});
