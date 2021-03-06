jQuery.browser = {};
jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());

var scroller=jQuery.browser.webkit ? "body": "html";

$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};
var scrollWidth = $.scrollbarWidth();

/* scrollUp */
function scrollUp(block,targetBlock) {

    $(block).click(function(e){
        var target = $(targetBlock).offset().top;

        $(scroller).stop().animate({scrollTop:target},800);
        return false;

        e.preventDefault();
    });
}

function oneHeightItems(){

    function oneHeight(block){
        var height=0;
        block.removeAttr('style');
        block.each(function(){
            if($(this).height()>height){
                height=$(this).height();
            }
        });
        block.css('height', height);
    }

    oneHeight($('.oneHeight'));
}

/*scroll animation*/
function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}

/*GO TO href*/
function goTo(){
    $('.header-menu a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top-65;
        $(scroller).animate({scrollTop:target},500);
    });
}

// cut text script

function cutText(){
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function(){
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if(text.length > value && value > 0){
            var newText = text.substring(0,value) + filler;
            $(this).text(newText);
        }
    });
};

//bind example

function bindExample(){

    $(document).bind('click', bindFunc);

    function bindFunc(){

        $(document).unbind('click');

        console.log('unbinded');

        $.ajax({
            url:'ajax.php',
            method:'POST',
            success:function(){
                setTimeout(function(){
                    console.log('binded');
                    $(document).bind('click', bindFunc);
                },4000);

            }
        });
    };

}

/*header buter*/
function headeButer(menuMobile,toggleMenu){
    if(menuMobile){
        menuMobile.click(function(event) {
            if($(window).width()<1024-$.scrollbarWidth()){
                $(this).toggleClass('active');
                toggleMenu.stop().slideToggle();
            }
        });

        $(document).on('click touchstart',function (event){
            if($(window).width()<1024-$.scrollbarWidth()){
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0)
                    {
                        toggleMenu.slideUp();
                        menuMobile.removeClass('active');
                    }
            }
        });
    }
}

function fullPage(){
    if ( $(window).width() + scrollWidth >= 1024 ){
        console.log('main full page');
        $('#fullpage').fullpage({
            navigation: true,
            showActiveTooltip: true,
            navigationPosition: 'left',
            resize : true,
            loopTop: false,
            scrollBar: false,
            sectionSelector: '#fullpage>section',
            controlArrows: true,
            verticalCentered: false,
            scrollOverflow: true,
            responsiveWidth: 0,
            responsiveHeight: 0,
            afterLoad: function(anchorLink, index){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });
    }
}


/* DOCUMENT READY  */
$(document).ready(function() {
    fullPage();
    oneHeightItems();
    $('.footer_placeholder').height($('.footer').outerHeight());

    //goTo();
    //animationBlock($('.setion-animate'));
});

$(window).resize(function() {
    if( $(window).width() + scrollWidth >= 1024 && !$('.main').hasClass('fullpage-wrapper') ){
        fullPage();
    }
    if( $(window).width() + scrollWidth < 1024 && $('.main').hasClass('fullpage-wrapper') ){
        $.fn.fullpage.destroy('all');
        $('.main').removeClass('fullpage-wrapper');
    }
    oneHeightItems();
    $('.footer_placeholder').height($('.footer').outerHeight());
});