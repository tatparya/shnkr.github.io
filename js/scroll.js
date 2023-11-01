var isInViewport = function(elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
// read the link on how above code works

var findMe = document.querySelectorAll('.custom-card-panel');

// window.addEventListener('scroll', function(event) {
// // add event on scroll
// findMe.forEach(element => {
//     //for each .thisisatest
//     if (isInViewport(element)) {
//       //if in Viewport
//       element.classList.add("blur-img");
//       console.log("")
//     }
// });
// }, false);

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('scrolled-top');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('scrolled-top');
  }
});
