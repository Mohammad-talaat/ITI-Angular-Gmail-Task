import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaryTabComponent } from './components/primary-tab/primary-tab.component';
import { PromotionTabComponent } from './components/promotion-tab/promotion-tab.component';
import { SocialTabComponent } from './components/social-tab/social-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIModule } from './material-UI-module/material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryTabComponent,
    PromotionTabComponent,
    SocialTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
