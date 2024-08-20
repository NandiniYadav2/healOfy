package com.example.selfhelp.repositories;

import com.example.selfhelp.entity.QuestionPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionPostRepository extends JpaRepository<QuestionPost,Long> {
}
