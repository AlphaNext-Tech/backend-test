package com.core.competitor.services;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.core.competitor.models.entites.Metrics;
import com.core.competitor.models.response.MetricDTO;
import com.core.competitor.repository.MetricRepository;
import com.core.competitor.utils.CustomMapper;

@Service
public class MetricService {

  private final MetricRepository metricRepository;
  private final CustomMapper customMapper;

  public MetricService(MetricRepository metricRepository) {
    this.metricRepository = metricRepository;
    this.customMapper = new CustomMapper();
  }

  public List<MetricDTO> searchMetrics(Map<String, Object> params) {
    String growthRate = (String) params.get("growthRate");
    String marketShare = (String) params.get("marketShare");
    String customerSatisfaction = (String) params.get("customerSatisfaction");
    String competitorRating = (String) params.get("competitorRating");

    List<Metrics> metrics = metricRepository.searchMetrics(growthRate, marketShare, customerSatisfaction,
        competitorRating);

    return metrics.stream().map(metric -> customMapper.mapMetricsTMetricDTO(metric)).toList();
  }
}
