关于Lion


  李小龙在咏春拳的基础上，创新出截拳道，从此中国Kongfu走向世界名满天下…… 

今天，俺在Bootstrap基础上，加上css3布局新特性创立出轻量级移动端前端开发框架---Lion 当然仅志立于解决公司移动前端开发部分痛点，此框架由于才刚刚诞生，难免有纰漏疏忽，望各位多批评指正并多提宝贵意见，使之日趋完美~，使之更好服务于公司项目产品 

一、让我们言归正转~ 首先，我们在做移动端页面开发之前请务必在 
"<head></head>"标签之内添加：（其中第一项为必设置项） 

1.<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"> 
（该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放。也许允不允许用户缩放不同的网站有不同的要求.详情见Lion哥的博客：http://blog.csdn.net/huang100qi/article/details/45576665） 

2.<meta name="apple-mobile-web-app-capable" content="yes"> 
（该meta标签的作用是iphone全屏显示.详情见Lion哥的博客：http://blog.csdn.net/huang100qi/article/details/50161127） 

3.<meta name="apple-mobile-web-app-status-bar-style" content="black"> 
（该meta标签的作用是在Iphone应用下状态条（屏幕顶部条）的颜色） 

4.<meta http-equiv="Pragma" CONTENT="no-cache"> 
（该meta标签的作用是清缓存） 

