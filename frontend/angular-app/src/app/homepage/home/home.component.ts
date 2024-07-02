import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { CommonModule } from '@angular/common';
import { RecentMessagesComponent } from '../recent-messages/recent-messages.component';
import { FollowComponent } from '../follow/follow.component';
import { ChatbotComponent } from '../../chatbot/chatbot.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationComponent, TaskInfoComponent, TimelineComponent, RecentMessagesComponent, FollowComponent, ChatbotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
