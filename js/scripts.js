//========================================================
// Marker do menu selecionado.
var marker = document.querySelector('#marker');
var item = document.querySelectorAll('nav ul li a');

function indicator(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
    link.addEventListener('mouseenter', (e)=>{
        indicator(e.target);
    })
})

//========================================================