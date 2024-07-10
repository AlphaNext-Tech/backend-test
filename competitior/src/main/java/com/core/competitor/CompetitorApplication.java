package com.core.competitor;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class CompetitorApplication {

	public static void main(String[] args) {
		SpringApplication.run(CompetitorApplication.class, args);
	}

}