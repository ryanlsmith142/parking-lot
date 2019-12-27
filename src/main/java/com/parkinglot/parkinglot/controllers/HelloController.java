package com.parkinglot.parkinglot.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello " + new Date();
    }

}
