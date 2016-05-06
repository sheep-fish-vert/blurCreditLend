/* click play button on video */

    /* added video by not doc ready AHTUNG */

        /* initialized youtube_api */

            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        /* /initialized youtube_api */

        /* initialized youtube video */

            var player;

            function onYouTubeIframeAPIReady() {

                player = new YT.Player('player',{
                    height:'750',
                    widht:'1520',
                    videoId:playerId,
                    events:{
                        'onStateChange':videoPause
                    }
                });

            };

        /* /initialized youtube video */

        /* initialized event pause video */

            function videoPause(event){
                if(event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED){
                    $('.video-placeholder').removeClass('active');
                }
            }

        /* /initialized event pause video */

    /* /added video by not doc ready AHTUNG */

    function clickPlayButton(){

        $(document).on('click', '.video-button', function(){

            $('.video-placeholder').addClass('active');
            player.playVideo();

        });

    };

/* /click play button on video */


$(document).ready(function(){

    clickPlayButton();

});

$(window).load(function(){

});

$(window).resize(function(){

});