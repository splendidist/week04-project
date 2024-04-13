const form = document.getElementById("message-form");

const springBtn = document.getElementById("spring");
const summerBtn = document.getElementById("summer");
const fallBtn = document.getElementById("fall");
const winterBtn = document.getElementById("winter");

async function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const season = getSelectedSeason();
  const review = event.target.review.value;
  console.log({ name: name, season: season, review: review });
  event.target.reset(); //resets form after submitted
  fetch("https://week04-project.onrender.com/books", {
    //this link needs to be https://week04-project.onrender.com/books or http://localhost:8080/books
    method: "POST",
    body: JSON.stringify({ name: name, season: season, review: review }),
    headers: { "content-type": "application/json" },
  });
  //makes submission appear on page without having to reload
  const h2 = document.createElement("h2");
  const s = document.createElement("p");
  const p = document.createElement("p");
  s.setAttribute("class", "emoji");
  p.setAttribute("class", "status");
  h2.textContent = name;
  s.textContent = season;
  p.textContent = review;
  booksWrapper.appendChild(h2);
  booksWrapper.appendChild(s);
  booksWrapper.appendChild(p);
}

const booksWrapper = document.getElementById("booksWrapper");

async function getBooks() {
  const response = await fetch("https://week04-project.onrender.com/books"); //this link needs to be https://week04-project.onrender.com/books or http://localhost:8080/books
  const books = await response.json();
  booksWrapper.innerHTML = "";

  books.forEach(function (reviews) {
    const h2 = document.createElement("h2");
    const s = document.createElement("p");
    const p = document.createElement("p");
    s.setAttribute("class", "emoji");
    p.setAttribute("class", "status");
    h2.textContent = reviews.name;
    s.textContent = reviews.season;
    p.textContent = reviews.review;
    booksWrapper.appendChild(h2);
    booksWrapper.appendChild(s);
    booksWrapper.appendChild(p);
  });
}

function getSelectedSeason() {
  if (springBtn.checked) {
    return "🌷";
  } else if (summerBtn.checked) {
    return "🌞";
  } else if (fallBtn.checked) {
    return "🍂";
  } else if (winterBtn.checked) {
    return "❄️";
  } else {
    return null;
  }
}

form.addEventListener("submit", handleSubmit);

getBooks();
