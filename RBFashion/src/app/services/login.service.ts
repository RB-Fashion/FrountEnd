import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // 🔐 Login
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // 📋 Get all users
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/list`);
  }

  // 🔍 Get user by ID
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  // ➕ Create user
  createUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/create`, data);
  }

  // ✏️ Update user
  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, data);
  }

  // ❌ Delete user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
}
