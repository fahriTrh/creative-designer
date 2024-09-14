window.addEventListener('mousemove', (e) => {
    gsap.to('.custom_cursor' , {
        left: () => e.clientX - 5,
        top: () => e.clientY - 5,
        duration: .1
    })
    gsap.to('.custom_cursor_wrap' , {
        left: () => e.clientX - 30,
        top: () => e.clientY - 30,
        duration: .3
    })
})

const hoverable_elements = ['.logo', '.menu', '.btn_prima', '.btn_second']

hoverable_elements.forEach(element => {

    let el = document.querySelector(element)

    el.addEventListener('mouseenter', function() {
        gsap.to('.custom_cursor', {
            scale: 6,
            duration: .2,
            ease: 'in',
            delay: .1
        })
        gsap.to('.custom_cursor_wrap', {
            scale: 0,
            duration: .2,
            ease: 'in',
            delay: .1
        })
    })
    el.addEventListener('mouseleave', function() {
        gsap.to('.custom_cursor', {
            scale: 1,
            duration: .2,
            ease: 'in'
        })
        gsap.to('.custom_cursor_wrap', {
            scale: 1,
            duration: .2,
            ease: 'in',
            delay: .1
        })
    })
})

// interactivity for logo
const logo = document.querySelector('.logo')

let secondLine = logo.children[1].firstElementChild
let secondHeading = logo.children[1].lastElementChild

let firstLine = logo.children[0].firstElementChild
let firstHeading = logo.children[0].lastElementChild

gsap.set(secondLine, {
    right: '60%',
})

gsap.set(secondHeading, {
    x: '50%'
})

logo.addEventListener('mouseenter', () => {
    gsap.to(secondLine, {
        right: '100%',
        duration: .3,
        ease: 'power3.in'
    })
    gsap.to(secondHeading, {
        x: 0,
        duration: .3,
        ease: 'power3.in'
    })

    gsap.to(firstLine, {
        right: '60%',
        duration: .3,
        ease: 'power3.in'
    })
    gsap.to(firstHeading, {
        x: '50%',
        duration: .3,
        ease: 'power3.in'
    })
})

logo.addEventListener('mouseleave', () => {
    gsap.to(secondLine, {
        right: '60%',
        duration: .3,
        ease: 'power3.in'
    })
    
    gsap.to(secondHeading, {
        x: '50%',
        duration: .3,
        ease: 'power3.in'
    })

    gsap.to(firstLine, {
        right: '100%',
        duration: .3,
        ease: 'power3.in'
    })
    gsap.to(firstHeading, {
        x: 0,
        duration: .3,
        ease: 'power3.in'
    })
})
// end interactivity for logo

// interactivity for menu
const menu = document.querySelector('.menu')
const lines = menu.querySelectorAll('.wrap .line')

menu.addEventListener('mouseenter', function() {
    gsap.to(menu.querySelector('.wrap'), {
        left: '20%',
        right: '20%',
        duration: .2,
        ease: 'in',
        backgroundColor: 'black' 
    })
    
})

menu.addEventListener('mouseleave', function() {
    gsap.to(menu.querySelector('.wrap'), {
        left: 0,
        right: 0,
        duration: .2,
        ease: 'in',
        backgroundColor: 'rgb(239, 236, 236)'
    })
    
})
// end interactivity for menu