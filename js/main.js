$(document).ready(function(){
    $('.header').height($(window).height());
})

$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
})


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
  
      if (entry.isIntersecting) {
        square.classList.add('typing-words');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('typing-words');
    });
  });
  
  observer.observe(document.querySelector('.square-wrapper'));

  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const circle = entry.target.querySelector('.circle');
  
      if (entry.isIntersecting) {
        circle.classList.add('intro-paragraph');
        return;
      }
  
      
      circle.classList.remove('intro-paragraph');
    });
  });
  
  observer2.observe(document.querySelector('.circle-wrapper'));

  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const triangle = entry.target.querySelector('.triangle');
  
      if (entry.isIntersecting) {
        triangle.classList.add('zoom');
        return;
      }
  
      
      triangle.classList.remove('zoom');
    });
  });
  
  observer3.observe(document.querySelector('.triangle-wrapper'));

  