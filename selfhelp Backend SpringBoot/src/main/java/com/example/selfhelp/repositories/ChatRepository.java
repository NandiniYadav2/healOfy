package com.example.selfhelp.repositories;

import com.example.selfhelp.entity.Chat;
import com.example.selfhelp.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat,Long> {
    List<Chat> findByAppointmentId(long appointmentId);
}
