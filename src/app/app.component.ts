import { Component, OnInit } from '@angular/core';
import Sessao from './services/sessao';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'locacao-veiculos';
  usuarioId?: string;

  constructor( http: HttpClient, private router: Router){}
  
  ngOnInit(){
    this.usuarioId = Sessao.getUsuario();    
  }

  logout(){
    Sessao.clearUsuario();
    this.router.navigateByUrl('/login');
    this.usuarioId = "";
  }
}
