$(document).ready(function(){
	loginxuxiangka();
	toreg();
	tologin();
	regcheck();
	jltchange();
	logcheck();
	topwdlogin();
	toduanlogin();
	huakuaishow();
})

//短信登录时滑块出现
function huakuaishow(){
	//注册时验证
	$(".rebox .tuodongbox2").mouseenter(function(){
		$(".pintu2").css("display","block")
	}).mouseleave(function(){
		$(".pintu2").css("display","none")
	})
	//登录时验证
	$(".phonetop .tuodongbox").mouseenter(function(){
		$(".pintu").addClass("pintushow")
	}).mouseleave(function(){
		$(".pintu").removeClass("pintushow")
	})
}

//登录格式验证及提交
function logcheck(){
	var flagcheck1=false;
	var flagcheck2=false;
	$(".phoneinput").blur(function(){
		var reg=/^1[35678]\d{9}$/;
		flagcheck1=reg.test($(this).val());
		if(!flagcheck1){
			$(".tishi").html("手机号格式错误");
			$(this).css("border","1px solid #e31436");
		}else{
			$(".tishi").html("");
			$(this).css("border","");
		}
	})
	
	$(".pwdphone").blur(function(){
		var reg=/^1[35678]\d{9}$/;
		flagcheck2=reg.test($(this).val());
		if(!flagcheck2){
			$(".pwdlogtishi").html("手机号格式错误");
			$(this).css("border","1px solid #e31436");
		}else{
			$(".pwdlogtishi").html("");
			$(this).css("border","");
		}
		
	})
	
	$(".pwdpwd").blur(function(){
		if($(this).val()==""){
			$(".pwdlogtishi").html("请输入密码");
		}else{
			$(".pwdlogtishi").html("");
			
		}
	})
	
	$(".pwdlogbtn").mousedown(function(){
		if($(".pwdphone").val()=="" ){
			$(".pwdlogtishi").html("请输入用户名");
		}else if($(".pwdpwd").val()==""){
			$(".pwdlogtishi").html("请输入密码");
		}else if(flagcheck2){
			$.ajax({
				type:"get",
				url:"./php/loginreg.php",
				async:true,
				data:{
					uname:$(".pwdphone").val(),
					pwd:$(".pwdpwd").val(),
					typee:"logincheck"
				},
				success:function(res){
					console.log("login:"+res);
					if(res=="1"){
						$(".pwdlogtishi").html("");
						location.href="./index.html";
					}else if(res=="0"){
						$(".pwdlogtishi").html("用户名或密码错误");
						
					}
				}
			});
		}
		
		
	})
}

//切换到短信验证登录
function toduanlogin(){
	$(".pwdyanzhengma").mousedown(function(){
		$(".phonetop").css("display","block");
		$(".pwdlogin").css("display","none");
		$(".phonelogin").css("height","341px");
		$(".phonebtm").css("top","299px")
	})
}

//切换到密码验证登录
function topwdlogin(){
	$(".yanzhengma").click(function(){
//		alert()
		$(".phonetop").css("display","none");
		$(".pwdlogin").css("display","block");
		$(".phonelogin").css("height","301px");
		$(".phonebtm").css("top","260px")
	})
}


//微信微博等图标的精灵图放置
function jltchange(){
	$(".phonebtm ul li").each(function(index,ele){
		console.log(ele,index)
		$(ele).css("backgroundPositionX",-(760+index*32)+"px");
	})
}

//注册格式验证及提交
function regcheck(){
	var flag1=false;
	var flag2=false;
	var flagnamecheck=false;
	$(".phoneinput2").blur(function(){
		flagnamecheck=false;
		flag1=false;
		var reg=/^1[35678]\d{9}$/;
		flag1=reg.test($(this).val());
		if(!flag1){
			$(".pwdtishi").html("手机号格式错误")
			$(this).css("border","1px solid #e31436")
		}else{
			$(".pwdtishi").html("")
			$(this).css("border","")
			
			$.ajax({
				type:"get",
				url:"./php/loginreg.php",
				data:{
						uname:$(".phoneinput2").val(),
						pwd:$(".pwd2").val(),
						typee:"regcheck"
					},
				success:function(res){
					console.log(res);
					if(res=="1"){
						$(".pwdtishi").html("用户名已存在")
						$(".phoneinput2").css("border","1px solid #e31436")
						
					}else if(res=="0"){
						$(".pwdtishi").html("")
						$(".phoneinput2").css("border","")
						flagnamecheck=true;
					}
				}
			});
			
		}
	})
	
	$(".pwd2").blur(function(){
	if(flag1 && flagnamecheck){
		
		flag2=false;
		var reg=/^\w{6,16}$/;
		flag2=reg.test($(this).val());
		if(!flag2){
			$(".pwdtishi").html("密码须由6到16个字符组成，区分大小写")
			$(this).css("border","1px solid #e31436")
		}else{
			$(".pwdtishi").html("")
			$(this).css("border","")
			
		}
	}
	})
	
	$(".logbtn2").mousedown(function(){
		if(flag1 && flag2 && flagnamecheck){
			$.ajax({
				type:"get",
				url:"./php/loginreg.php",
				async:true,
				data:{
					uname:$(".phoneinput2").val(),
					pwd:$(".pwd2").val(),
					typee:"reg"
				},
				success:function(res){
					if(res=="1"){
						alert("注册成功！")
						$(".phoneinput2").val("");
						$(".pwd2").val("");
						$(".login").css("display","block");
						$(".register").css("display","none");
					}else if(res=="0"){
						$(".pwdtishi").html("注册失败！");
					}
				}
			});
			
		}else if($(".phoneinput2").val()=="" || $(".pwd2").val()==""){
			$(".pwdtishi").html("请输入手机号和密码")
		}
	})
}

//切换到登录页面
function tologin(){
	$(".register .title a").mousedown(function(){
		$(".login").css("display","block")
		$(".register").css("display","none")
	})
}

//切换到注册页面
function toreg(){
	$(".phonebtm .quick a").mousedown(function(){
		$(".login").css("display","none")
		$(".register").css("display","block")
	})
}

//切换手机登录与邮箱登录样式
function loginxuxiangka(){
	$(".centercon .outbox  .login ul").on("mouseenter","li",function(){
		$(this).addClass("loginulactive")
//		$(".yes").addClass("loginulactive")
	})
	
	$(".centercon .outbox  .login ul").on("mouseleave","li",function(){
		$(".yes").addClass("loginulactive").siblings().removeClass("loginulactive")
//		$(this).removeClass("loginulactive")
	})
	
	$(".centercon .outbox  .login ul").on("mousedown","li",function(){
		$(this).addClass("yes").siblings().removeClass("yes")
		$(this).addClass("loginulactive")
		       .siblings().removeClass("loginulactive")
		//console.log($(".centercon .outbox .login ol li").eq(2))
		$(".centercon .outbox .login ol>li").eq($(this).index()).addClass("loginolactive")
		                                 .siblings().removeClass("loginolactive")
	})
}
