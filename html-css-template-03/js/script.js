let scrollTop =  document.querySelector('#scroll-top')

window.onscroll = function(){
    if(window.scrollY >= 600){
        scrollTop.style.display = 'flex'
    }else{
        scrollTop.style.display = 'none'
    }
}