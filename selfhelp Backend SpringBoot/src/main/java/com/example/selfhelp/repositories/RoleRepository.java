package com.example.selfhelp.repositories;



import com.example.selfhelp.entity.Role;
import com.example.selfhelp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role,Long> {
    Optional<Role> findByName(String name);






}
