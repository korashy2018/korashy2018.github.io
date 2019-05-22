$(document).ready(function(){
    var submitIcon = $('.icon-search');
    var inputBox = $('.form-search');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.icon-search').css('display','block');
            submitIcon.click();
        }
    });
});
function buttonUp(){
    console.log('d');
    var inputVal = $('.form-search').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.icon-search').css('display','none');
    } else {
        $('.form-search').val('');
        $('.icon-search').css('display','block');
    }
}



$(function () {
    window.onresize = checkHeight;
    function checkHeight() {
        var mapHeight= $('.map-frame + img').height();
        $('.map-frame iframe').height(mapHeight);
    }checkHeight()
})