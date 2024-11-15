gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

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

logo.addEventListener('click', function() {
    const homeUrl = this.getAttribute('data-home');
    window.location.href = homeUrl
});
// end interactivity for logo

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
                    duration: 1
                },0)

                tl.to('.pre_load .convex path', {
                    attr: {
                        d: 'm 1 1 v 331.5 h 1440 v -331.5 c -562 3 -860 3 -1440 0 z'
                    },
                    duration: 2
                },0)

                tl.to('.pre_load .convex', {
                    bottom: '0%',
                    duration: 1,
                    delay: .5
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
        delay: 2.3,
        opacity: 0
    });

    gsap.from(buttons, {
        delay: 2.8,
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.1
    })
}

// end animation for pre load


// mouse interactifity
const view_cursor = document.querySelector('.view_cursor')
let circle = new CircleType(view_cursor)

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

const hoverable_elements = ['nav .logo', '.menu_icon', '.link', '.work_arrow'];

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
// end mouse interactifity


// animation for menu
document.querySelector('.menu_icon').addEventListener('click', function() {

    const cardDesk = document.querySelector('.card_desk')
    
    if (cardDesk.classList.contains('active')) {
        cardDesk.classList.remove('active')
    }

    const tl = gsap.timeline()
    
    if (this.classList.contains('active')) {
        gsap.killTweensOf('.offset_menu .sub_menu');
        gsap.killTweensOf('.offset_menu');
        gsap.killTweensOf('.offset_menu .convex');
        gsap.killTweensOf('.offset_menu .studies_projects');
        gsap.killTweensOf('.offset_menu .prim_menu li');

        tl.to('.offset_menu .sub_menu', {
            x: '130%',
            ease: 'power2.in',
            duration: 1
        }, 0)
        tl.to('.offset_menu .prim_menu li', {
            scaleY: 0.7,
            opacity: 0,
            y: 100,
            ease: 'in',
            duration: 1
        }, 0)
        tl.to('.offset_menu .studies_projects', {
            opacity: 0
        }, 0)
        tl.to('.offset_menu', {
            bottom: '100%',
            ease: 'power2.out',
            duration: 1
        }, 1)
        tl.to('.offset_menu .convex', {opacity: 0, delay: .8}, 1)
        this.classList.remove('active')

        setTimeout(() => {
            cardDesk.classList.add('active')
        }, 2000);
    } else {
        gsap.killTweensOf('.offset_menu .sub_menu');
        gsap.killTweensOf('.offset_menu');
        gsap.killTweensOf('.offset_menu .convex');
        gsap.killTweensOf('.offset_menu .studies_projects');
        gsap.killTweensOf('.offset_menu .prim_menu li');
        
        tl.to('.offset_menu', {
            bottom: 0,
            ease: 'power2.in',
            duration: 1
        }, 0)
        tl.to('.offset_menu .convex', {opacity: 1}, 0)
        tl.addLabel('sub')
        tl.to('.offset_menu .sub_menu', {
            x: 0,
            ease: 'power2.out',
            duration: 1
        }, 'sub')
        tl.to('.offset_menu .studies_projects', {
            opacity: 1,
            delay: .5
        }, 'sub')
        tl.to('.offset_menu .prim_menu li', {
            scaleY: 1,
            opacity: 1,
            ease: 'in',
            y: 0,
            duration: 1
        }, 'sub')
        this.classList.add('active')
    }
})

window.requestAnimationFrame(convexMenuPosition)
window.addEventListener('resize', convexMenuPosition)

function convexMenuPosition() {
    const convex = document.querySelector('.offset_menu .convex')

    let convex_height = convex.getBoundingClientRect().height
    
    gsap.set(convex, {
        bottom: (convex_height / 2 - 1) * -1
    })
}

// end animation for menu


// animation for primary menu

// const primaryMenu = document.querySelectorAll('.offset_menu .prim_menu a')
const containers = document.querySelectorAll('.offset_menu .prim_menu li')
// let textTo = new SplitType(primaryMenu, {types: 'chars'});

