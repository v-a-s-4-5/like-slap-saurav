import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplaypostsPage } from './displayposts';

@NgModule({
  declarations: [
    DisplaypostsPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplaypostsPage),
  ],
})
export class DisplaypostsPageModule {}
