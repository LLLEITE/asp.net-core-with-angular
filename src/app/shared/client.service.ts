import { DebugElement, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Client } from './client.model';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  public formData: Client = new Client();
  readonly baseURL = 'https://localhost:44358/api/client';
  public list: Client[] = [];

  constructor(private http: HttpClient) { }

  postClient() {
    return this.http.post(this.baseURL, this.formData);
  }

  putClient(){
    return this.http.put(this.baseURL, this.formData);
  }

  deleteClient(id: number){
    return this.http.delete(this.baseURL+'/'+id);
  }

  refreshList() {
    this.getClients();
  }

  async getClients() {
    await lastValueFrom(this.http.get(this.baseURL)).then(res => this.list = res as Client[]);
  }
}
