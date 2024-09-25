$(function(){
    $('html').on('mouseenter', '.boton', function() {
        $(this).css("background-color", "#00FFFF");
    });
    
    $('html').on('mouseleave', '.boton', function() {
        $(this).css("background-color", "#3D9999");
    });
    
    $('html').on('mouseenter', '.volverAtras', function() {
        $(this).css("color", "#00FFFF");
    });
    
    $('html').on('mouseleave', '.volverAtras', function() {
        $(this).css("color", "#1D2424");
    });
})