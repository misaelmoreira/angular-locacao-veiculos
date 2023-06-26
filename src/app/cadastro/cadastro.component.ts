import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';
import Sessao from '../services/sessao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario(this.http)

  constructor(public http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.usuario = new Usuario(this.http)
  } 

  async salvar(){
    debugger
    const usuario = await this.usuario.cadastrar();
    
    if (usuario && usuario.id) {
      Sessao.setUsuario(usuario.usuario.id)
      this.router.navigateByUrl('/')
    }
  }
}   
