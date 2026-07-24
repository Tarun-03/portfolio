const terminalBody = document.getElementById("terminal-body");
const terminalInput = document.getElementById("terminal-input");

const commands = {
    help: `
Available Commands

about
skills
education
experience
projects
contact
clear
`,

    about: `
I'm Tarun S.

Final Year Information Technology Student
VIT Vellore

Interested in:
• Java
• Full Stack Development
• Machine Learning
• Cloud Computing
`,

    skills: `
Languages
- Java
- Python
- C++
- JavaScript
- SQL

Frontend
- HTML
- CSS
- JavaScript

Backend
- Node.js
- Express.js

Database
- MySQL
- MongoDB

Cloud
- AWS
- Git
`,

    education: `
VIT Vellore

B.Tech Information Technology

2023 - 2027

`,

    experience: `
VALSCO Technology  Aug - Oct '25
Frontend Developer Intern

-------------------------

ScientiFlow  May - Jul '25
Frontend Developer Intern

-------------------------

OCF Avadi  Jun - Jul '25
Visitor Management System
`,

    projects: `
1. Burnout Prediction

2. Skin Cancer Prediction

3. PCOD Prevention

4. ConnectHub
`,

    contact: `
Email:
taruns@example.com

GitHub:
Tarun-03

LinkedIn:
Tarun S
`
};

terminalInput.focus();

terminalInput.addEventListener("keydown", function (e) {

    if (e.key !== "Enter") return;

    const cmd = terminalInput.value.trim().toLowerCase();

    if (cmd === "") return;

    executeCommand(cmd);

    terminalInput.value = "";

});

function executeCommand(cmd) {

    addLine(
        `<span class="prompt">tarun@portfolio:~$</span> ${cmd}`
    );

    switch (cmd) {

        case "help":
        case "about":
        case "skills":
        case "education":
        case "experience":
        case "projects":
        case "contact":
            addLine(commands[cmd]);
            break;

        case "clear":
            clearTerminal();
            break;

        default:
            addLine("Command not found.");
            addLine("Type 'help' to see available commands.");
    }

    terminalInput.focus();

}

function addLine(text) {

    const div = document.createElement("div");

    div.className = "line";

    div.innerHTML = text.replace(/\n/g, "<br>");

    terminalBody.insertBefore(
        div,
        document.querySelector(".input-line")
    );

    terminalBody.scrollTop = terminalBody.scrollHeight;

}

function clearTerminal() {

    const lines = terminalBody.querySelectorAll(".line");

    lines.forEach(line => line.remove());

    addLine("Welcome to Tarun's Interactive Terminal");
    addLine("Type <span class='command'>help</span> to begin.");

    terminalInput.focus();

}