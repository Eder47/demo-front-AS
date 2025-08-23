import { Turno } from "./Turno";

export interface Servicio {
  nombreServicio: string;
  horaApertura: string; 
  horaCierre: string;
  duracion: number;
  comercioId: number;
  turnos: Turno[];
}