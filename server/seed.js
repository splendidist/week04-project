import Database from "better-sqlite3";
const db = new Database("database.db");

//make database

db.exec(`
CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    review TEXT NOT NULL
)
`);

const insertReview = db.prepare(`
INSERT INTO reviews (name, review) VALUES
(?, ?)
`);

insertReview.run(
  "Emily",
  "🌸 Just whipped up a fresh batch of salads using my homegrown veggies! There's nothing quite like the taste of organic goodness straight from the garden. Who's up for a salad party at the Stardrop Saloon tonight? 🥗💫 #OrganicLiving #SaladParty #StardewLife"
);
insertReview.run(
  "Shane",
  "Ugh, another day, another shift at JojaMart. Can't wait to get home and crack open a cold one. Anyone else feel like the Joja grind is draining the life out of them? Need some serious Stardew Valley therapy ASAP. 🍺😩 #JojaMartBlues #StardewTherapy #IsItFridayYet"
);
insertReview.run(
  "Haley",
  "📸 Just captured the most stunning sunset over Pelican Town! Nature is truly the best artist. Thinking of starting a Stardew Valley photography club - who's in? 🌅📷 #NaturePhotography #SunsetVibes #PelicanTownBeauty"
);
