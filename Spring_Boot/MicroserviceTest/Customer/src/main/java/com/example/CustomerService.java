package com.example;

import org.springframework.stereotype.Service;

@Service
public record CustomerService(CustomerRepository customerRepository) {
    public void registerCustomer(CustomerRegisterRequest customerRequest) {
        Customer customer = Customer.builder()
                .firstName(customerRequest.firstName())
                .lastName(customerRequest.lastName())
                .email(customerRequest.email())
                .build();
        customerRepository.save(customer);
    }
}
