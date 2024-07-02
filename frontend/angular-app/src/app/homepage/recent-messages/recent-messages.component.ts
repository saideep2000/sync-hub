import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-messages.component.html',
  styleUrl: './recent-messages.component.scss'
})
export class RecentMessagesComponent {
  messages: { profilePicture: string, name: string, latestMessage: string }[] = [
    {
      profilePicture: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
      name: 'John Doe',
      latestMessage: 'Hello! How are you?'
    },
    {
      profilePicture: 'https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg',
      name: 'Jane Smith',
      latestMessage: 'Are we still on for the meeting?'
    },
    {
      profilePicture: 'https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=',
      name: 'Mike Johnson',
      latestMessage: 'Great job on the project!'
    },
    {
      profilePicture: 'https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=',
      name: 'Mike Johnson',
      latestMessage: 'Great job on the project!'
    }
  ];
}
