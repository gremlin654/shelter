const pets = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets/pets-scarlet.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets/pets-charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];
//Burger menu
const iconMenu = document.querySelector(".burger__menu");
const menuHeader = document.querySelector(".menu__list");
const menuOverlay = document.querySelector(".burger__menu-overlay");
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
const logoHeader = document.querySelector(".header__logo-container");
const logoBurger = document.querySelector(".burger-logo");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuHeader.classList.toggle("_active");
    menuOverlay.classList.toggle("burger__menu-overlay-active");
    logoHeader.classList.toggle("unactive-logo");
    logoBurger.classList.toggle("active-logo");
  });
}

// Прокрутка при клике
function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue =
      gotoBlock.getBoundingClientRect().top +
      pageYOffset -
      document.querySelector("header").offsetHeight;

    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuHeader.classList.remove("_active");
      menuOverlay.classList.remove("burger__menu-overlay-active");
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}

function onMenuLinkClose() {
  document.body.classList.remove("_lock");
  iconMenu.classList.remove("_active");
  menuHeader.classList.remove("_active");
  menuOverlay.classList.remove("burger__menu-overlay-active");
  logoHeader.classList.remove("unactive-logo");
  logoBurger.classList.remove("active-logo");
}

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  onMenuLinkClick;
}
if (menuOverlay) {
  menuOverlay.addEventListener("click", onMenuLinkClose);
}

// Slider - carusel
const wrapperPets = document.querySelector(".wrapper__pets-body");
const leftBtnPets = document.querySelector(".pets-btn-left");
const rightBtnPets = document.querySelector(".pets-btn-right");
const cartContainer = document.querySelector(".pets-body__carts-container");

let screenWidth = window.innerWidth;
let listLeft = cartContainer.style.left;

let petStack = [];

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandom() {
  let r = getRandomNum(0, 7);

  if (!petStack.includes(r)) {
    petStack.push(r);
  }
}
function getNewArray() {
  for (let i = 0; i < 50; i++) {
    getRandom();
    if (petStack.length == 8) {
      break;
    }
  }
}

const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

const moveLeft = () => {
  cartContainer.classList.add("transition-left");
  leftBtnPets.removeEventListener("click", moveLeft);
  rightBtnPets.removeEventListener("click", moveRight);
};

const moveRight = () => {
  cartContainer.classList.add("transition-right");
  leftBtnPets.removeEventListener("click", moveLeft);
  rightBtnPets.removeEventListener("click", moveRight);
};

leftBtnPets.addEventListener("click", moveLeft);
rightBtnPets.addEventListener("click", moveRight);

function createCardTemplate(r) {
  let template = "";
  let card = document.createElement("div");
  card.className = "pets-body__carts";
  card.setAttribute("data-id", `${pets[r].name}`);
  card.setAttribute("onclick", `openModal(${r})`);
  template += ` <div class="body__carts-image">`;

  template += `<img src="${pets[r].img}" alt="${pets[r].name}"/>`;

  template += `</div>`;

  template += `<h4 class="body__carts-title">${pets[r].name}</h4>`;

  template += `<button class="body__carts-buttons buttons">Learn more</button>`;

  card.innerHTML = template;

  return card;
}

cartContainer.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    cartContainer.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    cartContainer.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }

  changedItem.innerHTML = "";
  if (screenWidth < 768) {
    for (let i = 0; i < 1; i++) {
      getNewArray();
      let r = petStack.splice(0, 1);
      const card = createCardTemplate(r);
      changedItem.appendChild(card);
    }
  } else if (768 <= screenWidth && screenWidth < 1279) {
    for (let i = 0; i < 2; i++) {
      getNewArray();
      let r = petStack.splice(0, 1);
      const card = createCardTemplate(r);
      changedItem.appendChild(card);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      getNewArray();
      let r = petStack.splice(0, 1);
      const card = createCardTemplate(r);
      changedItem.append(card);
    }
  }

  leftBtnPets.addEventListener("click", moveLeft);
  rightBtnPets.addEventListener("click", moveRight);
});

//------------------------------------------------------------------

// Modal window

const modalWindow = document.querySelector(".wrapper__modale");
const modalWindowOpn = document.querySelector(".wrapper__modale-open");
const modalCloseBtn = document.querySelector(".modale__window-closeBtn");
const learnMoreBtn = document.querySelectorAll(".body__carts-buttons");

const openModal = (r) => {
  modalWindow.classList.add("wrapper__modale-open");
  let modalWrapper = `<div class="modale__window">
        <button class="modale__window-closeBtn" onclick = "modalWindowClose()">
        <svg class="closeX"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003V6.00003Z" fill="#292929"/>
        </svg>
        </button>
        <div class="modale__window-body">
          <div class="modale__window-container">
            <div class="window__container-img" style="background: url(${
              pets[r].img
            }) 0 0/contain no-repeat;">
            </div>
            <div class="window__contairer-body">
              <h3 class="window__container-name">${pets[r].name}</h3>
              <h4 class="window__contairer-who">${pets[r].breed}</h4>
              <h5 class="window__container-text">${pets[r].description}</h5>
              <div class="window__container-about">
                <ul class="about__contaner">
                  <li class="about__container-text"><span>Age:</span>${
                    pets[r].age
                  }</li>
                  <li class="about__container-text"><span>Inoculations:</span> ${pets[
                    r
                  ].inoculations.join()}</li>
                  <li class="about__container-text"><span>Inoculations:</span> ${pets[
                    r
                  ].diseases.join()}</li>
                  <li class="about__container-text"><span>Parasites:</span> ${pets[
                    r
                  ].parasites.join()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  modalWindow.innerHTML = modalWrapper;
  document.body.classList.add("_lock");

  modalWindow.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("wrapper__modale-open") ||
      e.target.classList.contains("modale__window-body") ||
      e.target.classList.contains("modale__window")
    ) {
      modalWindowClose();
    }
  });

  modalWindow.addEventListener("mouseover", (e) => {
    if (
      e.target.classList.contains("wrapper__modale") ||
      e.target.classList.contains("modale__window") ||
      e.target.classList.contains("modale__window-body")
    ) {
      document
        .querySelector(".modale__window-closeBtn")
        .classList.add("closeBtn_active");
    } else {
      document
        .querySelector(".modale__window-closeBtn")
        .classList.remove("closeBtn_active");
    }
  });
};

function modalWindowClose() {
  modalWindow.classList.remove("wrapper__modale-open");
  document.body.classList.remove("_lock");
}

console.log(
  "Привет! Если есть какие нибудь недачёты по работе, напиши пожайлуста в discord: gremlin654 "
);
