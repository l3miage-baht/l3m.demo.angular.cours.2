import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonCompoComponent } from './mon-compo/mon-compo.component';
import { FormsModule } from '@angular/forms';
import { MonSousCompoComponent } from './mon-sous-compo/mon-sous-compo.component';
import { MonSousSousCompoComponent } from './mon-sous-sous-compo/mon-sous-sous-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    MonCompoComponent,
    MonSousCompoComponent,
    MonSousSousCompoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
