<<<<<<< HEAD
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0){
  for (let index = 0; index < popupLinks.length; index++){
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupClosenIcon = document.querySelectorAll('.close-popup');
if (popupClosenIcon.lenght > 0) {
  for (let index = 0; index < popupClosenIcon.lenght; index ++){
    const el = popupCloseIcon[index];
    el.addEventLister('click', function (e){
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup){
  if(curentPopup && unlock){
    const popupActive = document.querySelector('.popup.open');
    if (popupActive){
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e){
      if (!e.target.closest('.popup_content')){
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true){
  if (unlock){
    popupActive.classList.remove('open');
    if (doUnlock){
      bodyUnLock();
    }
  }
}

function bodyLock(){
  const lockPaddingValue = window.innerWidth - document.querySelector('.popup_body').offsetWidth + 'px';
  if (lockPadding.lenght > 0) {
    for (let index = 0; index < lockPadding.lenght; index ++){
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function (){
    unlock = true;
  }, timeout);
}

function bodyUnLock(){
  setTimeout (function (){
    if (lockPadding.lenght > 0){
    for (let index = 0; index < lockPadding.lenght; index ++){
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
  }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
    }, timeout);

  unlock = false;
  setTimeout(function (){
    unlock = true;
  }, timeout);
}

document.addEventListener('keudown', function(e){
  if (e.which === 27){
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function (){
  if (!Element.prototype.closest){
    Element.prototype.closest = function (css){
      var node = this;
      while (node){
        if(node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function (){
  if (!Element.prototype.matches){
    Element.prototype.matches = Element.prototype.webkitMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
=======
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0){
  for (let index = 0; index < popupLinks.length; index++){
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupClosenIcon = document.querySelectorAll('.close-popup');
if (popupClosenIcon.lenght > 0) {
  for (let index = 0; index < popupClosenIcon.lenght; index ++){
    const el = popupCloseIcon[index];
    el.addEventLister('click', function (e){
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup){
  if(curentPopup && unlock){
    const popupActive = document.querySelector('.popup.open');
    if (popupActive){
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e){
      if (!e.target.closest('.popup_content')){
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true){
  if (unlock){
    popupActive.classList.remove('open');
    if (doUnlock){
      bodyUnLock();
    }
  }
}

function bodyLock(){
  const lockPaddingValue = window.innerWidth - document.querySelector('.popup_body').offsetWidth + 'px';
  if (lockPadding.lenght > 0) {
    for (let index = 0; index < lockPadding.lenght; index ++){
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function (){
    unlock = true;
  }, timeout);
}

function bodyUnLock(){
  setTimeout (function (){
    if (lockPadding.lenght > 0){
    for (let index = 0; index < lockPadding.lenght; index ++){
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
  }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
    }, timeout);

  unlock = false;
  setTimeout(function (){
    unlock = true;
  }, timeout);
}

document.addEventListener('keudown', function(e){
  if (e.which === 27){
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function (){
  if (!Element.prototype.closest){
    Element.prototype.closest = function (css){
      var node = this;
      while (node){
        if(node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function (){
  if (!Element.prototype.matches){
    Element.prototype.matches = Element.prototype.webkitMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
>>>>>>> c98c08ea7ac40a06c4e11a88140bdda3d8bbcfa3
})();