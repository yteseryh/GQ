// JavaScript Document
 

$(function(){
	//轮播图
	(function(){
		var time = null;
		var num = 1;
		$(".gq_img .left").click(function(){
			num--;
			if(num==0){num=5;}
			$(".gq_img img").attr("src","img/me"+ num +".JPG");
		});
		$(".gq_img .right").click(function(){
			num++;
			if(num==6){num=1;}
			$(".gq_img img").attr("src","img/me"+ num +".JPG");
		});
		
		function autoplay(){
			time = setInterval(function(){
				$(".gq_img img").attr("src","img/me"+ num +".JPG");
				num++;
				if(num==6){
					num=1;
				}
			},3000);
		}
		autoplay();
		
		$(".gq_img").hover(function(){
			clearInterval(time)
		},function(){
			autoplay()
		});
	})();
	
	//顶部图片随宽度增加删除
	(function(){
		var width = $(window).width();
		var evt = "onorientationchange" in window ? "orientationchange" : "resize";//检查浏览器是否支持orientationchange事件，不支持用resize;
		
		if(width<640){
			$(".pic li").eq(0).hide();
			$(".pic li").eq(2).hide();
		}//初始化
		
		//检测用户是否切换横竖屏
		window.addEventListener(evt, function() {
			width = $(window).width();
			if(width<640){
				$(".pic li").eq(0).hide();
				$(".pic li").eq(2).hide();
			}else{
				$(".pic li").eq(0).show();
				$(".pic li").eq(2).show();
			}
		}, false);
	})();
	
	//移动端音乐播放
	(function(){
		//--创建页面监听，等待微信端页面加载完毕 触发音频播放
		document.addEventListener('WeixinJSBridgeReady', function() {
			document.getElementById('music').play();
		})
		//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
		document.addEventListener('touchstart', function() {
			document.getElementById('music').play();
		})
	})();
	
});