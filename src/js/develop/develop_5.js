function heightForJscroll(obj) {
    if($(window).width>767) {
        var contentHeight = $('.second-block .content').outerHeight();
        var buttonHeight = $('.second-block .button-more').outerHeight() + parseInt($('.second-block .button-more').css('bottom')) + 40;
        var titleHeight = obj.find('.ttl').outerHeight();
        var needHeiht = contentHeight - buttonHeight - titleHeight;
    }else{
        var contentHeight = $('.second-block .right').outerHeight();
        var buttonHeight = $('.second-block .button-more').outerHeight() + parseInt($('.second-block .button-more').css('bottom')) + 40;
        var titleHeight = obj.find('.ttl').outerHeight();
        var needHeiht = contentHeight - buttonHeight - titleHeight;
    }
    obj.find('.txt').height(needHeiht);

}
function tabsChoise() {
    var tabs = $('.second-block .tabs');
    var infos = $('.second-block .info');
    tabs.click(function () {
        if(!$(this).hasClass('active')) {
            tabs.removeClass('active');
            infos.removeClass('active');
            $(this).addClass('active');
            var ind = $(this).index();
            var toHeight = infos.eq(ind);
            toHeight.addClass('active');


        }else{return false;}

    });
}
function startHeight() {
    $('.second-block .info').each(function () {
        var x = $(this);
        heightForJscroll(x);
    });

}
function slider() {
    $('.second-block .buttons-nav .butt').click(function (e) {
        e.preventDefault();
        var tabs = $('.second-block .tabs');
        var infos = $('.second-block .info');
        var active = $('.second-block .tabs.active').index();
        var ind = active;
        if($(this).hasClass('prev')){
            tabs.removeClass('active');
            infos.removeClass('active');
            var ind = active - 1;
            if(active == 0){ind = tabs.length - 1;}
            infos.eq(ind).addClass('active');
            tabs.eq(ind).addClass('active');
        }
        if($(this).hasClass('next')){
            tabs.removeClass('active');
            infos.removeClass('active');
            var ind = active + 1;
            if(active == tabs.length - 1){ind = 0;}
            infos.eq(ind).addClass('active');
            tabs.eq(ind).addClass('active');
        }
    });

}

$(document).ready(function(){
    startHeight();
    tabsChoise();
    $('.second-block .info .txt').jScrollPane();
    slider();
});

$(window).load(function(){

});

$(window).resize(function(){
    startHeight();
    $('.second-block .info .txt').jScrollPane();
});


