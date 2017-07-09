$(function(){
    /*回到顶部*/
    $(".returnTop,.return_top").click(function(){
        $("html,body").animate({scrollTop:"0px"},800);
    });
    /*返回前页*/
    $(".return_pre").click(function(){
        window.history.back(-1);
    });
  //身份判定
	$.ajax({
		type:'POST',
		url:'getstudent',
		dataType:'json',
		contentType: "application/json; charset=utf-8", 
		success:function(data){       			
			$.each(data.stu,function(index,value){
				//身份判定
				var personal_name = value.personal_name;
				var personal_header = value.personal_header.split("WebContent\\")[1].replace(/\\/g,"/");
				//alert(personal_header);
        		if(personal_name != ""){
                    $(".login_header_ul").css("display","block");
                    $(".nav_ul").css("display","none");
                    $("#user_name").html(personal_name);
                    $("#user_header_img").attr("src",personal_header);                    
                }else{
                    $(".login_header_ul").css("display","none");
                    $(".nav_ul").css("display","block");
                }  										
			})      			
		}
	});
});
//主页加载动画
window.addEventListener("load",function(){
    var loading_animation = setTimeout(function(){      
	    $("#loading").fadeToggle(1000);	 
    },5000);
     
});
window.onload = function(){
    var remove_loading = setTimeout(function(){
        $("#loading").remove();
    },6000);
}
//子页加载动画
window.addEventListener("load",function(){
    var loading_animation = setTimeout(function(){      
	    $("#loading_pagination").fadeToggle(1000);	 
    },1000);
     
});
window.onload = function(){
    var remove_loading = setTimeout(function(){
        $("#loading_pagination").remove();
    },4000);
}
//列表出现动画函数（使用此函数需要导入jq库，对使用对象设置position定位如relative，同时需要对使用的对象设置right为一定的负值如-1000px，同时调用li_show动画）;
/*
//列表从右出现动画*
@keyframes li_show{
    100%{
        opacity:1;
        right:0;
    }
}
*/
function li_show(ele){
    $(ele).each(function(index,value){
        if(index >= 1){
            let pre_li = $(this).prev().css("right");
            let int_pre_li = parseInt(pre_li);
            let li_right = int_pre_li - 500;
            $(this).css("right",li_right);
        }
        
    });
}
//列表从下出现动画函数（使用此函数需要导入jq库，对使用对象设置position定位如relative，同时需要对使用的对象设置right为一定的负值如-1000px，同时调用li_show动画）;
function li_show_up(ele){
    $(ele).each(function(index,value){
        if(index >= 1){
            let pre_li = $(this).prev().css("bottom");
            let int_pre_li = parseInt(pre_li);
            let li_right = int_pre_li - 500;
            $(this).css("bottom",li_right);
        }
        
    });
}



