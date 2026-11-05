
import { Component } from '@angular/core';

@Component({
  selector: 'app-vuelos',
  imports: [],
  templateUrl: './vuelos.html',
  styleUrl: './vuelos.css'
})
export class Vuelos {
  vuelos = [
    { id: 1, origen: 'Arequipa', destino: 'Lima', hora: '08:00', precio: 189, estado: 'Disponible' },
    { id: 2, origen: 'Lima', destino: 'Cusco', hora: '10:30', precio: 229, estado: 'Disponible' },
    { id: 3, origen: 'Arequipa', destino: 'Tacna', hora: '12:15', precio: 149, estado: 'Agotado' },
    { id: 4, origen: 'Lima', destino: 'Piura', hora: '14:00', precio: 199, estado: 'Disponible' },
    { id: 5, origen: 'Cusco', destino: 'Arequipa', hora: '16:45', precio: 179, estado: 'Disponible' },
    { id: 6, origen: 'Cusco', destino: 'Arequipa', hora: '16:45', precio: 179, estado: 'Disponible' }
  ];
}
