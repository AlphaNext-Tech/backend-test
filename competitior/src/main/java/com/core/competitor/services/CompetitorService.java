package com.core.competitor.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.core.competitor.models.entites.Competitor;
import com.core.competitor.models.request.CreateCompetitorRequest;
import com.core.competitor.repository.CompetitorRepository;
import com.core.competitor.utils.CustomMapper;

import jakarta.transaction.Transactional;

@Service
public class CompetitorService {
    private final CompetitorRepository competitorRepository;
    private final CustomMapper customMapper;

    public CompetitorService(
            CompetitorRepository competitorRepository,
            CustomMapper customMapper) {
        this.competitorRepository = competitorRepository;
        this.customMapper = customMapper;
    }

    @Transactional
    public Competitor createCompetitor(CreateCompetitorRequest competitorRequest) {
        Competitor competitor = customMapper.mapCreateCompetitorRequestToCompetitor(competitorRequest);
        if (competitor.getMetrics() != null) {
            competitor.getMetrics().setCompetitor(competitor);
        }
        if (competitor.getWebsiteMetrics() != null) {
            competitor.getWebsiteMetrics().setCompetitor(competitor);
        }
        return competitorRepository.save(competitor);

    }

    public Competitor getCompetitorByName(String name) {
        return this.competitorRepository.getCompetitorByName(name);
    }

    public List<Competitor> getCompetitors() {
        return this.competitorRepository.findAll();
    }
}
