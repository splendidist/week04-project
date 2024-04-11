const form = document.getElementById("message-form");

function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const review = event.target.review.value;
  console.log({ name: name, review: review });
  event.target.reset(); //resets form after submitted
  fetch("http://localhost:8080/message", {
    method: "POST",
    body: JSON.stringify({ name: name, review: review }),
    headers: { "Content-Type": "application/json" },
  });
}

form.addEventListener("submit", handleSubmit);

const booksWrapper = document.getElementById("booksWrapper");

async function getBooks() {
  const response = await fetch("http://localhost:8080/books");
  const books = await response.json();

  books.forEach(function (reviews) {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = reviews.name;
    p.textContent = reviews.review;
    booksWrapper.appendChild(h2);
    booksWrapper.appendChild(p);
  });
}

getBooks();
