//* using ajax to post tweets showing Asynchronous behaviour
$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: data,
      datatype: "json",
      success: function (msg) {
        $("#tweet-text").val("");
      },
      error: function () {
        alert("please enter tweet");
      },
    });
  });
});
