<?php
	header("content-type:text/html;charset=utf-8");
	//设置事件源
	$db = mysql_connect("localhost","root","root");
	//连接事件源
	mysql_select_db("wangyikaola",$db);
	//设置字符编码
	mysql_query("set names utf-8");
?>