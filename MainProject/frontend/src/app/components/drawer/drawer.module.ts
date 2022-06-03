import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawerRoutingModule } from './drawer-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerComponent } from './drawer.component';


@NgModule({
  declarations: [
    DrawerComponent
  ],
  imports: [
    CommonModule,
    DrawerRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    DrawerComponent
  ],
})
export class DrawerModule { }
