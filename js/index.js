// ハンバーガーボタンとドロワー
$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});


// ドロワーメニューのリンクをクリックしたらドロワーを閉じる
document
  .querySelectorAll('#js-drawer-content a[href^="#"]')
  .forEach(function (link) {
    link.addEventListener('click', function (e) {
      if ($(window).width() < 768) {
        document
          .querySelector("#js-button-drawer")
          .classList.remove("is-checked");
        $("#js-drawer").slideToggle();
        document
          .querySelector("body")
          .classList.remove("is-fixed");
      }
    });
  });
