export default class Score {
    constructor() {
        this.score = 0;
        this.maxScore = 5;
    }
    
    addScope() {
        this.score++;
        return this.score >= this.maxScore;
    }

    get() {
        return this.score;
    }

    clear() {
        this.score = 0;
    }
}