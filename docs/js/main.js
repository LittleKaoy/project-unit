$(document).ready(function () {
  // Меню в шапке
  $(".menu-button").click(function (event) {
    event.preventDefault();
    $(".menu-button").toggleClass("menu-button--close");
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("hidden");
  });

  $(document).click(function (event) {
    if (!event.target.closest(".header__menu")) {
      $(".menu-button").removeClass("menu-button--close");
      $(".menu").removeClass("menu--active");
      $("body").removeClass("hidden");
    }
  });

  $(".menu__list-item").click(function (event) {
    $(".menu-button").removeClass("menu-button--close");
    $(".menu").removeClass("menu--active");
    $("body").removeClass("hidden");
  });

  // Форма поиска в шапке
  $(".header__search").click(function (event) {
    event.preventDefault();
    $(".header__search").addClass("header__search--open");
  });

  $(document).click(function (event) {
    if (!event.target.closest(".header__search")) {
      $(".header__search").removeClass("header__search--open");
    }
  });

  // Клик по тарифам
  $("#tariffs div").click(function (e) {
    e.preventDefault();
    $("#tariffs div").removeClass("price__block--active");
    $(this).addClass("price__block--active");
  });

  // Карусель с отзывами клиентов
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    nav: true,
    navText: ["", ""],
    loop: true,
    smartSpeed: 1500,
  });

  // Скролл для карусели
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });
});
