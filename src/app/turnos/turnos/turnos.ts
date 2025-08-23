import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-turnos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ importa ReactiveFormsModule
  templateUrl: './turnos.html',
  styleUrls: ['./turnos.css']
})
export class Turnos {
  form!: FormGroup;

  // Datos simulados - luego se cargan desde un servicio en Java
  comercios = [
    { id: 1, nombre: 'Comercio A' },
    { id: 2, nombre: 'Comercio B' },
    { id: 3, nombre: 'Comercio C' }
  ];

  servicios = [
    { id: 1, nombre: 'Servicio X' },
    { id: 2, nombre: 'Servicio Y' },
    { id: 3, nombre: 'Servicio Z' }
  ];

  turnos: any[] = []; // aquí irán los resultados de la búsqueda

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      comercio: ['', Validators.required],
      servicio: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }
  

  generar() {
    // Simulación - en la práctica harías una llamada al servicio de Java
    this.turnos = [
      {
        comercio: 'Comercio A',
        servicio: 'Servicio X',
        fecha: '2025-08-23',
        horaInicio: '08:00',
        horaFin: '09:00'
      },
      {
        comercio: 'Comercio B',
        servicio: 'Servicio Y',
        fecha: '2025-08-24',
        horaInicio: '10:00',
        horaFin: '11:00'
      }
    ];
  }
}
