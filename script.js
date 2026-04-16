let sliderImages = document.querySelectorAll("#slider img");
let slideTitle = document.getElementById("slide-title");
let slideStatus = document.getElementById("slide-status");

let titles = document.querySelectorAll("[data-slide-title]");
let statusList = document.querySelectorAll("[data-slide-status]");

let index = 0;

// init
sliderImages[0].classList.add("active");

function changeSlide() {
    // animation fade out text
  TweenLite.to([slideTitle, slideStatus], 0.5, {
        autoAlpha: 0,
        y: -20,
        onComplete: () => {
                // update index
          index = (index + 1) % sliderImages.length;

          // change image
          sliderImages.forEach(img => img.classList.remove("active"));
                sliderImages[index].classList.add("active");

          // update text content
          slideTitle.innerHTML = titles[index].innerHTML;
                slideStatus.innerHTML = statusList[index].innerHTML;

          // animation fade in text
          TweenLite.fromTo([slideTitle, slideStatus], 0.5, 
                           { autoAlpha: 0, y: 20 },
                           { autoAlpha: 1, y: 0 }
                                 );
        }
  });
}

// auto play
setInterval(changeSlide, 4000);
