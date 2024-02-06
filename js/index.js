// ハンバーガーボタンとドロワー
$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});

// ドロワーのリンクをクリックしたらドロワーを閉じる
$("#js-drawer a").on("click", function () {
  $("#js-drawer").slideUp();
  $("body").removeClass("is-checked");
  $("#js-button-drawer").removeClass("is-checked");
});