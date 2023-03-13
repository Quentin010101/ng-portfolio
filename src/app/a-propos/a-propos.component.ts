import { Component } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent {
  frontItems = ['HTML 5', 'CSS 3', 'JavaScript', 'Angular']
  backItems = ['Java', 'Spring Boot', 'JPA', 'PHP', 'Laravel']
}
