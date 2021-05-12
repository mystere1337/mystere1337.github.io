var home = 1;

function hideAllDiv() {
    var a = document.getElementById("contact-container");
    var b = document.getElementById("skills-container");
    
    a.style.display = "none";
    b.style.display = "none";
    home = 1;
}

function showHome() {
    if (home === 0) {
        document.documentElement.scrollTop = 0;
        setTimeout(function() { hideAllDiv(); }, 500);
        home = 1;
    }
}

function showSkills() {
    if (home === 1) {
        var x = document.getElementById("skills-container");
        x.style.display = "block";
        window.location.href='#skills-container';
        home = 0;
    } else {
        showHome();
        setTimeout(function() { showSkills(); }, 500);
    }
}

function showContactForm() {
    if (home === 1) {
        var x = document.getElementById("contact-container");
        x.style.display = "block";
        window.location.href='#contact-container';
        home = 0;
    } else {
        showHome();
        setTimeout(function() { showContactForm(); }, 500);
    }
}