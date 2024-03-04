package com.rehan.pocketdex.model;

import java.math.BigDecimal;

public class Wallet {
    private int wallet_id;
    private String wallet_name;
    private int wallet_number;
    private int user_id;
    private BigDecimal balance;
    private BigDecimal budget;

    public int getWallet_id() {
        return wallet_id;
    }

    public void setWallet_id(int wallet_id) {
        this.wallet_id = wallet_id;
    }

    public String getWallet_name() {
        return wallet_name;
    }

    public void setWallet_name(String wallet_name) {
        this.wallet_name = wallet_name;
    }

    public int getWallet_number() {
        return wallet_number;
    }

    public void setWallet_number(int wallet_number) {
        this.wallet_number = wallet_number;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public BigDecimal getBudget() {
        return budget;
    }

    public void setBudget(BigDecimal budget) {
        this.budget = budget;
    }
}
