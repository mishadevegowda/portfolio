document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  let currentCard = 0;

  // Ensure that 'cards' variable contains the correct elements
  console.log(cards);

  showCard(currentCard); // Show initial card

  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add("active"); // Display the card with the corresponding index
      } else {
        card.classList.remove("active"); // Hide other cards
      }
    });
  }

  const prevBtns = document.querySelectorAll(".prev-btn");
  const nextBtns = document.querySelectorAll(".next-btn");

  // Check if the buttons are being correctly selected
  console.log(prevBtns);
  console.log(nextBtns);

  // Attach event listeners to the buttons
  prevBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      currentCard = (currentCard - 1 + cards.length) % cards.length;
      showCard(currentCard);
    });
  });

  nextBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      currentCard = (currentCard + 1) % cards.length;
      showCard(currentCard);
    });
  });
});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
