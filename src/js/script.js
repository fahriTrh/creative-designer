window.addEventListener('mousemove', (e) => {
    gsap.to('.custom_cursor' , {
        left: () => e.clientX - 5,
        top: () => e.clientY - 5,
        duration: .1
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

    gsap.to('.custom_cursor', {
        scale: 6,
        duration: .3,
        ease: 'in'
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

    gsap.to('.custom_cursor', {
        scale: 1,
        duration: .3,
        ease: 'in'
    })
})