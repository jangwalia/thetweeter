$(document).ready(function() {
  // --- our code goes here ---
 
  $('#tweet-text').on('input',function(){
    const value = $(this).val().length;
    let result =  140 - value;
    
    if(result > 0){
      $('.counter').text(result);
    }
    else{
      alert('Your word limit is over...!!')
      $('.counter').addClass('lessthenOne');
      $('.counter').text(result);
    }
  });
 
 
});
