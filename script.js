// ==========================================================================================
// top button
const myBtn = document.getElementById('myBtn');
window.onscroll =  () => {
  if (document.body.scroll > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// don't touch above
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================
// ====================================================================================================


// ====================================================================================================
// Header
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight;
  console.log("header height: " + headerHeight);
  const headerStyle = window.getComputedStyle(header);
  const headerMarginTop = parseInt(headerStyle.marginTop);
  const headerMarginBottom = parseInt(headerStyle.marginBottom);
  const totalHeaderHeight = headerHeight + headerMarginTop + headerMarginBottom;

  console.log("total header height: " + totalHeaderHeight);

  const headerRect = header.getBoundingClientRect();
  if (headerRect.top === 0) {
    document.body.style.paddingTop = `${totalHeaderHeight}px`;
  }

  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(window.innerWidth > 750) {
            e.preventDefault();
    
            let target = document.querySelector(this.getAttribute('href'));
            let headerOffset = totalHeaderHeight; // height of your header
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// ====================================================================================================
// Home-container
let totalHeaderHeightPx = totalHeaderHeight;
let viewportHeight = window.innerHeight;
let totalHeaderHeightVh = (totalHeaderHeightPx / viewportHeight) * 100;
document.getElementById("home").style.height = 100 - totalHeaderHeightVh +'vh';

// document.getElementById('resume').href = 'https://drive.google.com/file/d/1Uv6ycYs2bTFfiEELAqDlfTD-86RnpKv0/view?usp=drive_link';

// ====================================================================================================
// about-container

const aboutContent = document.querySelector("#about-content p");
aboutContent.innerHTML = `Hi! I am a pre-final year <b><i>computer science</i></b> student at <b><i>Quantum University, Roorkee</i></b>. This enthusiasm has driven me to explore and deepen my knowledge in the field, particularly in software development and cybersecurity. My dedication to learning is reflected in my academic pursuits, where I have consistently sought opportunities to work on projects that enhance my understanding of programming languages, algorithms, and real-world problem-solving. <br><br>

Beyond academics, I have actively participated in coding competitions and hackathons. These experiences have allowed me to collaborate with peers, tackle challenging problems, and strengthen both my technical and teamwork skills.<br><br> 
 

As I progress in my academic journey, I am committed to leveraging every opportunity to expand my skill set, deepen my understanding of computer science, and contribute meaningfully to the field. I am excited to embrace the challenges and opportunities that lie ahead and look forward to continuing my growth as a computer scientist while making a positive impact.`;




// ==========================================================================================
// services
const serviceList = [
  // web dev
  {
      title: "Website Designing",
      image: "pics/web-dev.jpeg",
      description: "I am delivering services of web Development. It involves web design and maintenance.",
      price: "10000/-"
  },
  // web dev
  {
      title: "Database Managment",
      image: "pics/db-man.jpeg",
      description: "I am delivering services of Database Management. It involves schema design and maintenance.",
      price: "15000/-"
  }
];

const serviceContainer = document.getElementById("service-container");

for(let i = 0; i < serviceList.length; i++) {
  const h3 = document.createElement("h3");
  h3.textContent = serviceList[i].title;

  const image = document.createElement("img");
  image.src = serviceList[i].image;
  image.alt = serviceList[i].title;
  const serviceCard = document.createElement("div");
  serviceCard.classList.add("service-card");
  serviceCard.appendChild(image);

  const description = document.createElement("p");
  description.innerHTML = serviceList[i].description;

  const priceDiv = document.createElement("div");
  priceDiv.classList.add("service-price-items")
  // const price = document.createElement("p");
  // price.classList.add("service-price-item");
  // price.textContent = serviceList[i].price;
  const serviceLink = document.createElement("a");
  serviceLink.classList.add("service-price-item");
  // priceDiv.appendChild(price);
  priceDiv.appendChild(serviceLink);
  serviceLink.href = "/portfolio/service/service.html";
  serviceLink.textContent = "Request Now";

  const serviceContent = document.createElement("div");
  serviceContent.classList.add("service-content");

  serviceContent.appendChild(h3);
  serviceContent.appendChild(serviceCard);
  serviceContent.appendChild(description);
  serviceContent.appendChild(priceDiv);

  serviceContainer.appendChild(serviceContent);
}

// ==========================================================================================
// projects

const projectList = [
  {
    name: 'Personal Portfolio',
    description: 'This is a project about a website that I created for a fictional company. The website is fully responsive and was created using HTML, CSS, and JavaScript.',
    image: 'images/project1.png',
    link: "https://achyutaryaa.github.io/portfolio/"
  },
  {
    name: 'Game Website',
    description: 'This is a project about a website that I created for a fictional company. The website is fully responsive and was created using HTML, CSS, and JavaScript.',
    image: 'images/project2.png',
    link: 'https://achyutaryaa.github.io/freeCodeCamp-gameProject/'
  },
  {
    name: 'To-Do List',
    description: 'This is a project about a website that I created for a fictional company. The website is fully responsive and was created using HTML, CSS, and JavaScript.',
    image: 'images/project3.png',
    link: 'https://achyutaryaa.github.io/temperature-calculator/'
  },
  {
    name: 'Area Calculator for triangle',
    description: 'This is a project about a website that I created for a fictional company. The website is fully responsive and was created using HTML, CSS, and JavaScript.',
    image: 'images/project4.png',
    link: 'https://achyutaryaa.github.io/calculate-triangle-area'
  },
  {
    name: 'Temperature Calculator',
    description: 'This is a project about a website that I created for a fictional company. The website is fully responsive and was created using HTML, CSS, and JavaScript.',
    image: 'images/project5.png',
    link: 'https://achyutaryaa.github.io/temperature-calculator/'
  }
];

const projectContainer = document.getElementById('project-container');


for (let i = 0; i < projectList.length; i++) {

  const projectContent = document.createElement('div');
  projectContent.classList.add('project-content');

  const projectCard = document.createElement('div');
  projectCard.classList.add('project-card');

  const projectHead = document.createElement('h2');
  projectHead.textContent = projectList[i].name;

  projectContent.appendChild(projectHead);
  
  projectContent.addEventListener('mouseenter', () => {
    projectContent.appendChild(projectCard);
    // Create and append project description
    if(!projectCard.querySelector('.project-description')) {
      const project1Text = document.createElement('p');
      project1Text.textContent = projectList[i].description;
      project1Text.classList.add('project-description');
      projectCard.appendChild(project1Text);
    }

    // Create and append project link
    if(!projectCard.querySelector('.project-link')) {
      const projectLink = document.createElement('a');
      projectLink.textContent = 'View Project';
      projectLink.href = projectList[i].link;
      projectLink.target = '_blank'; // Open in new tab
      projectLink.classList.add('project-link');
      projectCard.appendChild(projectLink);
    }
  });

  // Event: Remove description and link on mouse out
  projectContent.addEventListener('mouseleave', () => {
    const description = projectCard.querySelector('.project-description');
    const link = projectCard.querySelector('.project-link');
    if(projectCard) projectContent.removeChild(projectCard);
    if (description) projectCard.removeChild(description);
    if (link) projectCard.removeChild(link);
  });

  // Append the content container to the project container
  projectContainer.appendChild(projectContent);
}


// =================================================================================================
// skills

const skills = {
  'HTML' : {
    'covered' : ['Navigation', 'Lists', 'Table', 'Forms'],

    'uncovered' : []
  },

  'CSS' : {
    'covered' : ['Color', 'Background', 'Box Model', 'Fonts', 'Icons', 'List', 'Table', 'Forms', 'Display', 'Position', 'Overflow', 'Pseudo-classes', 'Pseudo-elements', 'Navigation Bar', '2D-Transform', '3D-Transform', 'Transitions', 'Animations', 'Image-filters', 'Box-sizing', 'Media-Query', 'Flex'],

    'uncovered' : ['Dropdown', 'Image-spliter', 'Image-Gallery', 'Specificity', 'Math-functions', 'Pagination', 'Grid', 'Responsive']
  },


  'Bootstrap' : {
    'covered' : ['Basics', 'Grid Basic', 'Typography', 'Table', 'Buttons', 'Forms', 'Navbar', 'Pagination'],

    'uncovered' : ['Dropdown', 'Filters', 'Grid Advance']
  },


  'JavaScript' : {
    'covered' : ['Basics', 'Functions', 'Objects', 'Sets', 'Maps', 'String Operations', 'Numbers', 'Array', 'Date'],
    'uncovered' : ['Bitwise', 'RegExp', 'Hoisting', 'JSON', 'Debugging', 'Get/Set']
  },


  'C Language' : {
    'covered' : ['Basics', 'Loops', 'Input/Output', 'Array', 'String', 'Pointer', 'Functions', 'Maths', 'Scopes', 'Structure', 'Enums', 'Dynamic Programming'],
    'uncovered' : ['File Handling', 'Exceptions']
  },


  'C++' : {
    'covered' : ['Basics', 'Input/Output', 'Array', 'String', 'Pointer', 'Refrence', 'Maths', 'Functions', 'OOPS', 'Vector', 'List', 'Linked-list', 'Stack', 'Queue', 'Map', 'Iterator', 'Algorithms', 'Date & Time'],
    'uncovered' : ['Tree', 'Graph', 'File', 'Expections', 'Bitmanipulation', 'String formatting', 'Padding']
  },


  'Java' : {
    'covered' : ['Basics', 'Array', 'String', 'Maths', 'OOPs', 'Date & Time', 'Data Strucures'],
    'uncovered' : ['API', 'Exceptions', 'RegEx', 'Threads', 'Lambda', 'File Handling']
  },

  'SQL' : {
    'covered' : ['Basics', 'Selection', 'Updation', 'Deletion', 'Basic Query', 'Joins'],

    'uncovered' : ['Intersection', 'Union', 'Injection', 'Hoisting', 'Advance Query']
  },

  'DSA' : {
    'covered' : ['Sorting', 'Linked List'],

    'uncovered' : ['Tree', 'Graph']
  }
};

// target skill-container div
const skillContainer = document.getElementById('skill-container');

for(const skill in skills) {
  const skillCard = document.createElement('div');
  skillCard.classList.add('skill-card');

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('info-div');
  const skillHead = document.createElement('h3');
  skillHead.textContent = skill;
  const indicator = document.createElement('span');
  indicator.textContent = ((skills[skill].covered.length /(skills[skill].covered.length + skills[skill].uncovered.length)) * 100).toFixed(0) + "%";
  infoDiv.appendChild(skillHead);
  infoDiv.appendChild(indicator);

  const progressDiv = document.createElement('div');
  progressDiv.classList.add('progress-div');
  const progressBar = document.createElement('progress');
  progressBar.value = skills[skill].covered.length;
  progressBar.max = skills[skill].covered.length + skills[skill].uncovered.length;
  progressDiv.appendChild(progressBar);

  const toggler = document.createElement('button');
  toggler.classList.add('skill-toggler');
  toggler.innerHTML = '&#11167;';
  progressDiv.appendChild(toggler);

  // div to display covered and uncovered skill's details
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details-div');

  const coveredSpanContainer = document.createElement('div');
  coveredSpanContainer.classList.add('covered-span-container');
  skills[skill].covered.forEach(element => {
      const coveredSpan = document.createElement('span');
      coveredSpan.textContent = element;
      coveredSpan.classList.add('covered-span');
      coveredSpanContainer.appendChild(coveredSpan);
  });
  
  const uncoveredSpanContainer = document.createElement('div');
  coveredSpanContainer.classList.add('uncovered-span-container');
  skills[skill].uncovered.forEach(element => {
      const uncoveredSpan = document.createElement('span');
      uncoveredSpan.textContent = element;
      uncoveredSpan.classList.add('uncovered-span');
      uncoveredSpanContainer.appendChild(uncoveredSpan);
  });

  detailsDiv.appendChild(coveredSpanContainer);
  detailsDiv.appendChild(uncoveredSpanContainer);

  // add event listener to toggler
  toggler.addEventListener('click', () => {
    detailsDiv.classList.toggle('visibility');
    if(detailsDiv.classList.contains('visibility')) {
      toggler.style.transform = 'rotate(180deg)';
      toggler.style.backgroundColor = 'black';
    }
    else {
      toggler.style.transform = 'rotate(0deg)';
      toggler.style.backgroundColor = 'transparent';
    }

  });

  skillCard.appendChild(infoDiv);
  skillCard.appendChild(progressDiv);
  skillCard.appendChild(detailsDiv);

  skillContainer.appendChild(skillCard);
}
