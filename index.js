const projectsData = [
  {
    id: 1,
    imgSrc: [
      "./assets/images/smart-budget.jpg",
      "./assets/images/modal_smart-budget2.jpg",
    ],
    heading: "Smart Budget",
    paragraph:
      "Smart Budget, a cutting-edge Rails web app, simplifies budget management. Take control of your finances, track expenses, categorize transactions, and gain insights into your spending habits.",
    modal_para:
      "Smart Budget, a feature-rich Ruby on Rails web application, simplifies budget management by providing expense tracking, categorization, insights, and customizable budgeting to empower users on their path to financial success. 💡💸",
    stack: ["Html", "Rails", "Sass", "PostgreSQL"],
    link: "https://smartbudget-mhwp.onrender.com/",
    source: "https://github.com/techmoves/budgect-App",
  },
  {
    id: 2,
    imgSrc: [

      "./assets/images/portf.png",
    ],
    heading: "Crypto Metrics",
    paragraph:
      "Crypto Metrics is a mobile web app for cryptocurrency enthusiasts, simplifying access to essential market data. Whether users seek specific coin details or a broader market overview, Crypto Metrics empowers them to make informed decisions swiftly.",
    modal_para:
      "Crypto Metrics is a streamlined and user-friendly single-page web application designed to provide up-to-date information on a wide range of cryptocurrency coins. This application offers a simple and efficient way for users to access current market data for various cryptocurrencies, as well as search and filter coins based on their names or symbols.",
    stack: ["React", "Redux Toolkit", "Css"],
    link: "https://currency-exchange-1gpu.onrender.com/",
    source: "https://github.com/techmoves/react-capston-project",
  },
  {
    id: 3,
    imgSrc: [
      "./assets/images/space-traveler's-hub.jpg",
      "./assets/images/modal_space-traveler's-hub.jpg",
    ],
    heading: "Space Travelers' Hub",
    paragraph:
      "Space Travelers Hub is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    modal_para:
      "Space Travelers Hub is an innovative web application designed to cater to the evolving demand for commercial and scientific space travel services. Leveraging the power of React and Redux Toolkit, this platform serves as a one-stop destination for space enthusiasts, researchers, and explorers, providing them with a seamless and immersive experience.",
    stack: ["React", "Redux", "Bootstrap"],
    link: "https://space-travelers-hub-vls7.onrender.com/",
    source: "https://github.com/techmoves/React-Capstone-Space-Travellers-Hub",
  },
];

const projects = document.querySelector('.projects');

projectsData.forEach((projectData) => {
  const project = document.createElement('div');
  project.className = 'project';
  project.id = projectData.id;

  const imgDiv = document.createElement('div');
  imgDiv.className = 'project-image';
  const img = document.createElement('img');
  const [projectImgSrc] = projectData.imgSrc;
  img.src = projectImgSrc;
  img.alt = projectData.heading;
  imgDiv.appendChild(img);
  project.appendChild(imgDiv);

  const projectDetails = document.createElement('div');
  projectDetails.className = 'project-details';

  const h3 = document.createElement('h3');
  h3.textContent = projectData.heading;
  projectDetails.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = projectData.paragraph;
  projectDetails.appendChild(p);

  const stack = document.createElement('div');
  stack.className = 'stack';
  const ul = document.createElement('ul');
  projectData.stack.forEach((stackItem) => {
    const li = document.createElement('li');
    li.textContent = stackItem;
    ul.appendChild(li);
  });
  stack.appendChild(ul);
  projectDetails.appendChild(stack);

  const a = document.createElement('a');
  a.className = 'btn';
  a.href = `#${projectData.id}`;
  a.textContent = 'See Project';
  a.classList.add('see-project');
  a.setAttribute('data-project-id', projectData.id);
  projectDetails.appendChild(a);

  project.appendChild(projectDetails);
  projects.appendChild(project);
});

// Creating a modal for each project

const modalSection = document.querySelector('.modal-section');
const seeProjectBtn = document.querySelectorAll('.see-project');

seeProjectBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const projectId = e.currentTarget.getAttribute('data-project-id');
    const project = projectsData.find(
      (item) => item.id === parseInt(projectId, 10),
    );

    const modal = document.createElement('div');
    modal.className = 'modal';

    modal.innerHTML = `
                        <div class="modal-title">
                          <h3>${project.heading}</h3>
                          <img src="assets/images/cancel_icon.svg" id="cancel-modal" alt="Cancel Icon" />
                        </div>

                        <div class="modal-image">
                          <img class="modal-image-desktop" src="${
  project.imgSrc[1]
}" alt="${project.imgAlt}" />
                          <img class="modal-image-mobile" src="${
  project.imgSrc[0]
}" alt="${project.imgAlt}" />
                        </div>

                        <div class="modal-text">
                          <p>${project.modal_para}</p>

                          <div class="stack modal-text-stack">
                            <ul>
                              ${project.stack
    .map((i) => `<li>${i}</li>`)
    .join('')}
                            </ul>
                          </div>
                        </div>

                        <div class="modal-buttons">
                          <a href="${project.link}" target="_blank" class="btn">
                            See live
                            <img src="assets/images/live_icon.svg" alt="Live Icon" />
                          </a>
                          <a href="${
  project.source
}" target="_blank" class="btn">
                            See live
                            <img src="assets/images/github_icon.svg" alt="Live Icon" />
                          </a>
                        </div>
                      `;

    modalSection.appendChild(modal);

    setTimeout(() => {
      modal.classList.add('modal-show');
    }, 0);

    modalSection.style.display = 'block';
  });
});

modalSection.addEventListener('click', (event) => {
  if (event.target.id === 'cancel-modal') {
    const modal = document.querySelector('.modal');

    modal.classList.add('modal-hide');

    modal.addEventListener('transitionend', () => {
      modalSection.style.display = 'none';
      modal.parentNode.removeChild(modal);
    });
  }
});

// Responsive 'required' attributes for desktop and mobile name inputs

const mobileName = document.querySelector('#name');
const desktopFirst = document.querySelector('#first_name');
const desktopLast = document.querySelector('#last_name');

if (window.innerWidth >= 768) {
  mobileName.removeAttribute('required');
} else {
  desktopFirst.removeAttribute('required');
  desktopLast.removeAttribute('required');
}

// Mobile Menu

const mobileMenu = document.querySelector('.header-mobile');
const cancel = document.querySelector('#cancel');
const hamburger = document.querySelector('#hamburger');

const display = () => {
  mobileMenu.classList.remove('header-mobile-visibility');
};

const hide = () => {
  mobileMenu.classList.add('header-mobile-visibility');
};

hamburger.addEventListener('click', display);
cancel.addEventListener('click', hide);

const form = document.querySelector('#form');

const validateForm = (e) => {
  const email = document.querySelector('#email');
  const errorMessage = document.querySelector('.contact-us-form-error');
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    errorMessage.innerHTML = 'Please use only lowercase';
  } else {
    errorMessage.textContent = '';
  }
};
form.addEventListener('submit', validateForm);
