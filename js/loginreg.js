$(document).ready(function(){
	loginxuxiangka();
	toreg();
	tologin();
	regcheck();
	jltchange();
	
})


//微信微博等图标的精灵图放置
function jltchange(){
	$(".phonebtm ul li").each(function(index,ele){
		console.log(ele,index)
		$(ele).css("backgroundPositionX",-(760+index*32)+"px");
	})
}

//注册格式验证
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
						
					}else if(res=="0"){
						$(".pwdtishi").html("")
						flagnamecheck=true;
					}
				}
			});
			
		}
	})
	$(".pwd2").blur(function(){
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
