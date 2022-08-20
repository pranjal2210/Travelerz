// SHOW MENU

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// HIDE MENU

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// HIDE MENU MOBILE

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navbarMenu = document.getElementById('nav-menu');
  navbarMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// CHANGE BG HEADER

function scrollHeader() {
  const imgLogo = document.querySelector('.logo-img');
  const header = document.getElementById('header');

  if (this.scrollY >= 20) {
    header.classList.add('scroll-header');
    imgLogo.src = 'images/logo-g.png';
  }
  else {
    header.classList.remove('scroll-header');
    imgLogo.src = 'images/logo-w.png';
  }
}

window.addEventListener('scroll', scrollHeader);

// DISCOVER SWIPER

var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  coverflowEffect: {
    rotate: 0,
    depth: 150,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// VIDEO PLAY

const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('play-icon');

function playPause() {
  if (videoFile.paused) {
    videoFile.play();

    videoIcon.classList.add('ri-pause-line');
    videoIcon.classList.remove('ri-play-line');
  }

  else {
    videoFile.pause();

    videoIcon.classList.add('ri-play-line');
    videoIcon.classList.remove('ri-pause-line');
  }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add('ri-play-line');
}

videoFile.addEventListener('ended', finalVideo);

// SCROLL UP

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 500) {
    scrollUp.classList.add('show-scroll');
  }
  else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

// SCROLL SECTION ACTIVE

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    }

    else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// THEME

const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());

});

// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
  distance: '20px',
  duration: 2800,
  // reset: true,
});


sr.reveal(`.home-data, .home-social-link, .home-info,
         .discover-container,
         .exp-data, .exp-overlay,
         .place-card,
         .spon-content,
         .footer-data, .footer-rights`, {
  origin: 'top',
  interval: 100,
});

sr.reveal(`.about-data, 
         .video-desc,
         .subs-desc`, {
  origin: 'left',
});

sr.reveal(`.about-img-overlay, 
         .video-content,
         .subs-form`, {
  origin: 'right',
  interval: 100,
});
