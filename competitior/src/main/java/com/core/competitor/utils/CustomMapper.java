package com.core.competitor.utils;

import org.springframework.stereotype.Component;

import com.core.competitor.models.entites.Competitor;
import com.core.competitor.models.entites.Metrics;
import com.core.competitor.models.request.CreateCompetitorRequest;
import com.core.competitor.models.response.MetricDTO;

@Component
public class CustomMapper {

    public Competitor mapCreateCompetitorRequestToCompetitor(CreateCompetitorRequest request) {
        return Competitor.builder()
                .name(request.getName())
                .industry(request.getIndustry())
                .location(request.getLocation())
                .contactEmail(request.getContactEmail())
                .contactPhone(request.getContactPhone())
                .website(request.getWebsite())
                .numberOfEmployees(request.getNumberOfEmployees())
                .createdOn(request.getCreatedOn())
                .lastUpdatedOn(request.getLastUpdatedOn())
                .metrics(request.getMetrics())
                .services(request.getServices())
                .websiteMetrics(request.getWebsiteMetrics())
                .build();
    }

    public MetricDTO mapMetricsTMetricDTO(Metrics metrics) {
        return MetricDTO.builder()
        .id(metrics.getId())
        .growthRate(metrics.getGrowthRate())
        .marketShare(metrics.getMarketShare())
        .customerSatisfaction(metrics.getCustomerSatisfaction())
        .competitorRating(metrics.getCompetitorRating())
        .competitor(metrics.getCompetitor())
        .build();
    }
}
