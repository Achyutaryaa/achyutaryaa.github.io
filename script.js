const navbar = document.querySelector("nav");
const firstSection = document.getElementById("sec1");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Option 1: check scroll past first section
    if (scrollY > firstSection.offsetHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Option 2: check scroll past certain pixels
    // if (scrollY > 100) { ... }

    if (currentScrollY > lastScrollY) {
        // scrolling down
        navbar.classList.add("hide");
    } else {
        // scrolling up
        navbar.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
});

// ==================================================================================================
// ==================================================================================================



// first section ====================================================================================
document.getElementById("resume-box").addEventListener("click", function () {
    alert("Opening my resume in a new tab 📄");
    window.open("https://docs.google.com/document/d/1Zwhr4VYwYcBHEaO6eiZ6tBHcONlHtOioqnPJkklr0mM/edit?usp=sharing", "_blank");
});

// about ============================================================================================
const intro = document.getElementById("intro");
intro.innerText = `Hi, I’m a passionate Web Developer with strong hands-on experience in building modern, responsive, and user-friendly websites. I specialize in creating robust, secure, and high-performance web solutions that help businesses and individuals build a strong online presence.

I enjoy transforming ideas into real-world digital products using clean code and modern technologies. From designing attractive user interfaces to developing functional backends and managing databases, I focus on delivering complete, reliable solutions. I believe a great website should not only look good but also be fast, accessible, and easy to use.

I’m continuously learning new tools and technologies to stay up-to-date with current industry trends. My goal is to create meaningful digital experiences and help clients achieve their goals through well-crafted web applications.

If you’re looking for someone who is dedicated, detail-oriented, and passionate about building impactful websites, I’d love to collaborate with you.`


// service ==========================================================================================
const myServices = [
    {
        'image': '/pics/web-dev.jpeg',
        'description': `I've good hand-on experience in <strong>Web Development</strong>. I can build a strong, robust, and modern website for your business that can engage more customer.`
    },
    {
        'image': '/pics/db-man.jpeg',
        'description': `I've good hand-on experience in <strong>Database Management</strong>. I can design a strong, robust, and easily accessible and maintanable database.`
    },
    {
        'image': '/pics/Java.png',
        'description': `I've good hand-on experience in <strong>Java Development</strong>. I can build a strong, robust, and modern Mobile App and Destop Application for your business that can engage more customer.`
    }
]

// elements
const serviceImage = document.querySelector('#service .img-box img');
const serviceDesc = document.querySelector('#service .content-box');
const servicePrevBtn = document.getElementById('slide-prev');
const serviceNextBtn = document.getElementById('slide-next');

function updateService(index) {
    serviceImage.src = myServices[index].image;
    serviceDesc.innerHTML = myServices[index].description;
}

let serviceIndex = 0;

// Left button click
servicePrevBtn.addEventListener('click', () => {
    serviceIndex--;
    if (serviceIndex < 0) {
        serviceIndex = myServices.length - 1;
    }
    updateService(serviceIndex);
});

// Right button click
serviceNextBtn.addEventListener('click', () => {
    serviceIndex++;
    if (serviceIndex >= myServices.length) {
        serviceIndex = 0;
    }
    updateService(serviceIndex);
});

// Load first service on page load
updateService(serviceIndex);

// apply service link
document.getElementById('service-request').style.href='https://docs.google.com/forms/d/e/1FAIpQLSe3U008k2YlvXR2IXt1eyt-vJ7DEC1KV85BXs80S08jUcdg6A/viewform?usp=sharing&ouid=113252238743288571575';

// project ==========================================================================================
const myProjects = [
    {
        'image': '/pics/password_checker.png',
        'description': `This is a <strong>GUI Based Java Project</strong> that helps user to check and validate thier password. This project suggest user to make strong password. This project can use to demonstrate, too.<br><br>
        I've used regex for validate uppercase, lowercase, numbers, and a special character.`
    },
    {
        'image': '/pics/to-do_list.png',
        'description': `This project is build using <strong>Web Technology</strong>. User can easily add or remove items from the list.`
    },
    {
        'image': '/pics/temperature_converter.png',
        'description': `I've good hand-on experience in <strong>Web Development</strong>. I can build a strong, robust, and modern website for your business that can engage more customer.`
    }
];

 // Elements
const projectImage = document.querySelector('#project .img-box img');
const projectDesc = document.querySelector('#project .content-box');
const counter = document.querySelector(".counter");

const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.querySelector('#right-btn');

 let projectIndex = 0;

 function updateProject(index) {
    projectImage.src = myProjects[index].image;
    projectDesc.innerHTML = myProjects[index].description;
    counter.innerHTML = (index + 1) + ' / ' + myProjects.length;
}


// btn text
leftBtn.innerHTML = "<<<";
rightBtn.innerHTML = ">>>";
// Left button click
leftBtn.addEventListener('click', () => {
    projectIndex--;
    if (projectIndex < 0) {
        projectIndex = myProjects.length - 1;
    }
    updateProject(projectIndex);
});

// Right button click
rightBtn.addEventListener('click', () => {
    projectIndex++;
    if (projectIndex >= myProjects.length) {
        projectIndex = 0;
    }
    updateProject(projectIndex);
});

// Load first project on page load
updateProject(projectIndex);



// skills ===========================================================================================
// skill object
const skills = [
    {'name': 'HTML','level': 'Intermediate','desc': "I've 3 running project",'value': 90},
    {'name': 'CSS','level': 'Intermediate','desc': "I've 2 running project",'value': 80},
    {'name': 'Bootstrap','level': 'Beginner','desc': "I've 2 running project",'value': 30},
    {'name': 'JavaScript','level': 'Intermediate','desc': "I've 2 running project",'value': 50},
    {'name': 'C Programming','level': 'Intermediate','desc': "I've 2 running project",'value': 40},
    {'name': 'C++ Programming','level': 'Intermediate','desc': "I've 2 running project",'value': 80},
    {'name': 'Java Programming','level': 'Intermediate','desc': "I've 2 running project",'value': 70},
    {'name': 'MySQL','level': 'Intermediate','desc': "I've 2 running project",'value': 40},
    {'name': 'DSA','level': 'Intermediate','desc': "I've 2 running project",'value': 60}
];

// skill loder
const skillContainer = document.querySelector(".skill-container");

skills.forEach(skill => {
    const divBox = document.createElement("div");

    divBox.innerHTML = `
        <h5>${skill.name}:<span class="progress-cent">${skill.value}%</span></h5>
        <progress id="file" class="skill-porgress" value="${skill.value}" max="100"> ${skill.value}% </progress>
    `;

    divBox.style.width = "90%";
    skillContainer.appendChild(divBox);
});

// footer ===========================================================================================

const links = [
  "https://www.facebook.com/KingAaryaa",
  "https://www.instagram.com/OneAaryaa",
  "https://twitter.com/OneAaryaa",
  "https://www.linkedin.com/in/Achyutaryaa"
];

const icons = document.querySelectorAll(".social-media span");

icons.forEach((span, index) => {
    const a = document.createElement("a");
    a.href = links[index];       // set URL
    a.target = "_blank";         // open in new tab
    span.parentNode.insertBefore(a, span); // insert <a> before span
    a.appendChild(span);         // move span inside <a>
});
