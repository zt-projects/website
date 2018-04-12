$(document).ready(function(){
	fangdajing();
	xuanxiangka();
	baoyouenter();
	xuanzedown();
	xuanzeenter();
	xqpj();
	xqpjxiding();
	contopenter();
	fenleienter();
})

//所有分类 鼠标移入
function fenleienter(){
	$(".nav .listtop").mouseenter(function(){
		$(".leftnav").css("display","block")
	}).mouseleave(function(){
		$(".leftnav").css("display","none")
		
	})
}

//contop鼠标移入
function contopenter(){
	$(".contop .one").mouseenter(function(){
		$(this).find("div").addClass("show").siblings().removeClass("show");
		
	}).mouseleave(function(){
		$(this).find("div").removeClass("show")
	})
	
}

//吸顶
function xqpjxiding(){
	var top=$(".xqright ul").offset().top;
	$(document).scroll(function(){
		var dtop=$("body,html").scrollTop();
		if($("body,html").scrollTop()>=top){
			$(".xqright ul").css({
				"position":"fixed",
				"background":"#ffffff",
				"top":"0",
				"z-index":"100",
				"width":"888px"
			})
			$(".xqright ul a").css("display","block")
			$(".xqright ul li").mousedown(function(){
				$("body,html").scrollTop(top);
			})
		}else if($("body,html").scrollTop()<top){
			$(".xqright ul").css({
				"position":"",
				"background":"#f8f8f8"
			})
			$(".xqright ul li").mousedown(function(){
				$("body,html").scrollTop(dtop);
			})
			$(".xqright ul a").css("display","none")
		}
	})
}

//详情与评价选项卡
function xqpj(){
	$(".xqright ul").on("mousedown","li",function(){
		$(this).addClass("xqrulactive").siblings().removeClass("xqrulactive")
		$(".xqright ol li").eq($(this).index()).addClass("xqrolactive").siblings().removeClass("xqrolactive")
	})
}

//尺码，规格点击
function xuanzedown(){
	$(".chima dd a").mousedown(function(){
		$(this).siblings().removeClass()
		$(this).addClass("dianji").siblings().removeClass("dianji")
	})
	$(".guige dd a").mousedown(function(){
		$(this).addClass("jindianji")
	})
}

//尺码，规格移入
function xuanzeenter(){
	$(".chima dd a").mouseenter(function(){
		$(this).addClass("yiru").siblings().removeClass("yiru")
		$(".dianji").addClass("yiru")
	})
	$(".chima dd a").mouseleave(function(){
		$(this).removeClass("yiru")
		$(".dianji").addClass("yiru");
	})
	$(".guige dd a").mouseenter(function(){
		$(this).addClass("yiru").siblings().removeClass("yiru")
	})
	$(".guige dd a").mouseleave(function(){
		$(this).removeClass("yiru")
		$(".jindianji").addClass("yiru")
	})
	
}

//满88包邮移入
function baoyouenter(){
	$(".yunfei span").mouseenter(function(){
		$(this).addClass("spanyiru")
	})
	$(".yunfei span").mouseout(function(){
		$(this).removeClass("spanyiru")
	})
}

//选项卡
function xuanxiangka(){
	$(".xuanxiangka ul li").mousedown(function(){
		$(this).addClass("ulactive").siblings().removeClass("ulactive")
		$(".xuanxiangka ol li").eq($(this).index()).addClass("olactive").siblings().removeClass("olactive")
	})
	
}

//放大镜
function fangdajing(){
	$("#bottom li").mouseenter(function(){
 		var index = $(this).index();
 		console.log(index)
 		$("#small img").eq(index).css("display","block")
 		               .siblings().css("display","none");
 		$("#big img").eq(index).css("display","block")
 		               .siblings().css("display","none"); 
 		$(this).addClass("imgactive").siblings().removeClass("imgactive")
 	})
 	//移入small区  mask  big 显示
 	$("#small").mouseenter(function(){
 		$("#mask,#big").css("display","block");
 		//遮罩层移动
 	}).mouseleave(function(){
 		$("#mask,#big").css("display","none");
 	})
 	$("#small").mousemove(function(e){
 			var e = e || event;
 			var _left = e.pageX - $("#box").offset().left - $("#mask").outerWidth()/2;
 			var _top = e.pageY - $("#box").offset().top - $("#mask").outerHeight()/2;
 			var maxL = $("#small").outerWidth()-$("#mask").outerWidth();
 			var maxT = $("#small").outerHeight()-$("#mask").outerHeight();
 			
 			_left =  _left < 0 ? 0 : (_left > maxL ? maxL : _left);
 			_top =  _top < 0 ? 0 : (_top > maxT ? maxT : _top);
 			
 			$("#mask").css("left",_left); 
 			$("#mask").css("top",_top);
 			l = _left * ($("#big img").outerWidth()-2)/ ($("#small").outerWidth()-2);
 			t = _top * $("#big img").outerHeight()/ $("#small").outerHeight();
 			$("#big img").css("left",-l);
 			$("#big img").css("top",-t);
 			
 		})
}
