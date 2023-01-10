import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MasterComponent } from './components/master/master.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    MasterComponent
  ]
})
export class CoreModule { }
