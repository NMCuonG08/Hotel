package com.example.Quest.Repository;

import com.example.Quest.Model.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.net.ContentHandler;
import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    @Query("Select DISTINCT  q.Subject from Question q")
    List<String> findDistinctSubject();

    Page<Question> findBySubject(String subject, Pageable pageable);
}
