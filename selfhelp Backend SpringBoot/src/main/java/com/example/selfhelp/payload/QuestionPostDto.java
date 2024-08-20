package com.example.selfhelp.payload;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Set;

@Data
public class QuestionPostDto {
    private long id;
    private String title;
    private String content;
    private LocalDateTime createdAt;
    private char flag;
    private Set<ReplyDto> replies;
    private String name;

}
