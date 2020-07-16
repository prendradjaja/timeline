CREATE TABLE historical_event (
  year INTEGER NOT NULL,
  title VARCHAR(100) NOT NULL
);

INSERT INTO historical_event
  (year, title)
VALUES
  (280, 'China united under the Jin dynasty'),
  (786, 'Baghdad House of Wisdom founded'),
  (1914, 'Start of World War I'),
  (1929, 'Start of the Great Depression'),
  (1947, 'India gains independence');
-- Source: Bill Wurtz
