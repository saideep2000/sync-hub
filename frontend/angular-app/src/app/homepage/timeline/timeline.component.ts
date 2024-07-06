import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Task {
  title: string;
  startTime: Date;
  endTime: Date;
  place: string;
  peopleInvolved: string[];
  description: string;
  tags: string[];
  flag: boolean;
  status: 'Not Done' | 'Done';
}

interface Segment {
  time: string;
  date: string;
  fullDateTime: Date;
  tasks: Task[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, AfterViewInit {
  currentTime: string = '';
  currentDate: string = '';
  displayDate: Date = new Date();
  segments: Segment[] = [];
  @ViewChild('timelineWrapper', { static: false }) timelineWrapper!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    this.updateCurrentTime();
    this.generateInitialSegments();
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => this.updateCurrentTime(), 6000);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.scrollToCurrentTime(), 0); // Scroll to the current time on initial load
  }

  updateCurrentTime() {
    const now = new Date();
    this.currentTime = now.toTimeString().split(' ')[0].slice(0, 5);
    this.currentDate = now.toDateString();
  }

  generateInitialSegments() {
    this.generateSegmentsForDate(this.displayDate);
  }

  generateSegmentsForDate(date: Date) {
    this.segments = []; // Clear existing segments
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(endOfDay.getDate() + 1);

    for (let d = new Date(startOfDay); d < endOfDay; d.setMinutes(d.getMinutes() + 30)) {
      this.addSegment(new Date(d));
    }
  }

  addSegment(date: Date) {
    const tasks = this.addDummyTasks();
    this.segments.push({
      time: `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`,
      date: date.toDateString(),
      fullDateTime: new Date(date),
      tasks: tasks.filter(task => task.startTime >= date && task.endTime < new Date(date.getTime() + 30 * 60000))
    });
  }

  addDummyTasks(): Task[] {
    const today = new Date();
    return [
      {
        title: 'Team Meeting',
        startTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 30),
        endTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 30),
        place: 'Conference Room A',
        peopleInvolved: ['Alice', 'Bob'],
        description: 'Discuss project milestones.',
        tags: ['meeting', 'urgent'],
        flag: true,
        status: 'Not Done'
      },
      {
        title: 'Client Call',
        startTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
        endTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
        place: 'Office',
        peopleInvolved: ['Client X'],
        description: 'Review contract details.',
        tags: ['call', 'client'],
        flag: false,
        status: 'Done'
      },
      {
        title: 'Lunch Break',
        startTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
        endTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 0),
        place: 'Cafeteria',
        peopleInvolved: ['Team'],
        description: 'Team lunch.',
        tags: ['break'],
        flag: false,
        status: 'Not Done'
      },
      {
        title: 'Webinar',
        startTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 30),
        endTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 30),
        place: 'Online',
        peopleInvolved: ['Alice', 'Bob', 'Client X'],
        description: 'Attend online marketing webinar.',
        tags: ['training'],
        flag: true,
        status: 'Not Done'
      }
    ];
  }

  scrollToPrevious() {
    this.displayDate.setDate(this.displayDate.getDate() - 1);
    this.generateSegmentsForDate(this.displayDate);
    this.scrollToDate(this.displayDate);
  }

  scrollToToday() {
    this.displayDate = new Date(); // Reset to current date
    this.generateSegmentsForDate(this.displayDate);
    this.scrollToCurrentTime();
  }

  scrollToNext() {
    this.displayDate.setDate(this.displayDate.getDate() + 1);
    this.generateSegmentsForDate(this.displayDate);
    this.scrollToDate(this.displayDate);
  }

  scrollToCurrentTime() {
    const now = new Date();
    const currentTimeIndex = this.segments.findIndex(seg =>
      seg.fullDateTime.getHours() === now.getHours() && seg.fullDateTime.getMinutes() <= now.getMinutes() && now.getMinutes() < seg.fullDateTime.getMinutes() + 30
    );
    if (currentTimeIndex !== -1) {
      this.scrollSegmentToView(currentTimeIndex);
    }
  }

  scrollToDate(date: Date) {
    const dayStartIndex = this.segments.findIndex(seg => seg.date === date.toDateString());
    this.scrollSegmentToView(dayStartIndex);
  }

  scrollSegmentToView(index: number) {
    const segmentWidth = this.timelineWrapper.nativeElement.querySelector('.time-segment')?.clientWidth;
    if (segmentWidth) {
      this.timelineWrapper.nativeElement.scrollTo({
        left: segmentWidth * index,
        behavior: 'smooth'
      });
    }
  }
}
