package com.rehan.pocketdex.controller;

import com.rehan.pocketdex.model.Transaction;
import com.rehan.pocketdex.repositories.TransactionRepository;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
public class TransactionController {


    private final TransactionRepository transactionRepository;
    public TransactionController(TransactionRepository transactionRepository) {
        this.transactionRepository=transactionRepository;
    }

    @PostMapping
    public void addTransaction(@RequestBody Transaction transaction) {
        transactionRepository.addTransaction(transaction);
    }

    @GetMapping
    public List<Transaction> getAllTransactions(@RequestParam int user_id) {
        return transactionRepository.getAllTransaction(user_id);
    }


}
