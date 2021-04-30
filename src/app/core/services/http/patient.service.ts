import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../../models/patient';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()

export class PatientService {

  endpoint: string = environment.patientEndPoint;

  constructor(private _httpClient: HttpClient) {

  }

  get(): Observable<Patient[]> {
    return this._httpClient.get<Patient[]>(this.endpoint);
  }

  post(patient: Patient): Observable<Patient> {
    return this._httpClient.post<Patient>(this.endpoint, patient);
  }
}
