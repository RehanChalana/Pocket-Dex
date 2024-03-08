CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS wallets (
    wallet_id SERIAL PRIMARY KEY,
    wallet_name VARCHAR(50) NOT NULL,
    user_id INT REFERENCES users(user_id),
    balance DOUBLE PRECISION DEFAULT 0,
    budget DOUBLE PRECISION DEFAULT 0
);

CREATE TABLE IF NOT EXISTS transactions (
     transaction_id SERIAL PRIMARY KEY,
     wallet_id INT REFERENCES wallets(wallet_id),
     user_id INT REFERENCES users(user_id),
     transaction_amount DOUBLE PRECISION NOT NULL,
     transaction_title VARCHAR(100) NOT NULL,
     transaction_date VARCHAR(15) NOT NULL,
     transaction_category VARCHAR(50) NOT NULL
);