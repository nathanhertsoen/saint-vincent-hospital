import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { PatientService } from './services/http/patient.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule,
    HttpClientModule
    
  ],
  providers: [PatientService],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
