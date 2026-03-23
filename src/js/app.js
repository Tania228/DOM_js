import '../css/style.css';
import imgGoblin from '../img/goblin.png';


const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.setAttribute('cell-index', i);
    container.appendChild(cell);
}


const goblin = document.createElement('img');
goblin.src = imgGoblin;
goblin.alt = 'Goblin'

const cells = document.querySelectorAll('.cell');

const startIndex = Math.floor(Math.random() * 16);
cells[startIndex].appendChild(goblin);
console.log(`Гоблин появился в ячейке ${startIndex}`);

setInterval(() => {
    const currCell =goblin.parentElement;
    let newCell;
    do {
        newCell = cells[Math.floor(Math.random() * 16)];
    } while (newCell === currCell);

    newCell.appendChild(goblin);

    const currIndex = [...cells].indexOf(currCell);
    const newIndex = [...cells].indexOf(newCell);
    console.log(`Гоблин переместился из ${currIndex} в ${newIndex}`);
}, 1000);