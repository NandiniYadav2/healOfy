package com.example.selfhelp.payload;

import com.example.selfhelp.entity.Role;
import lombok.Data;

import java.util.Date;

@Data
public class ChatDto {
    Long Id;
    String name;
    String content;
    Date sentAt;
    Long roleId;


}
