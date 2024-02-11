import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AwardsComponent } from './awards/awards.component';
import { CodeComponent } from './code/code.component';

const routes: Routes = [
  { path: 'code'               , component: CodeComponent         },
  { path: 'awards'             , component: AwardsComponent       },
  { path: 'contact'            , component: ContactComponent      },
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AwardsComponent,
    CodeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
