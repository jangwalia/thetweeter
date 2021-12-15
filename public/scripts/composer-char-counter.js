$(document).ready(function() {
  

  $('#tweet-text').on('input',function(){
    const value = $(this).val().length;
    let result =  20 - value;
    
    if(result > 0){
      $('.counter').text(result);
    }
    else{
      $('.error span').text("make sure the tweet is under 140 characters..!!")
      $('.error').slideDown();
      $('.counter').addClass('lessthenOne');
      $('.counter').text(result);
    }
  });
 
 
});
