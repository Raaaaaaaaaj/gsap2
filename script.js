var tl = gsap.timeline()


tl.from("nav img, h3, nav-2 h3, #nav-3 h4, #nav-3 button",{
    y:-100,
    delay:.3,
    duration:1,
    opacity:0,
    stagger:0.2
})

tl.from(".h1, .h2, .h3",{
    y:100,
    opacity:-1,
    duration:2,
    delay:.1,
    stagger:.4
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.3,
    delay:.2,
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:10,
    repeat:-1,
    delay:.5,
    yoyo:true
})