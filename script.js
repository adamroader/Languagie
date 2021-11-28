$(document).ready(function () {

    //E-mail Ajax Send
    // $(".modal__form").submit(function () { //Change
    //     var th = $(this);
    //     $.ajax({
    //         type: "POST",
    //         url: "src/mail.php", //Change
    //         data: th.serialize()
    //     }).done(function () {
    //         alert("Thank you!");
    //         setTimeout(function () {
    //             // Done Functions
    //             th.trigger("reset");
    //         }, 1000);
    //     });
    //     return false;
    // });



    let navbar = document.querySelector('.header__nav').querySelectorAll('.nav__link');
    let burger2 = document.querySelector('.burger__icon');
    let nav = document.querySelector(".nav");
    let nav2 = document.querySelector(".nav__items");
    let sections = document.querySelectorAll('.section');
    let course = document.querySelector('.course');
    let main = document.querySelector('#main');
    let spec = document.querySelector('#spec')
    let spec2 = document.querySelector('#spec2')

    //--------------burger--------------------//





    course.addEventListener('click', function (e) {
        e.preventDefault()
        window.scroll({
            left: 0,
            top: document.querySelector(`#subjects`).offsetTop + main.offsetTop,
            behavior: 'smooth'
        })
    })


    navbar.forEach(element => {

        element.addEventListener('click', function (e) {
            e.preventDefault()

            window.scroll({
                left: 0,
                top:
                    document.querySelector(`${element.getAttribute('href')}`).offsetTop + main.offsetTop,
                behavior: 'smooth'
            })

            // navbar.forEach(link => link.classList.remove('active2'))
            // this.classList.add('active2')
            nav.classList.remove('vis')
            nav2.classList.remove('vis2')
            burger2.classList.remove('active')
        })
    });

    spec.addEventListener('click', function () {
        window.scroll({
            left: 0,
            top: document.querySelector('.header__logo').offsetTop,
            behavior: 'smooth'
        })




    })

    burger2.addEventListener('click', function () {
        nav.classList.toggle('vis');
        nav2.classList.toggle('vis2');
        this.classList.toggle('active');

    })


    //-------------modal-------------//

    document.querySelector('.btn-white').addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden';


    })

    document.querySelector('.modal__close').addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('body').style.overflow = 'visible';


    })



});



