import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Cliente } from '../Interfaces/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private httpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000/api/clientes';
  }

  getAll(): Promise<Cliente[]> {
    return firstValueFrom(this.httpClient.get<Cliente[]>(this.baseUrl));
  }

  create(formValue: any): Promise<Cliente> | any {
    return firstValueFrom(
      this.httpClient.post<Cliente | any>(this.baseUrl, formValue)
    );
  }

  getById(clienteId: number): Promise<Cliente> {
    return firstValueFrom(
      this.httpClient.get<Cliente>(`${this.baseUrl}/${clienteId}`)
    );
  }

  update(clienteId: number, formValue: any): Promise<Cliente> | any {
    return firstValueFrom(
      this.httpClient.put<Cliente | any>(
        `${this.baseUrl}/${clienteId}`, formValue)
    );
  }

  // deleteCliente(clienteId: string) {
  //   return firstValueFrom(
  //     this.httpClient.delete(`${this.baseUrl}/${clienteId}`)
  //   );
  // }
}
