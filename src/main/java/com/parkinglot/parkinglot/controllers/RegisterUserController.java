package com.parkinglot.parkinglot.controllers;

import com.parkinglot.parkinglot.models.User;
import com.parkinglot.parkinglot.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterUserController {

    @Autowired
    UserRepository userDao;

    @PostMapping("api/register")
    public void registerUser(@RequestParam String email,
                             @RequestParam String password,
                             @RequestParam String username,
                             @RequestParam String firstName,
                             @RequestParam String lastName) {
        User newUser = new User();

        newUser.setEmail(email);
        newUser.setPassword(password);
        newUser.setUsername(username);
        newUser.setFirstName(firstName);
        newUser.setLastName(lastName);

        userDao.save(newUser);
    }
}
