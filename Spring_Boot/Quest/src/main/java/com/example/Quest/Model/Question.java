package com.example.Quest.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Entity
@Setter
@Getter
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long ID;
    @NotBlank
    private String Question;
    @NotBlank
    private String QuestionType;
    @NotBlank
    private String Subject;

    @ElementCollection
    private List<String> Choices;

    public Long getID() {
        return ID;
    }

    public void setID(Long ID) {
        this.ID = ID;
    }

    public String getQuestion() {
        return Question;
    }

    public void setQuestion(String question) {
        Question = question;
    }

    public String getQuestionType() {
        return QuestionType;
    }

    public void setQuestionType(String questionType) {
        QuestionType = questionType;
    }

    public String getSubject() {
        return Subject;
    }

    public void setSubject(String subject) {
        Subject = subject;
    }

    public List<String> getChoices() {
        return Choices;
    }

    public void setChoices(List<String> choices) {
        Choices = choices;
    }

    public List<String> getCorrectAnswers() {
        return CorrectAnswers;
    }

    public void setCorrectAnswers(List<String> correctAnswers) {
        CorrectAnswers = correctAnswers;
    }

    @ElementCollection
    private List<String> CorrectAnswers;
}
