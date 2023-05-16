import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showBackToTop = false;

  @HostListener('window:scroll', ['$event'])
  toggleBacktotop(event:any) {
    if (window.pageYOffset > 300) {
      this.showBackToTop = true;
    } else {
      this.showBackToTop = false;
    }
  }
}
