import { Component, inject, OnInit, ViewChild, ElementRef, AfterViewInit, output } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-tutorial',
  imports: [],
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.css',
})
export class Tutorial implements OnInit, AfterViewInit {
  languageService = inject(LanguageService);
  currentTranslations = this.languageService.currentTranslations;

  tutorialCompleted = output<void>();

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    localStorage.setItem('tutorial-status', 'unseen');
  }

  ngAfterViewInit(): void {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.play().catch((error) => {
        console.warn('Playback error:', error);
      });
    }
  }

  skipTutorial(): void {
    localStorage.setItem('tutorial-status', 'completed');
    this.tutorialCompleted.emit();
  }
}
