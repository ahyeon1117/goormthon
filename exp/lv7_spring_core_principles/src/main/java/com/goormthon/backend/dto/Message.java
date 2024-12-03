package com.goormthon.backend.dto;

public class Message {

  private String title;
  private String content;

  // Constructor
  public Message(String title, String content) {
    this.title = title;
    this.content = content;
  }

  // Getters
  public String getTitle() {
    return title;
  }

  public String getContent() {
    return content;
  }
}
