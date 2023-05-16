import { Component, ElementRef, HostListener, Output, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  openMobileNav = false;
  transparent = false;
  activeMenu = 'hero';
  isLoggedIn = false;

  
  
  @ViewChild('dialog', { read: ElementRef })
  dialog!: ElementRef;


  @HostListener('window:scroll', ['$event'])
  toggleBacktotop($event:Event) {
    if (window.pageYOffset > 300) {
      this.transparent = true;
    } else {
      this.transparent = false;
    }
  }

  constructor(protected loginService: LoginService) {}

  navigate(section: string) {
    this.openMobileNav = false;
    const element = document.getElementById(section);
    console.log(section)
    console.log(element)
    let position = window.pageYOffset + 200; 
    console.log('position: '+ position)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      console.log('offsettop: '+ element.offsetTop)
      console.log('offsetheight: '+ element.offsetHeight)
        this.activeMenu = section
    }
  }


  login(event: boolean) {
      this.isLoggedIn = event
      this.dialog.nativeElement.close()
  }

  logout() {
    this.isLoggedIn = false
    this.loginService.logout()
  }

}
