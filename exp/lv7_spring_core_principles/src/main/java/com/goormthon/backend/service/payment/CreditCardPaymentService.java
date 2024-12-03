package com.goormthon.backend.service.payment;

import org.springframework.stereotype.Service;

@Service("creditCardPayment")
public class CreditCardPaymentService implements PaymentService {

  @Override
  public String processPayment(double amount) {
    return "Paid " + amount + " using Credit Card.";
  }
}
