package com.core.competitor.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.core.competitor.models.response.MetricDTO;
import com.core.competitor.services.MetricService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/alphatest/metrics")
@RequiredArgsConstructor
public class MetricController {

  private final MetricService metricService;

  @GetMapping("")
  public ResponseEntity<List<MetricDTO>> searchMetrics(@RequestParam Map<String, Object> params) {

    List<MetricDTO> metrics = this.metricService.searchMetrics(params);
    return ResponseEntity.ok(metrics);
  }
}
