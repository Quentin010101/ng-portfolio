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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
