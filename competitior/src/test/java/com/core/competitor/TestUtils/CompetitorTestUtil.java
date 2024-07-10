package com.core.competitor.TestUtils;

import com.core.competitor.models.entites.Metrics;
import com.core.competitor.models.request.CreateCompetitorRequest;

public class CompetitorTestUtil {

  public static CreateCompetitorRequest createRequest(String name) {
    return CreateCompetitorRequest.builder()
        .name(name)
        .industry("Tech")
        .location("Test Location")
        .contactEmail("test@example.com")
        .contactPhone("1234567890")
        .website("http://test.com")
        .revenue(1000.0)
        .numberOfEmployees(10)
        .competitorRating("A")
        .metrics(Metrics.builder()
            .growthRate("5.0")
            .marketShare("10.0")
            .customerSatisfaction("8.0")
            .competitorRating("4.56")
            .build())
        .build();
  }
}
