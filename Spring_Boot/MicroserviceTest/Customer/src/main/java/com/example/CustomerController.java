package com.example;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/customer")
@Slf4j
public record CustomerController(CustomerService customerService) {

    public void registerCustomer(@RequestBody CustomerRegisterRequest customerRequest){
        log.info("New customer registration {}", customerRequest);
        customerService.registerCustomer(customerRequest);
    }

}
