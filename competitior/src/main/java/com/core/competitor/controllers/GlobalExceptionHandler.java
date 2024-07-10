package com.core.competitor.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.coyote.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import com.core.competitor.enums.ResponseCodes;
import com.core.competitor.models.response.Response;


@RestControllerAdvice
@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class GlobalExceptionHandler {

   private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);


   @ExceptionHandler(HttpClientErrorException.class)
   public ResponseEntity<Response> handleConstraintViolationException(HttpClientErrorException e) {
      logger.error("The exception message " + e.getMessage(), e);

      List<String> errors = new ArrayList<>();
      errors.add(e.getMessage());
      return ResponseEntity.status(HttpStatus.REQUEST_TIMEOUT).body(Response.builder()
            .responseCode(String.valueOf(HttpStatus.REQUEST_TIMEOUT.value()))
            .responseMessage(e.getMessage())
            .errors(errors).timeStamp(new Date()).build());
   }



   @ExceptionHandler(DuplicateKeyException.class)
   public ResponseEntity<Response> handleDuplicateKeyException(DuplicateKeyException e) {
      logger.error("The exception message " + e.getMessage(), e);

      List<String> errors = new ArrayList<>();
      errors.add(e.getMessage());
      return ResponseEntity.status(HttpStatus.REQUEST_TIMEOUT).body(Response.builder()
            .responseCode(String.valueOf(HttpStatus.REQUEST_TIMEOUT.value()))
            .responseMessage(e.getMessage())
            .errors(errors).timeStamp(new Date()).build());
   }

   @ExceptionHandler(Throwable.class)
   public ResponseEntity<Response> handleThrowable(Throwable e) {

      List<String> errors = new ArrayList<>();
      logger.error("Error processing request ", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Response.builder()
            .responseCode(String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR.value()))
            .responseMessage(ResponseCodes.INTERNAL_SERVER_ERROR.getMessage())
            .errors(errors).timeStamp(new Date()).build());

   }

   @ExceptionHandler(BadRequestException.class)
   public ResponseEntity<Response> handleBadRequestException(BadRequestException e) {
      List<String> errors = new ArrayList<>();
      errors.add(e.getMessage());
      logger.error("", e);
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Response.builder()
            .responseCode(String.valueOf(HttpStatus.BAD_REQUEST.value()))
            .responseMessage(e.getMessage())
            .errors(errors).timeStamp(new Date()).build());
   }

   @ExceptionHandler(HttpMessageNotReadableException.class)
   public ResponseEntity<Response> handleHttpBadRequestException(HttpMessageNotReadableException e) {
      List<String> errors = new ArrayList<>();
      String errorMessage = e.getMessage().contains("java.util.Date")
            ? "Invalid Date Format, kindly use : yyyy-MM-dd HH:mm:ss.SSS"
            : e.getMessage();
      errors.add(errorMessage);

      logger.error("", e);
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Response.builder()
            .responseCode(String.valueOf(HttpStatus.BAD_REQUEST.value()))
            .responseMessage(errorMessage)
            .errors(errors).timeStamp(new Date()).build());
   }

   @ExceptionHandler({ MethodArgumentNotValidException.class, BindException.class,
         MissingServletRequestParameterException.class, MethodArgumentTypeMismatchException.class })
   public ResponseEntity<Response> handleValidationException(Exception ex) {
      List<String> validationErrors = new ArrayList<>();
      if (ex instanceof MethodArgumentNotValidException methodArgumentNotValidException) {
         BindingResult bindingResult = methodArgumentNotValidException.getBindingResult();
         bindingResult.getFieldErrors()
               .forEach(error -> validationErrors.add(error.getField() + ": " + error.getDefaultMessage()));
      } else if (ex instanceof BindException) {
         BindingResult bindingResult = ((BindException) ex).getBindingResult();
         bindingResult.getFieldErrors()
               .forEach(error -> validationErrors.add(error.getField() + ": " + error.getDefaultMessage()));
      } else if (ex instanceof MethodArgumentTypeMismatchException) {
         if (ex.getMessage()
               .contains("Failed to convert value of type 'java.lang.String' to required type 'java.time.LocalDate'")) {
            validationErrors.add("Invalid Date Format, kindly use : yyyy-MM-dd HH:mm:ss.SSS");
         }
      } else if (ex instanceof MissingServletRequestParameterException) {
         if (ex.getMessage().contains("Required request parameter 'start_date'")) {
            validationErrors.add("start date is required");
         } else if (ex.getMessage().contains("Required request parameter 'end_date'")) {
            validationErrors.add("end date is required");
         } else {
            validationErrors.add(ex.getMessage());
         }
      }
      logger.error("", ex);
      return ResponseEntity.badRequest()
            .body(Response.builder().responseCode(String.valueOf(HttpStatus.BAD_REQUEST.value()))
                  .responseMessage(ResponseCodes.INVALID_REQUEST.getMessage()).errors(validationErrors).build());
   }
}
