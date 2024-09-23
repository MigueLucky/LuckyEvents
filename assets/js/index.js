$(function(){
    console.log("reeady");
    $('.recuContra').on('mouseenter', function() {
        $(this).css("color", "#00FFFF");
    });
    
    $('.recuContra').on('mouseleave', function() {
        $(this).css("color", "#1D2424");
    });
    
    $('.botonIni').on('click',function(){
        
    })
    
    $('botonReg').on('click', function(){
    
    })
    
    $('recuContra').on('click', function(){
    
    })
    
    function posicionElementos(){
        let altoBody = $('body').height();
        let anchoBody = $('body').width();
        
        let altoMain = $('main').height();
        let anchoMain = $('main').width();
        let anchoRecuContra = $("main > p:last-of-type").width();

        $("main").css("top", (altoBody/2 - altoMain/2));
        $("main").css("left", (anchoBody/2 - anchoMain/2));
        $("main > p:last-of-type").css("left", (anchoMain/2 - anchoRecuContra/2))

        $(".esquinaIzq div").css({
            "border-left": (anchoBody/2) + "px solid transparent",
            "border-bottom": (altoBody/2) + "px solid #EEFFFF"
        })

        $(".esquinaDer").css("left", anchoBody/2)
        $(".esquinaDer div").css({
            "border-right": (anchoBody/2) + "px solid transparent",
            "border-top": (altoBody/2) + "px solid #EEFFFF"
        })
    }

    $(window).on('resize', function(){
        posicionElementos();
    })

    posicionElementos();
})