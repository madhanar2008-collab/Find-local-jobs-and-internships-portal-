function filterCards() {
  const input = document.getElementById("searchInput");
  if (!input) return;

  const filter = input.value.toLowerCase();
  const cards = document.getElementsByClassName("job-card");

  for (let i = 0; i < cards.length; i++) {
    const text = cards[i].innerText.toLowerCase();
    cards[i].style.display = text.includes(filter) ? "block" : "none";
  }
}

function submitApplication(event) {
  event.preventDefault();
  const msg = document.getElementById("applyMsg");
  msg.textContent = "Application submitted successfully!";
}