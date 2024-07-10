package com.core.competitor.models.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "metrics")
public class Metrics {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "growth_rate")
        private String growthRate;

        @Column(name = "market_share")
        private String marketShare;

        @Column(name = "customer_satisfaction")
        private String customerSatisfaction;

        @Column(name = "competitor_rating")
        private String competitorRating;

        @OneToOne
        @JoinColumn(name = "competitor_id", referencedColumnName = "id")
        @JsonIgnore
        private Competitor competitor;
}
