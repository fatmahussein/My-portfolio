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
    description: 'A Green Earth Summit conference website that invites people to the summit  built using HTML, CSS and JavaScript.',
    Mobimage: 'images/Desk.png',
    Desktimage: 'images/Desk.png',
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
  // {
  //   name: 'Multi-Post Stories',
  //   description: 'A daily selection of privately personalized reads; no accounts
  //  or sign-ups required.',
  //   Mobimage: 'images/Snapshoot 4.png',
  //   technologies: ['html', 'css', 'javascript'],
  //   live: 'https://fatmahussein.github.io/My-portfolio/',
  //   source: 'https://github.com/fatmahussein/My-portfolio',
  //   company: 'FACEBOOK',
  //   id: 'multipost',
  // },

];

const projectsContainer = document.querySelector('.grid-container');
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
  if (projects[i].name === 'Multi-Post Stories' && window.innerWidth < 768) {
    cardTitle.innerHTML = 'Multi-Post <br>Stories';
  } else {
    cardTitle.textContent = projects[i].name;
  }
  cardBody.appendChild(cardTitle);
  // Create the card list
  const cardList = document.createElement('ul');
  if (projects[i].name === 'Tonic' || projects[i].name === 'Facebook 360') {
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
  if (projects[i].name === 'Tonic') {
    h3.classList.add('canopy');
    h3.textContent = 'CANOPY';
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    h3.classList.add('fb');
    h3.textContent = 'FACEBOOK';
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth < 768) {
    h3.classList.add('canopy-l');
    h3.textContent = 'CANOPY';
  } else if (projects[i].name === 'Facebook 360') {
    h3.classList.add('canopy');
    h3.textContent = 'FACEBOOK';
    h3.setAttribute('id', 'fs');
  } else if (projects[i].name === 'Uber Navigation') {
    h3.textContent = 'Uber';
    h3.classList.add('canopy');
  }

  cardText.appendChild(h3);
  // Create the dot
  const dot = document.createElement('li');
  dot.classList.add('dot');
  cardList.appendChild(dot);
  // Create the dev
  const dev = document.createElement('li');
  if (projects[i].id === '1' || projects[i].id === 'multipost') {
    dev.classList.add('role');
  } else if (projects) {
    dev.classList.add('role1');
  }
  cardList.appendChild(dev);
  // h3 text
  const full = document.createElement('h3');
  if (projects[i].name === 'Tonic') {
    full.classList.add('Back');
    full.textContent = 'Back End Dev';
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    full.classList.add('Back');
    full.textContent = 'Full Stack Dev';
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth < 768) {
    full.classList.add('Back');
    full.textContent = 'Back End Dev';
  } else if (projects[i].name === 'Facebook 360') {
    full.classList.add('full');
    full.textContent = 'Full Stack Dev';
    full.setAttribute('id', 'fs');
  } else if (projects[i].name === 'Uber Navigation') {
    full.textContent = 'Lead Developer';
    full.classList.add('full');
  }

  dev.appendChild(full);
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
  year.appendChild(exactyear);

  // Create the card description
  const cardDescription = document.createElement('p');
  cardDescription.classList.add('pry-text');
  cardDescription.textContent = projects[i].description;
  cardBody.appendChild(cardDescription);
  // create tags list
  const ul = document.createElement('ul');
  if (projects[i].name === 'Tonic') {
    ul.classList.add('tags');
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth < 768) {
    ul.classList.add('tagsx');
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    ul.classList.add('tags-l');
  } else if (projects[i].name === 'Facebook 360') {
    ul.classList.add('tags-l');
  } else if (projects[i].name === 'Uber Navigation') {
    ul.classList.add('tags-l');
  }
  cardBody.appendChild(ul);
  // technologies.join(', ');// create li
  const btn1 = document.createElement('li');
  btn1.classList.add('tag1');
  ul.appendChild(btn1);
  // create a
  const anchor = document.createElement('a');
  anchor.classList.add('html');
  anchor.textContent = 'html';
  btn1.appendChild(anchor);
  // create li
  const btn2 = document.createElement('li');
  if (projects[i].name === 'Tonic') {
    btn2.classList.add('tag2');
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth < 768) {
    btn2.classList.add('tag2');
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    btn2.classList.add('tag12');
  } else if (projects[i].name === 'Facebook 360') {
    btn2.classList.add('tag12');
  } else if (projects[i].name === 'Uber Navigation') {
    btn2.classList.add('tag12');
  }
  ul.appendChild(btn2);
  // create anchor
  const anchor2 = document.createElement('a');
  if (projects[i].name === 'Tonic') {
    anchor2.classList.add('css');
    anchor2.textContent = 'css';
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth < 768) {
    anchor2.classList.add('css');
    anchor2.textContent = 'css';
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    anchor2.classList.add('ruby');
    anchor2.textContent = 'Ruby on rails';
  } else if (projects[i].name === 'Facebook 360') {
    anchor2.classList.add('ruby');
    anchor2.textContent = 'Ruby on rails';
  } else if (projects[i].name === 'Uber Navigation') {
    anchor2.classList.add('ruby');
    anchor2.textContent = 'Ruby on rails';
  }
  btn2.appendChild(anchor2);
  // create li
  const btn3 = document.createElement('li');
  if (projects[i].name === 'Tonic') {
    btn3.classList.add('tag3');
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth < 768) {
    btn3.classList.add('tag3');
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    btn3.classList.add('tag2');
  } else if (projects[i].name === 'Facebook 360') {
    btn3.classList.add('tag2');
  } else if (projects[i].name === 'Uber Navigation') {
    btn3.classList.add('tag2');
  }
  ul.appendChild(btn3);
  // create anchor
  const anchor3 = document.createElement('a');
  if (projects[i].name === 'Tonic') {
    anchor3.classList.add('js');
    anchor3.textContent = 'javascript';
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth < 768) {
    anchor3.classList.add('js');
    anchor3.textContent = 'javascript';
  } else if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    anchor3.classList.add('css');
    anchor3.textContent = 'css';
  } else if (projects[i].name === 'Facebook 360') {
    anchor3.classList.add('css');
    anchor3.textContent = 'css';
  } else if (projects[i].name === 'Uber Navigation') {
    anchor3.classList.add('css');
    anchor3.textContent = 'css';
  }
  btn3.appendChild(anchor3);
  // create li
  const btn4 = document.createElement('li');
  if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    btn4.classList.add('tag3');
  } else if (projects[i].name === 'Facebook 360') {
    btn4.classList.add('tag3');
  } else if (projects[i].name === 'Uber Navigation') {
    btn4.classList.add('tag3');
  }
  ul.appendChild(btn4);
  // create anchor
  const anchor13 = document.createElement('a');
  if (projects[i].name === 'Multi-Post Stories' && window.innerWidth > 768) {
    anchor13.classList.add('js');
    anchor13.textContent = 'javascript';
  } else if (projects[i].name === 'Facebook 360') {
    anchor13.classList.add('js');
    anchor13.textContent = 'javascript';
  } else if (projects[i].name === 'Uber Navigation') {
    anchor13.classList.add('js');
    anchor13.textContent = 'javascript';
  }
  btn4.appendChild(anchor13);
  // create button
  const proj = document.createElement('button');
  if (window.innerWidth < 768) {
    proj.classList.add('see-project');
    proj.textContent = 'see project';
  } else if (window.innerWidth > 768) {
    proj.classList.add('project-desktop');
    proj.textContent = 'see project';
  }
  cardBody.appendChild(proj);

  projectsContainer.appendChild(card);
}
window.addEventListener('resize', () => this.location.reload());

