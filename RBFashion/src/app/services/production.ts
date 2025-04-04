import { environment } from './../environments/environment.staging';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl; // Use environment-based API URL

  constructor(private http: HttpClient) {}

  getProductionList() {
    return this.http.get(`${this.baseUrl}/production/list`);
  }

  getProductionById(id: number) {
    return this.http.get(`${this.baseUrl}/production/${id}`);
  }

  createProduction(data: any) {
    return this.http.post(`${this.baseUrl}/production/create`, data);
  }

  updateProduction(id: number, data: any) {
    return this.http.put(`${this.baseUrl}/production/${id}`, data);
  }

  deleteProduction(id: number) {
    return this.http.delete(`${this.baseUrl}/production/${id}`);
  }
}
