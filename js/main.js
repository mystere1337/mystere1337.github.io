const node = document.getElementById('cmd');

node.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
        // prints prompt like real terminals
        print("<b>></b> " + document.getElementById('cmd').value);
        if (document.getElementById('cmd').value === '') {
            return;
        } else if (document.getElementById('cmd').value === 'help') {
            printHelp();
        } else if (document.getElementById('cmd').value === 'about') {
            printAbout();
        } else if (document.getElementById('cmd').value === 'clear') {
            clear();
        } else {
            printUnknown();
        }

        // reset input value to clear command from field
        document.getElementById('cmd').value = '';
    }
})

function print(text, error) {
    var newDiv = document.createElement("div");
    var newParagraph = document.createElement("p");
    error ? newParagraph.classList.add("console-print", "error") : newParagraph.classList.add("console-print");
    newParagraph.innerHTML = text;
    newDiv.appendChild(newParagraph);
    var currentDiv = document.getElementById('command-line');
    var parentDiv = document.getElementById("window-body");
    parentDiv.insertBefore(newDiv, currentDiv);
}

function printUnknown() {
    print("unknown command. try <b>help</b>", true)
}

function printHelp() {
    print("help: see all available commands\nabout: information about me\nprojects: projects i'm working on\nclear: clears the console\nsocial: prints my social links", false)
}

function printAbout() {
    print("hi, i'm mystere1337, a french computer science student, interested in reverse-engineering, hacking, and windows internals. this is my portfolio.", false)
}

function clear() {
    document.querySelectorAll('.console-print').forEach(e => e.remove());
}