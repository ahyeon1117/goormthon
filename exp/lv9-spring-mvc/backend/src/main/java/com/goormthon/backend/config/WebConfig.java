package com.goormthon.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.goormthon.backend.converter.DateConverter;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final LoggingInterceptor loggingInterceptor;
    private final DateConverter dateConverter;

    public WebConfig(LoggingInterceptor loggingInterceptor,DateConverter dateConverter) {
        this.loggingInterceptor = loggingInterceptor;
        this.dateConverter = dateConverter;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loggingInterceptor).addPathPatterns("/**"); // 모든 요청에 대해 적용
    }
    
    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(dateConverter);
    }
}