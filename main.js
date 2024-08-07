const cells = document.querySelectorAll(".cell");
const empty_cell_color = "white";
const r = 0, g = 50, b = 100;

function changeColor(cell) {
    let power = Math.log2(parseInt(cell.innerHTML));
    if (parseInt(cell.innerHTML) == 1) {
        cell.style.backgroundColor = `rgb(${255}, ${255}, ${255})`;
        return null;
    }
    cell.style.backgroundColor = `rgb(${r + 10 * power}, ${g + 10 * power}, ${b + 10 * power})`;
    return null;
}

function firstGeneration() {
    let options = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    ];
    for (i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        let random = Math.floor(Math.random() * options.length);
        cells[options[random]].innerHTML = 2;
        options = options.filter((elem, index) => index !== random);
    }
}

function generate() {
    let options = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    ];
    options = options.filter((elem) => cells[elem].innerHTML === "1");

    let random = Math.floor(Math.random() * options.length);
    cells[options[random]].innerHTML = 2;
    options = options.filter((elem, index) => index !== random);
}

function moveUp() {
    for (let i = 4; i < cells.length; i++) {
        let j = i;
        while (j >= 4 /*&& cells[j - 4].innerHTML === "1"*/) {
            if (cells[j].innerHTML == cells[j - 4].innerHTML && cells[j].innerHTML !== "1") {
                cells[j].innerHTML = 1;
                cells[j - 4].innerHTML = parseInt(cells[j - 4].innerHTML) * 2;
                j -= 4
            } else if (cells[j - 4].innerHTML === "1") {
                cells[j - 4].innerHTML = cells[j].innerHTML;
                cells[j].innerHTML = 1;
                j -= 4;
            } else {
                break;
            }
        }
    }
    // for (let i = cells.length - 1; i >= 4; i--) {
    //     let j = i;
    //     while (j >= 4 && cells[j - 4].innerHTML === "1") {
    //         cells[j - 4].innerHTML = cells[j].innerHTML;
    //         cells[j].innerHTML = 1;
    //         j -= 4;
    //     }
    //     if (j >= 4 && cells[j].innerHTML == cells[j - 4].innerHTML) {
    //         cells[j].innerHTML = 1;
    //         cells[j - 4].innerHTML = parseInt(cells[j - 4].innerHTML) * 2;
    //     }
    // }
}
function moveLeft() {
    for (let i = 1; i < cells.length; i++) {
        let j = i;
        while (j % 4 !== 0 /*&& cells[j - 4].innerHTML === "1"*/) {
            if (cells[j].innerHTML == cells[j - 1].innerHTML && cells[j].innerHTML !== "1") {
                cells[j].innerHTML = 1;
                cells[j - 1].innerHTML = parseInt(cells[j - 1].innerHTML) * 2;
                j -= 1;
            } else if (cells[j - 1].innerHTML === "1") {
                cells[j - 1].innerHTML = cells[j].innerHTML;
                cells[j].innerHTML = 1;
                j -= 1;
            } else {
                break;
            }
        }
    }
    // for (let i = cells.length - 1; i >= 1; i--) {
    //     let j = i;
    //     while (j % 4 !== 0 && cells[j - 1].innerHTML === "1") {
    //         cells[j - 1].innerHTML = cells[j].innerHTML;
    //         cells[j].innerHTML = 1;
    //         j--;
    //     }
    //     if (j % 4 !== 0 && cells[j].innerHTML == cells[j - 1].innerHTML) {
    //         cells[j].innerHTML = 1;
    //         cells[j - 1].innerHTML = parseInt(cells[j - 1].innerHTML) * 2;
    //     }
    // }
}
function moveDown() {
    for (let i = cells.length - 1 - 4; i >= 0; i--) {
        let j = i;
        while (j <= cells.length - 1 - 4 /*&& cells[j - 4].innerHTML === "1"*/) {
            if (cells[j].innerHTML == cells[j + 4].innerHTML && cells[j].innerHTML !== "1") {
                cells[j].innerHTML = 1;
                cells[j + 4].innerHTML = parseInt(cells[j + 4].innerHTML) * 2;
                j += 4
            } else if (cells[j + 4].innerHTML === "1") {
                cells[j + 4].innerHTML = cells[j].innerHTML;
                cells[j].innerHTML = 1;
                j += 4;
            } else {
                break;
            }
        }
    }
    // for (let i = cells.length - 1 - 4; i >= 0; i--) {
    //     let j = i;
    //     while (j <= cells.length - 1 - 4 && cells[j + 4].innerHTML === "1") {
    //         cells[j + 4].innerHTML = cells[j].innerHTML;
    //         cells[j].innerHTML = 1;
    //         j += 4;
    //     }
    //     if (j <= cells.length - 1 - 4 && cells[j].innerHTML == cells[j + 4].innerHTML) {
    //         cells[j].innerHTML = 1;
    //         cells[j + 4].innerHTML = parseInt(cells[j + 4].innerHTML) * 2;
    //     }
    // }
}
function moveRight() {
    for (let i = cells.length - 1 - 1; i >= 0; i--) {
        let j = i;
        while (j % 4 !== 3 /*&& cells[j - 4].innerHTML === "1"*/) {
            if (cells[j].innerHTML == cells[j + 1].innerHTML && cells[j].innerHTML !== "1") {
                cells[j].innerHTML = 1;
                cells[j + 1].innerHTML = parseInt(cells[j + 1].innerHTML) * 2;
                j += 1;
            } else if (cells[j + 1].innerHTML === "1") {
                cells[j + 1].innerHTML = cells[j].innerHTML;
                cells[j].innerHTML = 1;
                j += 1;
            } else {
                break;
            }
        }
    }
    // for (let i = 0; i <= 14; i++) {
    //     let j = i;
    //     while (j % 4 !== 3 && cells[j + 1].innerHTML === "1") {
    //         cells[j + 1].innerHTML = cells[j].innerHTML;
    //         cells[j].innerHTML = 1;
    //         j++;
    //     }
    //     if (j % 4 !== 3 && cells[j].innerHTML == cells[j + 1].innerHTML) {
    //         cells[j].innerHTML = 1;
    //         cells[j + 1].innerHTML = parseInt(cells[j + 1].innerHTML) * 2;
    //     }
    // }
}

