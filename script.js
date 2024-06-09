let boxes = document.querySelectorAll(".box");
let player1 = 1; // player1 is playing (x)
let winn = document.querySelector("#winTxt");
let reset = document.querySelector("#reset");

const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let cnt=0;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (player1==1) {
            box.innerText = 'X';
            player1 = 0;
        } else {
            box.innerText = 'O';
            player1 = 1;
        }
        cnt++;
        box.disabled=true;
        let isWinner = winner();
        if (cnt==9 && !isWinner) {
            let winn = document.querySelector("#winTxt");
            winn.innerText = "it's a tie";
            reset.style.bottom = "25px";
        }
    });
});

const winner = () => {
    for(var i of win) {
        let c1 = boxes[i[0]].innerText;
        let c2 = boxes[i[1]].innerText;
        let c3 = boxes[i[2]].innerText;
        if (c1!="" && c2!="" && c3!="" && c1==c2 && c2==c3){
            showWinner();
            return true;
        }
    }
    return false;   
};

const showWinner = () => {
    if (player1==1) {
        winn.innerText = "winner: player2";
    } else {
        winn.innerText = "winner: player1";       
    }
    boxes.forEach((i)=>{
        i.disabled=true;
    });
    reset.style.bottom = "25px";
};

reset.addEventListener("click",()=>{
    boxes.forEach((i)=>{
        i.disabled=false;
        i.innerText="";
    });
    winn.innerText = "";
    reset.style.bottom = "55px";
});