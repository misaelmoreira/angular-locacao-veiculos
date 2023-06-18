import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from '../models/veiculo';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  @Input()
  veiculo?: Veiculo

  constructor() { }

  ngOnInit(): void {

  }
}
