define(['jquery'],function($){
    $("#box>h3").click(function(){
		//找当前对象后的ul二级菜单
		var $sub=$(this).next(),
			$uls=$("#box>ul");                                                           
			$uls.slideUp();
		//判断二级菜单是否显示的
		if($sub.is(":visible")){
			//隐藏二级菜单
			$sub.slideUp();
		}else{
			//显示二级菜单
			$sub.slideDown();
		}
	})
})