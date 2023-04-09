window.addEventListener('DOMContentLoaded', function (){
    window.addEventListener('scroll', function (){
        const header = document.querySelector('nav');
        header.classList.toggle('sticky', window.scrollY > 0)
    })
    const MenuBtn = document.querySelector('#scroll');
    const nav = document.querySelector('.n');
    const navitems = document.querySelectorAll('.n a');
    MenuBtn.addEventListener('click', () =>{
        MenuBtn.classList.toggle('active')
            nav.classList.toggle('active')
    })
    navitems.forEach(navig => {
        navig.addEventListener('click', () =>{
            MenuBtn.classList.remove('active')
            nav.classList.remove('active')
        })

    })
    window.addEventListener('scroll', () =>{
        let rev = document.querySelectorAll('.reveal');
        for (let i = 0; i < rev.length;i++){
            let windowheigt = window.innerHeight;
            let  revealTop = rev[i].getBoundingClientRect().top;
            let revpoint = 50;
        }
        if (revealTop < windowheiht - revpoint){
            rev[i].classList.add('active')
        }
    })
})
AOS.init();