import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/core/models/patient';
import { PatientService } from 'src/app/core/services/http/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients$: Observable<Patient[]>;
  displayedColumns: string[] = ["id", "nom", "prenom", "genre", "class"];

  constructor(private _patientService: PatientService, private _route: Router) { }

  ngOnInit(): void {
    this.patients$ = this._patientService.get();
  }

  goToForm() {
    this._route.navigateByUrl('patients-form');
  }
}
