var typed = new Typed(".auto", {
    strings: ["MERN Developer", "web developer", "front-end"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
function newFunction() {
    const hamburger = document.getElementsByClassName('hamburger')[0];
    const navLinks = document.getElementsByClassName('navlinks')[0];
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
newFunction();
gsap.from(".navbar .navlogo img,.navbar .navlinks li,.hamburger,#header p,#header .imageProfilo", {
    y:-100,
    delay:4,
    opacity:0,
    stagger:0.3,
})

gsap.from("#image", {
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#image",
        scroller:"body",
        marker:true,
        start:"top 90%"
    }
})
gsap.from("#header",{
    scrollTrigger:{
        trigger:"#header",
        scroller:"body",
        marker:true,
        start:"top 90%",
    }
})
gsap.from(".total-details h2,.total-details p,.total-details button,.bold", {
    x:-100,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    scrollTrigger:{
        trigger:".total-details h2,.total-details p,.total-details button,.bold",
        scroller:"body",
        marker:true,
        start:"top 70%",
    }
})
gsap.from("#services .box p", {
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#services .box p",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from("#services .box h2", {
    y:-100,
    opacity:0,
    delay:0.5,
    scrollTrigger:{
        trigger:"#services .box h2",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from("#services i", {
    y:100,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#services i",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from("#services .container h2", {
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#services .container h2",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from(".projects #heading h3,.projects #heading p,.projectimg,.projectdetails1 p,.projectdetails1 h2,.projectdetails1 a", {
    x:-100,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".projects #heading h3,.projects #heading p,.projectimg,.projectdetails1 p,.projectdetails1 h2,.projectdetails1 a",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from("#skills .head h2,#skills .head p,.skill-bar p,.bar", {
    x:100,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#skills .head h2,#skills .head p,.skill-bar p,.bar",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
gsap.from(".contact .contactpage h2,.contactpage p,.contactus lable,.contactus input,.contactus img,.contactus button", {
    y:100,
    opacity:0,
    stagger:0.3,
    delay:0.7,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".contact .contactpage h2,.contactpage p,.contactus lable,.contactus input,.contactus img,.contactus button",
        scroller:"body",
        marker:true,
        start:"top 70%"
    }
})
const t1 = gsap.timeline()
t1.to(".top", {
    x:"0",
    delay:0.4,
    duration:1,
    opacity:2,
})
t1.to(".middle", {
    x:"0",
    delay:0.4,
    duration:1,
    opacity:2,
})
function time(){
    var a = 0
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader .down h4").innerHTML = a+"%"
        }
        else{
            a = 100
            document.querySelector("#loader .down h4").innerHTML = a+"%"
        }
        
    },300)
}
time();
t1.to("#loader", {
    top: "-200vh",
    duration:5,
})
