package com.parkinglot.parkinglot.models;

import javax.persistence.*;

@Entity
@Table(name = "questions")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String question;

    @Column
    private String description;

    @Column(nullable = false)
    private long categoryId;

    @Column
    private long helpfulVoteCount;

    @ManyToOne
    @JoinColumn (name = "user_id")
    private User user;

    public Question() {}

    public Question(long userId, String question, String description, long categoryId, long helpfulVoteCount, User user) {
        this.question = question;
        this.description = description;
        this.categoryId = categoryId;
        this.helpfulVoteCount = helpfulVoteCount;
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public long getHelpfulVoteCount() {
        return helpfulVoteCount;
    }

    public void setHelpfulVoteCount(long helpfulVoteCount) {
        this.helpfulVoteCount = helpfulVoteCount;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
