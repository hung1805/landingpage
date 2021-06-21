// Change bgc of navbar when scroll down
const headder = document.querySelector('.header');
const toTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
   let l = window.innerHeight;
   let scrollNavLength;
   if (l > 1300) {
      scrollNavLength = 200;
   } else {
      scrollNavLength = 50;
   }
   if (window.scrollY > scrollNavLength) {
      headder.classList.add('sticky');
   } else {
      headder.classList.remove('sticky');
   }
   if (window.scrollY > 1000) {
      toTopBtn.classList.add('active');
      toTopBtn.addEventListener('click', () => {
         window.scrollTo({
            top: 0,
            behavior: "smooth"
         });
      })
   } else {
      toTopBtn.classList.remove('active');
   }
})

// Slider Of Story
const storyImages = document.querySelectorAll('.story__image');
const storyYears = document.querySelectorAll('.story__pagination-year');
const storyTexts = document.querySelectorAll('.story__text-item');
const storyPreBtn = document.querySelector('.story__pagination-btn > .fa-chevron-left');
const storyNextBtn = document.querySelector('.story__pagination-btn > .fa-chevron-right');
let currentIndex = 2;
function displayImage() {
   for (let i = 0; i < storyImages.length; i++) {
      storyImages[i].classList.remove('active');
   }
   storyImages[currentIndex].classList.add('active');
}
function displayYear() {
   for (let i = 0; i < storyYears.length; i++) {
      storyYears[i].classList.remove('active');
   }
   storyYears[currentIndex].classList.add('active');
}
function displayText() {
   for (let i = 0; i < storyTexts.length; i++) {
      storyTexts[i].classList.remove('active');
   }
   storyTexts[currentIndex].classList.add('active');
}
function displayContent() {
   displayImage();
   displayYear();
   displayText();
}
function moveLeft() {
   storyNextBtn.parentElement.classList.remove('unactive');
   currentIndex--;
   if (currentIndex < 0) currentIndex = 0;
   if (currentIndex === 0) {
      storyPreBtn.parentElement.classList.add('unactive');
   } 
   displayContent()
}
function moveRight() {
   storyPreBtn.parentElement.classList.remove('unactive');
   currentIndex++;
   if (currentIndex > storyImages.length - 1) currentIndex = storyImages.length - 1;
   if (currentIndex ==storyYears.length-1) {
      storyNextBtn.parentElement.classList.add('unactive');
   }
   displayContent();
}
function yearClick() {
   currentIndex = this.event.target.id;
   if (currentIndex == 0) {
      storyPreBtn.parentElement.classList.add('unactive');
   } else if (currentIndex == storyImages.length - 1) {
      storyNextBtn.parentElement.classList.add('unactive');
   } else {
      storyPreBtn.parentElement.classList.remove('unactive');
      storyNextBtn.parentElement.classList.remove('unactive');
   } ;
   displayContent();
}
storyPreBtn.addEventListener('click', moveLeft);
storyNextBtn.addEventListener('click', moveRight);

// Caree Section Js

const carees = [
   {
      id: 1,
      imgSrc:"./img/manager.webp",
      position: "Manager",
      salary: "~3000$ per month",
      request: "Economic University Graduated",
      benifit: "Great Bonus",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nihil aliquid porro et odio ea nostrum amet, tenetur deleniti!"
   },
   {
      id: 2,
      imgSrc: "./img/security.webp",
      position: "Security",
      salary: "~1300$ per month",
      request: "High School Graduated",
      benifit: "Great Bonus",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nihil aliquid porro et odio ea nostrum amet, tenetur deleniti!"
   },
   {
      id: 3,
      imgSrc: "./img/waiter.webp",
      position: "Waiter",
      salary: "~1500$ per month",
      request: "High School Graduated",
      benifit: "Great Bonus",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nihil aliquid porro et odio ea nostrum amet, tenetur deleniti!"
   },
   {
      id: 4,
      imgSrc: "./img/bar-waiter.webp", 
      position: "Bar Waiter",
      salary: "~1300$ per month",
      request: "High School Graduated",
      benifit: "Great Bonus",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus nihil aliquid porro et odio ea nostrum amet, tenetur deleniti!"
   }
];
const careeDetail1= document.querySelector('.detail-item1');
const careeDetail2 = document.querySelector('.detail-item2');
const careeItems = document.querySelectorAll('.caree-item');
careeItems.forEach(element => {
   let detailElement;
   element.addEventListener('click', () => {
      detailElement = element.id < 3 ? careeDetail1 : careeDetail2;
      carees.forEach(caree => {
         if (caree.id == element.id) {
            detailElement.classList.add('detail-item');
            detailElement.classList.remove('hidden');
            detailElement.innerHTML = `
               <div class="detail-item__image">
                  <img src="${caree.imgSrc}">   
               </div>
               <div class="detail-item__info">
                  <h3 class="detail-item__position">Position:&ensp;${caree.position}</h3>
                  <p class="detail-item__salary">Salary we offer:&ensp;${caree.salary}</p>
                  <p class="detail-item__request">Our request:&ensp;${caree.request}</p>
                  <p class="detail-item__benifit">Your Benifit:&ensp;${caree.benifit}</p>
                  <p class="detail-item__desc">Job description:&ensp;${caree.desc}</p>
                  <a class="btn btn--border btn--black btn--uppercase">Apply Now</a>
               </div>
               <button class="detail-item__close-btn close-btn">
                  <i class="fas fa-times"></i>
               </button>
            `
            let closeBtn = detailElement.querySelector('.detail-item__close-btn')
            closeBtn.addEventListener('click', () => {
               console.log(123);
               detailElement.classList.add('hidden');
            })
         }
      })
          
   })
});
const openSidebar= document.querySelector('.bars');
const closeSidebarBtn = document.querySelector('.sidebar__close-btn');
console.log(openSidebar);
const sidebar= document.querySelector('.sidebar');

closeSidebarBtn.addEventListener('click', () => {
   sidebar.style.display = 'none';
});

openSidebar.addEventListener('click', () => {
   sidebar.style.display = 'block';
});

const sidebarLanguageSelect = sidebar.querySelector('.sidebar-item.language--select');
const sidebarLanguageSubmenu = sidebar.querySelector('.language__submenu-list');
let isSelect = false;
sidebarLanguageSelect.addEventListener('click', () => {
   if (!isSelect) {
      sidebarLanguageSubmenu.style.display = 'block';
      sidebarLanguageSelect.querySelector('.fa-chevron-right').style.display = 'none';
      sidebarLanguageSelect.querySelector('.fa-chevron-down').style.display = 'block';
      isSelect = !isSelect;
   } else {
      sidebarLanguageSubmenu.style.display = 'none';
      sidebarLanguageSelect.querySelector('.fa-chevron-right').style.display = 'block';
      sidebarLanguageSelect.querySelector('.fa-chevron-down').style.display = 'none';
      isSelect=!isSelect;
   }
})
console.log(sidebarLanguageSelect.querySelector('.fa-chevron-right'));
