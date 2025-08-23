import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Comercio } from "../interfaces/Comercio";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Servicio } from "../interfaces/Servicio";
import { Turno } from "../interfaces/Turno";

@Injectable({
  providedIn: 'root'
})
export class TurnosService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listaComercios(): Observable<Comercio[]> {
    return this.http.get<Comercio[]>(`${this.baseUrl}/lista-comercio`);
  }

  listaServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.baseUrl}/lista-servicio`);
  }

  listaTurnos(): Observable<Turno[]> {
    return this.http.get<Turno[]>(`${this.baseUrl}/generar`);
  }
}