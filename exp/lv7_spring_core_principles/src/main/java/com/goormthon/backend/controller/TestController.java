package com.goormthon.backend.controller;

import com.goormthon.backend.enums.PaymentType;
import com.goormthon.backend.service.PaymentProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

  @Autowired
  private PaymentProcessor paymentProcessor;

  @GetMapping("test")
  public void getMethodName() {
    System.out.println(
      paymentProcessor.processPayment(PaymentType.BANK_TRANSFER, 1000)
    );
  }
}
