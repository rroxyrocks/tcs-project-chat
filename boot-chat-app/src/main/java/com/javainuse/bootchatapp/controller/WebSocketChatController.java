package com.javainuse.bootchatapp.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import com.javainuse.bootchatapp.model.WebSocketChatMessage;

@Controller
public class WebSocketChatController {

	@MessageMapping("/chat.sendMessage")
	@SendTo("/topic/javainuse")
	public WebSocketChatMessage sendMessage(@Payload WebSocketChatMessage webSocketChatMessage) {
		return webSocketChatMessage;
	}

	@MessageMapping("/chat.newUser")
	@SendTo("/topic/javainuse")
	public WebSocketChatMessage newUser(@Payload WebSocketChatMessage webSocketChatMessage,
			SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("username", webSocketChatMessage.getSender());
		return webSocketChatMessage;
	}

}