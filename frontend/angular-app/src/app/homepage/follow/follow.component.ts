import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-follow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './follow.component.html',
  styleUrl: './follow.component.scss'
})
export class FollowComponent {
  followList: { profilePicture: string, name: string, mutuals: number }[] = [
    {
      profilePicture: 'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg',
      name: 'John Doe',
      mutuals: 10
    },
    {
      profilePicture: 'https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg',
      name: 'Jane Smith',
      mutuals: 5
    },
    {
      profilePicture: 'https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=',
      name: 'Mike Johnson',
      mutuals: 8
    },
    {
      profilePicture: 'https://media.istockphoto.com/id/1398385367/photo/happy-millennial-business-woman-in-glasses-posing-with-hands-folded.jpg?s=612x612&w=0&k=20&c=Wd2vTDd6tJ5SeEY-aw0WL0bew8TAkyUGVvNQRj3oJFw=',
      name: 'Mike Johnson',
      mutuals: 8
    }
  ];
}
