

const navbar = document.querySelector('.nav-bar');

 window.addEventListener( 'scroll', () =>  {
      

    if(scrollY >=  180) {
        navbar.classList.add('bgg');
    }
    else {
        navbar.classList.remove('bgg');
    }
 }

 )