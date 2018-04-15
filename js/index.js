

$(document).ready(function(){
	//轮播图
	new PlayImg($(".autoPlay .showimg"),$(".autoPlay .small ul"),$(".autoPlay"),"numactive").init();
	secondMenu();
	naventer();
	headtopenter();
	//头部中的小导航鼠标移入
	smallnaventer($(".head .searchAnd .smallnav li a"));
	//hotleft  轮播
	new PlayImg($(".hot .hotleft .showimg"),$(".hotleft ol"),$(".hotleft"),"nowactive").init();
	new PlayImg($(".hot .hotleft .showtext"),$(".hotleft ol"),$(".hotleft"),"nowactive").init();
	hotrightenter();
	//母婴砖砌的小导航鼠标移入
	smallnaventer($(".kids .timetop .list li a"));
	kidsleftenter();
	//内容区右部轮播
	new PlayImg($(".kids .kidsright .outul1"),$(".kids .kidsright .ol1"),$(".kids .kidsright"),"activesmall").init();
	new PlayImg($(".kids .kidsright .outul2"),$(".kids .kidsright .ol2"),$(".kids .kidsright"),"activesmall").init();
	
	new PlayImg($(".kids .kidsright .outul3"),$(".kids .kidsright .ol3"),$(".kids .kidsright"),"activesmall").init();
	new PlayImg($(".kids .kidsright .outul4"),$(".kids .kidsright .ol4"),$(".kids .kidsright"),"activesmall").init();
	new PlayImg($(".kids .kidsright .outul5"),$(".kids .kidsright .ol5"),$(".kids .kidsright"),"activesmall").init();
	new PlayImg($(".kids .kidsright .outul6"),$(".kids .kidsright .ol6"),$(".kids .kidsright"),"activesmall").init();
	new PlayImg($(".kids .kidsright .outul7"),$(".kids .kidsright .ol7"),$(".kids .kidsright"),"activesmall").init();
	xiding();
	focusenter();
	
});


//关注我们鼠标移入
function focusenter(){
	$(".foot2 .footleft ul li").mouseenter(function(){
		$(this).find("a").css("backgroundPositionY","-109px")
	})
	$(".foot2 .footleft ul li").mouseleave(function(){
		$(this).find("a").css("backgroundPositionY","-69px")
	})
}

//吸顶
function xiding(){
	$(document).scroll(function(){
		
		if($(document).scrollTop()>=$(".navwrap").offset().top-80){
			$(".xiding").css("display","block")
		}
		if($(document).scrollTop()<=$(".navwrap").offset().top-80){
			$(".xiding").css("display","none")
		}
	})
}

//内容区左部鼠标移入
function kidsleftenter(){
	$(".kids .kidstop .kidsleft ul li").mouseenter(function(){
		$(this).find("a").addClass("hovercir")
		       .end().siblings().find("a").removeClass("hovercir")
	})
	$(".kids .kidstop .kidsleft ul li").mouseleave(function(){
		$(this).find("a").removeClass("hovercir")
	})
}

//hotright 的鼠标移入
function hotrightenter(){
	$(".hot .hotright ul li").mouseenter(function(){
		$(this).find(".mouseon").stop().fadeIn(500)
		       .end().siblings().find(".mouseon").stop().fadeOut(500)
	})
	$(".hot .hotright ul li .mouseon .focus").mouseenter(function(){
		$(this).addClass("change")
	})
	$(".hot .hotright ul li .mouseon .focus").mouseleave(function(){
		$(this).removeClass("change")
	})
	
	
	$(".hot .hotright ul li").mouseleave(function(){
		$(this).find(".mouseon").fadeOut(500)
	})
}

//head smallnav鼠标移入  (=======封装鼠标移入出现下划线(标签中带有a的类型  传到a的对象)========) 
function smallnaventer($obj){
	$obj.mouseenter(function(){
		$(this).css("text-decoration","underline")
		       .parent().siblings().find("a").css("text-decoration","none")
	})
	$obj.mouseleave(function(){
		$(this).css("text-decoration","none")
	})
}

//headTop鼠标移入
function headtopenter(){
	$(".headTop ul li").mouseenter(function(){
		if($(this).find("ul")[0]){
			$(this).find("a").addClass("mouseenterA")
			$(this).siblings().find("a").removeClass("mouseenterA")
			$(this).find("ul").css("display","block")
			$(this).siblings().find("ul").css("display","none");
		}
	})
	$(".headTop ul li").mouseleave(function(){
		if($(this).find("ul")[0]){
			$(this).find("ul").css("display","none");
			$(this).find("a").removeClass("mouseenterA")
		}	
	})
}

//nav鼠标移入
function naventer(){
	$(".nav .listleft li").mouseenter(function(){
		$(this).find("a").addClass("hover")
	    .end().siblings().find("a").removeClass("hover")
	})
	$(".nav .listleft li").mouseleave(function(){
		$(this).parent().find(".index a").addClass("hover");
		$(this).find("a").removeClass("hover")
	})
}

//===============二级菜单============================================
function secondMenu(){
	$(".nav .listtop .leftnav li").mouseenter(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).find(".secondMenu").css("display","block")
		$(this).siblings().find(".secondMenu").css("display","none");
	})
	$(".nav .listtop .leftnav li").mouseleave(function(){
		$(this).removeClass("active");
		$(this).find(".secondMenu").css("display","none")
	})
}


//================轮播图===============================================
function PlayImg($ul,$ol,$box,$active){
	this.ul=$ul.find("li");
	this.ol=$ol.find("li");
	this.box=$box;
	this.index=0;
	this.active=$active;
}
PlayImg.prototype={
	init:function(){
//		console.log(this.ul.find("li").size());
		this.mymouseenter();
//		this.mymouseleave();
		this.mymousedown();
		this.timer=setInterval(function(){
			this.autoPlay();
		}.bind(this),2000);
	},
	autoPlay:function(){
		this.index++;
//		console.log(this.ol.size());
		if(this.index==this.ol.size()){
			this.index=0;
		}
		this.ol.eq(this.index).addClass(this.active).siblings().removeClass(this.active);
		this.ul.eq(this.index).fadeIn(1000).siblings().fadeOut(1000);
	},
	mymousedown:function(){
		var that=this;
		this.box.mouseenter(function(){
			clearInterval(that.timer);
			$(this).parent().parent().find(".prev").css("display","block");
			$(this).parent().parent().find(".next").css("display","block");
		})
		this.box.mouseleave(function(){
			that.timer=setInterval(function(){
				that.autoPlay();
			},2000);
			$(this).parent().parent().find(".prev").css("display","none");
			$(this).parent().parent().find(".next").css("display","none");
		})
		this.box.find(".prev").mousedown(function(){
			that.index-=2;
			if(that.index<=-2){
				that.index=-1;
			}
			that.autoPlay();
		})
		this.box.find(".next").mousedown(function(){
//			that.index++;
			that.autoPlay();
		})
	},
	mymouseenter:function(){
		var that=this;
		this.ol.mouseenter(function(){
			clearInterval(that.timer);
			that.index=$(this).index()-1;
			that.autoPlay();
		})
		
	},
//	mymouseleave:function(){
//		var that=this;
//		this.ol.mouseleave(function(){
//			that.timer=setInterval(function(){
//				that.autoPlay();
//			},2000)
//		})
//	}
}
