gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", () => {

    const sections = gsap.utils.toArray("section");

    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
            trigger: '.flowers__wrapper',
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            start: 'top top',
            end: 3000,
        }
    })

    gsap.to('.navbar__logo', {
        fontSize: '0.5rem',
        top: '2rem',
        scrollTrigger: {
            triger: '.navbar__logo',
            start: 'top top',
            end: 1500,
            scrub: 0.5,
        }
    })




    document.querySelectorAll(".flowers").forEach(el =>{
        gsap.to(el.querySelector(".flowers__description"), {
            x: 0,
            y: 0,
            scrollTrigger: {
                containerAnimation: scrollTween,
                trigger: el.querySelector(".flowers__description"),
                start: 'top bottom',
                end: '+=1000',
                scrub: 0.5,
            }
        })



            gsap.to(el.querySelector(".block"), {
                x: 0,
                ease: 'none',
                scrollTrigger: {
                    containerAnimation: scrollTween,
                    trigger: el.querySelector(".block"),
                    start: 'top bottom',
                    end: '+=' + window.innerWidth,
                    scrub: 0.5,
                }
            })

            gsap.to(el.querySelector("img"), {
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    containerAnimation: scrollTween,
                    trigger: el.querySelector("img"),
                    start: 'top bottom',
                    end: '+=50%',
                    scrub: 0.5,
                }
            })

            gsap.to(el.querySelector(".flowers__name"), {
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    containerAnimation: scrollTween,
                    trigger: el.querySelector(".flowers__name"),
                    start: 'top bottom',
                    end: '+=100%',
                    scrub: 0.5,
                }
            })


    })
})