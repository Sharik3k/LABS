
    const cardValues = ['🍎', '🍌', '🍒', '🍇', '🍎', '🍌', '🍒', '🍇', '🍉']; // Значення на картках
    let shuffledCards = [...cardValues].sort(() => Math.random() - 0.5); // Перемішані картки
    let firstCard = null; 
    let secondCard = null; 
    let matchedPairs = 0; 


    const grid = document.getElementById("game-grid");
    shuffledCards.forEach((value, index) => {
      const card = document.createElement("div");
      card.classList.add("card", "hidden");
      card.dataset.value = value; 
      card.dataset.index = index; 
      card.addEventListener("click", () => handleCardClick(card)); 
      grid.appendChild(card);
    });

    
    function handleCardClick(card) {
      
      if (!card.classList.contains("hidden") || secondCard) return;

    
      card.textContent = card.dataset.value;
      card.classList.remove("hidden");

      if (!firstCard) {
    
        firstCard = card;
      } else {
        
        secondCard = card;

        
        if (firstCard.dataset.value === secondCard.dataset.value) {
        
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          firstCard = null;
          secondCard = null;
          matchedPairs++;

        
          if (matchedPairs === cardValues.length / 2) {
            setTimeout(() => alert("Вітаємо! Ви знайшли всі пари!"), 300);
          }
        } else {
    
          setTimeout(() => {
            firstCard.textContent = "";
            secondCard.textContent = "";
            firstCard.classList.add("hidden");
            secondCard.classList.add("hidden");
            firstCard = null;
            secondCard = null;
          }, 1000);
        }
      }
    }