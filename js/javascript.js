'use strict';

// nav
function openNav(){
    document.getElementById("mynav").style.left="0%";
}
function closeNav(){
    document.getElementById("mynav").style.left="-100%";
}

// slide
var ind = 1;
viewSlide(ind);

function pSlide(n){
    viewSlide(ind += n);
}

setInterval(autoSlide, 5000);
function viewSlide(n){
    var i, slides;
    slides = document.getElementsByClassName("slidein");
    if(n > slides.length) ind = 1;
    if(n < 1) ind = slides.length;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        slides[i].className = "slidein";
    }
    slides[ind-1].style.display="block";
    slides[ind-1].className += " fade";
}

function autoSlide(){
    ind++;     
    viewSlide(ind);
}

// 시간
setInterval(gTime, 1000);
function gTime(){
   var dt = new Date();
   var yr = dt.getFullYear();
   var mth = dt.getMonth()+1;
   var gdt = dt.getDate();
   var hour = dt.getHours();
   var minu = dt.getMinutes();
   var sec = dt.getSeconds();

    document.getElementsByClassName('dt')[0].innerHTML = yr+"."+mth+"."+ gdt +" <span>"+hour+ "시 " +minu+ "분 " +sec+"초</span>";
}

// 공지 배너
function vl(n){
    let page = document.getElementById("page");
    let supportBoxa = document.querySelector(".support-boxa");
    let supportBoxb = document.querySelector(".support-boxb");
    if(n){
        //page 0의 action 을 지우고 support-boxa action을 지운다.
        //page 1에 action 을 넣고 support-boxb action을 추가한다.
        page.children[0].classList.remove("action");
        page.children[1].classList.add("action");
        supportBoxa.classList.remove("act");
        supportBoxb.classList.add("act");
    }else{
        page.children[1].classList.remove("action");
        page.children[0].classList.add("action");
        supportBoxb.classList.remove("act");
        supportBoxa.classList.add("act");
    }
}



// // json rankContent
// const rankContent = document.getElementById('rankContent');
// fetch('../json/rankContent.json')
// .then(resolve => resolve.json())
// .then(rs => {
//     let rnode = "";
//     for(let s of rs.list){
//         var ssnode = "";
//         for(let x in)
//     }
// })


// top
window.addEventListener('scroll', function(){
    let nowScroll =  document.scrollingElement.scrollTop;  
    //scrollingElement.scrollTop 스크롤된곳의 위치값
    if(nowScroll > 600) {
        document.getElementById("top").style.display = 'flex';
    }
    if(nowScroll == 0) {
        document.getElementById("top").style.display = 'none';
    }
});