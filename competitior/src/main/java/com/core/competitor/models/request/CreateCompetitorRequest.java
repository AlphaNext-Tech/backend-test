package com.core.competitor.models.request;

import java.time.LocalDateTime;
import java.util.List;

import com.core.competitor.models.entites.Metrics;
import com.core.competitor.models.entites.WebsiteMetrics;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CreateCompetitorRequest {
    @NotBlank(message="Name of the competitor must not be blank")
    private String name;

    @NotBlank(message="Name of the competitor must not be blank")
    private String industry;

    @NotBlank(message="Location cannot be blank")
    private String location;

    @Email
    private String contactEmail;

    private String contactPhone;
    private String website;
    private Double revenue;
    private Integer numberOfEmployees;
    private String competitorRating;
    private LocalDateTime createdOn;
    private LocalDateTime lastUpdatedOn;
    private Metrics metrics;
    private WebsiteMetrics websiteMetrics;

    private List<String> products;
    private List<String> services;
}
