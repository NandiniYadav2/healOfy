package com.example.selfhelp.repositories;

import com.example.selfhelp.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface PostRepository extends JpaRepository<Post,Long> {

}
