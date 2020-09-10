var navbar = document.querySelector('.navbar');
var toggleIcon = document.querySelector('.toggle-collapse');

toggleIcon.addEventListener('click', function(){
    navbar.classList.toggle('nav-collapse');
});

bgSite = document.querySelector('.bg-site');
bgTop = bgSite.offsetTop;
window.addEventListener('scroll', function(){
    if(window.scrollY>0){
        navbar.classList.add('nav-scroll');
    }
    else{
        navbar.classList.remove('nav-scroll');
        
    }
});
function navlink(){
    navbar.classList.remove('nav-collapse');
}



function scrollabt(){
    var aboutusimg = document.querySelector('.abt-right');
    var abthead = document.querySelector('.abt-head');
    var aboutustxt = document.querySelector('.abt-left');
    
    abthead.classList.add('abtheadonload');
    aboutusimg.classList.add("abtonload");
    aboutustxt.classList.add("abttxtonload");
    
}
window.addEventListener('load',scrollabt);

function scrollAppear(){
    var btn = document.getElementsByClassName('btn')[1];
    var height = btn.getBoundingClientRect().top;
    var screenpos = window.innerHeight/1.3;

    if(height<screenpos){
        btn.classList.add("onscroll");
    }
    var catehead = document.getElementsByClassName('cate-head')[0];
    var height = catehead.getBoundingClientRect().top;
    if(height<screenpos){
        catehead.classList.add("scrollon");
    }

    var catecards = document.getElementsByClassName("cards")[0];
    var height = catecards.getBoundingClientRect().top;
    if(height<screenpos){
        catecards.classList.add("scrollleft");
    }

    var workhead = document.getElementsByClassName('works-head')[0];
    var height = workhead.getBoundingClientRect().top;
    if(height<screenpos){
        workhead.classList.add("scrolling");
    }

    for(var i = 0; i<10; i++){
        var workcard = document.getElementsByClassName('work-card')[i];
        var height = workcard.getBoundingClientRect().top;
        if(height<screenpos){
        workcard.classList.add("scrollcard");
    }
    }
}



window.addEventListener('scroll', scrollAppear);