//obteniendo todos los elementos requeridos
const info_box = document.querySelector(".info_box");
const continuar_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");

const option_list =  document.querySelector(".option_list");



info_box.classList.add("activeInfo");//muestra el info_box

//Si se selecciona el boton continuar en info
continuar_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //oculta el info_box
    quiz_box.classList.add("activeQuiz"); //muestra el quiz_box
    showQuestions(0);
    queCounter(1);
    startTimer(20);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;
let score = 0;
let counter;
let timerValue = 20;
let widthValue = 0;

const next_btn = quiz_box.querySelector(".next_btn");
console.log(questions.length);

//si se selecciona el boton siguiente en el quiz...
next_btn.onclick = ()=> {
    if (que_count < questions.length -1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timerValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
    }else {
        console.log("Preguntas completadas");
        const finalScore = score;
        window.location.assign('http://localhost/juego_prueba3/final.html?score=' + finalScore);
        //return window.location.assign('/end.html')
    }
}

let shuffledQuestions = shuffleArray(questions);
questions = shuffledQuestions;


//obteniendo preguntas y respuestas del array
function showQuestions (index){
    const que_text =  document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].question +'</span>';
    // Obtén las opciones de manera aleatoria
    let options = questions[index].options.sort(() => Math.random() - 0.5);

    let option_tag = '<div class="option">'+ questions[index].options[0] + '<span></span></div>'
                     + '<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                     + '<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                     + '<div class="option">'+ questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


let tickIcon ='<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon ='<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected (answer) {
    clearInterval(counter);
    clearInterval(counterLine);

    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("la respuesta es correcta");
        answer.insertAdjacentHTML("beforeend", tickIcon);
        
        score += 10;
        const scoreTitle = document.querySelector('#score_title');
        scoreTitle.textContent = "Puntaje: " + score; //pone el puntaje
        next_btn.style.display = "block"; //si pongo este en el de respuestas correctas solo aparecera si se selecciona la correcta

    } else{
        answer.classList.add("incorrect");
        console.log("la respuesta es incorrecta");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //si la respuesta es incorrecta automaticamente seleccionar la correcta...
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
        setTimeout(function() {
            const finalScore = score;
            window.location.assign('http://localhost/juego_prueba3/final.html?score=' + finalScore); // Redirigir al usuario a la página final con el puntaje obtenido después de 2 segundos
          }, 2000); // 2 segundos en milisegundos

    }
    //ya que el usuario selecciono una opcion desabilitar las demas...
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }

    
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if (time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0){
            clearInterval(counter);
            timeCount.textContent = "0";
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(let i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            
            setTimeout(function() {
                const finalScore = score;
                window.location.assign('http://localhost/juego_prueba3/final.html?score=' + finalScore); // Redirigir al usuario a la página final con el puntaje obtenido después de 2 segundos
              }, 2000);
        }
    }
}



function startTimerLine(time){
    counterLine = setInterval(timer, 32.5);
    function timer(){
        time+=1;
        timeLine.style.width = time + "px";
        if (time > 649){
            clearInterval(counterLine);
        }
    }
}


function queCounter (index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>De<p>'+ questions.length +'</p>Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

function shuffleArray(array) {
    const newArray = array.slice(); // Crear una nueva copia del array original
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generar un índice aleatorio
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Intercambiar elementos en las posiciones i y j
    }
    return newArray;
  }
  
