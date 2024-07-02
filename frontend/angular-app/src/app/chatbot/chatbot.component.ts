import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent {
  chatOpen = false;
  newMessage = '';
  messages = [
    { text: 'Hello! How can I help you today?', user: false }
  ];

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ text: this.newMessage, user: true });
      this.newMessage = '';
      // Add a response from the bot for demonstration
      setTimeout(() => {
        this.messages.push({ text: 'Thank you for your message!', user: false });
      }, 1000);
    }
  }
}
