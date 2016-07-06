/**
 * Created by qi.huang on 2015/12/7.
 */

require.config({

    baseUrl: 'js/libs',
    urlArgs: 'ver=dev' + new Date().getTime(),
    paths: {

        'zepto': 'zepto.min',                //Zepto插件

        'fastclick': 'fastclick.min',        //快点对象

        'swipe': 'swipe',                    //左右滑动插件

        'underscore':'underscore-min',       //underscore

        'showBox': 'ShowBox',                 //弹层切换页面对象

        'swipeConfig': '../app/swipeconfig'   //调用swipe滑块代码
    },

    shim : {
        'zepto' : {
            dep:[],
            exports: 'Zepto'
        },
        'fastclick' : {
            dep:[],
            exports: 'Fastclick'
        },
        'swipe': {
            dep:[],
            exports: 'Swipe'
        }

    }

});



require(['zepto','fastclick', 'underscore','showBox'], function($,attachFastClick, _ ,ShowBox){
    //console.log(Swipe);
    //new FastClick(document.body);     //初始化快点对象
    //FastClick.attach(document.body);
    attachFastClick.attach(document.body);

    //模拟切换新页
    var bb = new ShowBox('.dropMenu-js',
        {
            speed:300,
            setEvent:'touchstart',
            interactive:'dialogBox',
            animateClass: "flyLeft",
            callBackFn:function(obj,target){

            }
        });


    //底部弹层
    new ShowBox('.upMenu-js',
        {
            speed:300,
            setEvent:'tap',
            interactive:'dialogBox',
            animateClass: "flyUp",
            callBackFn:function(obj){
                alert('asdfasf');

            }
        });


});

//加载滑动模块
require(['swipeConfig'],function(ret){
    //console.log(ret);
    ret.render();

});