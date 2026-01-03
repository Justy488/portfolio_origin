const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", function () {
  shuffleCards();
});

function shuffleCards() {
  const container = document.querySelector(".card-container");
  const firstCard = container.querySelector(".card");

  firstCard.style.opacity = "0";
  firstCard.style.transform = "translateY(-100px) rotateX(20deg)";

  setTimeout(function () {
    container.appendChild(firstCard);
    firstCard.style.opacity = "1";
    firstCard.style.transform = "";
  }, 500);
}

const allCards = document.querySelectorAll(".card");

allCards.forEach(function (card) {
  card.addEventListener("click", function () {
    allCards.forEach(function (c) {
      c.classList.remove("active");
    });
    card.classList.add("active");
  });
});
