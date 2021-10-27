

//      const bars = document.querySelectorAll('.progress-bar');
           
//      bars.forEach(function(bar){
//          let percentage = bar.dataset.per;
//          let tooltip = bar.children[0];
//          tooltip.innerText = percentage + '%';
//          bar.style.width  = percentage + '%';
//          console.log(percentage);
//      });
// });

const counters = document.querySelectorAll('.counter');


function runCounter () {
  counters.forEach(counter =>{
     counter.innerText = 0;

     let target = +counter.dataset.count;
      
     let step = target / 100;
     
     let count_it = function(){
         let displayedCount = +counter.innerText;
         
         if(displayedCount < target){
         
            counter.innerText = Math.ceil(displayedCount + step);
         
            setTimeout(count_it, 10);
          
        }else{
             counter.innerText = target;
         }
     }

     count_it();
  })
}



let counterSection = document.querySelector('.counter_up');
    let options = {
        rootMargin : '0px 0px -50px 0px'
    }

     let done = 0;

    const sectionObserver = new IntersectionObserver(function(entries){
       if (entries[0].isIntersecting && done!==1){
        done =1;   
        runCounter();
       }
    },options)

    sectionObserver.observe(counterSection);


$('.slider').slick({
     arrows: false,
     autoplay: true
});