containers.forEach(container => {
    let text = container.querySelectorAll('a')
    text = new SplitType(text, {types: 'chars'});
    const view_cursor = document.querySelector('.view_cursor')
    
    container.addEventListener('mouseenter', function() {
        gsap.killTweensOf(text.chars)
        gsap.killTweensOf(view_cursor)
        gsap.killTweensOf('.custom_cursor_wrap')
        gsap.to(text.chars, {
            y: '-100%',
            stagger: 0.1,
            ease: 'in',
            duration: .3,
            delay: .1
        });

        gsap.to('.custom_cursor_wrap', {
            scale: 2,
            duration: .3
        })

        gsap.set('.custom_cursor_wrap', {
            opacity: 0
        })

        view_cursor.innerHTML = 'view → the → page → view → the → page →'
        let circle = new CircleType(view_cursor)

        gsap.to(view_cursor , {
            opacity: 1,
            duration: .5
        })
        
    })

    container.addEventListener('mouseleave', function() {
        gsap.killTweensOf(text.chars)
        gsap.killTweensOf(view_cursor)
        gsap.killTweensOf('.custom_cursor_wrap')
        let reversedText = Array.from(text.chars).reverse()
        gsap.to(reversedText, {
            y: '0%',
            stagger: 0.1,
            ease: 'in',
            duration: .3,
            delay: .1
        });

        gsap.to('.custom_cursor_wrap', {
            scale: 1,
            duration: .3
        })

        gsap.set('.custom_cursor_wrap', {
            opacity: 1
        })

        view_cursor.innerHTML = 'view → the → case → view → the → case →'
        let circle = new CircleType(view_cursor)

        gsap.set(view_cursor , {
            opacity: 0
        })
    })
})


// end animation for primary menu


// set card desk position

setCardDesk()

function setCardDesk() {
    const cardDesk = document.querySelector('.card_desk')
    const elementPosition = cardDesk.getBoundingClientRect().top + window.scrollY

    gsap.set(cardDesk, {top: elementPosition})
}

// end set card desk position


// function for card contents position

cardContentsPos('.work_text p')
cardContentsPos('.work_sub h3')
cardContentsPos('.card_desk .work_name h2')

function cardContentsPos(elements) {
    contents = document.querySelectorAll(elements)

    contents.forEach((content, i) => {
        gsap.set(content, {
            top: () => 100 * i + '%'
        })
    })
}
// end function for card contents position


// animation on card scroll

const mm = gsap.matchMedia()

mm.add('(min-width: 768px)', function() {
    
    let currentY = 0;

    let currentCard = 1;
    
    const works = document.querySelectorAll('.work_container .work_card');
    
    works.forEach(work => {
        gsap.to('.moveY', {
            y: `${currentY}%`,
            scrollTrigger: {
                trigger: work,
                start: 'center top',
                end: 'bottom top',
                onEnter: () => {
                    currentY -= 100;
                    currentCard += 1

                    if (currentCard < works.length) {
                        gsap.set('.is_bottom', {display: 'block'})
                        gsap.set('.is_bottom', {
                            attr: {
                                href: '#' + works[currentCard].id
                            }
                        })
                    } else {
                        gsap.set('.is_bottom', {display: 'none'})
                    }

                    if (currentCard > 1) {
                        gsap.set('.is_top', {display: 'block'})

                        gsap.set('.is_top', {
                            attr: {
                                href: '#' + works[currentCard - 2].id
                            }
                        })
                    } else {
                        gsap.set('.is_top', {display: 'none'})
                    }

                    gsap.to('.moveY', { y: `${currentY}%`, duration: 0.5, stagger: .01, ease: 'in' });
                },
                onLeaveBack: () => {
                    currentY += 100;
                    currentCard -= 1

                    if (currentCard < works.length) {
                        gsap.set('.is_bottom', {display: 'block'})
                        gsap.set('.is_bottom', {
                            attr: {
                                href: '#' + works[currentCard].id
                            }
                        })
                    } else {
                        gsap.set('.is_bottom', {display: 'none'})
                    }

                    if (currentCard > 1) {
                        gsap.set('.is_top', {display: 'block'})

                        gsap.set('.is_top', {
                            attr: {
                                href: '#' + works[currentCard - 2].id
                            }
                        })
                    } else {
                        gsap.set('.is_top', {display: 'none'})
                    }

                    gsap.to('.moveY', { y: `${currentY}%`, duration: 0.5, stagger: .01, ease: 'in' });
                }
            }
        });
    });

})


