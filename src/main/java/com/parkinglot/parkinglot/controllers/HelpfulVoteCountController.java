package com.parkinglot.parkinglot.controllers;

import com.parkinglot.parkinglot.models.Question;
import com.parkinglot.parkinglot.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelpfulVoteCountController {

    @Autowired
    QuestionRepository questionDao;

    @PostMapping("/api/{questionId}/updateHelpfulVoteCount")
    public void updateHelpfulVoteCount(@PathVariable long questionId, @RequestParam long helpfulVoteCount) {
        Question questionToUpdate = questionDao.getOne(questionId);

        questionToUpdate.setHelpfulVoteCount(helpfulVoteCount);

        questionDao.save(questionToUpdate);
    }

}
