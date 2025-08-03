
    
    const bSolucion = document.querySelector(' .b-solucion');
    const solucion1 = document.querySelector(' .solucion1');

    bSolucion.addEventListener('click', function(){
        
        solucion1.classList.toggle('visible');
        if(solucion1.classList.contains('visible')){
            bSolucion.textContent = "Ocultar Solucion";
        }
        else{
            bSolucion.textContent = "Mostrar Solución";
        }
    })

