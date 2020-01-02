package com.parkinglot.parkinglot.repositories;

import com.parkinglot.parkinglot.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
