//DİSABLE CONTEXTMENU
$(document).on("contextmenu", function (e) {        
    e.preventDefault();
});
//DİSABLE F12&CTRL+SHİFT+I
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {   
        return false;
    } else if (event.ctrlKey && event.keyCode == 67){
        return false;
    }
});