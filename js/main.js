const node = document.getElementById('cmd');

node.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
        // prints prompt like real terminals
        print("<b>></b> " + document.getElementById('cmd').value);
        if (document.getElementById('cmd').value === '') {
            return;
        } else if (document.getElementById('cmd').value === 'help') {
            print("help: see all available commands\nabout: information about me\nprojects: projects i'm working on\nclear: clears the console\nsocial: prints my social links", false)
        } else if (document.getElementById('cmd').value === 'about') {
            print("hi, i'm mystere1337, a french computer science student, interested in reverse-engineering, hacking, and windows internals. this is my portfolio.", false)
        } else if (document.getElementById('cmd').value === 'projects') {
            print("stealth: (private) a stealthy game hacking solution. (only for educational purposes)\nmystere1337.github.io: this portfolio.\nvaulth: an app using NFTs to virtually authenticate physical objects.\n");
        } else if (document.getElementById('cmd').value === 'social') {
            print("discord: mystère#2936\ngithub: @mystere1337\nsteam: id/mystere1337\n")
        } else if (document.getElementById('cmd').value === 'clear') {
            clear();
        } else {
            print("unknown command. try <b>help</b>", true)
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

function clear() {
    document.querySelectorAll('.console-print').forEach(e => e.remove());
}