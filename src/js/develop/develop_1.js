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

/* index-pro - show text in acount-advantages-pro */

    function indexProShowHideTextOnNotebook(){

        $(document).on('click','.advantages-descript-button span', function(){

            if($('.advantages-descript-button').css('display') == 'flex'){
                if($(this).is('.active')){
                    $(this).removeClass('active');
                    $('.advantages-descript-text').stop().slideUp(300);
                }else{
                    $(this).addClass('active');
                    $('.advantages-descript-text').stop().slideDown(300);
                }
            }

        });

        $(window).resize(function(){

            if($(window).width() > 1366 || $(window).height() > 769){
                $('.advantages-descript-button span').removeClass('active');
                $('.advantages-descript-text').removeAttr('style');
            }

        });

    }

/* /index-pro - show text in acount-advantages-pro */


$(document).ready(function(){

    clickPlayButton();
    indexProShowHideTextOnNotebook();

});

$(window).load(function(){

});

$(window).resize(function(){

});