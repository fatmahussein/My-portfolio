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
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Desktimage: 'images/todo.png',
    Mobimage: 'images/Snapshoot 2.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/My-portfolio/',
    source: 'https://github.com/fatmahussein/My-portfolio',
    company: 'FACEBOOK',
  },

  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    Desktimage: 'images/Snapshoot 1.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/My-portfolio/',
    source: 'https://github.com/fatmahussein/My-portfolio',
    company: 'FACEBOOK',
    id: 'facebook',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    Desktimage: 'images/Snapshoot 2.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/My-portfolio/',
    source: 'https://github.com/fatmahussein/My-portfolio',
    company: 'UBER',
    id: 'threesixty',

  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Mobimage: 'images/Snapshoot 3.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/My-portfolio/',
    source: 'https://github.com/fatmahussein/My-portfolio',
    company: 'CANOPY',
    id: 'mob',
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
  <img id="mob" src= "${projects[i].Mobimage}" alt ="" />
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
        <p id='ptext' class="pry-text">${projects[i].description}</p>
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
    `;
    body.appendChild(popDiv);

    const closeButton = popup.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
      popDiv.removeChild(popup);
      body.removeChild(popDiv);
    });
  });
});

// for (let i = 0; i < seeProject.length; i += 1) {
//   seeProject[i].addEventListener('click', () => {
//     alert('hallo');
//     popDiv.style.display = 'block';
//     let cardDets = '';
//     for (let j = 0; j < projects[i].technologies.length; j += 1) {
//       cardDets += `<li class = "tag1">${projects[i].technologies[j]}</li>`;
//     }
//     popup.innerHTML = `

//     <div class = 'containar'>
//     <h2 class="card-title-pop">${projects[i].name}<i class="fas fa-times fa-2xs"></i></h2>
//     <ul class="frame2" id = 'pop'>
//                               <li class="client">
//                                   <h3 class="canopy">CANOPY</h3>
//                               </li>
//                               <li class="dot"></li>
//                               <li class="role">
//                                   <h3 class="Back">Back End Dev</h3>
//                               </li>
//                               <li class="dot"></li>
//                               <li class="year-label">
//                                   <h3 class="year">2015</h3>
//                               </li>
//                           </ul>
//       <img id= 'pop1' class="snap" src="${projects[i].Mobimage}" ></img>
//     <div class="left-block">
//     <div class="pt">

//         <p id='ptext' class="pry-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
//        <ul id= 'tagspop'class="tags">
//        <li class="tag1">${cardDets}</li></ul>
//         <hr class="hr-pop">
//        <button class="see-project" id = 'live'>
//         <a class='livetext' href="${projects[i].live}">See live </a>
//         <img id='livesnap'src="images/live.png">
//        </button>
//        <button class="see-project" id='source'>
//         <a id='srctext' href="${projects[i].source}" >See Source </a>
//         <img id='srcsnap' src="images/source.png">
//        </button>
//       </div>
//     </div>
//     </div>

//     `;
//     popDiv.appendChild(popup);
//   });
// }