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
      
      $('.counter').removeClass('morethanOne');
      $('.counter').addClass('lessthanOne');
      $('.counter').text(result);
  }
  });
 
 
});
