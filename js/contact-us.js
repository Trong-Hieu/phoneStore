
const carouselSlide = document.querySelector('.container__contact__carousel-slide');
const carouselImages = document.querySelectorAll('.container__contact__carousel-slide img');

const previousBtn = document.querySelector('#previous-btn');
const nextBtn = document.querySelector('#next-btn');

let counter = 5;

carouselSlide.style.transform = 'translateX(' + (-220 * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if(counter >= carouselImages.length - 5) return;
  counter++;
  carouselSlide.style.transform = "translateX(" + (-220 * counter) + "px)";
  carouselSlide.style.transition = "transform 0.7s ease-in-out";
});

previousBtn.addEventListener('click', () => {
  if(counter <= 0) return;
  counter--;
  carouselSlide.style.transform = "translateX(" + (-220 * counter) + "px)";
  carouselSlide.style.transition = "transform 0.7s ease-in-out";
});

carouselSlide.addEventListener('transitionend', () => {
  if(carouselImages[counter].id === 'last-clone-image') {
    counter = carouselImages.length - 10;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = 'translateX(' + (-220 * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'first-clone-image') {
    counter = carouselImages.length - counter;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = 'translateX(' + (-220 * counter) + 'px)';
  }
});
function contactUs(){
  var currentUser = JSON.parse(localStorage.getItem("currentUser"))
      if(currentUser){
           document.getElementById("dropUser").textContent = currentUser.name 
           document.getElementById("dropUser").style.display = "block"
           document.getElementById("login").style.display = "none"
      }
      else{
         document.getElementById("dropUser").style.display = "none"
         document.getElementById("login").style.display = "block"
      }
}










