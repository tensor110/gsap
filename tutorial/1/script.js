// gsap.to() 
gsap.to("#box1",{         // In place of 'to' we can also use 'from' based on condition
    x: 800,
    duration: 2,
    delay: 1,
    rotate: 180,
    backgroundColor: 'blue',
    borderRadius: '50%',
    scale: 0.5,
    repeat: 2,    //It will repeat for 3 times if repeat == -1 then it will repeat for infinite times
    yoyo: true    // It will do forward and backward animation
})

// gsap.from() 
gsap.from("#box2 h1",{
    opacity: 0,
    duration: 1,
    y: 30,
    delay: 1,
    stagger: 0.3   // 0.3 is in second i.e. after 0.3 second second h1 will come. If stagger == -1 then h1s will come in reverse order
})

// gsap.timeline() 
var t1 = gsap.timeline()
t1.to("#timeline1",{
    x: 800,
    duration: 2,
    delay: 1,
})
t1.to("#timeline2",{
    x: 800,
    duration: 2,
})
t1.to("#timeline3",{
    x: 800,
    duration: 2,
})