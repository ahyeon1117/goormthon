package com.goormthon.backend.controller;

import com.goormthon.backend.scope.ApplicationScopedBean;
import com.goormthon.backend.scope.RequestScopedBean;
import com.goormthon.backend.scope.SessionScopedBean;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ScopeController {

  private final RequestScopedBean requestScopedBean;
  private final SessionScopedBean sessionScopedBean;
  private final ApplicationScopedBean applicationScopedBean;

  public ScopeController(
    RequestScopedBean requestScopedBean,
    SessionScopedBean sessionScopedBean,
    ApplicationScopedBean applicationScopedBean
  ) {
    this.requestScopedBean = requestScopedBean;
    this.sessionScopedBean = sessionScopedBean;
    this.applicationScopedBean = applicationScopedBean;
  }

  @GetMapping("/scopes")
  public String getScopes(Model model) {
    model.addAttribute("requestScopeTime", requestScopedBean.getCreationTime());
    model.addAttribute("sessionScopeTime", sessionScopedBean.getCreationTime());
    model.addAttribute(
      "applicationScopeTime",
      applicationScopedBean.getCreationTime()
    );
    return "scope";
  }
}
