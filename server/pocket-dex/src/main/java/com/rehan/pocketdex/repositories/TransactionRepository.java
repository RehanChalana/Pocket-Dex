package com.rehan.pocketdex.repositories;

import com.rehan.pocketdex.model.Transaction;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public class TransactionRepository {
    private final JdbcTemplate jdbcTemplate;
    public TransactionRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate=jdbcTemplate;
    }

    public void addTransaction(Transaction transaction) {
        String sql = "INSERT INTO transactions (wallet_id,user_id,transaction_amount,transaction_title,transaction_date,transaction_category) VALUES (?,?,?,?,?,?)";
        jdbcTemplate.update(sql,transaction.getWallet_id(),transaction.getUser_id(),transaction.getTransaction_amount(),transaction.getTransaction_title(),transaction.getTransaction_date(),transaction.getTransaction_category());
    }
}
