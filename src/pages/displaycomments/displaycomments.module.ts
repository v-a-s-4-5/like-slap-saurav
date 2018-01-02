import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplaycommentsPage } from './displaycomments';

@NgModule({
  declarations: [
    DisplaycommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplaycommentsPage),
  ],
})
export class DisplaycommentsPageModule {}
