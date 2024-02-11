import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { ContactComponent } from './contact/contact.component';
import { AwardsComponent } from './awards/awards.component';
import { EducationComponent } from './education/education.component';
import { CodeComponent } from './code/code.component';
import { FilesComponent } from './files/files.component';

const routes: Routes = [
  { path: 'cover-letter'       , component: CoverLetterComponent  },
  { path: 'code'               , component: CodeComponent         },
  { path: 'education'          , component: EducationComponent    },
  { path: 'awards'             , component: AwardsComponent       },
  { path: 'files'              , component: FilesComponent        },
  { path: 'contact'            , component: ContactComponent      },
];

@NgModule({
  declarations: [
    AppComponent,
    CoverLetterComponent,
    ContactComponent,
    AwardsComponent,
    EducationComponent,
    CodeComponent,
    FilesComponent,
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
