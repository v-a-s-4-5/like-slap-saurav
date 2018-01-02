import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllpostsPage } from './allposts';

@NgModule({
  declarations: [
    AllpostsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllpostsPage),
  ],
})
export class AllpostsPageModule {}
