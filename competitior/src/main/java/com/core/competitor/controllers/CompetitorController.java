package com.core.competitor.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.core.competitor.models.entites.Competitor;
import com.core.competitor.models.request.CreateCompetitorRequest;
import com.core.competitor.models.response.Response;
import com.core.competitor.services.CompetitorService;

import io.micrometer.common.util.StringUtils;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/alphatest/competitor")
@RequiredArgsConstructor
public class CompetitorController {

    @Autowired
    private final CompetitorService competitorService;

    @GetMapping("")
    public ResponseEntity<Response> getCompetitor(@RequestParam("name") String name) {
        Object response = StringUtils.isBlank(name)
                ? this.competitorService.getCompetitors()
                : this.competitorService.getCompetitorByName(name);

        return ResponseEntity.status(HttpStatus.OK.value()).body(
                Response.builder()
                        .data(response)
                        .errors(null)
                        .responseCode(String.valueOf(HttpStatus.OK.value()))
                        .build());
    }

    @PostMapping("")
    public ResponseEntity<Response> createCompetitor(@RequestBody CreateCompetitorRequest competitorRequest) {
        Competitor competitor = competitorService.createCompetitor(competitorRequest);
        return ResponseEntity.status(HttpStatus.OK.value()).body(
                Response.builder()
                        .data(competitor)
                        .errors(null)
                        .responseCode(String.valueOf(HttpStatus.OK.value()))
                        .build());
    }

}
