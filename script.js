let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}

box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked!");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBox = () => { 
    for (let box of box) {
      box.disabled = true; 
    }
  };
  
  const enableBox = () => {
    
    for (let box of box) {
      box.disabled = false; 
      box.innerText = ""; 
    }
  };
  
  const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox(); 
  };
  

const checkWinner = () => {
    for (const pattern of winningPattern) {
      const firstBoxValue = box[pattern[0]].innerText;
      const secondBoxValue = box[pattern[1]].innerText;
      const thirdBoxValue = box[pattern[2]].innerText;
  
      if (
        firstBoxValue !== "" &&
        secondBoxValue !== "" &&
        thirdBoxValue !== "" &&
        firstBoxValue === secondBoxValue &&
        secondBoxValue === thirdBoxValue
      ) {
        console.log("Winner!", firstBoxValue);
        showWinner(firstBoxValue);
      }
    }
  };
  
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);