package com.example.selfhelp.services.impl;

import com.example.selfhelp.entity.*;
import com.example.selfhelp.exception.PostCommentException;
import com.example.selfhelp.exception.ResourceNotFoundException;
import com.example.selfhelp.payload.ChatDto;
import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.repositories.AppointmentRepository;
import com.example.selfhelp.repositories.ChatRepository;
import com.example.selfhelp.repositories.RoleRepository;
import com.example.selfhelp.repositories.UserRepository;
import com.example.selfhelp.services.ChatService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ChatServiceImpl implements ChatService {
    private ChatRepository chatRepository;
    private AppointmentRepository appointmentRepository;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    ModelMapper modelMapper;

    public ChatServiceImpl(ChatRepository chatRepository, AppointmentRepository appointmentRepository,
                           UserRepository userRepository,ModelMapper modelMapper,RoleRepository roleRepository) {
        this.chatRepository = chatRepository;
        this.appointmentRepository = appointmentRepository;
        this.modelMapper = modelMapper;
        this.userRepository=userRepository;
        this.roleRepository=roleRepository;
    }

    @Override
    public ChatDto createChat(long appointmentId, long userId,ChatDto chatDto) {
        Date date=new Date();
        //chatDto.setSentAt(date);

        Chat chat = mapToEntity(chatDto);
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new ResourceNotFoundException("Appointment","Id",appointmentId));
        //comment.setCreatedAt(LocalDateTime.now());
        Set<User> users = new HashSet<>();
        User userID = userRepository.findById(userId).get();
        users.add(userID);
        chat.setUsers(users);

        Role role=roleRepository.findById(chatDto.getRoleId()).get();
        chat.setRole(role);
        chat.setAppointment(appointment);
        Chat newChat = chatRepository.save(chat);
        return maptoDto(newChat);

    }

    @Override
    public List<ChatDto> getChatsByAppointmentId(long appointmentId) {
        List<Chat> chats = chatRepository.findByAppointmentId(appointmentId);
        return chats.stream().map(chat -> maptoDto(chat)).collect(Collectors.toList());
    }

    @Override
    public ChatDto getChatById(long appointmentId, long chatId) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new ResourceNotFoundException("Appointment","Id",appointmentId));
        Chat chat=chatRepository.findById(chatId).orElseThrow(() -> new ResourceNotFoundException("Chat","Id",chatId));

        if(!chat.getAppointment().getId().equals(appointment.getId()))
        {
            throw new PostCommentException(HttpStatus.BAD_REQUEST,"Comment does not belong to post");
        }
        return maptoDto(chat);
    }

    @Override
    public ChatDto updateChat(Long appointmentId, Long chatId, ChatDto chatRequest) {
        return null;
    }

    @Override
    public void deleteChat(Long appointmentId, Long chatId) {

    }
    private ChatDto maptoDto(Chat chat)
    {
        ChatDto chatDto=modelMapper.map(chat, ChatDto.class);
        /*CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setName(comment.getName());
        commentDto.setEmail(comment.getEmail());
        commentDto.setBody(comment.getBody());
        commentDto.setCreatedAt(LocalDateTime.now());*/
        return chatDto;
    }

    private Chat mapToEntity(ChatDto chatDto)
    {
        Chat chat = modelMapper.map(chatDto,Chat.class);
        /*Comment comment=new Comment();
        comment.setId(commentDto.getId());
        comment.setName(commentDto.getName());
        comment.setEmail(commentDto.getEmail());
        comment.setBody(commentDto.getBody());
        comment.setCreatedAt(LocalDateTime.now());*/
        return chat;
    }
}
