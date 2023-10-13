$(document).ready(function() {

    if (document.documentElement.offsetWidth >= 768) {
        $(".opcion:not(.activa)").on("mouseenter", function(){
            $(this).clearQueue();
            $(".vista").clearQueue();
            $(".seccion", this).clearQueue();
            $(".puntos", this).clearQueue();
            $(".lista").clearQueue();
            $(".puntos", this).animate({"font-size":0}, 100);
            $(".seccion", this).animate({"font-size":"1.25rem"}, 300);
            $(this).css("color","#ffd100");
            $(".vista").animate({width:"80%"}, 300);
            $(".lista").animate({"width":"50%"}, "fast");
        });
    
        $(".opcion:not(.activa)").on("mouseleave", function(){
            $(this).clearQueue();
            // $(".vista").clearQueue();
            $(".seccion", this).clearQueue();
            $(".puntos", this).clearQueue();
            $(".lista").clearQueue();
            $(".seccion",this).animate({"font-size":0}, 300);
            $(".puntos", this).animate({"font-size":"1.25rem"}, 300, function(){$(".lista").animate({width:"30%"}, 300)});
            $(this).animate({"font-size":"25px"}, 300);
            $(this).css("color","#fff");
            $(".vista").animate({width:"90%"}, 300);
            // $(".lista").animate({width:"30%"}, 300);
        });
    }

    const links = ["","comparacion","usuarios","usos","modelos","recursos","futuro"];

    $(".opcion").each(function(i){

        if (links[i] != "") {
            $(this).click(function(){window.location.href="./"+links[i]+".html"});
        } else {
            $(this).click(function(){window.location.href="./"})
        }
        
        $(".activa").off("click");

    });



});