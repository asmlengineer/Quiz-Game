const question = [
    {
        question : "Which is the Largest Animal in the World",
        answers : [
            {text:"Shark" , correct : false},
            {text:"Blue Whale" , correct : true},
            {text:"Elephant" , correct : false},
            {text:"Giraffee" , correct : false},
        ]
    },
     {
        question : "Which is the Smallest Country in the World",
        answers : [
            {text:"Veticaan City" , correct : true},
            {text:"Bhutan" , correct : false},
            {text:"Nepal" , correct : false},
            {text:"Shri Lanka" , correct : false},
        ]
    },
     {
        question : "Which is the Largest Desert in the World",
        answers : [
            {text:"Kalahari" , correct : false},   
            {text:"Sahara" , correct : true},
            {text:"Gobi" , correct : false},
            {text:"Anatarctica" , correct : false},
        ]
    },
     {
        question : "Which is the Smallest Contienent in the World ?",
        answers : [
            {text:"Asia" , correct : false},
            {text:"Actic" , correct : false},
            {text:"Asutrilla" , correct : true},
            {text: "Africa" , correct : false},
        ]
    }
];

const questionElement = document.getElementById('question');
const AnswerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
   showQuestion(); 
}

   function resetState(){
    nextButton.style.display = 'hidden';
     while(AnswerButtons.firstChild){
        AnswerButtons.removeChild(AnswerButtons.firstChild);   
     }
  }  
  
function showQuestion(){
   resetState();

    let currentQuestion = question[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + "." + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
     button.innerHTML = answer.text;
      button.classList.add('btn');
     AnswerButtons.appendChild(button); 
      if(answer.correct){
        button.dataset.correct = answer.correct;    
      }
         button.addEventListener('click',selectAnswer )   
    });
}  
function selectAnswer(e){
    const selectedBtn = e.target;
   const iscorrect = selectedBtn.dataset.correct === 'true';
    if(iscorrect){
        selectedBtn.classList.add('correct');
        score++;
    } 
   else{
    selectedBtn.classList.add('incorrect');
   } 
    Array.from(AnswerButtons.children) .forEach(button =>{
         if(button.dataset.correct === 'true'){
            button.classList.add("correct");
         }
          button.disabled = true;   
    });
     nextButton.style.display = "block";    
}
 
nextButton.addEventListener('click', ()=>{
    if(currentQuestionIndex < question.length){
        handlenextButton();
    }
     else{
        startQuiz();
     } 
})

function handlenextButton(){
    currentQuestionIndex ++;
   if(currentQuestionIndex < question.length){
        showQuestion();
   } 
  else{
    showScore();
  } 
}
 function showScore(){
    resetState();
   questionElement.innerHTML = `You Scored ${score} out of ${question.length}`;
    nextButton.innerHTML = "Play Again";  
      nextButton.style.display = "block";   
 }
 startQuiz();
