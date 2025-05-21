import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Informazioni } from './Models/Informazioni.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListaPrenotazioniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'prepver';
  vettPrenotazioni: Informazioni[] = []
  loading!: boolean
  obs! : Observable<Informazioni[]>
  data!: object
  http: HttpClient


  constructor(http:HttpClient){this.http=http}

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get<Informazioni[]>('https://my-json-server.typicode.com/malizia-g/verificaPrenotazioni/prenotazioni')
    this.obs.subscribe(this.getData)
  }

  getData =(d: Informazioni[]) =>{
    this.vettPrenotazioni = d
    console.log(this.vettPrenotazioni)
  }

  ngOnInit(): void {
    this.makeChiamata()
  }
}
