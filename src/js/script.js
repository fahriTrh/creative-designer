gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// view cursor
const view_cursor = document.querySelector('.view_cursor')
var demo = new CircleType(view_cursor)

// end cursor

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

    gsap.to(view_cursor , {
        left: () => e.clientX - view_cursor.getBoundingClientRect().width / 2,
        top: () => e.clientY - view_cursor.getBoundingClientRect().height / 2,
        duration: .1
    })
})

const hoverable_elements = ['nav .logo', '.menu_icon', '.btn_prima', '.btn_second', '.link', '.prim_menu a'];

hoverable_elements.forEach(selector => {
    let elements = document.querySelectorAll(selector);

    elements.forEach(el => {
        if (el) {
            el.addEventListener('mouseenter', function() {
                gsap.killTweensOf('.custom_cursor');
                gsap.killTweensOf('.custom_cursor_wrap');
    
                gsap.to('.custom_cursor', {
                    scale: 6,
                    duration: 0.2,
                    ease: 'in',
                    delay: 0.1
                });
    
                gsap.to('.custom_cursor_wrap', {
                    scale: 0,
                    duration: 0.2,
                    ease: 'in',
                    delay: 0.1
                });
            });
    
            el.addEventListener('mouseleave', function() {
                gsap.killTweensOf('.custom_cursor');
                gsap.killTweensOf('.custom_cursor_wrap');
    
                gsap.to('.custom_cursor', {
                    scale: 1,
                    duration: 0.2,
                    ease: 'in',
                    clearProps: 'all' // Reset after animation ends
                });
    
                gsap.to('.custom_cursor_wrap', {
                    scale: 1,
                    duration: 0.2,
                    ease: 'in',
                    delay: 0.1,
                    clearProps: 'all'
                });
            });
        }
    })
});


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
const menu = document.querySelector('.menu_icon')
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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
    const xTo = gsap.quickTo(button, 'x', {duration: 0.4, ease: 'elastic.out(0.3, 0.1)'});
    const yTo = gsap.quickTo(button, 'y', {duration: 0.4, ease: 'elastic.out(0.3, 0.1)'});
    
    button.addEventListener('mousemove', function(e) {
        let {clientX, clientY} = e;
        let {width, height, left, top} = button.getBoundingClientRect();
        
        let x = clientX - (left + width / 2);
        let y = clientY - (top + height / 2);
    
        xTo(x);
        yTo(y);
    });
    
    button.addEventListener('mouseleave', function() {
        xTo(0);
        yTo(0);
    });
});

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
        bottom: (convex_height / 2 - 1) * -1
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

const marque = document.querySelector('.marque')
let marque_content = marque.querySelectorAll('span')

cloneContent()

// set marque width
window.requestAnimationFrame(setMarqueWidth)
window.addEventListener('resize', setMarqueWidth)

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

function setMarqueWidth() {
    gsap.set('.marque', {width: '90vw'})
}

// end interactivity for marque


// section three position

window.requestAnimationFrame(setSectionThreePos)
window.addEventListener('resize', setSectionThreePos)

function setSectionThreePos() {
    let convex_height = document.querySelector('.convex').getBoundingClientRect().height
    let concave_height = document.querySelector('.concave').getBoundingClientRect().height
    
    let section_two_height = document.querySelector('.section_two').getBoundingClientRect().height
    
    const work_section = document.querySelector('.work_section')
    
    gsap.set(work_section, {
        marginTop: () => convex_height / 2 + convex_height / 3
    })
}
// end section three position


// work section interactifity

const numbers = document.querySelectorAll('.work_number p')
let text = null

numbers.forEach(number => {
    text = new SplitType(number, {types: 'chars'})
})

const home_work_column = document.querySelectorAll('.home_work_column')

home_work_column.forEach(column => {
    let home_work_visual = column.querySelector('.home_work_visual');

    let text = column.querySelectorAll('.work_number p');
    text = new SplitType(text, {types: 'chars'});

    column.addEventListener('mouseenter', () => {
        gsap.killTweensOf(text.chars); // Pastikan animasi tidak tumpang tindih
        gsap.killTweensOf(home_work_visual);

        gsap.to(text.chars, {
            y: '-100%',
            stagger: 0.11,
            ease: 'in',
            duration: .3,
            delay: .3
        });

        gsap.to(home_work_visual, {
            top: '-25%',
            right: '7.5%',
            opacity: 1,
            ease: 'out'
        });

        gsap.to('.custom_cursor_wrap', {
            scale: 2,
            duration: .3
        })

        gsap.set('.custom_cursor_wrap', {
            opacity: 0
        })

        gsap.to(view_cursor , {
            opacity: 1,
            duration: .5
        })
    });

    column.addEventListener('mouseleave', () => {
        gsap.killTweensOf(text.chars);
        gsap.killTweensOf(home_work_visual);
        gsap.killTweensOf(view_cursor);

        let reversedText = Array.from(text.chars).reverse();
        gsap.to(reversedText, {
            y: '0%',
            stagger: 0.11,
            ease: 'in',
            duration: .3,
            delay: .3
        });

        gsap.to(home_work_visual, {
            top: '100%',
            right: '0%',
            opacity: 0,
            ease: 'in',
            clearProps: 'all'
        });

        gsap.to('.custom_cursor_wrap', {
            scale: 1,
            duration: .3
        })

        gsap.set('.custom_cursor_wrap', {
            opacity: 1
        })

        gsap.set(view_cursor , {
            opacity: 0
        })
    });
});

