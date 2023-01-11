const slideLeft = document.getElementById('slideLeft');
const slideRight = document.getElementById('slideRight');

const projectTitle = document.getElementById('project-title');
const projectTitleImg = document.getElementById('project-title-image');
const projectDescription = document.getElementById('project-description');
const projectDemo = document.getElementById('project-demo-link');
const projectGitHubRepo = document.getElementById('project-gh-link');

const projects = new Map();

let sliderIndex = 0;

projects.set(0, {
    'path': "assets/calculator-app.png",
    'title': "Calculator App for FrontendMentor.io Challenge",
    'description': "This is a functional and beautifully designed Calculator application I've created " +
                    "as part of a challenge from frontendmentor.io. it was very funny. and I enjoyed every " +
                    "bit of time I took to code it. and I've learned a lot. you also must try out frontend " +
                    "mentor. it's a great website to enhance your frontend coding skills" ,
    'github_repo': 'https://github.com/ismailmushraf/calculator-app',
    'demo': 'https://ismailmushraf.github.io/calculator-app'
});

projects.set(1, {
    'path': "assets/micoder-blog.png",
    'title': "Ismail's Blog",
    'description': "This is my personal Blog. I took this theme from bitbrain.io. " +
                   "This is a static website created using a liquid programming language called Jekyll. " +
                   "I've hosted this website in GitHub Pages. as of now my blogs are published in " +
                   "ismailmushraf.com. this one I'm not maintaining lately. But, I've learnt a lot of tools " +
                   "and technologies while creating this.",
    'github_repo': 'https://github.com/ismailmushraf/blog',
    'demo': 'https://ismailmushraf.github.io'
});

projects.set(2, {
    'path': "assets/tower-of-hanoi.png",
    'title': "The Tower of Hanoi game",
    'description': "When I was doing a math course from edx.org. named Effective Thinking through Mathematics " +
                   "I was challenged to find out the puzzle behind Tower of Hanoi. So, instead of doing it in " +
                   "which is very hard. I thought I can create this game using just HTML, CSS and JS. and it was " +
                   "very useful. try this out." ,
    'github_repo': 'https://github.com/ismailmushraf/tower_of_hanoi',
    'demo': 'https://ismailmushraf.github.io/tower_of_hanoi'
});

slideLeft.addEventListener('click', (e) => {
    moveSliderLeft();
});

slideRight.addEventListener('click', (e) => {
    moveSliderRight();
});

projectTitleImg.addEventListener('click', (e) => {
    if (projectTitleImg.style.objectFit === 'contain')
        projectTitleImg.style.objectFit = 'cover';
    else
        projectTitleImg.style.objectFit = 'contain';
});

function moveSliderRight() {
    let sliderSize = projects.size - 1; // subtracting 1 from original size to match index
    sliderIndex++;
    if (sliderIndex > sliderSize) {
        sliderIndex = 0;
    }
    loadProject(sliderIndex);
}

function moveSliderLeft() {
    let sliderSize = projects.size - 1; // subtracting 1 from original size to match index
    sliderIndex--;
    if (sliderIndex < 0) {
        sliderIndex = sliderSize;
    }
    loadProject(sliderIndex);
}

function loadProject(index) {
    projectTitle.innerText = projects.get(index).title;
    projectTitleImg.src = projects.get(index).path;
    projectDescription.innerText = projects.get(index).description;
    projectGitHubRepo.href = projects.get(index).github_repo;
    projectDemo.href = projects.get(index).demo;
}

loadProject(0);
