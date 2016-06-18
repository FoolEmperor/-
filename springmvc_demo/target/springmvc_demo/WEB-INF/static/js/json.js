$(function(){
	
	$("input[type=button]").click(function(){
		alert(1);
		$.ajax({
			url:"json/senddata",
			type:"get",
			data:{
				id:1001,
				name:"张君宝",
				sex:"男"
			},
			dataType:"json",
			success:function(data){
				alert(data);
			},
			error:function(message){
				alert(message);
			}
		});
	});
	
});