$(document).ready(function(){
            let i = 0;
            let count = $(".number>li").length; //count = 4;

            $(".next").click(function(){
                if(i == count-1){
                    i = 0;
                }else{
                    i++;
                }
                show();
            });

            function show(){
                $(".number>li").stop().fadeOut();
                $(".number>li").eq(i).stop().fadeIn();
                $(".mocup>li").stop().fadeOut();
                $(".mocup>li").eq(i).stop().fadeIn();
                $(".txt1>div").stop().fadeOut();
                $(".txt1>div").eq(i).stop().fadeIn();
                $(".txt2>div").stop().fadeOut();
                $(".txt2>div").eq(i).stop().fadeIn();
                $(".btn>p").stop().fadeOut();
                $(".btn>p").eq(i).stop().fadeIn();
            }
});