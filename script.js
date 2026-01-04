const screen = document.getElementById("screen");
const input = document.getElementById("gridNum");
const resizeBtn = document.getElementById("resizeBtn");


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

resizeBtn.addEventListener("click", () => {
    createGrid(input.value);
    input.value = "";
});