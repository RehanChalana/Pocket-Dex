package com.rehan.pocketdex.repositories;

import com.rehan.pocketdex.model.wallets;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface WalletRepository extends JpaRepository<wallets,String> {

    @Query("SELECT w FROM wallets w WHERE w.username = :username")
    public List<wallets> getWalletByUsername(@Param("username") String username);


    @Transactional
    @Modifying
    @Query("UPDATE wallets SET balance = balance - :amount WHERE wallet_name = :wallet_name")
    public void updateBalance(@Param("amount") BigDecimal amount, @Param("wallet_name") String username);
}
