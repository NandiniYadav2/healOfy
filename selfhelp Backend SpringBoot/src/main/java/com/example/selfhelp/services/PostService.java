package com.example.selfhelp.services;

import com.example.selfhelp.entity.Post;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.PostResponse;
import com.example.selfhelp.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


public interface PostService {
    PostDto createPost(PostDto postDto);
    PostResponse getAllPosts(int pageNo, int pageSize,String sortBy,String sortDir);

    PostDto getPostById(long id);
    PostDto updatePost(PostDto postDto,long id);

    void deletePostbyId(long id);

}
