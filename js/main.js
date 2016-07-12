$(document).ready(function(){

    var $arrowClick = $('#js-click-arrow');
    var $labelList = $('.block-position__list--label');
    var $blockPosition = $('.block-position__val');
    var $blockList = $('.block-position__list');

    $arrowClick.on('click', function() {
        if($blockList.hasClass('d-n')){
            $blockList.removeClass('d-n');
        }else{
            $blockList.addClass('d-n');
        }
    });

    $labelList.on('click', function(){
        $blockPosition.text($(this).text());
        $blockList.addClass('d-n');
        $('.block-description__text').removeClass('d-b');
        $('.block-description__text').eq($(this).index()).addClass('d-b');
    });

});