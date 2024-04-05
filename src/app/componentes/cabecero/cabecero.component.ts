import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ConfiguracionComponent } from '../configuracion/configuracion.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [CommonModule, ConfiguracionComponent, RouterLinkWithHref],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

}
