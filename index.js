const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Store project information in array

const projects = [
  {
    name: 'Green Earth ',
    description: 'A Green Earth Summit conference website that invites people to the summit  built using HTML, CSS and JavaScript.',
    Mobimage: 'images/GE.png',
    Desktimage: 'images/GEDesk.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/Green-Earth-Summit/',
    source: 'https://github.com/fatmahussein/Green-Earth-Summit',
    company: 'CANOPY',
    id: '1',

  },
  {
    name: 'Awesome Books',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Desktimage: 'images/awesome-desktop.png',
    Mobimage: 'images/awesome-mobile.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/Awesome-books-with-ES6/public/index.html?',
    source: 'https://github.com/fatmahussein/Awesome-books-with-ES6',
    company: 'FACEBOOK',
  },
  {
    name: 'To do list',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Desktimage: 'images/todo-desktop.png',
    Mobimage: 'images/todo-mobile.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/To-do-list/dist/index.html',
    source: 'https://github.com/fatmahussein/To-do-list',
    company: 'FACEBOOK',
  },
];

const projectsContainer = document.querySelector('.grid-container');

for (let i = 0; i < projects.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('card');
  let cardDets = '';
  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    cardDets += `<li class = "tag1">${projects[i].technologies[j]}</li>`;
  }
  card.innerHTML = `
  <div class="card">
  <div>
  <img id="desk" src= "${projects[i].Desktimage}" alt ="" />
  <img id="mob" class="snap" src= "${projects[i].Mobimage}" alt ="" />
  </div>

  <div class = "left-block">
  <h2>${projects[i].name}</h2>
  <ul class = "frame2">
    <li class = "canopy">${projects[i].company}</li>
    <li class = "dot"></li>
    <li class="role">Full Stack Dev</li>
    <li class = "dot"></li>
    <li class= "year-label">2015</li>
  </ul>
  <p class="pry-text">${projects[i].description}</p>
  <div>
  <ul class="tags">${cardDets}</ul>
  </div>
  <button class = "see-project">See Project</button>
  </div>
  
  </div>
  `;
  projectsContainer.appendChild(card);
}
const body = document.querySelector('body');
const seeProject = document.querySelectorAll('.see-project');
const popDiv = document.querySelector('.popup');

seeProject.forEach((button, i) => {
  button.addEventListener('click', () => {
    let cardDets = '';
    for (let j = 0; j < projects[i].technologies.length; j += 1) {
      cardDets += `<li class = "tag1">${projects[i].technologies[j]}</li>`;
    }
    const popup = document.createElement('div');
    popDiv.classList.add('main-pop');
    popDiv.appendChild(popup);
    popup.classList.add('card-pop');
    popup.innerHTML = `
      <div>
      <div class="headcontainer">
      <h2>${projects[i].name}</h2>
      <button class="popup-close"><i class="fas fa-times"></i></button>
      </div>
        <ul class="frame2" id = 'pop'>
           <li class="client">
              <h3 class="canopy">${projects[i].company}</h3>
           </li>
           <li class="dot"></li>
           <li class="role">
           <h3 class="Back">Back End Dev</h3>
          </li>
          <li class="dot"></li>
          <li class="year-label">
          <h3 class="year">2015</h3>
          </li>
        </ul>
        <img class="snap" id="mob" src="${projects[i].Mobimage}" ></img>
        <img class="snap" id="desk" src="${projects[i].Desktimage}" ></img>
        <div class="projectInfo">
        <div class="projectDesc" ><p id='ptext' class="pry-text">${projects[i].description}</p> </div>
        <div class="projectDet">
        <ul class="frame2" id = 'pop'>${cardDets}</ul>
        <hr class="hr-pop">
        <div class="btns">
         <button class="see-project" id = 'live'>
           <a class='livetext' href="${projects[i].live}">See live </a>
           <img id='livesnap'src="images/live.png">
         </button>
         <button class="see-project" id='source'>
           <a id='srctext' href="${projects[i].source}" >See Source </a>
           <img id='srcsnap' src="images/source.png">
         </button>
         </div>
        
        </div>
        </div>
     
     
      </div>
    `;
    body.appendChild(popDiv);

    const closeButton = popup.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
      popDiv.removeChild(popup);
      body.removeChild(popDiv);
    });
  });
});
