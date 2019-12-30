package com.parkinglot.parkinglot.controllers;

import com.parkinglot.parkinglot.models.User;
import com.parkinglot.parkinglot.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterUserController {

    @Autowired
    UserRepository userDao;

    @PostMapping("api/register")
    public void registerUser(@RequestBody User newUser) {
        userDao.save(newUser);
    }
}
