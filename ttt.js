let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

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
        
    });
});