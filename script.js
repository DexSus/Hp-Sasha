var responsiveSlider = function() {
  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  var h1 = document.getElementById("h1");
  var phrase = ["Шура ♥", "Be happy", "Поздравляю", "you", "with", "your HP", "Счастья", "Be strong", "Красивой", "Умной", "Health", "Весёлой", "Дурной)", "Отпадной", "Неотразимой", "и просто", " будь", "Шурычем"]
  var counter_for_phrase = 1;

  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      h1.innerHTML = phrase[count];
      count++;
    } else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      h1.innerHTML = phrase[count];
      count++;
    }
  };

  var nextSlide = function() {
    if (counter_for_phrase < phrase.length){
      h1.innerHTML = phrase[counter_for_phrase];
      counter_for_phrase++;
    } else {
      counter_for_phrase = 0;
      h1.innerHTML = phrase[counter_for_phrase];
    }
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });

  setInterval(function() {
    nextSlide()
  }, 7700);

};

var main = document.getElementById('main');
var h1 = document.getElementById("h1");
main.style.opacity = 0;
h1.style.opacity = 0;

var audio = document.getElementById("myAudio");
function start(){
  audio.play()
  responsiveSlider();  
  var but = document.getElementById('start');
  but.style.opacity = 0;

  main.style.opacity = 1;
  main.style.transition = "0.7s";
  h1.style.opacity = 1;
  h1.style.transition = "0.7s";
}