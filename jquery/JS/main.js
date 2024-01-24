$("#home .links .fa-xmark").on("click", function () {
  let x = $(".links").outerWidth(true);
  $("#home .links").animate({ left: -x }, 500);
  $("#home .demo").animate({ left: -0.5 }, 500);
});
$("#home .demo p").on("click", function () {
  $("#home .demo").animate({ left: 200 }, 500, function () {
    $("#home .links").animate({ left: 0 }, 1000);
  });
});

$("#singer .signer-one h3").on("click", function () {
  $("#singer .signer-one p").toggle(500);
  $("#singer .singer-two p").hide(500);
  $("#singer .singer-three p").hide(500);
  $("#singer .singer-four p").hide(500);
});
$("#singer .singer-two h3").on("click", function () {
  $("#singer .singer-two p").toggle(500);
  $("#singer .signer-one p").hide(500);
  $("#singer .singer-three p").hide(500);
  $("#singer .singer-four p").hide(500);
});
$("#singer .singer-three h3").on("click", function () {
  $("#singer .signer-one p").hide(500);
  $("#singer .singer-two p").hide(500);
  $("#singer .singer-four p").hide(500);
  $("#singer .singer-three p").toggle(500);
});
$("#singer .singer-four h3").on("click", function () {
  $("#singer .signer-one p").hide(500);
  $("#singer .singer-three p").hide(500);
  $("#singer .singer-two p").hide(500);
  $("#singer .singer-four p").toggle(500);
});
const targetDate = new Date(2025, 0, 31, 12, 0, 0);
setInterval(function () {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    console.log("the event you lost");
    return;
  }
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  $(" #Time .container .row #Dayes").html(`${days}d`);
  $(" #Time .container .row #Hours").html(`${hours}h`);
  $(" #Time .container .row #Minutes").html(`${minutes}m`);
  $(" #Time .container .row #Second").html(`${seconds}s`);
}, 1000);

let x = $("#textarea").on("input", function (e) {
  let text = e.target.value;
  let arr = [];
  arr.push(text);
  lengthOfMessage = arr[0].length;
  result = 100 - arr[0].length;
  $("#numoftext").html(result);
  console.log(result);
  if (lengthOfMessage > 100) {
    $("#numoftext").html("<span> your available character finished </span>");
  }
});
$('.div a[href^="#"]').on("click", function (e) {
  let link = $(e.target).attr("href");
  let sectionOffset = $(link).offset().top;
  console.log("Link:", link);
  console.log("Section Offset:", sectionOffset);
  $("body").animate({ scrollTop: sectionOffset }, 1000);
});
