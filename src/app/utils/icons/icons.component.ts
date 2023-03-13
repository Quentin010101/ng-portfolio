import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  actif: boolean = false

  email(){
    this.actif = true
    setTimeout(()=>{
      this.actif = false
    }, 2000)
    navigator.clipboard.writeText("q_cozic@hotmail.fr")
  }
}
