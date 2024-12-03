package com.goormthon.backend.scope;

import java.time.LocalDateTime;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

@Component
@Scope(value = "application", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ApplicationScopedBean {

  private final LocalDateTime creationTime = LocalDateTime.now();

  public LocalDateTime getCreationTime() {
    return creationTime;
  }
}
