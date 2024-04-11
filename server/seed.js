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
  "Bilbo Baggins",
  "A delightful adventure from start to finish! As the protagonist, I can assure you that 'The Hobbit' is a tale filled with bravery, friendship, and unexpected twists. From encountering trolls to outsmarting dragons, this book will take you on an unforgettable journey through Middle-earth. A must-read for any fellow hobbit or adventurer at heart!"
);
insertReview.run(
  "Gandalf the Grey",
  "Ah, 'The Hobbit' is a captivating tale woven with magic and wonder. Tolkien's masterful storytelling transports readers into a world teeming with mythical creatures and epic quests. From the humble beginnings of a hobbit's hole to the vast halls of Erebor, the adventure unfolds with every turn of the page. Join Bilbo, Thorin, and company on an unforgettable expedition filled with danger and discovery."
);
insertReview.run(
  "Thorin Oakenshield",
  "A story of courage, loyalty, and reclaiming what is rightfully ours! 'The Hobbit' chronicles the epic journey of a reluctant hero who joins our company on a quest to reclaim the Lonely Mountain. Tolkien's vivid descriptions and rich world-building immerse readers in the struggles and triumphs of our quest. From battling goblins in the Misty Mountains to facing the fiery wrath of Smaug, this book captures the essence of true dwarven resilience. An epic tale worthy of remembrance in the halls of Erebor!"
);
