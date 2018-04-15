$(document).ready(function(){
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