import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Informazioni } from './Models/Informazioni.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prepver';
  vettPrenotazioni: Informazioni[] = []
}
