import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { PatientFormComponent } from './pages/patient-form/patient-form.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PatientComponent, PatientFormComponent, PatientListComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
