package com.core.competitor.models.entites;

import java.time.LocalDateTime;
import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
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
import lombok.ToString;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "competitor")
@ToString
public class Competitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", unique = true, nullable = false)
    private String name;

    private String industry;
    private String location;

    @Column(name = "contact_email")
    private String contactEmail;

    @Column(name = "contact_phone")
    private String contactPhone;

    private String website;

    @Column(name = "number_of_employees")
    private Integer numberOfEmployees;

    @Column(name = "created_on")
    private LocalDateTime createdOn;

    @Column(name = "last_updated_on")
    private LocalDateTime lastUpdatedOn;

    @ElementCollection
    @CollectionTable(name = "competitor_services", joinColumns = @JoinColumn(name = "competitor_id"))
    @Column(name = "service")
    private List<String> services;

    @OneToOne(mappedBy = "competitor", cascade = CascadeType.ALL, orphanRemoval = true)
    private Metrics metrics;

    @OneToOne(mappedBy = "competitor", cascade = CascadeType.ALL, orphanRemoval = true)
    private WebsiteMetrics websiteMetrics;

    public void setWebsiteMetrics(WebsiteMetrics websiteMetrics) {
        this.websiteMetrics = websiteMetrics;
        if (websiteMetrics != null) {
            websiteMetrics.setCompetitor(this);
        }
    }
}
