import { Component, OnInit } from '@angular/core';
import Sessao from '../services/sessao';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  veiculos?: Veiculo[]

  constructor(private router: Router, public http: HttpClient) { }

  ngOnInit(): void {
    this.loadVeiculos()
  }

  async loadVeiculos() {
    this.veiculos = await Veiculo.todos(this.http)
  }
}
