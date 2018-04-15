$(document).ready(function(){
	fenleienter();
	slideup();
	pingjiashow();
	totop();
	louceng();
	
})
//楼层效果
function louceng(){
	$(document).scroll(function(){
		var addtop=$(".conbotWrap").offset().top;
		var stop=$(document).scrollTop();
		if(stop>=addtop-200){
			$(".floorlist").css("display","block")
		}else{
			$(".floorlist").css("display","none")
		}
		$floor=$(".floor").filter(function(){
			return Math.abs($(this).offset().top-stop)<$(this).outerHeight()/2;
		})
		//console.log($floor.index())
		if($floor.index()!=-1){
			$(".floorlist li:not(:last)").eq($floor.index())
										 .addClass("floorhover")
										 .siblings()
										 .removeClass("floorhover")
		}
		
	})
	
	$(".floorlist li:not(.totop)").click(function(){
		var index=$(this).index();
		var clicktop=$(".floor").eq(index).offset().top;
		console.log(clicktop);
//		$(document).scrollTop(clicktop);
		$("html,body").animate({"scrollTop":clicktop},800)
		
	})
}

//ToTop
function totop(){
	$(".floorlist .totop").click(function(){
		$(document).scrollTop(0);
	})
}

//not(floor1)
function pingjiashow(){
	$(".floor:not(#floor1) ul li").mouseenter(function(){
		$(this).css({"opacity":"0.8"})
		       .find(".hovershow").addClass("entershow")
	}).mouseleave(function(){
		$(this).css({"opacity":"1"})
		       .find(".hovershow").removeClass("entershow")
	})
}

//floor1
function slideup(){
	$("#floor1 ul li").mouseenter(function(){
		$(this).find(".libot").animate({"top":"-48px"},400)
	}).mouseleave(function(){
		$(this).find(".libot").stop().animate({"top":"0"},400)
	})
}

//所有分类 鼠标移入
function fenleienter(){
	$(".nav .listtop").mouseenter(function(){
		$(".leftnav").css("display","block")
	}).mouseleave(function(){
		$(".leftnav").css("display","none")
		
	})
}