5.<meta http-equiv="Cache-Control" CONTENT="no-cache"> 
(该meta标签的作用是清缓存） 

6.<meta http-equiv="Expires" CONTENT="0"> 
(该meta标签的作用是清缓存设置过期时间） 

除此之外，由于手机屏幕大小、分辨率可谓千差万别，如何能让我们开发的页面在这些移动终端设备准确无误的跑，的确挺考验我们前端开发者的功力的。 为了能更好地适配手机端，我们通常是屏弃PC端以px(像素)为而局单位。那么，我们需要借助百分比而局及如rem(相对根元素)定义页面元素大小方式布局 
因此，在lion框架中，我们已经在HTML根元素换算好 font-size: 62.5%; /* 10 ÷ 16 × 100% = 62.5% */,因此，我们仍然可以延用pc开发定义页面元素大小方式布局习惯 
如：想要在移动端显示如pc端14像素字体大小，我们只需定义该字体大小为1.4rem即可。 
了解详情请移步：http://blog.csdn.net/huang100qi/article/details/49886713 

二、为了手机端页面每个模块两端能有留白，我们加上class="panel"即可


 
这是一个有两端留白盒子 
 

三、讲到这里，有同学会问了，在手机上我想要并排一组图片，且支持自适应。好难啊~~有木有啊，你的这个Lion框架能帮我解决吗？ 
答案是肯定的。而且不会像Bootsrap那样麻烦，且不需要在HTML代码嵌套多层DIV，非常清磢 只需要如下设置即可 

<ul class="row mt15"> 
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 </ul> 







四、那我不需要中间留白，咋整？ 
答：加上"no-margin"即可，其中mt15是全局margin值，可随意 

<ul class="row no-margin mt15"> 
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 </ul> 







五、我需要一张大图，然后再跟张小图，或者是图片大小布局不一致！小图里面还需要有文字咋整？ 
答：只需要改变span值即可其中mt15是全局margin值，可随意 

<ul class="row no-margin mt15"> 
 <li class="span6"><img src="images/image-1.jpg"></li>
 <li class="span3"><img src="images/image-1.jpg"></li>
 <li class="span4">这里是文字……</li>
 </ul> 

 文字…
文字…

文字…

五、我现在有个父层，里面有子层，需要让所有子层水平方向绝对居中，怎么玩？ 
答：只需要在父层加上horizonMiddle这个className即可其中mt15是全局margin值，可随意 





子层1

子层2

子层3

六、我现在有个父层，里面有子层，需要让所有子层竖直方向绝对居中，怎么玩？ 
答：只需要在父层加上verMiddle这个className即可其中mt15是全局margin值，可随意 





子层1

子层2

子层3

七、那个啥，我这些li是后台拿的，指不定有多少行呢？咋弄啊？ 
答：你只需把row改成row-fluid即可 

<ul class="row-fluid mt15"> 
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 </ul> 









八、那个啥，就上面的那个，不想要空白 
答：把no-margin加上即可 

<ul class="row-fluid no-margin mt15"> 
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 <li class="span4"><img src="images/image-1.jpg"></li>
 </ul> 









九、 仅单行布局： 

span12 


span11 

1 


span10 

1 

1 


span9 

1 

1 

1 


span8 

1 

1 

1 

1 


span7 

1 

1 

1 

1 

1 


span6 

1 

1 

1 

1 

1 

1 


span5 

1 

1 

1 

1 

1 

1 

1 


span4 

1 

1 

1 

1 

1 

1 

1 

1 


span3 

1 

1 

1 

1 

1 

1 

1 

1 

1 


span2 

1 

1 

1 

1 

1 

1 

1 

1 

1 

1 


1 

1 

1 

1 

1 

1 

1 

1 

1 

1 

1 

十、单选或多行布局： 

span12 


span11 

1 


span10 

2 


span9 

3 


span8 

4 


span7 

5 


span6 

6 


1 

2 

3 

4 

2 


offsetL 


offset1 


offset2 


offset3 


offset4 


offset5 


offset6 


.... 


span6 

2 

3 


span6 

offsetR 

3 

十一、按钮




btn-primary

btn-warning

btn-success

btn-danger


btn disabled

btn-link

btn-default

btn-info
方向箭头只需要调用arrow-up、arrow-down、arrow-left、arrow-right 

  

  

  

 

十一、小图标

如果需要加入小图标 
答：只需要引入font-awesome.min.css文件到文档就可 即在头部加入： <link rel="stylesheet" href="css/font-awesome.min.css"> 当然了，一定要确保框架中的font包与css文件夹在同一目录下 


? icon-cloud-download
? icon-cloud-upload
? icon-lightbulb
? icon-exchange
? icon-bell-alt
? icon-file-alt
? icon-beer
? icon-coffee
? icon-food
? icon-fighter-jet

? icon-user-md
? icon-stethoscope
? icon-suitcase
? icon-building
? icon-hospital
? icon-ambulance
? icon-medkit
? icon-h-sign
? icon-plus-sign-alt
? icon-spinner

? icon-angle-left
? icon-angle-right
? icon-angle-up
? icon-angle-down
? icon-double-angle-left
? icon-double-angle-right
? icon-double-angle-up
? icon-double-angle-down
? icon-circle-blank
? icon-circle

? icon-desktop
? icon-laptop
? icon-tablet
? icon-mobile-phone
? icon-quote-left
? icon-quote-right
? icon-reply
? icon-github-alt
? icon-folder-close-alt
? icon-folder-open-alt


? icon-adjust
? icon-asterisk
? icon-ban-circle
? icon-bar-chart
? icon-barcode
? icon-beaker
? icon-beer
? icon-bell
? icon-bell-alt
? icon-bolt
? icon-book
? icon-bookmark
? icon-bookmark-empty
? icon-briefcase
? icon-bullhorn
? icon-calendar
? icon-camera
? icon-camera-retro
? icon-certificate
? icon-check
? icon-check-empty
? icon-circle
? icon-circle-blank
? icon-cloud
? icon-cloud-download
? icon-cloud-upload
? icon-coffee
? icon-cog
? icon-cogs
? icon-comment
? icon-comment-alt
? icon-comments
? icon-comments-alt
? icon-credit-card
? icon-dashboard
? icon-desktop
? icon-download
? icon-download-alt

? icon-edit
? icon-envelope
? icon-envelope-alt
? icon-exchange
? icon-exclamation-sign
? icon-external-link
? icon-eye-close
? icon-eye-open
? icon-facetime-video
? icon-fighter-jet
? icon-film
? icon-filter
? icon-fire
? icon-flag
? icon-folder-close
? icon-folder-open
? icon-folder-close-alt
? icon-folder-open-alt
? icon-food
? icon-gift
? icon-glass
? icon-globe
? icon-group
? icon-hdd
? icon-headphones
? icon-heart
? icon-heart-empty
? icon-home
? icon-inbox
? icon-info-sign
? icon-key
? icon-leaf
? icon-laptop
? icon-legal
? icon-lemon
? icon-lightbulb
? icon-lock
? icon-unlock

? icon-magic
? icon-magnet
? icon-map-marker
? icon-minus
? icon-minus-sign
? icon-mobile-phone
? icon-money
? icon-move
? icon-music
? icon-off
? icon-ok
? icon-ok-circle
? icon-ok-sign
? icon-pencil
? icon-picture
? icon-plane
? icon-plus
? icon-plus-sign
? icon-print
? icon-pushpin
? icon-qrcode
? icon-question-sign
? icon-quote-left
? icon-quote-right
? icon-random
? icon-refresh
? icon-remove
? icon-remove-circle
? icon-remove-sign
? icon-reorder
? icon-reply
? icon-resize-horizontal
? icon-resize-vertical
? icon-retweet
? icon-road
? icon-rss
? icon-screenshot
? icon-search

? icon-share
? icon-share-alt
? icon-shopping-cart
? icon-signal
? icon-signin
? icon-signout
? icon-sitemap
? icon-sort
? icon-sort-down
? icon-sort-up
? icon-spinner
? icon-star
? icon-star-empty
? icon-star-half
? icon-tablet
? icon-tag
? icon-tags
? icon-tasks
? icon-thumbs-down
? icon-thumbs-up
? icon-time
? icon-tint
? icon-trash
? icon-trophy
? icon-truck
? icon-umbrella
? icon-upload
? icon-upload-alt
? icon-user
? icon-user-md
? icon-volume-off
? icon-volume-down
? icon-volume-up
? icon-warning-sign
? icon-wrench
? icon-zoom-in
? icon-zoom-out


? icon-file
? icon-file-alt
? icon-cut
? icon-copy
? icon-paste
? icon-save
? icon-undo
? icon-repeat

? icon-text-height
? icon-text-width
? icon-align-left
? icon-align-center
? icon-align-right
? icon-align-justify
? icon-indent-left
? icon-indent-right

? icon-font
? icon-bold
? icon-italic
? icon-strikethrough
? icon-underline
? icon-link
? icon-paper-clip
? icon-columns

? icon-table
? icon-th-large
? icon-th
? icon-th-list
? icon-list
? icon-list-ol
? icon-list-ul
? icon-list-alt

? icon-angle-left
? icon-angle-right
? icon-angle-up
? icon-angle-down
? icon-arrow-down
? icon-arrow-left
? icon-arrow-right
? icon-arrow-up

? icon-caret-down
? icon-caret-left
? icon-caret-right
? icon-caret-up
? icon-chevron-down
? icon-chevron-left
? icon-chevron-right
? icon-chevron-up

? icon-circle-arrow-down
? icon-circle-arrow-left
? icon-circle-arrow-right
? icon-circle-arrow-up
? icon-double-angle-left
? icon-double-angle-right
? icon-double-angle-up
? icon-double-angle-down

? icon-hand-down
? icon-hand-left
? icon-hand-right
? icon-hand-up
? icon-circle
? icon-circle-blank

