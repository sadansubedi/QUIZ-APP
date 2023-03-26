const QuizDB =[
    {
        question:"Q1: What is the fullform of HTML?",
        a:"Hyper Markup Language",
        b:"Hyper Makeup Language",
        c:"Hypertext Markup Language",
        ans:"ans3"
    },
    {
        question:"Q2: What is the fullform of CSS?",
        a:"Cascading Style Sheets",
        b:"Cartoon Style sheets",
        c:"Cascading style sheep",
        ans:"ans1"
    }, 
    {
        question:"Q3: What is the fullform of HTTP?",
        a:"Hyper test text paper",
        b:"Hypertext transfer Protocol",
        c:"Hypertext transfer product",
        ans:"ans2"
    },
    {
        question:"Q4: What is the fullform of API?",
        a:"Application positional interface",
        b:"Application Programable Interface",
        c:"Applied program interest",
        ans:"ans2"
    },
];
const question = document.querySelector('.question');
//console.log(question);
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const submit= document.querySelector('#submit');
const Answers= document.querySelectorAll('.answer');
const showScores = document.querySelector('#showScore');

//Always define function first then call it so here it is define


let questionCount = 0;
let score = 0;

const loadQuestion =()=>{
     //console.log(QuizDB[0].question);
    const questionlist = QuizDB[questionCount];
   // console.log(questionlist);
    question.textContent = questionlist.question;
    option1.textContent = questionlist.a;
    option2.textContent = questionlist.b;
    option3.textContent = questionlist.c;
}

loadQuestion(); 

const getcheckAnswer =()=>{
   let answer;
    Answers.forEach(curAnsElem => {
            if(curAnsElem.checked){
               answer = curAnsElem.id;
            }     
    });
    return answer;
};

const deselectAll =()=>{
    Answers.forEach(curAnsElem=>curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getcheckAnswer();
        console.log(checkedAnswer);
        if(checkedAnswer=== QuizDB[questionCount].ans){
            score++;
       };
     
       questionCount++;
       deselectAll();
    
       if(questionCount < QuizDB.length){
             loadQuestion();
       }else{
        showScores.innerHTML = `<h3>you scored ${score}/${QuizDB.length} </h3>
        <button class="btn" onclick="location.reload()">play Again</button>`
        showScores.classList.remove('scoreArea');
       }
  
    
});