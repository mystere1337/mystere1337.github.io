function hideAllDiv() {
    var a = document.getElementById("contact-container");
    
    a.style.display = "none";
}

function showHome() {
    document.documentElement.scrollTop = 0;
    setTimeout(function() { hideAllDiv(); }, 400);
}

function showContactForm() {
    var x = document.getElementById("contact-container");

    hideAllDiv();

    x.style.display = "block";
}