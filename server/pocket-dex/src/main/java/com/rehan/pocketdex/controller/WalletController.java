package com.rehan.pocketdex.controller;

import com.rehan.pocketdex.model.wallets;
import com.rehan.pocketdex.repositories.WalletRepository;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WalletController {

    private final WalletRepository walletRepository;

    public WalletController(WalletRepository walletRepository) {
        this.walletRepository = walletRepository;
    }
    @GetMapping("/getWallets")
    public List<wallets> getWalletsByUsername(Authentication authentication) {
        return walletRepository.getWalletByUsername(authentication.getName());
    }
}
