package com.goormthon.backend.service.payment;

import org.springframework.stereotype.Service;

@Service("paypalPayment")
public class PayPalPaymentService implements PaymentService {

  @Override
  public String processPayment(double amount) {
    return "Paid " + amount + " using PayPal.";
  }
}
