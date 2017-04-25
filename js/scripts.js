$(document).ready(function() {
    $("#flash1").click(function() {
    $(".flash1-cont").slideToggle(1000);

  });
  $("#test1").click(function() {
  $(".flash2-cont").slideToggle(1000);
  // $("#flash2").eventPause("active");
  // $("#flash2").on();

  });
  $(".flash2-cont").click(function() {
  $(".first-list").slideToggle(1000);
  })
  $("#togglelist").click(function() {
  $(".assignment").slideToggle(1000);

  });
  // $("#flash3").click(function() {
  //   $(".flash3-cont").slideToggle(1000);
  //
  // });
  //
  // $("#flash4").click(function() {
  //   $(".flash4-cont").slideToggle(1000);
  //
  // });
  // $("#flash5").click(function() {
  //   $(".flash5-cont").slideToggle(1000);
  //
  // });
  // $("#flash6").click(function() {
  //   $(".flash6-cont").slideToggle(1000);
  //
  // });
  // $("#flash7").click(function() {
  //   $(".flash7-cont").slideToggle(1000);
  //
  // });
});
