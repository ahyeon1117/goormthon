package com.goormthon.backend.service.payment;

import org.springframework.stereotype.Service;

@Service("bankTransferPayment")
public class BankTransferPaymentService implements PaymentService {

  @Override
  public String processPayment(double amount) {
    return "Paid " + amount + " using Bank Transfer.";
  }
}
