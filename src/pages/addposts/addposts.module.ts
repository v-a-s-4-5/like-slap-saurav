import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddpostsPage } from './addposts';

@NgModule({
  declarations: [
    AddpostsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddpostsPage),
  ],
})
export class AddpostsPageModule {}
