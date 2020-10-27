//========================================================
// Marker do menu selecionado.
// var marker = document.querySelector('#marker');
// var item = document.querySelectorAll('nav ul li a');

// function indicator(e){
//     marker.style.left = e.offsetLeft+"px";
//     marker.style.width = e.offsetWidth+"px";
// }

// item.forEach(link => {
//     link.addEventListener('mouseenter', (e)=>{
//         indicator(e.target);
//     })
// })

//========================================================
// MOBILE
$('nav.mobile').click(function(){
    var listaMenu = $('nav.mobile ul');
    if(listaMenu.is(':hidden') == true){
        var icone = $('.botao-menu-mobile').find('i');
        icone.removeClass('fa-bars');
        icone.addClass('fa-times');
        listaMenu.slideToggle();
    }
    else{
        var icone = $('.botao-menu-mobile').find('i');
        icone.removeClass('fa-times');
        icone.addClass('fa-bars');
        listaMenu.slideToggle();
    }
})