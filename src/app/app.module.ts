import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Menu1Component } from './menu1/menu1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatChipsModule, MatRadioModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, MatTabsModule, MatSliderModule, MatToolbarModule, MatToolbarRow, MatTableModule, MatDialogModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';
import { Menu5Component } from './menu5/menu5.component';
import { HttpClientModule } from '@angular/common/http';
import { Menu6Component } from './menu6/menu6.component';
import { Menu6SearchComponent } from './menu6/menu6-search/menu6-search.component';
import { Menu6InfoComponent } from './menu6/menu6-info/menu6-info.component';
import { Menu6DetailComponent } from './menu6/menu6-detail/menu6-detail.component';
import { Menu7Component } from './menu7/menu7.component';

@NgModule({
  declarations: [
    AppComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    Menu5Component,
    Menu6Component,Menu6SearchComponent,
    Menu6DetailComponent,
    
    Menu6InfoComponent,
    
    Menu7Component,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRadioModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents:[
    Menu6DetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
