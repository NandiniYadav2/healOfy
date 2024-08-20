package com.example.selfhelp.services;

import com.example.selfhelp.entity.Role;
import com.example.selfhelp.payload.UserDto;

import java.util.List;


public interface UserService {
    UserDto createUser(UserDto user);
    UserDto getUserByUserName(String username);

    String updateUserDoctor(Long Id,UserDto user);
    String updateUserPatient(Long Id,UserDto user);
    UserDto getUserById(Long userId);
    List<Role> getRoleById(Long userId);
    List<UserDto> getALlUsers();
    void deleteUser(Long userId);


}
