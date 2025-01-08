import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setupPreloader();
  }

  private setupPreloader(): void {
    const preloader = document.getElementById('js-preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        // Ensure the preloader shows for at least 1 second
        setTimeout(() => {
          this.renderer.addClass(preloader, 'loaded');
        }, 500); // 1-second delay
      });
    }
  }
}
