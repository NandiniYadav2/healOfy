package com.example.selfhelp.payload;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommentDto {
    private long id;
    private String name;
    private String email;
    private String body;
    private LocalDateTime createdAt;
    private char flag;

}
