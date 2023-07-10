import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StaffService } from '../../../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {

  staffService = inject(StaffService);
  formulario: FormGroup;
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  async onSubmit() {
    const response = await this.staffService.createUser(this.formulario.value);

    if (response.fatal) {
      console.log(response.fatal);
      return alert('Error en la inserción. Revisa');
    }
    this.router.navigate(['/clientes']);
  }
}
