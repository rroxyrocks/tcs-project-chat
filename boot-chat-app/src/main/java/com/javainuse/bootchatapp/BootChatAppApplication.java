package com.javainuse.bootchatapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class BootChatAppApplication {

	public static void main(String[] args) {

		SpringApplication.run(
				 BootChatAppApplication.class , args);
	}
}
