package com.example.selfhelp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="chats")
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name="name",nullable = false)
    String name;
    @Column(name = "content",nullable = false)
    String content;
    @Column(name = "timeStamp",nullable = false)
    Date sentAt;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "appointment_id",nullable = false)
    Appointment appointment;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private Role role;

    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name = "chat_users",joinColumns = @JoinColumn(name = "user_id",referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name= "chat_id",referencedColumnName = "id"))
    private Set<User> users;

}