// end animation on card scroll


document.querySelectorAll('a[href^="#"]').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('href')?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
            // Hitung posisi target dan offset
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            const offset = 15 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 15 rem dalam pixel
            const scrollToPosition = targetPosition - offset; // Mengurangi offset dari posisi target

            // Scroll ke posisi yang dihitung
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth' // Mengatur scroll menjadi smooth
            });
        }
        
    });
});




window.requestAnimationFrame(concaveMainPosition)

window.addEventListener('resize', concaveMainPosition)

gsap.to(document.querySelector('main .concave path'), {
    attr: {
        d: 'm 1 1 v 331.5 h 1440 v -331.5 c -562 3 -860 3 -1440 0 z'
    },
    ease: 'in',
    scrollTrigger: {
        trigger: 'main .concave',
        start: 'top center',
        end: 'top top',
        scrub: true
    }
})

function concaveMainPosition() {
    const main = document.querySelector('main')
    const concave = main.querySelector('.concave')

    let concave_height = concave.getBoundingClientRect().height

    
    gsap.set(concave, {
        bottom: (concave_height - 1) * -1
    })

    gsap.set('footer', {
        marginTop: concave_height / 2
    })
}




// interactifity for image

const cards = document.querySelectorAll('.work_image')

cards.forEach(card => {
    const images = card.querySelectorAll('img'); // Memilih semua gambar di dalam work_image

    images.forEach((image, index) => {
        // Gambar pertama lebih lambat, gambar kedua lebih cepat
        const duration = 0.5 - index * 0.1; // Durasi lebih singkat, tapi gambar pertama tetap lebih lambat
        const xTo = gsap.quickTo(image, 'x', {duration: duration, ease: 'power1.out'}); // Easing yang lebih halus
        const yTo = gsap.quickTo(image, 'y', {duration: duration, ease: 'power1.out'});

        card.addEventListener('mousemove', function(e) {
            let {clientX, clientY} = e;
            let {width, height, left, top} = card.getBoundingClientRect();

            // Mengurangi jarak pergerakan untuk efek yang lebih halus
            let x = (clientX - (left + width / 2)) / 10; // Mengurangi intensitas pergerakan
            let y = (clientY - (top + height / 2)) / 10;

            // Gerakan gambar dengan durasi yang berbeda sesuai index
            xTo(x);
            yTo(y);
        });

        card.addEventListener('mouseleave', function() {
            // Kembalikan posisi gambar ke titik nol dengan durasi yang berbeda
            xTo(0);
            yTo(0);
        });
    });
});
// end interactifity for image


// interactivity for buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
    const xTo = gsap.quickTo(button, 'x', {duration: 0.3, ease: 'elastic.out(0.2, 0.08)'});  // Adjusted easing
    const yTo = gsap.quickTo(button, 'y', {duration: 0.3, ease: 'elastic.out(0.2, 0.08)'});  // Adjusted easing
    
    button.addEventListener('mousemove', function(e) {
        let {clientX, clientY} = e;
        let {width, height, left, top} = button.getBoundingClientRect();
        
        let x = (clientX - (left + width / 2)) * 0.3;  // Reduced movement scale
        let y = (clientY - (top + height / 2)) * 0.3;  // Reduced movement scale
    
        xTo(x);
        yTo(y);
    });
    
    button.addEventListener('mouseleave', function() {
        xTo(0);
        yTo(0);
    });

    button.addEventListener('click', function() {
        const pageUrl = this.getAttribute('data-page')

        if (pageUrl) {
            window.location.href = pageUrl
        }
    })
    
});
// end interactivity for buttons