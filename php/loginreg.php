<?php
	header("content-type:text/html;charset=utf-8");
	include "public.php";
	
	$type=$_GET["typee"];
//	echo $type;
	if($type=="regcheck"){
		$uname=$_GET["uname"];
		$pwd=$_GET["pwd"];
		
		$sql="select * from user where uname='$uname'";
		$res=mysql_query($sql);
		$arr=mysql_fetch_array($res);
		
		if($arr){
			echo 1;
		}else{
			echo 0;
		}
		
	}
	
	if($type=="reg"){
		$uname=$_GET["uname"];
		$pwd=$_GET["pwd"];
		
		$sql="insert into user(uname,pwd) values('$uname','$pwd')";
		$res=mysql_query($sql);
		
		if($res){
			echo 1;
		}else{
			echo 0;
		}
	}
	
	
	
	
	
	
	
	
	
?>