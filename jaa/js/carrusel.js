$(document).ready(function() {
    function iniciarCarrusel(carruselId) {
        const contenidos = [
            [
                "Realidad Aumentada", "Realidad Virtual"
            ],
            [
                ["En autos","En la industria","En los juegos","En el inmobiliario","En la moda"],
                ["En el cine","En la industria","En el inmobiliario","En los juegos","En la meditación"]
            ]
        ];
        
        let idCont = 0;

        let currentIndex = 0;
        let carrusel = $('#' + carruselId);
        let texto = $(carrusel.siblings()[0]);
        let fotos = carrusel.find('.foto');
        let ocupado = false;

        function mostrarFoto(index) {
            ocupado = true;
            fotos.eq(currentIndex).fadeOut(function(){fotos.eq(index).fadeIn(); ocupado=false});
            
            if (texto.is("#t1")) {idCont=0;}
            else {idCont=1;}

            texto.find("h2").text(contenidos[0][idCont]);
            texto.find("p").text(contenidos[1][idCont][index])
            
            currentIndex = index;
        }

        carrusel.find('.ant').click(function() {
            var newIndex = (currentIndex - 1 + fotos.length) % fotos.length;
            if (!ocupado) mostrarFoto(newIndex);
        });

        carrusel.find('.sig').click(function() {
            var newIndex = (currentIndex + 1) % fotos.length;
            if (!ocupado) mostrarFoto(newIndex);
        });

        mostrarFoto(currentIndex);
    }

    iniciarCarrusel('c1');
    iniciarCarrusel('c2');
});
