import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/core/models/patient';
import { PatientService } from 'src/app/core/services/http/patient.service';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patientForm: FormGroup;
  

  constructor(private fb: FormBuilder, private _patientService: PatientService, private _route: Router) { 

    this.patientForm = this.fb.group({
      nom: ['', [Validators.required, this.noWhitespaceValidator]],
      prenom: ['', [Validators.required, this.noWhitespaceValidator]],
      genre: ['', [Validators.required, this.noWhitespaceValidator]],
      birthYear: ['', [Validators.required, Validators.min(2000)]],
      // class: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  onSubmit(patient: Patient) {
    if (this.patientForm.valid) {
      this._patientService.post(patient).subscribe(next => {
        console.log(next);
        this.patientForm.reset();
        this._route.navigateByUrl("patients");
      });
    }
  }
}
