

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
 const renderTweet = function(collections){
      collections.forEach(element => {
        const $tweet =  createTweetElement(element);
        return $('.tweet-container').prepend($tweet);
        
      })
      
    }
    const loadTweets = function(){
     $.ajax('/tweets',{method : 'GET'})
      .then((res)=>{
        renderTweet(res);
      })
    }
    
  
    const createTweetElement = function(newtweet){
      const $freshTweet = $(`<article class = "create-Tweet"> <header class = "tweet-header">
      <img class = "userImage" src="${newtweet.user.avatars}" alt="user image"><span class = "name">${newtweet.user.name}</span><span class = "email">${newtweet.user.handle}</span>
    </header>
    <div class="usertweet">
      <textarea name="usertweet" class = "show-Tweets">${newtweet.content.text}</textarea>
    </div>
    <footer class="tweetFooter">
      <div >
      <span class="timeago">${timeago.format(newtweet.created_at)}</span><span class = "reactions"><i class="fas fa-flag fa-xs"></i>  <i class="fas fa-exchange-alt fa-xs"></i>  <i class="fas fa-heart fa-xs"></i></span>
      </div>
    </footer>
    </article></article>`);
    return $freshTweet;
    }
    $( "#form" ).submit(function( event ) {
      event.preventDefault();
      const data =  $( this ).serialize();
      $.ajax({
          type: "POST",
          url: '/tweets',
          data: data,
          datatype: "json",
          success: function(msg){
            loadTweets(msg);
            $('#tweet-text').val('');
      },
      error: function() {
         alert("please enter tweet");
      }
         
      });
    
    });
    
 })


