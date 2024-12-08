const board = document.getElementById('game-board');


const numbers = Array.from({ length: 8 }, (_, i) => i + 1);
const cards = [...numbers, ...numbers].sort(() => Math.random() - 0.5);


cards.forEach((number) => {
    const card = document.createElement('div');
    card.classList.add('card', 'hidden');
    card.textContent = number;
    card.dataset.number = number;
    board.appendChild(card);
});

let firstCard = null;
let secondCard = null;

board.addEventListener('click', (e) => {
    const clickedCard = e.target;

    if (!clickedCard.classList.contains('card') || clickedCard.classList.contains('correct') || clickedCard === firstCard) {
        return;
    }

    clickedCard.classList.remove('hidden');

    if (!firstCard) {
        firstCard = clickedCard;
    } else {
        secondCard = clickedCard;

        if (firstCard.dataset.number === secondCard.dataset.number) {
            firstCard.classList.add('correct');
            secondCard.classList.add('correct');
        } else {
            setTimeout(() => {
                firstCard.classList.add('hidden');
                secondCard.classList.add('hidden');
            }, 1000);
        }

        firstCard = null;
        secondCard = null;
    }
});
