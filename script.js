const screen = document.getElementById("screen");
const input = document.getElementById("gridNum");
const resizeBtn = document.getElementById("resizeBtn");
const blackBtn = document.getElementById("black");
const grayBtn = document.getElementById("gray");
const rainbowBtn = document.getElementById("rainbow");
const eraseBtn = document.getElementById("erase");
const resetBtn = document.getElementById("reset");
let mode = "black";


createGrid(16);

function createGrid(n){
    n = Number(n);
    if(!Number.isInteger(n) || n <= 0) return;

    screen.innerHTML = "";

    for(let i = 0; i < n*n; i++){
        const cell = document.createElement("div");
        cell.classList.add("cells");
        screen.appendChild(cell);
    }

    screen.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${n}, 1fr)`;
}

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

resizeBtn.addEventListener("click", () => {
    createGrid(input.value);
    input.value = "";
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        createGrid(input.value);
        input.value = "";
    }
})

screen.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("cells")){
        if(mode === "black") e.target.style.backgroundColor = "black";
        else if(mode === "rainbow") e.target.style.backgroundColor = randomColor();
        else if(mode === "gray") e.target.style.backgroundColor = "gray";
        else if(mode === "erase") e.target.style.backgroundColor = "#f8f9fa";
    }
})

blackBtn.addEventListener("click", () => mode = "black");
grayBtn.addEventListener("click", () => mode = "gray");
rainbowBtn.addEventListener("click", () => mode = "rainbow");
resetBtn.addEventListener("click", () => {
    const grids = document.getElementsByClassName("cells");
    const cells = Array.from(grids);
    cells.forEach(cell => cell.style.backgroundColor = "#f8f9fa");
})