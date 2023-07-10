import { Component, inject } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';
import { Cliente } from '../../../Interfaces/cliente.interface';

@Component({
  selector: 'lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent {
private clientesService = inject(ClientesService);
arrClientes: Cliente[];

  constructor() {
    this.arrClientes = [];
  }

  async ngOnInit() {
    await this.cargarClientes();
  }

  async cargarClientes() {
    try {
      const response = await this.clientesService.getAll();
      console.log(response);
      this.arrClientes = response;
    } catch (error) {
      console.log(error);
    }
    console.log(this.arrClientes);
  }
}
