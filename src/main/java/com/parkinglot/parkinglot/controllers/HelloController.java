package com.parkinglot.parkinglot.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {

    @GetMapping("api/hello")
    public String hello() {
        return "Hello from Spring " + new Date();
    }

}
