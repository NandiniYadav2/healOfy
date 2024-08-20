package com.example.selfhelp.controller;

import com.example.selfhelp.entity.Post;
import com.example.selfhelp.payload.PostDto;
import com.example.selfhelp.payload.PostResponse;
import com.example.selfhelp.services.PostService;
import com.example.selfhelp.utils.AppConstants;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin("*")
public class PostController
{
    private PostService postService;
    public PostController(PostService postService)
    {
        this.postService=postService;
    }
    @PostMapping("/createPost")
    public ResponseEntity<PostDto> createpost(@RequestBody PostDto postDto)
    {
        return new ResponseEntity<>(postService.createPost(postDto), HttpStatus.CREATED);
    }
    @GetMapping("/allPosts")
    public PostResponse getAllPosts(
            @RequestParam(value = "pageNo",defaultValue = AppConstants.DEFAULT_PAGE_NUMBER,required = false) int pageNo,
            @RequestParam(value = "pageSize", defaultValue = AppConstants.DEFAULT_PAGE_SIZE,required = false) int pageSize,
            @RequestParam(value = "sortBy", defaultValue = AppConstants.DEFAULT_SORT_BY,required=false) String sortBy,
            @RequestParam(value = "sortDir" , defaultValue = "desc",required = false)String sortDir
    )
    {

        return postService.getAllPosts(pageNo,pageSize,sortBy,sortDir);
    }
    @GetMapping("/post/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable(name = "id") long id)
    {
        return ResponseEntity.ok(postService.getPostById(id));
    }
    @PutMapping("/post/{id}")
    public ResponseEntity<PostDto> updatePost(@RequestBody PostDto postDto,@PathVariable(name = "id") long id)
    {
        return new ResponseEntity<>(postService.updatePost(postDto,id),HttpStatus.OK);
    }
    @DeleteMapping("/post/{id}")
    public ResponseEntity<String> deletePost(@PathVariable(name = "id") long id)
    {
        postService.deletePostbyId(id);
        return new ResponseEntity<>("Successfully deleted",HttpStatus.OK);

    }

}
