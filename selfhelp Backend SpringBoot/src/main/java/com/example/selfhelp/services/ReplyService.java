package com.example.selfhelp.services;

import com.example.selfhelp.entity.Reply;
import com.example.selfhelp.payload.CommentDto;
import com.example.selfhelp.payload.ReplyDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReplyService{
    ReplyDto createReply(long questionPostId, ReplyDto replyDto);

    List<ReplyDto> getReplyByQuestionPostId(long questionPostId);

    ReplyDto getReplyById(long questionPostId,long replyId);

    ReplyDto updateReply(Long questionPostId,Long replyId,ReplyDto reply);

    void deleteReply(Long questionPostId,Long replyId);
}
