let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPatt = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]; 
let turnX = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner ();
    });
});

function showWinner(winner) {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let patt of  winPatt) {
        let pos_1_Val = boxes[patt[0]].innerText;
        let pos_2_Val = boxes[patt[1]].innerText;
        let pos_3_Val = boxes[patt[2]].innerText;

        if( pos_1_Val != "" && pos_2_Val !="" && pos_3_Val != "") {
            if(pos_1_Val === pos_2_Val && pos_2_Val === pos_3_Val) {
                console.log("Winner is:", pos_1_Val)
                showWinner(pos_1_Val);
            }
        }
    }
};

const resetgame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);