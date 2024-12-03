package com.goormthon.backend.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

  private static final Logger logger = LoggerFactory.getLogger(
    LoggingAspect.class
  );

  @Around("execution(* com.goormthon.backend..*(..))") // 패키지 내 모든 메서드
  public Object logExecutionTime(ProceedingJoinPoint joinPoint)
    throws Throwable {
    String methodName = joinPoint.getSignature().toShortString();

    logger.info("Starting method: {}", methodName);

    long start = System.currentTimeMillis();
    Object result;
    try {
      result = joinPoint.proceed(); // 실제 메서드 실행
    } catch (Throwable throwable) {
      logger.error("Exception in method: {}", methodName, throwable);
      throw throwable;
    }
    long executionTime = System.currentTimeMillis() - start;

    logger.info("Completed method: {} in {} ms", methodName, executionTime);
    return result;
  }
}
