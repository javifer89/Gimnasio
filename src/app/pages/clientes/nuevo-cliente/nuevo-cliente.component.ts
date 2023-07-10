import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css'],
})
export class NuevoClienteComponent {
  clientesService = inject(ClientesService);
  formulario: FormGroup;
  errores: any[];
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [ Validators.required ]),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      dni: new FormControl(),
      genero: new FormControl(),
      cuota: new FormControl(),
      fecha_nacimiento: new FormControl(),
    });
    this.errores = [];
  }

  async onSubmit() {
    const response = await this.clientesService.create(this.formulario.value);

    if (response.fatal) {
      console.log(response.fatal);
      return alert('Error en la inserción. Revisa');
      }
      this.router.navigate(['/clientes']);
  }
}
