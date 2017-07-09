$(function(){
        /*社团概览*/
    
        /*社团概览*/
        //function movenext(){
        //    $("#carousel_ul").animate({left:"-=15.1px"},100,function(){
        //    	$(".carousel_view ul>li").eq(0).appendTo($(".carousel_view ul"));
        //    });             
        //}
        //var timer=setInterval(movenext,100);
        /*鼠标移入停止*/
        //鼠标移入
        //$("#carousel_ul").mouseover(function(){
            //clearInterval(timer);
        //});
        //鼠标移开
        //$("#carousel_ul").mouseleave(function(){
            //timer=setInterval(movenext,100);
        //});
        /*个人风采部分动画*/
        $(window).scroll(function(){
            /*个人风采标题*/
            if($(window).scrollTop() >= 2000){
                $("h1.personal_mien_title,span.personal_mien_titleEn").animate({"opacity":"1","margin-top":"20px"},500);
            }
            /*个人风采第一部分*/        
            if($(window).scrollTop() >= 2500){
                $(".personal_1 .personal_content").animate({"left":"0px"},500).animate({"width":"50%"},500);
                $(".personal_1 .personal_content_inner").animate({"opacity":"1","left":"50%"},1000);
                $(".personal_1 .personal_content_li:nth-child(1)").delay(1000);
                $(".personal_1 .personal_content_li:nth-child(2)").delay(1500);
                $(".personal_1 .personal_content_li:nth-child(3)").delay(2000);
                $(".personal_1 .personal_content_li").animate({"width":"850px","padding":"10px"},500);
                $(".personal_1 .personal_content_li_inner").delay(2500).animate({"opacity":"1"},500);
                $(".personal_1 li.personal_content_li:nth-child(1) .personal_content_li_shadow").delay(2500);
                $(".personal_1 li.personal_content_li:nth-child(2) .personal_content_li_shadow").delay(3000);
                $(".personal_1 li.personal_content_li:nth-child(3) .personal_content_li_shadow").delay(3500);
                $(".personal_1 .personal_content_li_shadow").animate({"width":"0"},500);
            }
            /*个人风采第二部分*/
            if($(window).scrollTop() >= 3500){
                $(".personal_2 .personal_content").animate({"left":"50%"},500).animate({"width":"50%"},500);
                $(".personal_2 .personal_content_inner").animate({"opacity":"1","left":"50%"},1000);
                $(".personal_2 .personal_content_li:nth-child(1)").delay(1000);
                $(".personal_2 .personal_content_li:nth-child(2)").delay(1500);
                $(".personal_2 .personal_content_li:nth-child(3)").delay(2000);
                $(".personal_2 .personal_content_li").animate({"width":"850px","padding":"10px"},500);
                $(".personal_2 .personal_content_li_inner").delay(2500).animate({"opacity":"1"},500);
                $(".personal_2 li.personal_content_li:nth-child(1) .personal_content_li_shadow").delay(2500);
                $(".personal_2 li.personal_content_li:nth-child(2) .personal_content_li_shadow").delay(3000);
                $(".personal_2 li.personal_content_li:nth-child(3) .personal_content_li_shadow").delay(3500);
                $(".personal_2 .personal_content_li_shadow").animate({"width":"0"},500);
            }
            /*个人风采第三部分*/        
            if($(window).scrollTop() >= 4500){
                $(".personal_3 .personal_content").animate({"left":"0px"},500).animate({"width":"50%"},500);
                $(".personal_3 .personal_content_inner").animate({"opacity":"1","left":"50%"},1000);
                $(".personal_3 .personal_content_li:nth-child(1)").delay(1000);
                $(".personal_3 .personal_content_li:nth-child(2)").delay(1500);
                $(".personal_3 .personal_content_li:nth-child(3)").delay(2000);
                $(".personal_3 .personal_content_li").animate({"width":"850px","padding":"10px"},500);
                $(".personal_3 .personal_content_li_inner").delay(2500).animate({"opacity":"1"},500);
                $(".personal_3 li.personal_content_li:nth-child(1) .personal_content_li_shadow").delay(2500);
                $(".personal_3 li.personal_content_li:nth-child(2) .personal_content_li_shadow").delay(3000);
                $(".personal_3 li.personal_content_li:nth-child(3) .personal_content_li_shadow").delay(3500);
                $(".personal_3 .personal_content_li_shadow").animate({"width":"0"},500);
            }
            /*个人风采第四部分*/
            if($(window).scrollTop() >= 5500){
                $(".personal_4 .personal_content").animate({"left":"50%"},500).animate({"width":"50%"},500);
                $(".personal_4 .personal_content_inner").animate({"opacity":"1","left":"50%"},1000);
                $(".personal_4 .personal_content_li:nth-child(1)").delay(1000);
                $(".personal_4 .personal_content_li:nth-child(2)").delay(1500);
                $(".personal_4 .personal_content_li:nth-child(3)").delay(2000);
                $(".personal_4 .personal_content_li").animate({"width":"850px","padding":"10px"},500);
                $(".personal_4 .personal_content_li_inner").delay(2500).animate({"opacity":"1"},500);
                $(".personal_4 li.personal_content_li:nth-child(1) .personal_content_li_shadow").delay(2500);
                $(".personal_4 li.personal_content_li:nth-child(2) .personal_content_li_shadow").delay(3000);
                $(".personal_4 li.personal_content_li:nth-child(3) .personal_content_li_shadow").delay(3500);
                $(".personal_4 .personal_content_li_shadow").animate({"width":"0"},500);
            }
            

            
        }); 
    });