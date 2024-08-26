package com.example.Quest.Controller;

import com.example.Quest.Model.Question;
import com.example.Quest.Service.IQuestionService;
import jakarta.validation.Valid;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/api/quizzes")
public class QuestionController {
    private IQuestionService questionService;
    @PostMapping("/create-new-question")
    public ResponseEntity<Question> createQuestion(@Valid @RequestBody Question question){
        Question createQuestion = questionService.createQuestion(question);
        return ResponseEntity.status(CREATED).body(createQuestion);
    }
    @GetMapping("/all-questions")
    public ResponseEntity<List<Question>> getALlQuestion(){
        List<Question> questions = questionService.getAllQuestion();
        return ResponseEntity.ok(questions);
    }
    @GetMapping("/question/{id}")
    public ResponseEntity<Question> getQuestionByID(@PathVariable Long id) throws ChangeSetPersister.NotFoundException {
            Optional<Question> theQuestion = questionService.getQuestionById(id);
            if(theQuestion.isPresent()){
                return ResponseEntity.ok(theQuestion.get());
            }
            else {
                throw  new ChangeSetPersister.NotFoundException();
            }
    }
    @PutMapping("/question/{id}/update")
    public ResponseEntity<Question> updateQuestion(@PathVariable Long id, @RequestBody Question question) throws ChangeSetPersister.NotFoundException {
        Question updateQuestion = questionService.updateQuestion(id,question);
        return ResponseEntity.ok(updateQuestion);
    }
    @DeleteMapping("/question/{id}/delete")
    public ResponseEntity<Question> deleteQuestion(@PathVariable Long id){
        questionService.deleteQuestion(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/subjects")
    public ResponseEntity<List<String>> getAllSubject(){
        List<String> subjects = questionService.getAllSubject();
        return ResponseEntity.ok(subjects);
    }
    @GetMapping("/quiz/fetch-question-for-user")
    public ResponseEntity<List<Question>> getQuestionForUser(@RequestParam Integer numOfQuestions, @RequestParam String subject){
        List<Question> AllQuestions = questionService.getQuestionForUser(numOfQuestions,subject);
        List<Question> mutableQuestions = new ArrayList<>(AllQuestions);
        Collections.shuffle(mutableQuestions);
        int avaiableQuestions = Math.min(numOfQuestions, mutableQuestions.size());
        List<Question> randomQuestion = mutableQuestions.subList(0, avaiableQuestions);
        return ResponseEntity.ok(randomQuestion);
    }


}
