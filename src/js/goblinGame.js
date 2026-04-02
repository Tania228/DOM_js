import '../css/style.css';
import imgGoblin from '../img/goblin.png';
import Score from './score';


export default class GoblinGame {
    constructor() {
        this.counter = 16;
        this.time = 1000;
        this.interval = null;
        this.score = new Score();
        this.init();
    }

    init() {
        const container = document.querySelector('.container');

        for (let i = 0; i < this.counter; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.setAttribute('index-cell', i);
            container.append(cell);
        }

        const goblin = document.createElement('img');
        goblin.src = imgGoblin;
        goblin.alt = 'Goblin'

        const cells = document.querySelectorAll('.cell');

        const startIndex = Math.floor(Math.random() * this.counter);

        cells[startIndex].append(goblin);

        this.interval = setInterval(() => {
            const currCell =goblin.parentElement;
            let newCell;

            do {
                newCell = cells[Math.floor(Math.random() * this.counter)];
            } while (newCell === currCell);
            newCell.append(goblin);
        }, this.time);

        goblin.addEventListener('click', () => {
            const game = this.score.addScope();

            if (game) {
                clearInterval(this.interval);
                this.interval = null;
                alert(`Игра окончена. Счет: ${this.score.get()}`)
                this.score.clear();
                location.reload();
            }
        });
    }
}