function checkIfFull() {
    for (i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML === "1") return false;
        if (i == 0) {
            if (cells[i + 1].innerHTML == cells[i].innerHTML) return false;
            if (cells[i + 4].innerHTML == cells[i].innerHTML) return false;
        }
        if (i == 3) {
            if (cells[i - 1].innerHTML == cells[i].innerHTML) return false;
            if (cells[i + 4].innerHTML == cells[i].innerHTML) return false;
        }
        if (i == cells.length - 1 - 3) {
            if (cells[i + 1].innerHTML == cells[i].innerHTML) return false;
            if (cells[i - 4].innerHTML == cells[i].innerHTML) return false;
        }
        if (i == cells.length - 1) {
            if (cells[i - 1].innerHTML == cells[i].innerHTML) return false;
            if (cells[i - 4].innerHTML == cells[i].innerHTML) return false;
        }
        if (i > 0 && i < 3) {
            if (cells[i - 1].innerHTML == cells[i.innerHTML]) return false;
            if (cells[i + 1].innerHTML == cells[i.innerHTML]) return false;
            if (cells[i + 4].innerHTML == cells[i.innerHTML]) return false;
        }
        if (i > 11 && i < 16) {
            if (cells[i - 1].innerHTML == cells[i.innerHTML]) return false;
            if (cells[i + 1].innerHTML == cells[i.innerHTML]) return false;
            if (cells[i - 4].innerHTML == cells[i.innerHTML]) return false;
        }
        if (i % 4 == 0 && i !== 0 && i !== cells.length - 1 - 3) {
            if (cells[i + 4].innerHTML == cells[i.innerHTML]) return false;
            if (cells[i + 1].innerHTML == cells[i.innerHTML]) return false;
            if (cells[i - 4].innerHTML == cells[i.innerHTML]) return false;
        }
        if (i % 4 == 3 && i !== 3 && i !== cells.length - 1) {
            if (cells[i + 4].innerHTML == cells[i.innerHTML]) return false;
            if (cells[i - 1].innerHTML == cells[i.innerHTML]) return false;
            if (cells[i - 4].innerHTML == cells[i.innerHTML]) return false;
        }
        if (cells[i + 4].innerHTML == cells[i.innerHTML]) return false;
        if (cells[i - 1].innerHTML == cells[i.innerHTML]) return false;
        if (cells[i - 4].innerHTML == cells[i.innerHTML]) return false;
        if (cells[i + 1].innerHTML == cells[i.innerHTML]) return false;
        
    }
    return true;
}

window.addEventListener("keydown", (event) => {
    switch (event.code) {
        case "KeyW":
            console.log(checkIfFull());
            if(!checkIfFull()){
                moveUp();
            }
            generate();
            cells.forEach(changeColor);
            break;
        case "KeyA":
            if(!checkIfFull()){
                moveLeft();
            }
            generate();
            cells.forEach(changeColor);
            break;
        case "KeyS":
            if(!checkIfFull()){
                moveDown();
            }
            generate();
            cells.forEach(changeColor);
            break;
        case "KeyD":
            if(!checkIfFull()){
                moveRight();
            }
            generate();
            cells.forEach(changeColor);
            break;
        case "ArrowUp":
            if(!checkIfFull()){
                moveUp();
            }
            generate();
            cells.forEach(changeColor);
            break;
        case "ArrowLeft":
            if(!checkIfFull()){
                moveLeft();
            }
            generate();
            cells.forEach(changeColor);
            break;
        case "ArrowDown":
            if(!checkIfFull()){
                moveDown();
            }
            generate();
            cells.forEach(changeColor);
            break;
        case "ArrowRight":
            if(!checkIfFull()){
                moveRight();
            }
            generate();
            cells.forEach(changeColor);
            break;
    }
})

function init() {
    firstGeneration();
    cells.forEach(changeColor);
}

window.onload = init();