// modal
const seeProjectBtn = document.querySelectorAll('.see-project');
const popup = document.createElement('div');
popup.classList.add('main-pop');

function modal() {
  document.body.appendChild(popup);
  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    body.removeChild(popup);
  });
}

const btnpop = document.querySelectorAll('.card button');

for (let i = 0; i < btnpop.length; i += 1) {
  popup.innerHTML = `
   <div class = 'card-pop' id= 'card${i}'>
  <div class = 'containar'>
  <h2 class="card-title-pop">${projects[i].name}<i class="fas fa-times fa-2xs"></i></h2>
  <ul class="frame2" id = 'pop'>
                            <li class="client">
                                <h3 class="canopy">CANOPY</h3>
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
    <img id= 'pop1' class="snap" src="${projects[i].Mobimage}" ></img>
  <div class="left-block">
  <div class="pt">
              
      <p id='ptext' class="pry-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
     <ul id= 'tagspop'class="tags">
     <li class="tag1">
     <a href="#">
         <p class="html">${projects[i].technologies[0]}</p>
     </a>
 </li>

 <li class="tag2">
     <a href="#">
         <p class="css">${projects[i].technologies[1]}</p>
     </a>
 </li>
 <li class="tag3">
     <a href="#">
         <p class="js">${projects[i].technologies[2]}</p>
     </a>
 </li>
     </ul> 
      <hr class="hr-pop">
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
}

seeProjectBtn.forEach((btn) => {
  btn.addEventListener('click', modal);
});

const open = document.querySelectorAll('.project-desktop');

open.forEach((desktop) => (desktop.addEventListener('click', () => {
  const mains = document.createElement('div');
  mains.className = 'main-pops';
  const dPopup = document.createElement('div');
  dPopup.className = 'card-pops';
  dPopup.innerHTML = `
  <div class = 'containar'>
  <div class = 'title'> 
  <h2 class="card-title-pops">Tonic</h2>
  <i class="fas fa-times fa-3xs"></i> </div>
  <ul class="frame2" id = 'pops'>
  <li class="client">
      <h3 class="canopy">CANOPY</h3>
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
  
  <img  class="card-img-pops" src="${desktop.Desktimage}" alt="Tonic project snapshot">

  <div class="left-block" id = 'lblock'>
  <div class="pt" id = 'ptpop' >
        <p class="pry-text" id='lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
   <div class='rightb'>
        <ul class="tags-pops">
      <li class="tag1"><a href="#" class="html" id='color'>HTML</a></li>
      <li class="tag2"><a href="#" class="css"id='color'>CSS</a></li>
      <li class="tag3" id='java'><a href="#" class="js" id='color'>Javascript</a></li>
     </ul>
    <ul class = 'pop-lang'>
      <li class="tag12" id = 'rubi'><a href="#" id='color' class="ruby">Ruby</a></li>
      <li class = 'tag3' id='java'><a href="#" id='color' class="js">Bootstraps</a></li>
    </ul>
      <hr id="hr-pop">
      <div class = 'buttons'>
      <button class="see-project" id = 'live2'>
      <a class='livetext' href="https://fatmahussein.github.io/My-portfolio/">See live </a>
      <img id='livesnap'src="images/live.png">
     </button>
     <button class="see-project" id='source2'>
      <a id='srctext' href="https://github.com/fatmahussein/My-portfolio" >See Source </a>
      <img id='srcsnap' src="images/source.png">
     </button>
     </div>
     </div>
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