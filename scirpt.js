var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",function(e){
    cursor.style.cssText = "left : " + e.clientX + "px; top: " + e.clientY + "px;"
});
const navigation = document.querySelector('.navigation')
const menu = document.querySelector('#menu')
const close = document.querySelector('#close')

menu.addEventListener("click",()=>{
    navigation.style.right = "0";
    navigation.style.transition = "0.4s ease"
})
close.addEventListener("click",()=>{
    navigation.style.right = "-120%"
    navigation.style.transition = "0.4s ease"
})