package com.example.selfhelp.controller;

import com.example.selfhelp.entity.Role;
import com.example.selfhelp.entity.User;
import com.example.selfhelp.payload.UserDto;
import com.example.selfhelp.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    //ye username fetch kar rha

    @GetMapping("/user/{username}")
    public ResponseEntity<UserDto> getUserByUserName(@PathVariable(value = "username")String username)
    {

        UserDto userDto=userService.getUserByUserName(username);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }
    //Ye patientInfo update kar raha
    @PutMapping("/user/update/{id}")
    public ResponseEntity<String> updateUserPatient(@PathVariable(value = "id")Long id,@RequestBody UserDto userDto)
    {
        String str=userService.updateUserPatient(id,userDto);
        return new ResponseEntity<>(str,HttpStatus.OK);

    }
    @PutMapping("/doctor/update/{id}")
    public ResponseEntity<String> updateUserDoctor(@PathVariable(value = "id")Long id,@RequestBody UserDto userDto)
    {
        String str=userService.updateUserDoctor(id,userDto);
        return new ResponseEntity<>(str,HttpStatus.OK);

    }
    @GetMapping("/role/{id}")
    public List<Role> getRoleById(@PathVariable(value = "id")Long id)
    {
        return userService.getRoleById(id);
    }
    @DeleteMapping("/user/doctor/{id}")
    public ResponseEntity<String> deleteDoctorUser(@PathVariable(name = "id") long id)
    {
        userService.deleteUser(id);
        return new ResponseEntity<>("Successfully deleted",HttpStatus.OK);

    }

}
