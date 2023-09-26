const correctAnswers = ['C', 'B', 'C', 'D', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const scoreSpan = document.getElementById('score')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // cheching the correct answer
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 20;
           
        }
    })

    scoreSpan.innerText = `${score}%`;

    result.style.display = 'block';





    console.log(score);
 

    
});


