import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './utils/header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { IconsComponent } from './utils/icons/icons.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { RemoveSpacePipe } from './pipe/remove-space.pipe';
import { CardComponent } from './utils/card/card.component';
import { ProjetsComponent } from './projets/projets.component';
import { FooterComponent } from './footer/footer.component';
import { UpComponent } from './up/up.component';
import { IntersectingDirective } from './directive/intersecting.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcceuilComponent,
    IconsComponent,
    AProposComponent,
    RemoveSpacePipe,
    CardComponent,
    ProjetsComponent,
    FooterComponent,
    UpComponent,
    IntersectingDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
