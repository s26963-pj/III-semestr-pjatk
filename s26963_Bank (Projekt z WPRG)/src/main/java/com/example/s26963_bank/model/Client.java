package com.example.s26963_bank.model;

import com.example.s26963_bank.exceptions.ValidationException;
import lombok.Getter;

@Getter
public class Client {
    private static int id;
    private int clientId;
    private String pesel;
    private double balance;
    private CurrencyClass currency;
    private String name;
    private String lastName;

    public Client(String pesel, double balance, CurrencyClass currency, String name, String lastName) {
        if (balance < 0){
            throw new ValidationException("balance cannot be below 0");
        }else if (pesel.isBlank() || name.isBlank() || lastName.isBlank()) {
            throw new ValidationException("pesel or name or lastname cannot be blank");
        }else {
            this.clientId = id;
            this.pesel = pesel;
            this.balance = balance;
            this.currency = currency;
            this.name = name;
            this.lastName = lastName;
            id++;
        }
    }
}
