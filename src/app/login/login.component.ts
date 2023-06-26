import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Sessao from '../services/sessao'

import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email: string = ''
  senha: string = ''
  usuario: Usuario = new Usuario(this.http)

  constructor(public http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario(this.http)
    const usuarioId = Sessao.getUsuario()
    if (usuarioId) {
      this.router.navigateByUrl('/')
    }
  }

  async logar() {
    this.usuario.login = this.email
    this.usuario.senha = this.senha

    const usuario = await this.usuario.fazerLogin();
    
    if (usuario && usuario.usuario.id) {
      Sessao.setUsuario(usuario.usuario.id)
      this.router.navigateByUrl('/')
    }
  }

}
