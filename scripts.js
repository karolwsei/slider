(function(){
    //Deklaracja zmiennej do sterowania animacją, uchwytów oraz odpalenie animacji
    let animation = true;
    let imgs = document.querySelectorAll( 'img' );
    let incPhoto = document.querySelector( '#inc' );

    window.onload = function () { requestAnimationFrame( animate ) };

    //Dodanie funkcji dla każdego zdjęcia na powiększenie każdego z nich po najechaniu myszką i po wyjściu usunięcie
    imgs.forEach( ( img ) => {
        img.style.left = '0px';
        img.addEventListener( 'mouseenter', getBigger );
        img.addEventListener( 'mouseleave', restartAnimation );
    })

    //Deklaracja funkcji zwiększającej zdjęcie, klonowanie wybranego zdjęcia, wyrzucenie do rodzica, ukrycie slidera
    function getBigger( event ){
        if(incPhoto.children.length == 0){
            animation = false;
            let child = event.target.cloneNode();
            child.classList.remove('img');
            child.classList.add('inc-img');
            incPhoto.appendChild(child);
        }
    }

    //Deklaracja funkcji restartu animacji, usunięcie zdjęcia zwiększonego, przywrócenie slidera
    function restartAnimation(){
        animation = true;
        incPhoto.removeChild(incPhoto.children[0]);
    }    

    //Funkcja animacji
    function animate(){
        if ( animation ){
            for( let y = 0; y < 6; y++){
                
                if( imgs[y].offsetLeft <= -imgs[y].width ) {
                    imgs[y].style.left = `${ (5 - y) * imgs[y].width -4}px`
                } else {
                    imgs[y].style.left = (parseInt(imgs[y].style.left) - 2) + 'px';
                }
            }
        }
        requestAnimationFrame( animate );
    }
})();