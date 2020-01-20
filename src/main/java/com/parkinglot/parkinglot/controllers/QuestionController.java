package com.parkinglot.parkinglot.controllers;

import com.parkinglot.parkinglot.models.Question;
import com.parkinglot.parkinglot.models.User;
import com.parkinglot.parkinglot.repositories.QuestionRepository;
import com.parkinglot.parkinglot.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuestionController {

    @Autowired
    QuestionRepository questionDao;

    @Autowired
    UserRepository userDao;

    @GetMapping("/api/{userId}/users-questions")
    public List<Question> showUsersQuestions(@PathVariable long userId) {
        User loggedInUser = userDao.getOne(userId);

        List<Question> usersQuestions = loggedInUser.getQuestions();

        return usersQuestions;
    }

    @PostMapping("/api/{userId}/create-question")
    public void createQuestion(@PathVariable long userId,
                               @RequestParam String question,
                               @RequestParam String description,
                               @RequestParam long categoryId,
                               @RequestParam long helpfulVoteCount) {

        Question newQuestion = new Question();
        User userThatCreatedQuestion = userDao.getOne(userId);

        newQuestion.setUser(userThatCreatedQuestion);
        newQuestion.setQuestion(question);
        newQuestion.setDescription(description);
        newQuestion.setCategoryId(categoryId);
        newQuestion.setHelpfulVoteCount(helpfulVoteCount);

        questionDao.save(newQuestion);
    }
}
