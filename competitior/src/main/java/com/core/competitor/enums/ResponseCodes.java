package com.core.competitor.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResponseCodes {
  SUCCESSFUL("00", "Successful"),
  TIMEOUT("04", "Payment timed out"),
  NO_RECORD_FOUND("05", "No records were found"),
  ALREADY_EXIST("07", "Already exist"),
  UNABLE_TO_CONNECT("91", "We are unable to connect to service"),
  INVALID_REQUEST("06", "Bad request"),
  TRANSACTION_RETRIEVED("00", "Transactions Received Successfully"),
  INTERNAL_SERVER_ERROR("91", "Internal Server Error Occurred, Kindly Check Back Later."),
  CREATED("01", "Record Created successfully"),
  UPDATED("02", "Record Updated successfully"),
  UNABLE_TO_PROCESS_REQUEST("99", "We are unable to process your request!");

  private final String code;
  private final String message;
}