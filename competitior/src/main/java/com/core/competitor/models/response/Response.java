package com.core.competitor.models.response;

import java.util.Date;
import java.util.List;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class Response {
  private Date timeStamp;
  private String responseMessage;
  private Object data;
  private String responseCode;
  private List<String> errors;
}
