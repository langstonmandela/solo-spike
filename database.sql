-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:

CREATE TABLE "favorites" (
  "fav_id" SERIAL PRIMARY KEY,
  "category_id" INT, -- this can be null to start because we need to PUT it in here
  "gif_url" VARCHAR (250) NOT NULL
);


INSERT INTO "favorites"
("category_id","gif_url")
VALUES
('1', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3JxZHlvdWZocmxhbDRkZHY4cGsyanI4bWlqZGU1bmllbzMwYXAzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mP3Xyab9FgurhvSnlU/giphy.gif');
-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.
