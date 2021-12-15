

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

      const $article = $(`<article>`);
      const $header = $(`<header>`);
      const $img = $(`<img src = "${newtweet.user.avatars}" alt = "user Image">`);
      const $name = $(`<span class = "name">`).text(newtweet.user.name);
      const $email = $(`<span class = "email">`).text(newtweet.user.handle);
      const $tweetHeader = $header.append($img, $name, $email );
      const $main = $(`<div class="tweetBody">`);
      const $tweetBody = $(`<textarea name="usertweet" class = "show-Tweets">`).text(newtweet.content.text);
      const $footer = $(`<footer>`);
      const $body = $main.append($tweetBody);
      const $timeStamp = $(` <span class="timeago">${timeago.format(newtweet.created_at)}</span>`);
      const $reaction = $(`<span class = "reactions"><i class="fas fa-flag fa-xs"></i>  <i class="fas fa-exchange-alt fa-xs"></i>  <i class="fas fa-heart fa-xs"></i></span>`);
      const $tweetFooter = $footer.append($timeStamp, $reaction);
      const $newTweet =  $article.append($tweetHeader,$body,$tweetFooter);
      return $newTweet;

    }
    $( "#form" ).submit(function( event ) {
      event.preventDefault();
      const data =  $( this ).serialize();
      $.ajax({
          type: "POST",
          url: '/tweets',
          data: data,
          datatype: "json",
          success: function(){
            loadTweets();
            $('#form')[0].reset();
      },
      error: function() {
         alert("please enter tweet");
      }
         
      });
      
    });
    
 })


