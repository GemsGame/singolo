document.addEventListener("click", event => {

    if(event.target.id === "hamburger") {
        document.getElementById("hmenu").style.display = 'block';
        document.getElementById("logo").style.display = 'none';
    }

    if(event.target.id === "hamburger-inside") {
        document.getElementById("hmenu").style.display = 'none';
        document.getElementById("logo").style.display = 'block';
    }
    
    
})