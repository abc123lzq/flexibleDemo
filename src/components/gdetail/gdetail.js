            

 var area =document.getElementById('scrollBox');
    var con1 = document.getElementById('con1');
    var con2 = document.getElementById('con2');
    con2.innerHTML=con1.innerHTML;
    function scrollUp(){
    if(area.scrollTop>=con1.offsetHeight){
        area.scrollTop=0;
    }else{
        area.scrollTop++;
    }
    }                
    var time = 50;
    setInterval(scrollUp,time);

function dTab(gul,gli,gdiv,backImg){
    this.gul = document.getElementById(gul);
}


    $(function () {
        var Imglength = $(".detail_img_in img").length;
        var Imgwidth = $(".detail_img_in li").width();
        $(".detail_img_in").width(Imgwidth * Imglength + Imglength * 7 + 1);
        var myScroll;
        if ($("#wrapper").length > 0) {
            myScroll = new IScroll('#wrapper', {
                eventPassthrough: true,
                scrollX: true,
                scrollY: true,
                preventDefault: false,
                hScrollbar: true,
                scrollbars: 'custom'
            });
        }
    });


    //tab切换 
function setTab(name,cursel,n){
    for(i=1;i<=n;i++){
       var menu=document.getElementById(name+i);
       var con=document.getElementById("con_"+name+"_"+i);
       menu.className=i==cursel?"hover":"";
       con.style.display=i==cursel?"block":"none";
    }
}
    
$(function(){
        //点击星星
    $(".action_fb_a_img img").on('click',function(){
        var t='<img src="../../assets/img/star_1.png" />';
        var x='<img src="../../assets/img/star_2.png" />';
        var e=$(".action_fb_a_img").find("img").index(this);
        var str='';
        for(var i=0;i<=e;i++){
            str+=t;
        }
        for(var i=0;i<4-e;i++){
            str+=x;
        }
        lvstar_level=e+1;
        $(".action_fb_a_img").html(str);
    })
})





//外部点击回复
function p3SpanClick(thisObj){      
      if($(thisObj).parent().next(".p5").css("display")=="block"){
           $(thisObj).removeClass("span_sel");
           $(thisObj).parent().next(".p5").hide();
           
      }else{
          $(thisObj).addClass("span_sel");
          $(thisObj).parent().next(".p5").show(); 
      }
}


    

