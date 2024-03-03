

window.onscroll = () => {
    
   
    if(window.scrollY < 700) {
        document.title = "!RAYANE";
    }
    else if(window.scrollY >= 700 && window.scrollY < 1520) {
        document.title = "RAYANE|ABOUT";
    }
    else if(window.scrollY >= 1520 && window.scrollY < 2000) {
        document.title = "RAYANE|PROJECTS";
    }
    else if(window.scrollY >= 2000 ) {
        document.title = "RAYANE|CONTACT";
    }
}