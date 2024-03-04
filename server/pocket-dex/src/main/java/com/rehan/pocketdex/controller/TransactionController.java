package com.rehan.pocketdex.controller;

import com.rehan.pocketdex.model.Transaction;
import com.rehan.pocketdex.repositories.TransactionRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transaction")
public class TransactionController {


    private final TransactionRepository transactionRepository;
    public TransactionController(TransactionRepository transactionRepository) {
        this.transactionRepository=transactionRepository;
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping
    public void addTransaction(@RequestBody Transaction transaction) {
        transactionRepository.addTransaction(transaction);
    }


}
