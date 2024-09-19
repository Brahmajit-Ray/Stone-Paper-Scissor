let score={
    user_score:0,
    computer_score:0,
    tie:0
};

function check_win(choice){
    let computer=computerChoice();

    if (computer===choice){
        score['tie']+=1
    }else{
        if(choice==="Stone"){
            if(computer=="Paper"){
                score['computer_score']+=1;
            }else{
                score['user_score']+=1;
            }
        }

        if(choice==="Paper"){
            if(computer=="Scissor"){
                score['computer_score']+=1;
            }else{
                score['user_score']+=1;
            }
        }

        if(choice==="Scissor"){
            if(computer=="Stone"){
                score['computer_score']+=1;
            }else{
                score['user_score']+=1;
            }
        }
    }

    document.querySelector("#scoreline").innerText=`User Score:${score['user_score']}   Computer Score:${score['computer_score']}   Tie:${score['tie']}`;
    document.querySelector("#roll").innerText=`User Choice:${choice}    Computer Choice:${computer}`;

}


function computerChoice(){
    let randomNumber=Math.random()*3;
    let computer="";
    if (randomNumber>0 && randomNumber<=1){
        computer="Stone";
    }else if(randomNumber>1 && randomNumber<=2){
        computer="Paper";
    }else{
        computer="Scissor";
    }

    return computer;
}