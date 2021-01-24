gsap.registerPlugin(ScrollToPlugin);

const btn = document.querySelectorAll('.btn')
const middle = document.querySelector('.middle')

$("#sidemenu_toggle").on("click", function () {
    $(".site-nav").toggleClass("nav-active");
}),$(".site-nav li a").on("click", function () {
    $(".site-nav").removeClass("active");
});


btn.forEach((item, index)=>{
    let element = ''
    item.addEventListener('click',()=>{
        if(index == 0){
            element = '.middle'
        }else if(index == 1){
            element = '.last-div'
        }else{
            console.log(3);
            return
        }
        jumpTo(element)
        console.log(element);
    })
})



function jumpTo(y){
    gsap.to('#home', {duration: 2, scrollTo: {y: y}, ease: "power2"});
}