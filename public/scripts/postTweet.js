$(document).ready(function(){
  $( "#form" ).submit(function( event ) {
    event.preventDefault();
    const data =  $( this ).serialize();
    $.ajax({
        type: "POST",
        url: '/tweets',
        data: data,
        datatype: "json",
        success: function(msg){
          
          $('#tweet-text').val('');
    },
    error: function() {
       alert("please enter tweet");
    }
       
    });
  
  });
    
  })

