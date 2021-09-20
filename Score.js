const player1 = document.querySelector('#p1score');
const player2 = document.querySelector('#p2score');
const p1 = document.querySelector('#p1display');
const p2 = document.querySelector('#p2display');
const rest = document.querySelector("#reset");
const maxRounds = document.querySelector('#maxrounds')
let gameover = false;
let winningscore = 5
let p1score = 0
let p2score = 0
player1.addEventListener('click', function () {
    if (!gameover) {
        p1score += 1;
        if (p1score === winningscore) {
            gameover = true;
            p1.classList.add('winner')
            p2.classList.add('loser')
        }
        p1.textContent = p1score;

    }
})
player2.addEventListener('click', function () {
    if (!gameover) {
        p2score += 1;
        if (p2score === winningscore) {
            gameover = true;
            p2.classList.add('winner')
            p1.classList.add('loser')
        }
        p2.textContent = p2score;
    }
})
maxRounds.addEventListener('change', function () {
    winningscore = parseInt(this.value)
    reset();
})
rest.addEventListener('click', reset)
function reset() {
    gameover = false;
    p1score = 0;
    p2score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('winner', 'loser')
    p2.classList.remove('winner', 'loser')

}
