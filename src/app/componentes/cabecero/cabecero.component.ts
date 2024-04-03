import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfiguracionComponent } from '../configuracion/configuracion.component';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [CommonModule, ConfiguracionComponent],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

}
