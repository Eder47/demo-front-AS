import { Servicio } from "./Servicio";

export interface Comercio {

  id:number;
  nombreComercio: string;
  aforoMaximo: number;
  servicios: Servicio[];
}