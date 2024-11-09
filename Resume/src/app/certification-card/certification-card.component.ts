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
    { title: 'GitHub Pull Shark Badge', imageUrl: '/src/assets/pullshark.png' },
    { title: 'Front End Engineer in Angular', imageUrl: '/src/assets/pro.png' },
    { title: 'Responsive Web Design', imageUrl: '/src/assets/freecode.png' },
    { title: 'Java (Basic) Certificate', imageUrl: '/src/assets/HackerRankJava.png' },
    { title: 'CSS Certificate', imageUrl: '/src/assets/HRcss.png' },
    { title: 'Problem Solving (Basic) Certificate', imageUrl: '/src/assets/Hc-pb.png' },
    { title: 'SQL Certificate', imageUrl:'/src/assets/SkillRack SQL.png'},
    { title: 'C Certificate', imageUrl:'/src/assets/skillrackc.png'}
  ];

  moveCarousel(direction: 'prev' | 'next') {
    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.certificates.length;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.certificates.length) % this.certificates.length;
    }
  }

  

}
