package com.example.AppChatByWebSocket.Chat;


import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class ChatMessage {

    private String  Content;
    private String sender;
    private MessageType type;

}
