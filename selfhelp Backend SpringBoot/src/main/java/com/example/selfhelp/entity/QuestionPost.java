package com.example.selfhelp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "questions")
public class QuestionPost {
    @Id
    @GeneratedValue
    Long Id;
    @Column(name = "title",nullable = false)
    private String title;
    @Column(name= "content",nullable=false)
    private String content;
    private char flag=0;
    private String name;


    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "quesPost",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<Reply> replies =new HashSet<>();


}
