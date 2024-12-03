package com.goormthon.backend.controller;

import com.goormthon.backend.dto.Message;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

  @GetMapping("/")
  public String home(Model model) {
    // Add data to the model
    Message message = new Message(
      "Welcome",
      "This is a simple Spring MVC page!"
    );
    model.addAttribute("message", message);

    // Return the view name
    return "index";
  }
}
