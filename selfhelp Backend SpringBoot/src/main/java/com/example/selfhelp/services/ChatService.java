package com.example.selfhelp.services;

import com.example.selfhelp.payload.ChatDto;
import com.example.selfhelp.payload.CommentDto;

import java.util.List;

public interface ChatService {
    ChatDto createChat(long appointmentId, long user_id,ChatDto chatDto);

    List<ChatDto> getChatsByAppointmentId(long appointmentId);

    ChatDto getChatById(long appointmentId,long chatId);

    ChatDto updateChat(Long appointmentId,Long chatId,ChatDto chatRequest);

    void deleteChat(Long appointmentId,Long chatId);
}
