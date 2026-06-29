
let score = 0;
let level = 1;
let answer = 0;

function randomInt(max){
    return Math.floor(Math.random()*max);
}

function generateQuestion(){
    let a = randomInt(10*level);
    let b = randomInt(10*level);

    if(level === 1){
        answer = a + b;
        document.getElementById("question").innerText = `${a} + ${b} = ?`;
    } else {
        if(Math.random()>0.5){
            answer = a + b;
            document.getElementById("question").innerText = `${a} + ${b} = ?`;
        } else {
            answer = a - b;
            document.getElementById("question").innerText = `${a} - ${b} = ?`;
        }
    }

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    let options = new Set();
    options.add(answer);

    while(options.size < 4){
        options.add(answer + randomInt(10)-5);
    }

    Array.from(options).sort(()=>Math.random()-0.5).forEach(opt=>{
        let btn = document.createElement("div");
        btn.className = "option";
        btn.innerText = opt;
        btn.onclick = ()=>checkAnswer(opt);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(opt){
    if(opt === answer){
        score += 10;
        alert("Betul!");
    } else {
        alert("Cuba lagi!");
    }
    document.getElementById("score").innerText = "Score: " + score;

    if(score >= 50){
        level = 2;
        document.getElementById("level").innerText = "Level 2";
    }
    if(score >= 100){
        level = 3;
        document.getElementById("level").innerText = "Level 3";
    }
}

function nextQuestion(){
    generateQuestion();
}

window.onload = generateQuestion;
