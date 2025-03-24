document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
      .then(response => response.json())
      .then(quotes => {
          let randomIndex = Math.floor(Math.random() * quotes.length);
          let quoteData = quotes[randomIndex];

          document.getElementById("quote-text").textContent = quoteData.quote;
          document.getElementById("quote-tags").textContent = quoteData.tags[0];
      })
      .catch(error => console.error("Error loading quotes:", error));
});


document.querySelector(".container").addEventListener("click", function () {
  document.querySelector(".card").classList.add("flipped");
  setTimeout(() => {
    document.getElementById("refreshButton").style.opacity='1';
  }, 500);
});