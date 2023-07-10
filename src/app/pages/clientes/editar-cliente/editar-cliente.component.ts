import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css'],
})
export class EditarClienteComponent {
  clientesService = inject(ClientesService);
  formulario: FormGroup;
  router = inject(Router);
  clienteId: string;

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
    this.clienteId = '';
  }

  //   ngOnInit() {
  //     this.activatedRoute.params.subscribe(async (params) => {
  //       console.log(params['clienteId']); // PARAMS es un objeto que devuelve tantas claves como valores variables tenga la URL
  //       this.clienteId = params['clienteId'];

  //       const response = await this.empleadosService.getById(params['empleadoId']);
  //       console.log(response);
  //     }
  // }

  //   async onSubmit() {
  //     const response = await this.clientesService.update(this.formulario.value);

  //     if (response.fatal) {
  //       console.log(response.fatal);
  //       return alert('Error en la inserción. Revisa');
  //     }
  //     this.router.navigate(['/clientes']);
  //   }
  // }
}
