var is_changed = 0;
if(!localStorage.getItem("theme")) {
    localStorage.setItem("theme", 0);
}
else{
    is_changed = localStorage.getItem("theme");
    change_theme();
}
function change_theme(){
    if(is_changed == 0){
        var root = document.querySelector(":root"); 
        root.style.setProperty("--main-color", "#222831");
        root.style.setProperty("--text-color", "#FFF");
        setTimeout(function(){ 
            document.getElementById("discord").src = "media/discord_white.png";
            document.getElementById("github").src = "media/github_white.png";
            document.getElementById("email").src = "media/email_white.png";
        }, 1); 
        is_changed = 1
        localStorage.setItem("theme", 0);
        console.log(is_changed);
    }
    else if(is_changed == 1){
        var root = document.querySelector(":root");
        root.style.setProperty("--main-color", "##FFF");
        root.style.setProperty("--text-color", "#000");
        setTimeout(function(){ 
            document.getElementById("discord").src = "media/discord_black.png";
            document.getElementById("github").src = "media/github_black.png";
            document.getElementById("email").src = "media/email_black.png";
        }, 1); 
        is_changed = 0
        localStorage.setItem("theme", 1);
        console.log(is_changed);
    }
}