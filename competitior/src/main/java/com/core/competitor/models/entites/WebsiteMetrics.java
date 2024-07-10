package com.core.competitor.models.entites;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "website_metrics")
public class WebsiteMetrics {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "monthly_visitors")
        private Integer monthlyVisitors;

        @Column(name = "bounce_rate")
        private Double bounceRate;

        @OneToMany(mappedBy = "websiteMetrics", cascade = CascadeType.ALL, orphanRemoval = true)
        @JsonManagedReference
        private List<TopPages> topPages;

        @OneToOne
        @JoinColumn(name = "competitor_id", referencedColumnName = "id")
        // @JsonManagedReference(value = "competitor-webmetrics")
        @JsonIgnore
        private Competitor competitor;

}
