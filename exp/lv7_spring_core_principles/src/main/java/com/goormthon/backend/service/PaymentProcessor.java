package com.goormthon.backend.service;

import com.goormthon.backend.enums.PaymentType;
import com.goormthon.backend.service.payment.PaymentService;
import java.util.Map;
import org.springframework.stereotype.Service;

@Service("paymentProcessor")
public class PaymentProcessor {

  private final Map<String, PaymentService> paymentServices;

  public PaymentProcessor(Map<String, PaymentService> paymentServices) {
    this.paymentServices = paymentServices;
  }

  public String processPayment(PaymentType paymentType, double amount) {
    PaymentService paymentService = paymentServices.get(paymentType.toString());
    if (paymentService == null) {
      throw new IllegalArgumentException(
        "Invalid payment type: " + paymentType
      );
    }
    return paymentService.processPayment(amount);
  }
}
