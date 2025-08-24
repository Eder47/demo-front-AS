import { Turno } from "./Turno";

export interface Servicio {
  id: number;
  nombreServicio: string;
  horaApertura: string; 
  horaCierre: string;
  duracion: number;
  comercioId: number;
  turnos: Turno[];
}