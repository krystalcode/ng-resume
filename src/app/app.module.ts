import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { WorkListComponent } from './work-list/work-list.component';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { ContactComponent } from './contact/contact.component';
import { LanguagesComponent } from './languages/languages.component';
import { AwardsComponent } from './awards/awards.component';
import { ShareComponent } from './share/share.component';
import { EducationComponent } from './education/education.component';
import { LocationComponent } from './location/location.component';
import { PerspectivesComponent } from './perspectives/perspectives.component';
import { SkillsComponent } from './skills/skills.component';
import { CodeComponent } from './code/code.component';
import { FilesComponent } from './files/files.component';
import { InterestsComponent } from './interests/interests.component';

const routes: Routes = [
  { path: 'cover-letter'       , component: CoverLetterComponent  },
  { path: 'perspectives'       , component: PerspectivesComponent },
  { path: 'work-experience'    , component: WorkListComponent     },
  { path: 'skills-technologies', component: SkillsComponent       },
  { path: 'code'               , component: CodeComponent         },
  { path: 'education'          , component: EducationComponent    },
  { path: 'awards'             , component: AwardsComponent       },
  { path: 'languages'          , component: LanguagesComponent    },
  { path: 'interests'          , component: InterestsComponent    },
  { path: 'location'           , component: LocationComponent     },
  { path: 'files'              , component: FilesComponent        },
  { path: 'contact'            , component: ContactComponent      },
  { path: 'share'              , component: ShareComponent        }
];

@NgModule({
  declarations: [
    AppComponent,
    WorkItemComponent,
    WorkListComponent,
    CoverLetterComponent,
    ContactComponent,
    LanguagesComponent,
    AwardsComponent,
    ShareComponent,
    EducationComponent,
    LocationComponent,
    PerspectivesComponent,
    SkillsComponent,
    CodeComponent,
    FilesComponent,
    InterestsComponent
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
