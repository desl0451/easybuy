!function(a){a.fn.soSwitch=function(b){function z(b){c.thumb&&a(c.thumb).eq(b).addClass(c.nowClass).siblings().removeClass(c.nowClass)}function A(b){var d,e;if(m.queue().length<1){switch(r="string"==typeof b?"next"==b?(q+n+1)%n:(q+n-1)%n:b,c.beforeEvent(q,r),z(r),"random"==c.switchType&&(v=Math.floor(7*Math.random())+5),v){case 0:g.animate({marginLeft:-r*k},c.switchTime,c.easing,function(){c.afterEvent(q,r)});break;case 1:g.animate({marginLeft:r*k-k*(n-1)},c.switchTime,c.easing,function(){c.afterEvent(q,r)});break;case 2:g.animate({marginTop:-r*l},c.switchTime,c.easing,function(){c.afterEvent(q,r)});break;case 3:m.eq(q).slideUp(c.switchTime),m.eq(r).slideDown(c.switchTime,c.easing,function(){c.afterEvent(q,r)});break;case 4:m.eq(q).css({zIndex:s}).slideUp(c.switchTime).siblings().css({zIndex:0}),m.eq(r).css({zIndex:s}).slideDown(c.switchTime,c.easing,function(){c.afterEvent(q,r)});break;case 5:m.eq(q).css({zIndex:s}).fadeOut(c.switchTime).siblings().css({zIndex:0}),m.eq(r).css({zIndex:s}).fadeIn(c.switchTime,c.easing,function(){c.afterEvent(q,r)});break;case 6:m.eq(r).css({zIndex:s}).show().siblings().css({zIndex:0}),m.eq(q).css({zIndex:s+1}).slideUp(c.switchTime,c.easing,function(){c.afterEvent(q,r)});break;case 7:m.eq(q).css({zIndex:s}).siblings().css({zIndex:0}),m.eq(r).css({zIndex:s+1}).hide().slideDown(c.switchTime,c.easing,function(){c.afterEvent(q,r)});break;case 8:case 9:d=8==v?-l:l,m.eq(r).css({zIndex:s}).show().siblings().css({zIndex:0}),m.eq(q).css({zIndex:s+1}).animate({marginTop:d},c.switchTime,c.easing,function(){a(this).hide().css("marginTop",0),c.afterEvent(q,r)});break;case 10:case 11:e=10==v?-k:k,m.eq(r).css({zIndex:s}).show().siblings().css({zIndex:0}),m.eq(q).css({zIndex:s+1}).animate({marginLeft:e},c.switchTime,c.easing,function(){a(this).hide().css("marginLeft",0),c.afterEvent(q,r)});break;default:m.eq(q).hide(),m.eq(r).show(0,function(){c.afterEvent(q,r)})}q=r}}function B(b){c.autoChange&&(a(b).bind("mouseenter",function(){clearInterval(t)}),a(b).bind("mouseleave",function(){clearInterval(t),t=setInterval(function(){A("next")},c.changeTime)}))}var e,f,g,h,j,k,l,m,n,o,p,r,q,s,t,u,v,w,x,y,c={switchType:"fade",switchObj:"div",easing:"swing",autoChange:!0,overStop:!0,changeTime:5e3,switchTime:600,x:0,y:0,zIndex:2,btnPrev:null,btnNext:null,inBtn:null,thumb:null,inThumb:null,nowClass:"now",clickFalse:!0,overChange:!0,delayTime:300,beforeEvent:function(){},afterEvent:function(){}},d={};for(i in c)e=a(this).attr(i),e&&("true"==e&&(e=!0),"false"==e&&(e=!1),d[i]=e);if(f=a(this).data("switch")||{},a.extend(c,d,f,b||{}),g=this,h=g.outerWidth(),j=g.outerHeight(),k=g.width(),l=g.height(),m=g.find(c.switchObj),n=m.length,o=k*n,p=l*n,q=0,s=1*c.zIndex,v=c.switchType>-1?c.switchType:jQuery.inArray(c.switchType,["left","right","up","slide","slideUpDown","fade","slideUp","slideDown","scrollUp","scrollDown","scrollLeft","scrollRight","scrollUpDown","scrollLeftRight"]),12==v&&(v=8),13==v&&(v=10),w=a('<div style="position:relative;overflow:hidden;width:'+h+"px;height:"+j+'px;"></div>'),g.wrap(w),1!=n){if(c.inThumb){for(c.inThumb="string"==typeof c.inThumb?c.inThumb:"ul_thumb",x=a('<ul style="z-index:100;"></ul>').addClass(c.inThumb),y="",i=1;n>=i;i++)y+="<li>"+i+"</li>";x.append(y),g.after(x),c.thumb=x.find("li")}switch(c.inBtn&&(c.inBtn="Array"==typeof c.inBtn?c.inBtn:["btnPrev","btnNext"],c.btnPrev=a('<span style="z-index:100;" class="'+c.inBtn[0]+'">Prev</span>'),c.btnNext=a('<span style="z-index:100;" class="'+c.inBtn[1]+'">Next</span>'),g.after(c.btnNext).after(c.btnPrev)),v){case 0:g.css({width:o+"px"}),m.css({"float":"left"});break;case 1:g.css({width:o+"px",marginLeft:-k*(n-1)}),m.css({"float":"right"});break;case 2:case 3:g.css({height:p+"px"});break;default:m.css({position:"absolute",top:1*c.x+0,left:1*c.y+0}),m.eq(0).show().siblings().hide()}z(0),c.overStop&&B(g),c.autoChange&&(clearInterval(t),t=setInterval(function(){A("next")},c.changeTime)),c.thumb&&(c.overChange&&a(c.thumb).bind("mouseenter",function(){var b=a(c.thumb).index(a(this));b!=q&&(u=setTimeout(function(){z(b),A(b)},c.delayTime))}).bind("mouseleave",function(){clearTimeout(u)}),a(c.thumb).click(function(){var b=a(c.thumb).index(a(this));return b!=q&&(z(b),A(b)),c.clickFalse?!1:void 0}),B(c.thumb)),c.btnPrev&&(a(c.btnPrev).click(function(){"scrollUpDown"==c.switchType&&(v=8),"scrollLeftRight"==c.switchType&&(v=10),A("prev")}),B(c.btnPrev)),c.btnNext&&(a(c.btnNext).click(function(){"scrollUpDown"==c.switchType&&(v=9),"scrollLeftRight"==c.switchType&&(v=11),A("next")}),B(c.btnNext))}},a(function(){a(".soSwitch").length&&a(".soSwitch").each(function(){a(this).soSwitch()})})}(jQuery);