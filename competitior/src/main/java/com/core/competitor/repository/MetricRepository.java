package com.core.competitor.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.core.competitor.models.entites.Metrics;

@Repository
public interface MetricRepository extends JpaRepository<Metrics, Long> {

  @Query(value = "SELECT * FROM metrics m WHERE " +
      "(:growthRate IS NULL OR m.growth_rate = :growthRate) AND " +
      "(:marketShare IS NULL OR m.market_share = :marketShare) AND " +
      "(:customerSatisfaction IS NULL OR m.customer_satisfaction = :customerSatisfaction) AND " +
      "(:competitorRating IS NULL OR m.competitor_rating = :competitorRating)", nativeQuery = true)
  List<Metrics> searchMetrics(
      @Param("growthRate") String growthRate,
      @Param("marketShare") String marketShare,
      @Param("customerSatisfaction") String customerSatisfaction,
      @Param("competitorRating") String competitorRating);
}
