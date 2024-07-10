package com.core.competitor;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.ClassRule;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.util.TestPropertyValues;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.testcontainers.containers.PostgreSQLContainer;

import com.core.competitor.TestUtils.CompetitorTestUtil;
import com.core.competitor.models.entites.Competitor;
import com.core.competitor.repository.CompetitorRepository;
import com.core.competitor.services.CompetitorService;
import com.core.competitor.utils.CustomMapper;

import jakarta.transaction.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = CompetitorApplication.class)
class CompetitiorApplicationTests {

	@ClassRule
	public static PostgreSQLContainer<?> postgreSQLContainer = new PostgreSQLContainer<>("postgres:13")
			.withDatabaseName("alphanext_test")
			.withUsername("alphanext")
			.withPassword("alphanext12");

	static class Initializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {
    @Override
		public void initialize(ConfigurableApplicationContext configurableApplicationContext) {
			TestPropertyValues.of(
					"spring.datasource.url=" + postgreSQLContainer.getJdbcUrl(),
					"spring.datasource.username=" + postgreSQLContainer.getUsername(),
					"spring.datasource.password=" + postgreSQLContainer.getPassword())
					.applyTo(configurableApplicationContext.getEnvironment());
		}
	}

	@Autowired
	private CompetitorRepository competitorRepository;

	@Autowired
	private CustomMapper customMapper;

	private CompetitorService competitorService;

	@BeforeEach
	void setUp() {
		competitorService = new CompetitorService(competitorRepository, customMapper);
	}

	@AfterEach
	void tearDown() {
		competitorRepository.deleteAll();
	}

	@Test
	@Transactional
	@DisplayName("Test to create a competitor in the database : success")
	void testCreateCompetitor() {

		Competitor createdCompetitor = competitorService.createCompetitor(CompetitorTestUtil.createRequest("amazon"));
		assertNotNull(createdCompetitor);
		assertNotNull(createdCompetitor.getId());
		assertEquals("amazon", createdCompetitor.getName());
		assertNotNull(createdCompetitor.getMetrics());
		assertEquals("5.0", createdCompetitor.getMetrics().getGrowthRate());
	}
	

	@Test
	@DisplayName("Test to get a competitor in the database by name")
	void testGetCompetitorByName() {
		competitorService.createCompetitor(CompetitorTestUtil.createRequest("google"));

		Competitor competitor = competitorService.getCompetitorByName("google");
		assertNotNull(competitor);
		assertEquals("google", competitor.getName());
	}


	@Test
	@DisplayName("Test to get a competitor in the database by name")
	void testGetCompetitorByNameNotFound() {
		Competitor competitor = competitorService.getCompetitorByName("thank_you");
		assertEquals(null, competitor);
	}

	@Test
	@DisplayName("Test to get a the number of competitors in the database : success")
	void testGetCompetitors() {
		competitorService.createCompetitor(CompetitorTestUtil.createRequest("req1"));
		competitorService.createCompetitor(CompetitorTestUtil.createRequest("req2"));
		List<Competitor> competitors = competitorService.getCompetitors();
		assertNotNull(competitors);
		assertEquals(2, competitors.size());
	}

}
