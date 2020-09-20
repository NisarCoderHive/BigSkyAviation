window.addEventListener("scroll",function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);
});

function togglemenu(){
    var togglemenu = document.querySelector('.toggle');
    togglemenu.classList.toggle('active');
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active')
}