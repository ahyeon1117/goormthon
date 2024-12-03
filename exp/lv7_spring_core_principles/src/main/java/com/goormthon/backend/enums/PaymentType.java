package com.goormthon.backend.enums;

public enum PaymentType {
  CREDIT_CARD("creditCardPayment"),
  BANK_TRANSFER("bankTransferPayment"),
  PAY_PAL("paypalPayment");

  private final String description;

  // Constructor to initialize the description
  PaymentType(String description) {
    this.description = description;
  }

  // Overriding toString method
  @Override
  public String toString() {
    return description;
  }
}
