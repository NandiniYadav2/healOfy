package com.example.selfhelp.repositories;

import com.example.selfhelp.entity.QuestionnaireResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionnaireResponseRepository extends JpaRepository<QuestionnaireResponse,Long> {
    List<QuestionnaireResponse> findByQuesId(Long id);
}
