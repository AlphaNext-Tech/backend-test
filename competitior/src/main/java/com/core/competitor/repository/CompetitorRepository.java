package com.core.competitor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.core.competitor.models.entites.Competitor;

@Repository
public interface CompetitorRepository extends JpaRepository<Competitor, Long> {
  @Query("SELECT c FROM Competitor c WHERE c.name = :name")
  Competitor getCompetitorByName(@Param("name") String name);
}
