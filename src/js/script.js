gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

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
        backgroundColor: 'white' 
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


// interactivity for hero buttons

const buttons = document.querySelectorAll('.buttons button')

buttons.forEach((button) => {
    
    const xTo = gsap.quickTo(button, 'x', {duration: 1, ease: 'elastic.out(1, 0.3)'})
    const yTo = gsap.quickTo(button, 'y', {duration: 1, ease: 'elastic.out(1, 0.3)'})
    
    button.addEventListener('mousemove', function(e) {
        let {clientX, clientY} = e
        let {width, height, left, top} = button.getBoundingClientRect();
        
        let x = clientX - (left + width / 2)
        let y = clientY - (top + height / 2)
    
        // gsap.to(button, {x, y})
        xTo(x)
        yTo(y)
    })
    
    button.addEventListener('mouseleave', function() {
        // gsap.to(button, {x: 0, y: 0})
        xTo(0)
        yTo(0)
    })
})


// end interactivity for hero buttons

// interactivity for concave

window.requestAnimationFrame(concavePosition)

window.addEventListener('resize', concavePosition)

gsap.to(document.querySelector('.concave path'), {
    attr: {
        d: 'm 1 1 v 331.5 h 1440 v -331.5 c -562 3 -860 3 -1440 0 z'
    },
    ease: 'in',
    scrollTrigger: {
        trigger: '.concave',
        start: 'top bottom',
        end: 'bottom center',
        scrub: true
    }
})

function concavePosition() {
    const section_two = document.querySelector('.section_two')
    const concave = document.querySelector('.concave')

    let concave_height = concave.getBoundingClientRect().height

    gsap.set(section_two, {
        marginTop: concave_height
    })
    
    gsap.set(concave, {
        top: (concave_height - 10) * -1
    })
}
// end interactivity for concave

// interactivity for convex

window.requestAnimationFrame(convexPosition)

window.addEventListener('resize', convexPosition)

gsap.to(document.querySelector('.convex path'), {
    attr: {
        d: 'm 1 1 v 331.5 h 1440 v -331.5 c -550.025 181.087 -865.715 188.255 -1440 0 z'
    },
    ease: 'in',
    scrollTrigger: {
        trigger: '.convex',
        start: 'top center',
        end: 'bottom top',
        scrub: true,
    }
})

function convexPosition() {
    const convex = document.querySelector('.convex')

    let convex_height = convex.getBoundingClientRect().height
    
    gsap.set(convex, {
        bottom: (convex_height - 1) * -1
    })
}
// end interactivity for convex


// interactivity for sect_two_content

window.requestAnimationFrame(sect_two_contentPos)

window.addEventListener('resize', sect_two_contentPos)

function sect_two_contentPos() {
    const sect_two_content = document.querySelector('.sect_two_content')
    gsap.set(sect_two_content, {
        top: () => {
            return document.querySelector('.concave').getBoundingClientRect().height / 2 * -1
        } 
    })
}

// end interactivity for sect_two_content


// interactivity for marque

const mm = gsap.matchMedia()

const marque = document.querySelector('.marque')
let marque_content = marque.querySelectorAll('span')

cloneContent()

window.requestAnimationFrame(marqueAnimation)
window.addEventListener('resize', marqueAnimation)

function marqueAnimation() {
    marque_content = marque.querySelectorAll('span')
    
    let marque_content_length = 0
    
    marque_content.forEach(mqc => {
        marque_content_length += mqc.getBoundingClientRect().width
    })
    
    marque_content.forEach(mqc => {
        gsap.to(mqc, {
            x: () => (marque_content_length / 2) * -1,
            scrollTrigger: {
                trigger: marque,
                scrub: 2,
                start: 'top bottom',
                end: 'bottom top',
            }
        })
    })
}


function cloneContent() {
    marque_content.forEach(mqc => {
        let newContent = mqc.cloneNode(true)
        marque.append(newContent)
    })
    
    marque_content.forEach(mqc => {
        let newContent = mqc.cloneNode(true)
        marque.append(newContent)
    })
}

// end interactivity for marque


// section three position

window.requestAnimationFrame(setSectionThreePos)
window.addEventListener('resize', setSectionThreePos)

function setSectionThreePos() {
    let convex_height = document.querySelector('.convex').getBoundingClientRect().height
    
    let section_two_height = document.querySelector('.sect_two_content').getBoundingClientRect().height
    
    const sect_three = document.querySelector('.section_three')
    
    gsap.set(sect_three, {
        top: () => section_two_height + convex_height + 40
    })
}

// end section three position


// work section number interactifity

const numbers = document.querySelectorAll('.work_number p')
let text = null

numbers.forEach(number => {
    text = new SplitType(number, {types: 'chars'})
})

const home_work_column = document.querySelectorAll('.home_work_column')

home_work_column.forEach(column => {
    let text = column.querySelectorAll('.work_number p')
    text = new SplitType(text, {types: 'chars'})

    column.addEventListener('mouseenter', () => {
        gsap.to(text.chars, {
            y: '-100%',
            stagger: 0.11,
            ease: 'in',
            // duration: .3
        })
    })

    column.addEventListener('mouseleave', () => {
        let reversedText = Array.from(text.chars).reverse();
        gsap.to(reversedText, {
            y: '0%',
            stagger: 0.11,
            ease: 'in',
            // duration: .3
        })
    })
})
// end work section number interactifity