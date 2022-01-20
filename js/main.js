const node = document.getElementById('cmd');

node.addEventListener("keydown", ({ key }) => {
    if (key === "Enter") {
        // prints prompt like real terminals
        print("<b>></b> " + document.getElementById('cmd').value);
        if (document.getElementById('cmd').value === '') {
            return;
        } else if (document.getElementById('cmd').value === 'help') {
            print("<b>help</b>: see all available commands\n<b>about</b>: information about me\n<b>projects</b>: projects i'm working on\n<b>clear</b>: clears the console\n<b>social</b>: prints my social links", false)
        } else if (document.getElementById('cmd').value === 'about') {
            print("hi, i'm <b>mystere1337</b>, a french computer science student, interested in reverse-engineering, hacking, and windows internals. this is my portfolio. i'm currently working on a few notable projects, type <b>projects</b> to learn more about them.", false)
        } else if (document.getElementById('cmd').value === 'projects') {
            print("<b>stealth</b>: a game hacking solution using Windows OS internals to simulate HID.\n<b>mystere1337.github.io</b>: This website.\n<b>vaulth</b>: a platform using blockchain to virtually authenticate physical and virtual works of art.\n");
        } else if (document.getElementById('cmd').value === 'social') {
            print("<b>discord</b>: mystere#2936\n<b>github</b>: @mystere1337\n<b>steam</b>: id/mystere1337\n<b>soundcloud</b>: @hyperwavmusic\n")
        } else if (document.getElementById('cmd').value === 'clear') {
            clear();
        } else {
            print("unknown command. type <b>help</b> to list all available commands.", true)
        }

        // reset input value to clear command from field
        document.getElementById('cmd').value = '';
        document.getElementById("cmd").focus();
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