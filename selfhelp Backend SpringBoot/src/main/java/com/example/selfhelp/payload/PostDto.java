package com.example.selfhelp.payload;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;

@Data
public class PostDto {

    private long id;
    private String title;
    private String description;
    private String content;
    private LocalDateTime createdAt;
    private char flag;
    private Set<CommentDto> comments;
    private String name;

}
