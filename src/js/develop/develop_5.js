function heightForJscroll(obj) {
    var contentHeight = $('.second-block .content').outerHeight();
    var buttonHeight = $('.second-block .button-more').outerHeight() + parseInt( $('.second-block .button-more').css('bottom'))+40;
    var titleHeight = obj.find('.ttl').outerHeight();
    var needHeiht= contentHeight - buttonHeight - titleHeight;
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

$(document).ready(function(){
    startHeight();
    tabsChoise();
    $('.second-block .info .txt').jScrollPane();
});

$(window).load(function(){

});

$(window).resize(function(){
    startHeight();
    $('.second-block .info .txt').jScrollPane();
});


