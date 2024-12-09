package com.goormthon.backend.controller;


import com.goormthon.backend.dto.request.SignupRequest;

import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class SignupController {

    @GetMapping("/signup")
    public String showSignupForm(Model model) {
        model.addAttribute("signupRequest", new SignupRequest());
        return "signup.html";
    }

    @PostMapping("/signup")
    public String handleSignup(
            @Valid SignupRequest signupRequest,
            BindingResult bindingResult,
            Model model) {
        
        if (bindingResult.hasErrors()) {
            model.addAttribute("signupRequest", signupRequest);
            return "signup"; // Return to the form with errors
        }

        // Process the signup (e.g., save to the database)
        model.addAttribute("message", "Signup successful!");
        return "success"; // Redirect to a success page
    }
}
