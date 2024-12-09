package com.goormthon.backend.config;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import java.io.IOException;
import java.time.LocalDateTime;

@WebFilter("/*")
public class LoggingFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 필터 초기화 시 실행
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        System.out.println("Filter - Request received at " + LocalDateTime.now());
        chain.doFilter(request, response); // 다음 필터 또는 서블릿 호출
        System.out.println("Filter - Response sent at " + LocalDateTime.now());
    }

    @Override
    public void destroy() {
        // 필터 종료 시 실행
    }
}

