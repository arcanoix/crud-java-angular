import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/personas';
  // database crud_java_db, tabla: personas

  getPersonas() {
    return this.http.get<Persona>(this.Url);
  }

}
