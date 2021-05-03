import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatStepperModule} from '@angular/material/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { SubscribeComponent } from './Components/subscribe/subscribe.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowseListingComponent } from './Components/browse-listing/browse-listing.component';
import { JobDescriptionComponent } from './Components/job-description/job-description.component';
import { ApplyJobComponent } from './Components/apply-job/apply-job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfileComponent } from './Components/profile/profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AssessmentComponent } from './Components/assessment/assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SubscribeComponent,
    FooterComponent,
    BrowseListingComponent,
    JobDescriptionComponent,
    ApplyJobComponent,
    ProfileComponent,
    AssessmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
