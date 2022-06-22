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
      const rectangle = entry.target.querySelector('.rectangle');
  
      if (entry.isIntersecting) {
        rectangle.classList.add('exp-desc');
        return;
      }
  
      
      rectangle.classList.remove('exp-desc');

    });
  });
  
  observer3.observe(document.querySelector('.rectangle-wrapper'));


  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const rectangle = entry.target.querySelector('.diamond');
  
      if (entry.isIntersecting) {
        rectangle.classList.add('myself-desc');
        return;
      }
  
      
      rectangle.classList.remove('myself-desc');

    });
  });
  
  observer4.observe(document.querySelector('.diamond-wrapper'));

  const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const rhombus = entry.target.querySelector('.rhombus');
  
      if (entry.isIntersecting) {
        rhombus.classList.add('side-desc');
        return;
      }
  
      
      rhombus.classList.remove('side-desc');

    });
  });
  
  observer5.observe(document.querySelector('.rhombus-wrapper'));


const observer6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const triangle = entry.target.querySelector('.triangle');

    if (entry.isIntersecting) {
      triangle.classList.add('conn-desc');
      return;
    }

    
    triangle.classList.remove('conn-desc');

  });
});

observer6.observe(document.querySelector('.triangle-wrapper'));


const observer7 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const star = entry.target.querySelector('.star');

    if (entry.isIntersecting) {
      star.classList.add('proj-desc');
      return;
    }

    
    star.classList.remove('proj-desc');

  });
});

observer7.observe(document.querySelector('.star-wrapper'));



  