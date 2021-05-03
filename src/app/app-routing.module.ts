import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyJobComponent } from './Components/apply-job/apply-job.component';
import { AssessmentComponent } from './Components/assessment/assessment.component';
import { BrowseListingComponent } from './Components/browse-listing/browse-listing.component';
import { HomeComponent } from './Components/home/home.component';
import { JobDescriptionComponent } from './Components/job-description/job-description.component';
import { ProfileComponent } from './Components/profile/profile.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'browse-listing', component: BrowseListingComponent },
  { path: 'job-description', component: JobDescriptionComponent },
  { path: 'apply-job',component: ApplyJobComponent },
  { path: 'profile',component: ProfileComponent },
  { path: 'assessment',component: AssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
