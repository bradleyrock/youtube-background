// -------------------------------------------- / Youtube Background 

var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv
    playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
      {'videoId': 'rbUqOPw7w0U', 'startSeconds': 12, 'endSeconds': 140, 'suggestedQuality': 'hd1440'}
    ],
    randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;

$('next').html(vid.length);

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#tv').addClass('active');
    $('next').html(currVid + 1);
  } else if (e.data === 2){
    $('#tv').removeClass('active');
    if(currVid === vid.length - 1){
      currVid = 0;
    } else {
      currVid++;  
    }
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

function vidRescale(){

  var w = $(window).width()+200,
    h = $(window).height()+200;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});

$('#mute, #unmute').on('click', function(){
  $('#tv').toggleClass('mute');
  if($('#tv').hasClass('mute')){
    tv.mute();
  } else {
    tv.unMute();
  }
});

// -------------------------------------------- / Fade in 

document.getElementById("myFrame").onload = function() {myFunction()};

function myFunction() {
    document.getElementById("demo").innerHTML = "Iframe is loaded.";
}

var a = $locale, 
    b = $weather;

$(a).load(function() 
 {  $( "headr" ).fadeIn( 1000, function() 
    {  $( "footr" ).fadeIn( 100 );
  });
  return false;
});

//----------------------------- Video Controls

function expand(obj) {
  if (obj.className == 'expand-clicked expand') {
    obj.className = 'expand';
    
  } else {
    obj.className = 'expand-clicked expand';
  }
}
