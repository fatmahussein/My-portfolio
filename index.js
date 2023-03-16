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
const body = document.querySelector('body');
const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Mobimage: 'images/Snapshoot 1.png',
    Desktimage: 'images/Desksnap.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'CANOPY',
    id: '1',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Desktimage: 'images/Desksnap2.png',
    Mobimage: 'images/Snapshoot 2.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://github.com/fatmahussein/portfolio',
    company: 'FACEBOOK',
    id: '2',
  },

  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    Desktimage: 'images/Snapshoot 1.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'FACEBOOK',
    id: '3',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    Desktimage: 'images/Snapshoot 2.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'UBER',
    id: '4',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Mobimage: 'images/Snapshoot 3.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'CANOPY',
    id: '5',
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    Mobimage: 'images/Snapshoot 4.png',
    technologies: ['html', 'css', 'javascript'],
    live: 'https://fatmahussein.github.io/portfolio/',
    source: 'https://fatmahussein.github.io/portfolio/',
    company: 'FACEBOOK',
    id: '6',
  },

];

const projectsContainer = document.querySelector('.grid-item');
for (let i = 0; i < projects.length; i += 1) {
  // Create the card
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', projects[i].id);
  // Create the image
  const image = document.createElement('img');

  if (window.innerWidth < 768) {
    image.classList.add('snap');
    image.src = projects[i].Mobimage;
  } else if (window.innerWidth > 768) {
    image.classList.add('desk');
    image.setAttribute('id', 'desk4');
    image.src = projects[i].Desktimage;
  }
  card.appendChild(image);
  // Create the left block

  const leftBlock = document.createElement('div');
  leftBlock.classList.add('left-block');
  card.appendChild(leftBlock);
  // Create the card body
  const cardBody = document.createElement('div');
  cardBody.classList.add('pt');
  leftBlock.appendChild(cardBody);
  // Create the card title
  const cardTitle = document.createElement('h2');
  cardTitle.setAttribute('id', 'ton', 'faceb', 'br', 'multipost');
  cardTitle.textContent = projects[i].name;
  cardBody.appendChild(cardTitle);
  // Create the card list
  const cardList = document.createElement('ul');
  if (projects[i].id === '1' || projects[i].id === '3' || projects[i].id === '5') {
    cardList.classList.add('frame2');
  } else {
    cardList.classList.add('frame2-l');
  }
  cardBody.appendChild(cardList);
  // Create the card text
  const cardText = document.createElement('li');
  cardText.classList.add('client');
  cardList.appendChild(cardText);
  // create h3
  const h3 = document.createElement('h3');
  h3.textContent = projects[i].company;
  cardList.appendChild(h3);
  // Create the dot
  const dot = document.createElement('li');
  dot.classList.add('dot');
  cardList.appendChild(dot);
  // Create the dev
  const dev = document.createElement('li');
  if (projects[i].id === '1' || projects[i].id === '6') {
    cardList.classList.add('role');
  } else {
    cardList.classList.add('role1');
  }
  cardList.appendChild(dev);
  // h3 text
  const full = document.createElement('h3');
  if (projects[i].id === '1' || projects[i].id === '2' || projects[i].id === '5' || projects[i].id === '6') {
    full.classList.add('Back');
    full.setAttribute('id', 'end');
  } else {
    full.classList.add('full');
    full.setAttribute('id', 'fs');
  }
  if (projects[i].name === 'Tonic') {
    full.textContent = 'Back End Dev';
  } else if (projects[i].name === 'Multi-Post Stories') {
    full.textContent = 'Full Stack Dev';
  } else if (projects[i].name === 'Facebook 360') {
    full.textContent = 'Full Stack Dev';
  } else if (projects[i].name === 'Uber Navigation') {
    full.textContent = 'Lead Developer';
  }

  cardList.appendChild(full);
  // Create the dot
  const dots = document.createElement('li');
  dots.classList.add('dot');
  cardList.appendChild(dots);
  // Create the year label
  const year = document.createElement('li');
  year.classList.add('year-label');
  cardList.appendChild(year);
  // create year
  const exactyear = document.createElement('h3');
  exactyear.classList.add('year');
  if (projects[i].id === '4') {
    exactyear.textContent = '2018';
  } else {
    exactyear.textContent = '2015';
  }
  cardList.appendChild(exactyear);

  // Create the card description
  const cardDescription = document.createElement('p');
  cardDescription.classList.add('text');
  cardDescription.textContent = projects[i].description;
  cardBody.appendChild(cardDescription);
  // create tags list
  const ul = document.createElement('ul');
  ul.classList.add('tags');
  ul.setAttribute('id', 'tg');
  cardBody.appendChild(ul);
  // technologies.join(', ');// create li
  const btn1 = document.createElement('li');
  btn1.classList.add('button1');
  btn1.setAttribute('id', 'html');
  btn1.textContent = projects[i].technologies[0];
  ul.appendChild(btn1);
  // create li
  const btn2 = document.createElement('li');
  btn2.classList.add('button2');
  btn2.setAttribute('id', 'css');
  btn2.textContent = projects[i].technologies[1];
  ul.appendChild(btn2);
  // create li
  const btn3 = document.createElement('li');
  btn3.classList.add('button3');
  btn3.setAttribute('id', 'js');
  btn3.textContent = projects[i].technologies[2];
  ul.appendChild(btn3);
  // create button
  const proj = document.createElement('div');

  if (window.innerWidth < 768) {
    proj.classList.add('project');
    const bt = document.createElement('a');
    bt.classList.add('button');
    bt.textContent = 'see project';
    bt.setAttribute('id', 'proj', 'projectz');
    proj.appendChild(bt);
  } else if (window.innerWidth > 768) {
    proj.classList.add('project-Desktop');
    proj.setAttribute('id', 'projectz');
    const bt = document.createElement('a');
    bt.classList.add('button');
    bt.textContent = 'see project';
    bt.setAttribute('id', 'proj');
    proj.appendChild(bt);
  }
  cardBody.appendChild(proj);
  projectsContainer.appendChild(card);
}
window.addEventListener('resize', () => this.location.reload());

