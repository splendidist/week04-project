const form = document.getElementById("message-form");

const springBtn = document.getElementById("spring");
const summerBtn = document.getElementById("summer");
const fallBtn = document.getElementById("fall");
const winterBtn = document.getElementById("winter");

async function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const season = getSelectedSeason();
  const status = event.target.status.value;
  console.log({ name: name, season: season, status: status });
  event.target.reset(); //resets form after submitted
  fetch("https://week04-project.onrender.com/submissions", {
    //this link needs to be https://week04-project.onrender.com/submissions or http://localhost:8080/submissions
    method: "POST",
    body: JSON.stringify({ name: name, season: season, status: status }),
    headers: { "content-type": "application/json" },
  });
  //makes submission appear on page without having to reload
  const h2 = document.createElement("h2");
  const s = document.createElement("p");
  const p = document.createElement("p");
  const likeBtn = document.createElement("button");
  s.setAttribute("class", "emoji");
  p.setAttribute("class", "status");
  likeBtn.setAttribute("class", "like-button");
  h2.textContent = name;
  s.textContent = season;
  p.textContent = status;
  likeBtn.textContent = "💖";
  statusWrapper.appendChild(h2);
  statusWrapper.appendChild(s);
  statusWrapper.appendChild(p);
  statusWrapper.appendChild(likeBtn);
}

const statusWrapper = document.getElementById("statusWrapper");

async function getSubmissions() {
  const response = await fetch(
    "https://week04-project.onrender.com/submissions"
  );
  //this link needs to be https://week04-project.onrender.com/submissions or http://localhost:8080/submissions
  const status = await response.json();
  statusWrapper.innerHTML = "";

  status.forEach(function (submissions) {
    const h2 = document.createElement("h2");
    const s = document.createElement("p");
    const p = document.createElement("p");
    const likeBtn = document.createElement("button");
    s.setAttribute("class", "emoji");
    p.setAttribute("class", "status");
    likeBtn.setAttribute("class", "like-button");
    h2.textContent = submissions.name;
    s.textContent = submissions.season;
    p.textContent = submissions.status;
    likeBtn.textContent = "💖";
    statusWrapper.appendChild(h2);
    statusWrapper.appendChild(s);
    statusWrapper.appendChild(p);
    statusWrapper.appendChild(likeBtn);
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

getSubmissions();
