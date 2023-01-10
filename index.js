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
    'description': "something",
    'github_repo': 'https://github.com/ismailmushraf/calculator-app',
    'demo': 'https://ismailmushraf.github.io/calculator-app'
});

projects.set(1, {
    'path': "assets/micoder-blog.png",
    'title': "Ismail's Blog",
    'description': "something",
    'github_repo': 'https://github.com/ismailmushraf/blog',
    'demo': 'https://ismailmushraf.github.io'
});

projects.set(2, {
    'path': "assets/tower-of-hanoi.png",
    'title': "The Tower of Hanoi game",
    'description': "something",
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
