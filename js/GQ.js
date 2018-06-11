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
	
	(function(){
		var width = $(window).width(); 
		if(width<640){
			$(".pic li").eq(0).hide();
			$(".pic li").eq(2).hide();
		}
	})();
	
});