package com.example.selfhelp;

import io.swagger.v3.oas.annotations.ExternalDocumentation;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@OpenAPIDefinition
        (
                info = @Info(
                        title = "Self help App-HealOfy",
                        description = "Spring boot API-documentation",
                        version = "v1.0",
                        contact = @Contact(
                                name = "Aparajita Kumari",
                                email = "kumaparajita1@gmail.com"

                        ),
                        license =@License(
                                name = "Apache 2.0"

                        )

                ),
                externalDocs = @ExternalDocumentation(
                        description = "Self Help App - HealOFy"
                )
        )
public class SelfhelpApplication {
    @Bean
    public ModelMapper modelMapper()
    {
        return new ModelMapper();
    }

    public static void main(String[] args) {
        SpringApplication.run(SelfhelpApplication.class, args);
    }

}