const home_work_visuals = document.querySelectorAll('.home_work_visual')

const windowWidth = window.innerWidth;

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;

  const moveXImage = (mouseX / windowWidth - 0.5) * 100;
  const moveXParent = (mouseX / windowWidth - 0.5) * 300;

  home_work_visuals.forEach(home_work => {
      gsap.to(home_work, {
        x: moveXParent,
        duration: 0.5,
        ease: "power2.out"
      });

      gsap.to(home_work.querySelector('img'), {
        x: moveXImage,
        duration: 0.3,
        ease: "power2.out"
      });
  })

});

// end work section interactifity


// client interactifity
const clientConcave = document.querySelector('.client_section .concave')

window.requestAnimationFrame(clientConcavePos)
window.addEventListener('resize', clientConcavePos)

gsap.to(clientConcave.querySelector('path'), {
    attr: {
        d: 'm 1 1 v 331.5 h 1440 v -331.5 c -639 102 -816 91 -1440 0 z'
    },
    ease: 'in',
    scrollTrigger: {
        trigger: clientConcave,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
    }
})

function clientConcavePos() {
    let clientConcaveHeight = clientConcave.getBoundingClientRect().height

    gsap.set(clientConcave, {
        bottom: clientConcaveHeight * -1
    })

    gsap.set('.about_section', {
        marginTop: clientConcaveHeight / 2
    })

    // m 1 1 v 331.5 h 1440 v -331.5 c -639 102 -816 91 -1440 0 z
}

// end client interactifity


// about_section interactifity

window.requestAnimationFrame(concaveAboutPosition)

window.addEventListener('resize', concaveAboutPosition)

gsap.to(document.querySelector('.about_section .concave path'), {
    attr: {
        d: 'm 1 1 v 331.5 h 1440 v -331.5 c -562 3 -860 3 -1440 0 z'
    },
    ease: 'in',
    scrollTrigger: {
        trigger: '.about_section .concave',
        start: 'top center',
        end: 'top top',
        scrub: true
    }
})

function concaveAboutPosition() {
    const about_section = document.querySelector('.about_section')
    const concave = about_section.querySelector('.concave')

    let concave_height = concave.getBoundingClientRect().height
    
    gsap.set('footer', {
        marginTop: concave_height / 2
    })
    
    gsap.set(concave, {
        bottom: (concave_height) * -1
    })
}

// end about_section interactifity


// some animation on scroll

const textBottomRightIn = document.querySelectorAll('.textBRIn')
textBottomRightIn.forEach(text => {
    gsap.from(text, {
        y: 5,
        rotate: -5,
        skewY: -15,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: text,
            start: 'top bottom',
            end: 'bottom bottom',
        }
    })
})

const textBottomTopIn = document.querySelectorAll('.txtBTIn')
textBottomTopIn.forEach(text => {
    gsap.from(text, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: text,
            start: 'top bottom',
            end: 'bottom bottom',
        }
    })
})


const client_cards = document.querySelectorAll('.client_card')


client_cards.forEach(card => {
    gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1, 
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom bottom',
        }
    })
})


const expandIn = document.querySelectorAll('.expandIn')

expandIn.forEach(el => {
    gsap.from(el, {
        width: 0,
        duration: 1,
        ease: 'in',
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom bottom',
        }
    })
})

// end some animation on scroll


// animation for pre load 

window.requestAnimationFrame(convexLoadPosition)
window.addEventListener('resize', convexLoadPosition)

function convexLoadPosition() {
    const convex = document.querySelector('.pre_load .convex')

    let convex_height = convex.getBoundingClientRect().height
    
    gsap.set(convex, {
        bottom: (convex_height / 2) * -1
    })
}

window.addEventListener("load", function() {
    onLoadedAnim()
});

function onLoadedAnim() {

    const rotates = document.querySelectorAll('.pre_load .logo .rotate')
    const heroText = document.querySelectorAll('.hText');
    const buttons = document.querySelectorAll('.buttons button')
    const pre_load_height = document.querySelector('.pre_load').getBoundingClientRect().height
    
    // rotates.forEach(rotate => {
        gsap.to(rotates, {
            opacity: 0,
            rotateX: -75,
            rotate: -3,
            delay: 1,
            y: -200,
            onComplete: function() {
                const tl = gsap.timeline()
                
                tl.to('.pre_load', {
                    bottom: '100%',
                },0)

                tl.to('.pre_load .convex path', {
                    attr: {
                        d: 'm 1 1 v 331.5 h 1440 v -331.5 c -562 3 -860 3 -1440 0 z'
                    },
                },0)

                tl.to('.pre_load .convex', {
                    bottom: '0%',
                    duration: .25,
                    delay: .25
                }, 0)

                gsap.set(document.body, {
                    position: 'static'
                })

                tl.to('.pre_load', {
                    opacity: 0,
                    display: 'none',
                })
            }
        })
    // })

    gsap.from(heroText, {
        y: 100,
        rotateX: -75,
        rotate: -3,
        stagger: 0.1,
        delay: 1.5,
        opacity: 0
    });

    gsap.from(buttons, {
        delay: 2,
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1
    })
}

// end animation for pre load