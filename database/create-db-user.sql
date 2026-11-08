
-- tämä on vain mallia;
-- ÄLÄ tötö tiedostoa tuuppaa gittiin, jos täällä on oikeita salasanoja;

CREATE USER 'myusername'@'localhost' IDENTIFIED BY 'mypassword';
GRANT ALL PRIVILEGES ON `wskcats`.* TO 'myusername'@'localhost';
FLUSH PRIVILEGES;
