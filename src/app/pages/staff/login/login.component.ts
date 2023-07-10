import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StaffService } from '../../../services/staff.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  staffService = inject(StaffService);
  loginForm: FormGroup;
  router = inject(Router);

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  async onSubmit() {
    const response = await this.staffService.confirmUser(this.loginForm.value);
    console.log(response);

    if (response.fatal) {
      return alert('Error en la inserción. Revisa');
    }
    localStorage.setItem('token_staff', response.token);

    this.router.navigate(['/clientes']);
    }
  }
