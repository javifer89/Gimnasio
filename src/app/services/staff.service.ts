import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Staff } from '../Interfaces/staff.interface';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private httpClient = inject(HttpClient);
  private registerUrl: string;
  private loginUrl: string;

  constructor() {
    this.registerUrl = 'http://localhost:3000/api/staff/registro';
    this.loginUrl = 'http://localhost:3000/api/staff/login';
  }

  createUser(formValue: any): Promise<Staff | any>{
    return firstValueFrom(
      this.httpClient.post<Staff | any>(this.registerUrl, formValue)
    );
  }

  confirmUser(formValue: any) : Promise <any> {
    return firstValueFrom(this.httpClient.post<any>(this.loginUrl, formValue));
  }
}
