package com.core.competitor.models.response;

import com.core.competitor.models.entites.Competitor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MetricDTO {
        private Long id;
        private String growthRate;
        private String marketShare;
        private String customerSatisfaction;
        private String competitorRating;
        private Competitor competitor;
}
