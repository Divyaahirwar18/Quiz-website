const quizQuestions = [
    {
        question: " What is PHP?",
        opt1: "PHP is an open-source programming language",
        opt2: "PHP is used to develop dynamic and interactive websites",
        opt3: "PHP is a server-side scripting language",
        opt4: "All of the mentioned",
        correct: "opt4",
    },
    {
        question: "Who is the father of PHP?",
        opt1: "Drek Kolkevi",
        opt2: "Rasmus Lerdorf",
        opt3: "Willam Makepiece",
        opt4: "List Barely",
        correct: "opt2",
    },
    {
        question: "What does PHP stand for?",
        opt1: "PHP stands for Preprocessor Home Page",
        opt2: "PHP stands for Pretext Hypertext Processor",
        opt3: "PHP stands for Hypertext Preprocessor",
        opt4: "PHP stands for Personal Hyper Processor",
        correct: "opt3",
    },
    {
        question: "Which of the following is the correct syntax to write a PHP code?",
        opt1: " <?php ?>",
        opt2: "< php >",
        opt3: "< ? php ?>",
        opt4: " <? ?>",
        correct: "opt4",
    },
    {
        question: "Which of the following is the correct way to add a comment in PHP code?",
        opt1: "#",
        opt2: "//",
        opt3: "/* */",
        opt4: " All of the mentioned",
        correct: "opt4",
    },
];
let question_number_element = document.getElementById("question-number");
let question_txt_element = document.getElementById("question-txt");
let option_1_element = document.getElementById("option1");
let option_2_element = document.getElementById("option2");
let option_3_element = document.getElementById("option3");
let option_4_element = document.getElementById("option4");
let next_button = document.getElementById("next-button");
let current_question_number=0;
let score=0;
/**
 * A function to show question and options on html page.
 */
function showQuestion(){
    //uncheck all the option seleceted
    document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false)
    
    //set questions and options from array
    question_number_element.innerHTML = (current_question_number+1) + ". ";
    question_txt_element.innerHTML = quizQuestions[current_question_number].question;
    option_1_element.innerHTML = quizQuestions[current_question_number].opt1;
    option_2_element.innerHTML = quizQuestions[current_question_number].opt2;
    option_3_element.innerHTML= quizQuestions[current_question_number].opt3;
    option_4_element.innerHTML= quizQuestions[current_question_number].opt4;
}

/**
 * Handling Event listner on button click
 */
next_button.addEventListener('click',()=>{
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
    if(optionIdSelected==null)
    {
        alert("Please select one option");
    }else{

        let option_correct = quizQuestions[current_question_number].correct;
        if(optionIdSelected.id==option_correct){
            score++;        
        }
        current_question_number ++;
        if(current_question_number>=quizQuestions.length){
            // show final answer
            current_question_number = 0;
            localStorage.setItem("score", score);
            location.href = "./resultPage.html";
    
        }else{
            //show next question
            showQuestion();
        }
    }
});

showQuestion();