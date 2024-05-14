import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientLayoutRoutes } from './client-layout.routing';
import { FormsModule } from '@angular/forms';
import { ClientLayoutComponent } from './client-layout.component';



@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(ClientLayoutRoutes),
	FormsModule
  ],
  declarations: [
    ClientLayoutComponent
  ]
})
export class ClientLayoutModule { }
