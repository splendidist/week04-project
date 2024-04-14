import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    season TEXT NOT NULL,
    status TEXT
)
`);

const insertStatus = db.prepare(`
INSERT INTO submissions (name, season, status) VALUES
(?, ?, ?)
`);

insertStatus.run(
  "Emily",
  "🌷",
  "🌸 Just whipped up a fresh batch of salads using my homegrown veggies! There's nothing quite like the taste of organic goodness straight from the garden. Who's up for a salad party at the Stardrop Saloon tonight? 🥗💫 #OrganicLiving #SaladParty #StardewLife"
);
insertStatus.run(
  "Shane",
  "🌞",
  "Ugh, another day, another shift at JojaMart. Can't wait to get home and crack open a cold one. Anyone else feel like the Joja grind is draining the life out of them? Need some serious Stardew Valley therapy ASAP. 🍺😩 #JojaMartBlues #StardewTherapy #IsItFridayYet"
);
insertStatus.run(
  "Haley",
  "🍂",
  "📸 Just captured the most stunning sunset over Pelican Town! Nature is truly the best artist. Thinking of starting a Stardew Valley photography club - who's in? 🌅📷 #NaturePhotography #SunsetVibes #PelicanTownBeauty"
);
insertStatus.run(
  "Elliott",
  "❄️",
  "Cozying up by the fireplace with a mug of hot cocoa and my latest manuscript. There's something magical about the quiet beauty of winter in Stardew Valley. Who else finds inspiration in the frosty landscapes? ✍️📖 #WinterWonderland #WriterLife #StardewInspiration"
);
