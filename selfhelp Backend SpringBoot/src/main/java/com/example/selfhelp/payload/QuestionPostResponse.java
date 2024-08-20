package com.example.selfhelp.payload;

import lombok.Data;

import java.util.List;
@Data

public class QuestionPostResponse {
    private List<QuestionPostDto> content;
    private int pageNo;
    private int pageSize;
    private long totalElements;
    private int totalPages;
    private boolean last;
}
