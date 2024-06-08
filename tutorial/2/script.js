gsap.from("#page1 #box",{
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360
})

gsap.from("#page2 #box",{
    scale: 0,
    duration: 2,
    rotate: 360,
    scrollTrigger:{
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        scrub: 3   // It will animate the animation smoothly on mouse wheel rotation
    }
})

gsap.to("#page3 h1",{
    transform: "translateX(-65%)",
    scrollTrigger:{
        trigger: "#page3",    //Due to pin trigger should be parent
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 3,
        pin: true  //It will static parent page and apply animation
    }
})