// modal
const see = document.querySelectorAll('.project');
see.forEach((btn) => (btn.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main-pop';
  const popup = document.createElement('div');
  popup.className = 'card-pop';
  popup.innerHTML = `
  <h5 class="card-title-pop">Tonic<i class="fas fa-times fa-2xs"></i></h5>
  <ul class="card-list-pop">
    <li class="card-text">CANOPY</li>
    <li class="dot"></li>
    <li class="dev">Back End Dev</li>
    <li class="dot"></li>
    <li class="year">2015</li>
    </ul>
  <img id="one" class="card-img-pop" src="vectors/snap.png" alt="Tonic project snapshot">
  <div class="left-block">
  <div class="card-body">
              
      <p class="text-pop">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
     <ul class="tags-pop">
     <li id="html"><a href="#" class="tags button1">html</a></li>
     <li id="css"><a href="#" class="tags button2">css</a></li>
     <li id="js"><a href="#" class="tags button3">javascript</a></li>
     </ul> 
      <hr id="hr-pop">
     <div class="project-pop">
      <a id="proj" href="https://fatmahussein.github.io/portfolio/" class="button" >See live &nbsp;<img src="vectors/Icon.png"></a>
     </div>
     <div class="project-pop2">
      <a id="proj" href="https://github.com/fatmahussein/portfolio" class="button" >See Source &nbsp;<img src="vectors/git.png"></a>
     </div>
    </div>

  </div>
  
  `;
  main.appendChild(popup);
  body.appendChild(main);

  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    body.removeChild(main);
  });
})));

const open = document.querySelectorAll('.project-Desktop');
open.forEach((desktop) => (desktop.addEventListener('click', () => {
  const mains = document.createElement('div');
  mains.className = 'main-pops';
  const dPopup = document.createElement('div');
  dPopup.className = 'card-pops';
  dPopup.innerHTML = `
  <h5 class="card-title-pops">Tonic<i class="fas fa-times fa-2xs"></i></h5>
  <ul class="card-list-pops">
    <li class="card-text">CANOPY</li>
    <li class="dot"></li>
    <li class="dev">Back End Dev</li>
    <li class="dot"></li>
    <li class="year">2015</li>
    </ul>
  
  <img id="two" class="card-img-pops" src="vectors/snap20.png" alt="Tonic project snapshot">

  <div class="left-block">
  <div class="card-body">
    <div class="row ">
      <div class="col-8">
      <p class="text-pops">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
    </div>
    <div class="col-4">
    <ul class=" row tags-pops">
    <div class="row" >
      <div class="col"><li id="html"><a href="#" class="tags button1">html</a></li></div>
      <div class="col"><li id="css-pop"><a href="#" class="tags button2">css</a></li></div>
      <div class="col"> <li id="js-pop"><a href="#" class="tags button3">javascript</a></li></div>
     </div>
    <div class="row">
      <div class="col"><li id="git"><a href="#" class=" button3">github</a></li></div>
        <div class="col"><li id="ruby"><a href="#" class=" button3">ruby</a></li></div>
          <div class="col"><li id="bs"><a href="#" class=" button3">Bootstraps</a></li></div>
    </div>
     </ul> 
     <hr id="hr-pop">
     <div class="project-pop">
      <a id="projp" href="https://fatmahussein.github.io/portfolio/" class="button" >See live &nbsp;<img src="vectors/Icon.png"></a>
     </div>
     <div class="project-pop2">
      <a id="projp" href="https://github.com/fatmahussein/portfolio" class="button" >See Source &nbsp;<img src="vectors/git.png"></a>
     </div>
    </div>
    </div>
  </div>
  </div>
  
  `;
  mains.appendChild(dPopup);
  body.appendChild(mains);

  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    body.removeChild(mains);
  });
})
));
