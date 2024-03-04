package com.rehan.pocketdex.controller;

import com.rehan.pocketdex.model.Transaction;
import com.rehan.pocketdex.repositories.TransactionRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
