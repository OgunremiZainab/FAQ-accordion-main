const questionParagraph = document.querySelectorAll('.question-btn');
const icons = document.querySelectorAll('.question-icon');

function answerQuestion(selector) {
   if (!selector.classList.contains('hide')) {
      selector.classList.add('hide');  
    } else {
       selector.classList.remove('hide');  
    }        
}


icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const answer = document.querySelectorAll('.answer');
        answerQuestion(answer[index]);
        if (icon.classList.contains('fa-plus')) {
          icon.classList.remove('fa-plus');
          icon.classList.add('fa-minus');
          icon.style.backgroundColor = "purple";
    
        } else {
          icon.classList.remove('fa-minus');
          icon.classList.add('fa-plus'); 
          icon.style.backgroundColor = "black";
        }
      
    });
})

questionParagraph.forEach((question, index) => {
  question.addEventListener('click', () => {
      const answer = document.querySelectorAll('.answer');
      answerQuestion(answer[index]);
  });
})








