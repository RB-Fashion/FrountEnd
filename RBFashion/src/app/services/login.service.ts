import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.apiUrl; // Use environment-based API URL

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.baseUrl}/users/list`);
  }

  getProductionById(id: number) {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  createUser(data: any) {
    return this.http.post(`${this.baseUrl}/users/create`, data);
  }

  updateProduction(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/users/${id}`, data);
  }

  deleteProduction(id: number) {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
}
