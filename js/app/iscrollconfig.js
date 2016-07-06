/**
 * Created by Administrator on 2015/12/7.
 */
function bodyLoaded () {
    var myScroll = new IScroll('#wrapper' /*{
        scrollX: false,
        scrollY: true,
        momentum: false,
        click: true,
        snap: false,
        scrollbars: true
    }*/);
    //console.log(myScroll);
    /*myScroll.on('scrollEnd', function(){
       window.pageTop = Math.abs(myScroll.y);
       // console.log(myScroll);
        //console.log(window.pageTop);
     });*/

}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);