import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.scss']
})
export class UpComponent {
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
}
