const navMot = () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', ()=> {
        menu.classList.toggle('nav-active');

        hamburger.classList.toggle('toggle');
    });

    
}

navMot();