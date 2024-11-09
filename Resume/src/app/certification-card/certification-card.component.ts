import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certification-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './certification-card.component.html',
  styleUrl: './certification-card.component.scss'
})
export class CertificationCardComponent {

  currentIndex: number = 0;

  certificates:any[] = [
    { title: 'GitHub Pull Shark Badge', imageUrl: '/pullshark.png' },
    { title: 'Front End Engineer in Angular', imageUrl: '/pro.png' },
    { title: 'Responsive Web Design', imageUrl: 'assets/freecode.png' },
    { title: 'Java (Basic) Certificate', imageUrl: '/HackerRankJava.png' },
    { title: 'CSS Certificate', imageUrl: '/HRcss.png' },
    { title: 'Problem Solving (Basic) Certificate', imageUrl: '/Hc-pb.png' },
    { title: 'SQL Certificate', imageUrl:'/SkillRack SQL.png'},
    { title: 'C Certificate', imageUrl:'/skillrackc.png'}
  ];

  moveCarousel(direction: 'prev' | 'next') {
    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.certificates.length) % this.certificates.length;
    }
  }

  

}
