package com.example.s26963_bank.service;

import com.example.s26963_bank.exceptions.ValidationException;
import com.example.s26963_bank.model.Client;
import com.example.s26963_bank.model.CurrencyClass;
import com.example.s26963_bank.repository.ClientRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class BankServiceTest {
    private static BankService bankService;
    private static ClientRepository clientRepository;

    @BeforeAll
    public static void setUp(){
        clientRepository = new ClientRepository();
        bankService = new BankService(clientRepository);
    }

    @Test
    void shouldAddClientToRepo(){
        Client client = new Client("10093664", 1500, CurrencyClass.PLN, "Edward", "Kowalski");
        Client result = assertDoesNotThrow(() -> bankService.add(client));

        assertEquals(result.getName(), client.getName());
    }

    @Test
    void shouldThrowValidationException(){
        assertThrows(ValidationException.class, () -> new Client("",0,CurrencyClass.EUR,"",""));
    }

    @Test
    void shouldThrowValidationBalanceException(){
        assertThrows(ValidationException.class, () -> new Client("565453454", -4333, CurrencyClass.PLN, "Anna", "Monika"));
    }

}