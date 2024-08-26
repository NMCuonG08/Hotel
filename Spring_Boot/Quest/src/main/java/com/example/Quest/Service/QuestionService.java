package com.example.Quest.Service;

import com.example.Quest.Model.Question;
import com.example.Quest.Repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionService implements  IQuestionService{

    private final QuestionRepository questionRepository;

    @Override
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public List<Question> getAllQuestion() {
        return questionRepository.findAll();
    }

    @Override
    public Optional<Question> getQuestionById(Long id) {
        return questionRepository.findById(id);
    }

    @Override
    public List<String> getAllSubject() {
        return questionRepository.findDistinctSubject();
    }

    @Override
    public Question updateQuestion(Long id, Question question) throws ChangeSetPersister.NotFoundException {
        Optional<Question> theQuestion = this.getQuestionById(id);
        if(theQuestion.isPresent()){
            Question updateQuestion = theQuestion.get();
            updateQuestion.setQuestion(question.getQuestion());
            updateQuestion.setChoices(question.getChoices());
            updateQuestion.setCorrectAnswers(question.getCorrectAnswers());
            return questionRepository.save(updateQuestion);
        }
        else {
            throw new ChangeSetPersister.NotFoundException();
        }

    }

    @Override
    public void deleteQuestion(Long id) {
        questionRepository.deleteById(id);
    }

    @Override
    public List<Question> getQuestionForUser(Integer numOfQuestions, String Subject) {
        Pageable pageable = PageRequest.of(0,numOfQuestions);
        return questionRepository.findBySubject(Subject , pageable).getContent();
    }
}
