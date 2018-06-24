//   NAVIGATION

// selectors: navigation
const navHome = document.querySelector('#navHome');
const navAbout = document.querySelector('#navAbout');
const navWork = document.querySelector('#navWork');

// selectors: buttons
const homeBtn = document.querySelector('#homeIcon');
const aboutBtn = document.querySelector('#aboutIcon');
const workBtn = document.querySelector('#workIcon');

// selectors: sections
const home = document.querySelector('#homeSection');
const about = document.querySelector('#aboutSection');
const work = document.querySelector('#workSection');

// showing only the home section at first
home.style.display = 'block';
about.style.display = 'none';
work.style.display = 'none';

// home button on click
navHome.addEventListener('click', function() {
  homeBtn.classList.add('active');
  aboutBtn.classList.remove('active');
  workBtn.classList.remove('active');
  home.style.display = 'block';
  about.style.display = 'none';
  work.style.display = 'none';
  if (home.classList.contains('is-paused')) {
    home.classList.remove('is-paused');
  }
});

// about button on click
navAbout.addEventListener('click', function() {
  aboutBtn.classList.add('active');
  homeBtn.classList.remove('active');
  workBtn.classList.remove('active');
  home.style.display = 'none';
  about.style.display = 'block';
  work.style.display = 'none';
  if (about.classList.contains('is-paused')) {
    about.classList.remove('is-paused');
  }
});

// work button on click
navWork.addEventListener('click', function() {
  workBtn.classList.add('active');
  homeBtn.classList.remove('active');
  aboutBtn.classList.remove('active');
  home.style.display = 'none';
  about.style.display = 'none';
  work.style.display = 'block';
  if (work.classList.contains('is-paused')) {
    work.classList.remove('is-paused');
  }
});

//   SOCIAL LINKS

// selectors: buttons
const mainBtn = document.querySelector('#socBtn');
const gitHub = document.querySelector('#gitHub');
const lnkdIn = document.querySelector('#lnkdIn');
const minusBtn = document.querySelector('#minusBtn');

// main button on click
mainBtn.addEventListener('click', function() {
  mainBtn.classList.add('disp', 190);
  gitHub.classList.add('a-clicked', 200);
  lnkdIn.classList.add('b-clicked', 200);
  minusBtn.classList.add('minus-clicked', 200);
});

// other buttons on click
gitHub.addEventListener('click', onSubBtnClick);
lnkdIn.addEventListener('click', onSubBtnClick);
minusBtn.addEventListener('click', onSubBtnClick);

function onSubBtnClick() {
  mainBtn.classList.remove('disp');
  gitHub.classList.remove('a-clicked');
  lnkdIn.classList.remove('b-clicked');
  minusBtn.classList.remove('minus-clicked');
}

// WORK SHOWCASE - WALLOP AUTOPLAY WITH PAUSE-ON-HOVER

// selectors: slider
const wallopEl = document.querySelector('.Wallop');
const slider = new Wallop(wallopEl);

// work button on click starts the slider
navWork.addEventListener('click', function() {
  const autoPlayMs = 7500;
  let nextTimeout;
  let loadNext = function() {
    let nextIndex = (slider.currentItemIndex + 1) % slider.allItemsArray.length;
    slider.goTo(nextIndex);
  };
  nextTimeout = setTimeout(function() {
    loadNext();
  }, autoPlayMs);
  slider.on('change', function() {
    clearTimeout(nextTimeout);
    nextTimeout = setTimeout(function() {
      loadNext();
    }, autoPlayMs);
  });
  // pause-on-hover functionality
  wallopEl.addEventListener('mouseenter', function() {
    clearTimeout(nextTimeout);
  });
  wallopEl.addEventListener('mouseleave', function() {
    nextTimeout = setTimeout(function() {
      loadNext();
    }, autoPlayMs);
  });
});
