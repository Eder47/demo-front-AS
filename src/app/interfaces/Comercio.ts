import { Servicio } from "./Servicio";

export interface Comercio {
  nombreComercio: string;
  aforoMaximo: number;
  servicios: Servicio[];
}