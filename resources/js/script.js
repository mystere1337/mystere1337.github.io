var home = 1;
var theme = 0; // 0 = light | 1 = dark

function switchTheme() {
    var root = document.documentElement;;

    if (theme === 0) {
        root.style.setProperty('--color-background', "#2b2d42");
        root.style.setProperty('--color-accent', "#ef233c");
        root.style.setProperty('--color-important', "#d90429");
        root.style.setProperty('--color-title', "#edf2f4");
        root.style.setProperty('--color-text', "#8D99AE");
        theme = 1;
    } else {
        root.style.setProperty('--color-background', "#edf2f4");
        root.style.setProperty('--color-accent', "#ef233c");
        root.style.setProperty('--color-important', "#d90429");
        root.style.setProperty('--color-title', "#2b2d42");
        root.style.setProperty('--color-text', "#8D99AE");
        theme = 0;
    }
}

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