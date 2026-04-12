document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('#navigation li a');
    const menuBtn = document.getElementById("mobile-nav");
    const nav = document.getElementById("navigation");
    const header = document.querySelector("header");

    let lastScrollY = window.scrollY;

    // 🔹 Click → Active Link
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // close mobile menu
            nav.classList.remove("active");
            menuBtn.classList.remove("active");

            document.body.classList.remove("no-scroll"); // 🔥 fix
        });
    });

    // 🔹 Mobile Menu Toggle
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");

        document.body.classList.toggle("no-scroll");
    });
    
    console.log(nav.classList);
});


// Main View ===========================================================================================
// main-view contents
const avialableForRole = ['Java Developer', 'Junior Developer', 'Data Analyst', 'C++ Developer', 'Database Management'];

const currentRoll = document.getElementById("current-skill");

let index = 0;

// resume
document.getElementById("resume-box").addEventListener("click", function () {
    const userChoice = confirm("Do you want to open resume in a new tab? 📄");

    if (userChoice) {
        const isMobile = window.innerWidth <= 767;

        if (isMobile) {
            alert("You are using mobile. Please view in print layout to see in a structured way.");
        }
        window.open(
            "https://docs.google.com/document/d/1Zwhr4VYwYcBHEaO6eiZ6tBHcONlHtOioqnPJkklr0mM/edit?usp=sharing",
            "_blank"
        );
    }
});


// Abouts ===========================================================================================
// About contents
const contents = [
    {
        'title': 'About Me',
        'desc': 'I am a passionate B.Tech student from Quantum University, Roorkee, with a strong interest in <span>software development</span> and <span>cybersecurity</span>. I enjoy building real-world projects using technologies like <span>Java</span>, <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and backend tools such as <span>Node.js</span> and <span>SQL</span>. I am continuously improving my problem-solving skills through <span>Data Structures and Algorithms</span> and aim to become a skilled <span>cybersecurity professional</span>. I am also actively seeking opportunities to gain practical experience through internships and projects.'
    },
    {
        'title': 'Education',
        'desc': 'I am currently pursuing my <span>Bachelor of Technology (B.Tech) from Quantum University, Roorkee</span>. Throughout my academic journey, I have developed a solid foundation in computer science concepts including programming, database management, and networking. I have studied Core Java and worked on various academic and personal projects that strengthened my understanding of software development and system design.'
    },
    {
        'title': 'Certifications',
        'desc': 'I have earned multiple certifications from globally recognized platforms including <span>Cisco Networking Academy</span>, <span>Infosys Springboard</span>, <span>IBM SkillsBuild</span>, and <span>Udemy</span>. My learning spans networking, Spring Boot development, cybersecurity, and full-stack fundamentals. These certifications not only enhanced my technical knowledge but also provided practical, hands-on experience with real-world tools and scenarios, preparing me for industry-level challenges.'
    },
    {
        'title': 'Daily Coding Practice',
        'desc': 'I consistently improve my problem-solving and technical skills through daily coding practice on platforms like <span>TryHackMe</span>, <span>CodeChef</span>, <span>LeetCode</span>, and <span>HackerRank</span>. I work on real-world cybersecurity labs on <span>TryHackMe</span> and solve algorithmic and data structure problems to strengthen my logical thinking. This regular practice helps me build a strong foundation in coding, enhance my analytical abilities, and stay prepared for technical challenges.'
    }
];

const aboutContainer = document.querySelector(".about-container");

contents.forEach(ele => {
    const divBox = document.createElement("div");
    divBox.classList.add("card");

    divBox.innerHTML = `
    <i class="corner tl"></i>
    <i class="corner br"></i>
        <h3>${ele.title}</h3>
        <p> ${ele.desc}</p>
    `;

    aboutContainer.appendChild(divBox);
});


// Projects ===========================================================================================
// Project object
const projects = [
    {
        'title': 'Image Encryption System',
        'desc': 'This is a GUI based Java Project. It is capable to mix chunk of pixels to Encryption and rearange to back in original format.',
        'link': ''
    },
    {
        'title': 'Text Encryption System',
        'desc': 'This project implements text encryption and decryption, allowing conversion between plain text and cipher text.',
        'link': ''
    },
    {
        'title': 'To - Do List',
        'desc': "It can dynamically append new items and, can marks as done, and can delete. I've used HTML, CSS, and JavaScript for this project.",
        'link': ''
    }
];

const projectContainer = document.querySelector(".project-container");

projects.forEach(ele => {
    const divBox = document.createElement("div");
    divBox.classList.add("project-card");

    divBox.innerHTML = `
        <h3>${ele.title}</h3>
        <p> ${ele.desc}</p>
    `;

    projectContainer.appendChild(divBox);
});


// skills ===========================================================================================
// skill object
const skills = [
    {'name': 'HTML','level': 'Intermediate','desc': "I've 3 running project",'value': 90},
    {'name': 'CSS','level': 'Intermediate','desc': "I've 2 running project",'value': 80},
    {'name': 'Bootstrap','level': 'Beginner','desc': "I've 2 running project",'value': 30},
    {'name': 'JavaScript','level': 'Intermediate','desc': "I've 2 running project",'value': 50},
    {'name': 'DOM Manipulation','level': 'Intermediate','desc': "I've 2 running project",'value': 40},
    {'name': 'JQuery','level': 'Intermediate','desc': "I've 2 running project",'value': 30},
    {'name': 'C Programming','level': 'Intermediate','desc': "I've 2 running project",'value': 40},
    {'name': 'C++ Programming','level': 'Intermediate','desc': "I've 2 running project",'value': 80},
    {'name': 'Java Programming','level': 'Intermediate','desc': "I've 2 running project",'value': 70},
    {'name': 'Java Springboot','level': 'Intermediate','desc': "I've 2 running project",'value': 25},
    {'name': 'Java MVC','level': 'Intermediate','desc': "I've 2 running project",'value': 10},
    {'name': 'Python Programming', 'level': 'Beginner', 'desc': "nothing", 'value': 30},
    {'name': 'Kotlin Programming', 'level': 'Beginner', 'desc': "nothing", 'value': 20},
    {'name': 'React', 'level': 'Beginner', 'desc': "nothing", 'value': 15},
    {'name': 'MySQL','level': 'Intermediate','desc': "I've 2 running project",'value': 40},
    {'name': 'DSA','level': 'Intermediate','desc': "I've 2 running project",'value': 60}
];

// skill loder
const skillContainer = document.querySelector(".skill-wrapper");

skills.forEach(skill => {
    const divBox = document.createElement("div");
    divBox.classList.add("skill-card");

    divBox.innerHTML = `
        <h5>${skill.name}:<span class="progress-cent">${skill.value}%</span></h5>
        <progress id="file" class="skill-porgress" value="${skill.value}" max="100"> ${skill.value}% </progress>
    `;

    skillContainer.appendChild(divBox);
});