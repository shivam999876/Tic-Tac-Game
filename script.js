function createBoard(){
    let gridDiv = document.querySelector(".game-board")
    let restart = document.getElementById("restartButton");
    restart.style.marginTop = "20px";
    restart.style.padding = "5px"; 
    for(let i=0 ;i<9 ;i++){
        let div = document.createElement("div")
        div.setAttribute("class","cell");
        div.style.border = "2px solid black";
        gridDiv.appendChild(div);
    }
}
createBoard();

function eventHandling(){
    let divs = document.querySelectorAll(".cell")
    let current = "X"
    for(let div of divs){
        div.addEventListener("click",function(){
            div.textContent = current
            current = (current === "X") ? "O" : "X";
        });
    }
}



const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

function whenClicked(box) {
    box.addEventListener('click', function(){
        if (box.textContent === "") { 
            box.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X"; 
        }

        const winner = winGame(combinations);
        if(winner){
            console.log("hello")
            alert(`${winner} wins!`)
        }
    });
}

const combinations = [[0,1,2],[3,4,5],[6,7,8], //Rows
                      [0,3,6],[1,4,7],[2,5,8],
                      [0,4,8],[2,4,6]]


cells.forEach(function(box){
    whenClicked(box);
});

function winGame(combinations){
    for(let combination of combinations){
        const [a,b,c] = combination
        if(cells[a].textContent === "X" && cells[b].textContent === "X" && cells[c].textContent === "X"){
            return cells[a].textContent;
        }
        else if(cells[a].textContent === "O" && cells[b].textContent === "O" && cells[c].textContent === "O"){
            return cells[a].textContent;
        }
    }

    return null;
}
function drawGame(){
    let count = 0
    cells.forEach(function(cell){
        if (cell.textContent != ""){
            count ++;
        }
    });
    return count === cells.length;
} 
const resButton = document.querySelector("#restartButton")

function restartGame(){
    cells.forEach(function(cell){
        cell.textContent = ""
    });
}


function whenClickedRes(resButton){
    resButton.addEventListener('click', restartGame);
}

whenClickedRes(resButton)