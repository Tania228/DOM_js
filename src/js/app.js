import '../css/style.css';
import imgGoblin from '../img/goblin.png';


const container = document.querySelector('.container');

const COUNTER = 16
const TIME = 1000

for (let i = 0; i < COUNTER; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.setAttribute('cell-index', i);
    container.append(cell);
}


const goblin = document.createElement('img');
goblin.src = imgGoblin;
goblin.alt = 'Goblin'

const cells = document.querySelectorAll('.cell');

const startIndex = Math.floor(Math.random() * 16);
cells[startIndex].append(goblin);

let interval = setInterval(() => {
    const currCell =goblin.parentElement;
    let newCell;
    do {
        newCell = cells[Math.floor(Math.random() * 16)];
    } while (newCell === currCell);

    newCell.append(goblin);

    const currIndex = [...cells].indexOf(currCell);
    const newIndex = [...cells].indexOf(newCell);
}, TIME);

goblin.addEventListener('click', () => {
    clearInterval(interval); 
    interval = null;
    alert('Поймал! Игра окончена. Для возобновления игры перезагрузите страницу.');
});