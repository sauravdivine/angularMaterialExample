import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdInputModule,
  MdButtonModule,
  MdSelectModule,
  MdIconModule,
  MdToolbarModule,
  MdSidenavModule,
  MdGridListModule,
  MdListModule,
  MatTableModule,
  MatCardModule,
  MatMenuModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { MultiRowToolbarComponent } from './multi-row-toolbar/multi-row-toolbar.component';
import { SideNavBarLeftComponent } from './side-nav-bar-left/side-nav-bar-left.component';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';
import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { MainContentHeaderComponent } from './main-content-header/main-content-header.component';
import { SpaceUsedPrograssComponent } from './space-used-prograss/space-used-prograss.component';
import { CheclComponent } from './checl/checl.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiRowToolbarComponent,
    SideNavBarLeftComponent,
    TableBasicExampleComponent,
    CardFancyExampleComponent,
    AccountCardComponent,
    MainContentHeaderComponent,
    SpaceUsedPrograssComponent,
    CheclComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdSelectModule,
    MdIconModule,
    MdToolbarModule,
    MdSidenavModule,
    MdGridListModule,
    MdListModule,
    MatTableModule, MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
