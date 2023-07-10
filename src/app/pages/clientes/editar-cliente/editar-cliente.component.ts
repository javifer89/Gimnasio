import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import * as dayjs from 'dayjs';

@Component({
  selector: 'editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent {
  clientesService = inject(ClientesService);
  formulario: FormGroup;
  router = inject(Router);
  clienteId: number;
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellidos: new FormControl(),
      direccion: new FormControl(),
      email: new FormControl(),
      edad: new FormControl(),
      dni: new FormControl(),
      genero: new FormControl(),
      cuota: new FormControl(),
      fecha_nacimiento: new FormControl(),
    });
    this.clienteId = 0;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      const cliente = await this.clientesService.getById(params['clienteId']);
      
      this.clienteId = params['clienteId'];

      const fechaFormateada = dayjs(cliente.fecha_nacimiento).format('YYYY-MM-DD');
      const obj = {
        nombre: cliente.nombre,
        apellidos: cliente.apellidos,
        direccion: cliente.direccion,
        dni: cliente.dni,
        cuota: cliente.cuota,
        genero: cliente.genero,
        fecha_nacimiento: fechaFormateada,
        email: cliente.email,
        edad: cliente.edad,
      };
      this.formulario.setValue(obj);
    });
  }

  async onSubmit() {
    const response = await this.clientesService.update(
      this.clienteId,
      this.formulario.value
    );
    if (response.fatal) {
      return alert('Error en la inserción. Revisa');
    }
    this.router.navigate(['/clientes']);
  }
}
