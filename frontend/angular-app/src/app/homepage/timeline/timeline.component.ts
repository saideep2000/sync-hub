import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Segment {
  time: string;
  date: string;
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
  segments: Segment[] = [];
  @ViewChild('timelineWrapper', { static: false }) timelineWrapper!: ElementRef<HTMLDivElement>;

  private startX: number = 0;
  private scrollLeft: number = 0;
  private isDown: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    this.updateCurrentTime();
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => this.updateCurrentTime(), 6000);
    }
    this.generateInitialSegments();
  }

  ngAfterViewInit() {
    this.scrollToCurrentTime();
    // Properly attach the scroll event to the timelineWrapper element
    this.timelineWrapper.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
  }

  updateCurrentTime() {
    const now = new Date();
    const formattedTime = now.toTimeString().split(' ')[0].slice(0, 5);
    const formattedDate = now.toDateString();

    this.currentTime = formattedTime;
    this.currentDate = formattedDate;
  }

  generateInitialSegments() {
    const currentDate = new Date();
    if (currentDate.getMinutes() >= 30){
      currentDate.setMinutes(30)
    }
    else{
      currentDate.setMinutes(0)
    }
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);
    currentDate.setHours(currentDate.getHours() - 1); // Start 1 hour before
    for (let i = 0; i < 10; i++) { // Generate 6 segments for 3 hours
      this.addSegment(currentDate);
      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }
  }

  addSegment(date: Date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const segmentDate = date.toDateString();
    this.segments.push({ time, date: segmentDate });
  }

  scrollToCurrentTime() {
    const segmentWidth = this.timelineWrapper.nativeElement.offsetWidth / 6;
    this.timelineWrapper.nativeElement.scrollLeft = segmentWidth * 2; // Center on the current hour
  }

  onScroll(event: Event) {
    const target = event.target as Element;
    const position = target.scrollLeft;
    const maxScrollLeft = target.scrollWidth - target.clientWidth;

    if (position > maxScrollLeft - 100) { // Check if close to the end
      const lastDate = new Date(this.segments[this.segments.length - 1].date + ' ' + this.segments[this.segments.length - 1].time);
      lastDate.setMinutes(lastDate.getMinutes() + 30); // Start from next half hour
      for (let i = 0; i < 10; i++) { // Append next 3 hours of segments
        this.addSegment(lastDate);
        lastDate.setMinutes(lastDate.getMinutes() + 30);
      }
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(e: MouseEvent) {
    e.preventDefault();
    this.isDown = true;
    this.timelineWrapper.nativeElement.classList.add('active');
    this.startX = e.pageX;
    this.scrollLeft = this.timelineWrapper.nativeElement.scrollLeft;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: MouseEvent) {
    if (this.isDown) {
      this.isDown = false;
      this.timelineWrapper.nativeElement.classList.remove('active');
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - this.startX) * 2; // Scroll faster
    this.timelineWrapper.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
