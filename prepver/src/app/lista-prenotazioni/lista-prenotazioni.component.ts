import { Component, Input } from '@angular/core';
import { Informazioni } from '../Models/Informazioni.model';

@Component({
  selector: 'app-lista-prenotazioni',
  standalone: true,
  imports: [],
  templateUrl: './lista-prenotazioni.component.html',
  styleUrl: './lista-prenotazioni.component.css'
})
export class ListaPrenotazioniComponent {
  @Input() pren!: Informazioni
}
