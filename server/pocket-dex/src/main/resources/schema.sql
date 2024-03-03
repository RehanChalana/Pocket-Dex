CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS wallets (
    wallet_id SERIAL PRIMARY KEY,
    wallet_name VARCHAR(50) NOT NULL,
    wallet_number VARCHAR(8) UNIQUE NOT NULL,
    user_id INT REFERENCES users(user_id),
    balance DECIMAL(15, 2) DEFAULT 0,
    budget DECIMAL(15, 2) DEFAULT 0
);

CREATE TABLE IF NOT EXISTS transactions (
     transaction_id SERIAL PRIMARY KEY,
     wallet_id INT REFERENCES wallets(wallet_id),
     user_id INT REFERENCES users(user_id),
     transaction_amount DECIMAL(15, 2) NOT NULL,
     transaction_title VARCHAR(100) NOT NULL,
     transaction_date DATE NOT NULL,
     transaction_category VARCHAR(50) NOT NULL
);