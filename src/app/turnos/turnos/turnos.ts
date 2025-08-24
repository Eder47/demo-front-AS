import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { TurnosService } from '../../servicios/turno.service';
import { GenerarTurnosRequest } from '../../interfaces/GenerarTurnosRequest';
import { Turno } from '../../interfaces/Turno';

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './turnos.html',
  styleUrls: ['./turnos.css']
})
export class Turnos implements OnInit{
  form!: FormGroup;

  comercios: any[] = [];
  servicios: any[] = [];
  turnos: Turno[] = [];

  constructor(
    private fb: FormBuilder,
    private turnosService: TurnosService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      comercio: ['', Validators.required],
      servicio: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.turnosService.listaComercios().subscribe({
      next: data => this.comercios = data,
      error: err => console.error('Error cargando comercios', err)
    });

    this.turnosService.listaServicios().subscribe({
      next: data => this.servicios = data,
      error: err => console.error('Error cargando servicios', err)
    });
  }

generar() {
  if (this.form.invalid) return;

  const { comercio, servicio, fechaInicio, fechaFin } = this.form.value;
  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);

  const request: GenerarTurnosRequest = {
    fechaInicio: inicio.toISOString().split('T')[0],
    fechaFin: fin.toISOString().split('T')[0],
    id: Number(servicio)
  };

this.turnosService.listaTurnos(request).subscribe({
  next: data => {
    this.turnos = data.filter(t => t.comercioId === Number(comercio));
    this.cdr.detectChanges(); // fuerza refresco de la vista
  },
  error: err => console.error('Error generando turnos', err)
});

}


}
