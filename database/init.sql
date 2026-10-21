CREATE TABLE IF NOT EXISTS app_status (
    id INT PRIMARY KEY,
    message VARCHAR(100) NOT NULL
);

INSERT IGNORE INTO app_status (id, message)
VALUES (1, 'La base de données est prête');