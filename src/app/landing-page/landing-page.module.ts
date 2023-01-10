import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';
import { LandingPagePresentationComponent } from './landing-page-container/landing-page-presentation/landing-page-presentation.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    LandingPageContainerComponent,
    LandingPagePresentationComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandingPageModule { }
