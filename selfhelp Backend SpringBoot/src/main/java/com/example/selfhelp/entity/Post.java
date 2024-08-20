package com.example.selfhelp.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table( name = "posts",uniqueConstraints = {@UniqueConstraint(columnNames = {"title"})})
public class Post
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title",nullable = false)
    private String title;
    @Column(name= "description",nullable=false)
    private String description;
    @Column(name= "content",nullable=false)
    private String content;
    private char flag=0;
    private String name;


    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL,orphanRemoval = true)
    private Set<Comment> comments =new HashSet<>();



}
