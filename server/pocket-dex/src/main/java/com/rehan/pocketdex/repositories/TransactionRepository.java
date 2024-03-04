package com.rehan.pocketdex.repositories;

import com.rehan.pocketdex.model.Transaction;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

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

    public List<Transaction> getAllTransaction(int user_id) {
        String sql = "SELECT * FROM transactions WHERE user_id = "+user_id;
        RowMapper<Transaction> transactionRowMapper = (r, i) -> {
            Transaction rowObject = new Transaction();
            rowObject.setTransaction_amount(r.getBigDecimal("transaction_amount"));
            rowObject.setTransaction_title(r.getString("transaction_title"));
            rowObject.setTransaction_category(r.getString("transaction_category"));
            rowObject.setTransaction_date(r.getString("transaction_date"));
            rowObject.setWallet_id(r.getInt("wallet_id"));
            rowObject.setUser_id(r.getInt("user_id"));
            return rowObject;
        };
        return jdbcTemplate.query(sql,transactionRowMapper);
    }
}
