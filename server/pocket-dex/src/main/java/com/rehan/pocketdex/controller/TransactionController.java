package com.rehan.pocketdex.controller;

import com.rehan.pocketdex.model.Transaction;
import com.rehan.pocketdex.model.users;
import com.rehan.pocketdex.repositories.TransactionRepository;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    private Logger logger = Logger.getLogger(TransactionController.class.getName());

    private final TransactionRepository transactionRepository;
    public TransactionController(TransactionRepository transactionRepository) {
        this.transactionRepository=transactionRepository;
    }

    @PostMapping
    public void addTransaction(@RequestBody Transaction transaction,@RequestHeader String wallet_name_header,Authentication authentication) {
        logger.info(transaction.getUsername() + "  "+transaction.getWallet_name());
        transaction.setUsername(authentication.getName());
        transaction.setWallet_name(wallet_name_header);
        transactionRepository.addTransaction(transaction);
    }

    @GetMapping
    public List<Transaction> getAllTransactions(Authentication authentication) {
        return transactionRepository.getAllTransaction(authentication.getName());
    }



}
