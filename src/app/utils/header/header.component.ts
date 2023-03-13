import { Component, Host, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links = ['acceuil', 'a propos', 'projets'];
  sun: boolean = true;
  scrolled: boolean = false

  @HostListener('window:scroll', []) 
  onScroll() {
    if(window.scrollY > 10 && !this.scrolled){
      this.scrolled = true
    }
    if(window.scrollY < 10 && this.scrolled){
      this.scrolled = false
    }
  }
  changeTheme() {
    this.sun = !this.sun;
    document.body.classList.toggle('dark');
  }
}
