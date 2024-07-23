$(function(){

    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })

    var n = 0;
    setInterval(function(){
        if(n==2){
            n=0;
        }else{
            n++;
        }

        $(".left_move").animate({left : n*(-800) +"px"},500)
    
    },2500) //setInterval

    // 슬라이드 넘기는 또 다른 방법 (변수X)
    // setInterval(function(){
    //     $(".left_move").animate({left : "-800px"}, 500, function(){
    //         $(".left_move").append($(".left_move li").eq(0))
    //         $(".left_move").css({left : "0"})
    //     })//animate
    // } , 3000)


    //popup

    $(".p_click").click(function(){
        $(".popup").show();
    })
    
    $('.close').click(function(){
        $(".popup").hide();

    })




}) //j