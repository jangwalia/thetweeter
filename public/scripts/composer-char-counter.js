$(document).ready(function() {
  

  $('#tweet-text').on('input',function(){
    $('.error').slideUp();
    const value = $(this).val().length;
    const maxLength = 140;
    let result =  maxLength - value;
    if(result >= 0){
      $('.counter').text(result);
      $('.counter').addClass('morethanOne');
      return true;
    }
    else{
      $('.error span').text("make sure the tweet is under 140 characters..!!")
      $('.error').slideDown();
      $('.counter').removeClass('morethanOne');
      $('.counter').addClass('lessthanOne');
      $('.counter').text(result);
      //stop the cursor at max length which is 140 characters
      $(this).val($(this).val().substring(0,maxLength));
      
    }
  });
 
 
});
