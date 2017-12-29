import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleuserpostsPage } from './singleuserposts';

@NgModule({
  declarations: [
    SingleuserpostsPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleuserpostsPage),
  ],
})
export class SingleuserpostsPageModule {}
