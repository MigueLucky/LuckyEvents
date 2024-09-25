$(function(){
    $('main').on('mouseenter', '.recuContra', function() {
        $(this).css("color", "#00FFFF");
    });
    
    $('main').on('mouseleave', '.recuContra', function() {
        $(this).css("color", "#1D2424");
    });
    
    $('main').on('click', '.botonIni', function(){
        $("main").html("");

        $("main").append("<p>Tus planes están en camino... ¡Esperamos que estés listo!</p>");
        $("main").append("<p class='volverAtras'>↩Volver atras</p>");
        $("main").append("<input type='email' placeholder='Correo electrónico'>");
        $("main").append("<input type='password' placeholder='Contraseña'>");
        $("main").append("<p class='boton botonIniciarSesion'>Enviar</p>");



        posicionElementos()
    })

    $('main').on('click', '.botonReg', function(){
        $("main").html("");

        $("main").append("<p>Comienza a crear y compartir tus mejores planes.</p>");
        $("main").append("<p class='volverAtras'>↩Volver atras</p>");
        $("main").append("<input type='text' placeholder='Nombre'>");
        $("main").append("<input type='email' placeholder='Correo electrónico'>");
        $("main").append("<input type='password' placeholder='Contraseña'>");
        $("main").append("<p class='boton botonRegistrarse'>Enviar</p>")

        

        posicionElementos()
    })
    
    $('main').on('click', '.recuContra', function(){
        $("main").html("");

        $("main").append("<p>Introduce el correo electrónico para restablecer la contraseña:</p>");
        $("main").append("<p class='volverAtras'>↩Volver atras</p>");
        $("main").append("<input type='email' placeholder='Correo electrónico'>");
        $("main").append("<p style='display: none; color: red;' class='mensajeCorreoError'>Por favor, introduce un correo electrónico válido.</p>");
        $("main").append("<p class='boton botonRecuInput'>Enviar</p>")
        $("main").append("<p style='display: none' class='mensajeCorreoBien'>Si el correo electrónico tiene una cuenta asociada, recibiras un email donde podras restablecer tu contraseña.</p>");

        $(".botonRecuInput").off().on("click", function(){
            let email = $("main input").val();

            if (email) {
                $(".mensajeCorreoError").hide();
                $(".mensajeCorreoBien").show();
            } else {
                $(".mensajeCorreoBien").hide();
                $(".mensajeCorreoError").show();
            }
        })

        posicionElementos()
    })

    $('main').on('click', '.volverAtras', function(){
        $("main").html("");

        $("main").append("<p>Ingresa para descubrir y planificar experiencias inolvidables.</p>");
        $("main").append("<div/>");
        $("main div").append("<p class='boton botonIni'>Iniciar sesion</p>");
        $("main div").append('<p class="boton botonReg">Registrarse</p>');
        $("main").append("<p class='recuContra'>¿Olvidaste tu contraseña?</p>");

        posicionElementos()
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